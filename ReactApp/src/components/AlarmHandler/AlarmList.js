import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import DoneAllIcon from '@material-ui/icons/DoneAll';

// Styles
const styles = theme => ({
    root: {
        // padding: theme.spacing(1),
        // paddingLeft: theme.spacing(8),
        // overflowX: "hidden",
        // overflowY: "hidden",
        width: '100%',
        overflowY: 'auto',
        maxHeight: '90vh',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    majorAlarm: {
        background: red['800'],
        color: 'white',
        '&:hover': {
            color: red['500']
        }
    },
    majorAlarmSelected: {
        color: red['500']
    },
    majorAlarmAcked: {
        // red['800'] = #c62828 = rgb(198,40,40)
        background: 'rgba(198,40,40,0.3)',
        color: 'white',
        '&:hover': {
            color: 'rgba(244,67,54,0.8)'
        }
    },
    majorAlarmAckedSelected: {
        color: 'rgba(244,67,54,0.8)'
    },
    minorAlarm: {
        background: deepOrange['400'],
        color: 'white',
        '&:hover': {
            color: deepOrange['200']
        }
    },
    minorAlarmSelected: {
        color: deepOrange['200']
    },
    minorAlarmAcked: {
        // deepOrange['400'] = #ff7043 = rgb(255,112,67)
        background: 'rgba(255,112,67,0.3)',
        color: 'white',
        '&:hover': {
            color: 'rgba(255,171,145,0.8)'
        }
    },
    minorAlarmAckedSelected: {
        color: 'rgba(255,171,145,0.8)'
    },
    disabled: {
        background: 'grey',
        color: grey['400'],
        '&:hover': {
            color: grey['400'],
        }
    },
    disabledSelected: {
        color: grey['300'],
    }
});
class AlarmList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div id="test" >
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="stretch"
                        spacing={2}>
                        <Grid item xs={12}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.root}
                            >
                                {this.props.areaNames.map((area, areaIndex) => {
                                    // console.log(`${area["area"]}`, this.props.areaPVDict[`${area["area"]}`])
                                    return (

                                        < React.Fragment key={`${area["area"]}`
                                        }>
                                            <ListItem
                                                divider
                                                button
                                                selected={this.props.areaSelectedIndex === `${area["area"]}`}
                                                onClick={event => this.props.listItemClick(event, `${area["area"]}`)}
                                                onContextMenu={event => this.props.listItemRightClick(event, `${area["area"]}`)}

                                                // field(ZRST, "NO_ALARM")
                                                // field(ONST, "MINOR_ACKED")
                                                // field(TWST, "MINOR")
                                                // field(THST, "MAJOR_ACKED")
                                                // field(FRST, "MAJOR")
                                                // field(FVST, "INVALID_ACKED")
                                                // field(SXST, "INVALID")

                                                classes={(this.props.areaEnabled[`${area["area"]}`]
                                                    ? this.props.areaPVDict[`${area["area"]}`] == 6 || this.props.areaPVDict[`${area["area"]}`] == 4
                                                        ? { root: classes.majorAlarm, selected: classes.majorAlarmSelected }
                                                        : this.props.areaPVDict[`${area["area"]}`] == 5 || this.props.areaPVDict[`${area["area"]}`] == 3
                                                            ? { root: classes.majorAlarmAcked, selected: classes.majorAlarmAckedSelected }
                                                            : this.props.areaPVDict[`${area["area"]}`] == 2
                                                                ? { root: classes.minorAlarm, selected: classes.minorAlarmSelected }
                                                                : this.props.areaPVDict[`${area["area"]}`] == 1
                                                                    ? { root: classes.minorAlarmAcked, selected: classes.minorAlarmAckedSelected }
                                                                    : {}    // noAlarm
                                                    : { root: classes.disabled, selected: classes.disabledSelected }
                                                )}
                                            >
                                                <ListItemText primary={area["area"]} />
                                                {area["subAreas"] ?
                                                    this.props.areaSubAreaOpen[`${area["area"]}`] ? <ExpandLess /> : <ExpandMore />
                                                    : null}

                                            </ListItem>
                                            {
                                                this.props.areaContextOpen[`${area["area"]}`] ? <Menu
                                                    keepMounted
                                                    open={this.props.areaContextOpen[`${area["area"]}`]}
                                                    onClose={event => this.props.listItemContextClose(event, `${area["area"]}`)}
                                                    anchorReference="anchorPosition"
                                                    anchorPosition={this.props.contextMouseY !== null && this.props.contextMouseX !== null ?
                                                        { top: this.props.contextMouseY, left: this.props.contextMouseX } : null}
                                                >
                                                    <MenuItem disabled>{area["area"]}</MenuItem>
                                                    <hr />
                                                    {this.props.areaEnabled[`${area["area"]}`] ?
                                                        <MenuItem onClick={event => this.props.enableDisableArea(event, `${area["area"]}`, false)}>
                                                            <ListItemIcon >
                                                                <NotificationsOffIcon fontSize="small" />
                                                            </ListItemIcon>
                                                            <Typography variant="inherit">Disable Area</Typography>
                                                        </MenuItem> :
                                                        <MenuItem onClick={event => this.props.enableDisableArea(event, `${area["area"]}`, true)}>
                                                            <ListItemIcon >
                                                                <NotificationsActiveIcon fontSize="small" />
                                                            </ListItemIcon>
                                                            <Typography variant="inherit">Enable Area</Typography>
                                                        </MenuItem>
                                                    }
                                                    {this.props.areaEnabled[`${area["area"]}`] ?
                                                        <MenuItem onClick={event => this.props.ackAllAreaAlarms(event, `${area["area"]}`)}>
                                                            <ListItemIcon >
                                                                <DoneAllIcon fontSize="small" />
                                                            </ListItemIcon>
                                                            <Typography variant="inherit">ACK all area alarms</Typography>
                                                        </MenuItem> : null}
                                                </Menu> : null
                                            }

                                            {
                                                area["subAreas"] ?
                                                    <Collapse in={this.props.areaSubAreaOpen[`${area["area"]}`]} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                            {area["subAreas"].map((subArea, subAreaIndex) => {
                                                                return (
                                                                    <React.Fragment key={`${area["area"]}-${subArea}`}>
                                                                        <ListItem

                                                                            button
                                                                            divider
                                                                            className={classes.nested}
                                                                            selected={this.props.areaSelectedIndex === `${area["area"]}-${subArea}`}
                                                                            onClick={event => this.props.listItemClick(event, `${area["area"]}-${subArea}`)}
                                                                            onContextMenu={event => this.props.listItemRightClick(event, `${area["area"]}-${subArea}`)}

                                                                            // classes={(this.props.areaEnabled[`${area["area"]}-${subArea}`]
                                                                            //     ? this.props.areaPVDict[`${area["area"]}-${subArea}`] == 0
                                                                            //         ? { root: classes.majorAlarm, selected: classes.majorAlarmSelected }
                                                                            //         : this.props.areaPVDict[`${area["area"]}-${subArea}`] == 1
                                                                            //             ? { root: classes.minorAlarm, selected: classes.minorAlarmSelected }
                                                                            //             : {}
                                                                            //     : { root: classes.disabled, selected: classes.disabledSelected }
                                                                            // )}

                                                                            classes={(this.props.areaEnabled[`${area["area"]}-${subArea}`]
                                                                                ? this.props.areaPVDict[`${area["area"]}-${subArea}`] == 6 || this.props.areaPVDict[`${area["area"]}-${subArea}`] == 4
                                                                                    ? { root: classes.majorAlarm, selected: classes.majorAlarmSelected }
                                                                                    : this.props.areaPVDict[`${area["area"]}-${subArea}`] == 5 || this.props.areaPVDict[`${area["area"]}-${subArea}`] == 3
                                                                                        ? { root: classes.majorAlarmAcked, selected: classes.majorAlarmAckedSelected }
                                                                                        : this.props.areaPVDict[`${area["area"]}-${subArea}`] == 2
                                                                                            ? { root: classes.minorAlarm, selected: classes.minorAlarmSelected }
                                                                                            : this.props.areaPVDict[`${area["area"]}-${subArea}`] == 1
                                                                                                ? { root: classes.minorAlarmAcked, selected: classes.minorAlarmAckedSelected }
                                                                                                : {}    // noAlarm
                                                                                : { root: classes.disabled, selected: classes.disabledSelected }
                                                                            )}
                                                                        >
                                                                            <ListItemText primary={`- ${subArea}`} />

                                                                        </ListItem>
                                                                        <Menu
                                                                            keepMounted
                                                                            open={this.props.areaContextOpen[`${area["area"]}-${subArea}`]}
                                                                            onClose={event => this.props.listItemContextClose(event, `${area["area"]}-${subArea}`)}
                                                                            anchorReference="anchorPosition"
                                                                            anchorPosition={this.props.contextMouseY !== null && this.props.contextMouseX !== null ?
                                                                                { top: this.props.contextMouseY, left: this.props.contextMouseX } : null}
                                                                        >

                                                                            {this.props.areaEnabled[`${area["area"]}`] ? <MenuItem disabled>{`${area["area"]} > ${subArea}`}</MenuItem> : null}
                                                                            {this.props.areaEnabled[`${area["area"]}`] ? <hr /> : null}

                                                                            {this.props.areaEnabled[`${area["area"]}`] ?
                                                                                this.props.areaEnabled[`${area["area"]}-${subArea}`] ?
                                                                                    <div>
                                                                                        <MenuItem onClick={event => this.props.enableDisableArea(event, `${area["area"]}-${subArea}`, false)}>
                                                                                            <ListItemIcon >
                                                                                                <NotificationsOffIcon fontSize="small" />
                                                                                            </ListItemIcon>
                                                                                            <Typography variant="inherit">Disable Area</Typography>
                                                                                        </MenuItem>
                                                                                        <MenuItem onClick={event => this.props.ackAllAreaAlarms(event, `${area["area"]}-${subArea}`)}>
                                                                                            <ListItemIcon >
                                                                                                <DoneAllIcon fontSize="small" />
                                                                                            </ListItemIcon>
                                                                                            <Typography variant="inherit">ACK all area alarms</Typography>
                                                                                        </MenuItem>
                                                                                    </div>
                                                                                    :
                                                                                    <MenuItem onClick={event => this.props.enableDisableArea(event, `${area["area"]}-${subArea}`, true)}>
                                                                                        <ListItemIcon >
                                                                                            <NotificationsActiveIcon fontSize="small" />
                                                                                        </ListItemIcon>
                                                                                        <Typography variant="inherit">Enable Area</Typography>
                                                                                    </MenuItem>
                                                                                :
                                                                                <MenuItem >Enable Parent Area First!</MenuItem>
                                                                            }
                                                                        </Menu>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </List>
                                                    </Collapse>
                                                    : null
                                            }
                                        </React.Fragment >
                                    )
                                })}

                            </List>
                        </Grid>
                    </Grid>
                </div >
            </React.Fragment >
        )
    }
}

export default withStyles(styles, { withTheme: true })(AlarmList);
