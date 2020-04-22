import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// Styles
const styles = theme => ({
    root: {
        // padding: theme.spacing(1),
        // paddingLeft: theme.spacing(8),
        // overflowX: "hidden",
        // overflowY: "hidden",
        width: '100%',
        overflowY: 'auto',

    },
});
class AlarmLog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes } = this.props;

        return (
            <ExpansionPanel
                expanded={this.props.expand}
                onChange={event => this.props.expandAlarmLogPanel()}
                TransitionProps={{
                    onExited: () => { this.props.expansionComplete(false) },
                    onEntered: () => { this.props.expansionComplete(true) }
                }}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ fontSize: 16, fontWeight: 'bold', flexGrow: 20 }}>{`ALARM LOG: ${this.props.alarmLogSelectedName}`}</div>
                        <div style={{ fontSize: 16, fontWeight: 'bold', flexGrow: 1 }}>{this.props.expand ? '[click to hide]' : '[click to show]'}</div>
                    </div>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div style={{ maxHeight: this.props.maxHeight, overflow: 'auto' }}>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AlarmLog);
