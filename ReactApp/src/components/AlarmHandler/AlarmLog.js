import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


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
        const dummyData = []
        for (var i = 0; i <= 100; i++) {
            dummyData.push(i);
        }
        const dummyLog = dummyData.map((entry) => {
            return (
                // <ListItem button dense>
                //     <ListItemText primary={`Log${entry}: xxxxx xxxx xxxxx xxxxxxxx xx xxxxx xxxxx xxxxx`} />
                // </ListItem>
                <TableRow hover key={entry}>
                    <TableCell>{`Log${entry}: xxxxx xxxx xxxxx xxxxxxxx xx xxxxx xxxxx xxxxx`}</TableCell>
                </TableRow>
            )
        })

        return (
            // <List style={{ width: '100%', height: this.props.height, overflow: 'auto' }}>
            //     {dummyLog}
            // </List>
            // {/* <div style={{ width: '100%', height: this.props.height, overflow: 'auto' }}>
            //     {dummyLog}
            // </div> */}
            <TableContainer style={{ height: this.props.height, overflow: 'auto' }}>
                <Table aria-label="Log Table" size="small" >
                    <TableBody>
                        {dummyLog}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AlarmLog);
