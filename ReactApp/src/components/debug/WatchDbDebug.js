import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';



import SideBar from '../SystemComponents/SideBar';
import Settings from '../SystemComponents/Settings';
import AppBar from '@material-ui/core/AppBar';

import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

import Toolbar from '@material-ui/core/Toolbar';

import AutomationStudioContext from '../SystemComponents/AutomationStudioContext';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import uuid from 'uuid';
const systemName = 'testIOC';




const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class WatchDbDebug extends React.Component {
  constructor(props) {
    super(props);


    let database = this.props.database;
    let collection = this.props.collection;

    let dbListBroadcastReadLogURL = 'mongodb://WATCH_DEBUG_DATABASE:watchDebugDb:log:Parameters:""';
    let dbListUpdateOneURL='mongodb://WATCH_DEBUG_DATABASE:watchDebugDb:log';
    this.state = {

      dbListBroadcastReadLogURL: dbListBroadcastReadLogURL,
      dbListUpdateOneURL:dbListUpdateOneURL,
      broadcastReadLog:[],
      broadcastWatchReadLog:[],




    }

    this.handleNewDbLogBroadcastRead = this.handleNewDbLogBroadcastRead.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDatabaseReadWatchAndBroadcastAck=this.handleDatabaseReadWatchAndBroadcastAck.bind(this);

  }

  handleChange = (name) => (event) => {
    console.log(name, event.target.value)
    this.setState({ [name]: event.target.value })


  }
  handleOnClickAddUser=()=>{
    // let socket = this.context.socket;
    // let jwt = JSON.parse(localStorage.getItem('jwt'));
    // if (jwt === null) {
    //   jwt = 'unauthenticated'
    // }
    // let newEntry = {
    //   '_id':this.state.username,
    //   username:this.state.username,
    //   password:this.state.password,
    //   email:this.state.email,
    //   giveName:this.state.giveName,
    //   familyName:this.state.familyName,
    //   phoneNumber:this.state.phoneNumber,
    //   officeLocation:this.state.officeLocation
    // };
    // socket.emit('databaseInsertOne', { dbURL: this.state.dbListInsertOneURL, 'newEntry': newEntry, 'clientAuthorisation': jwt }, (data) => {
    //   console.log("ackdata", data);
    //   if (data == "OK") {
    //     socket.emit('databaseBroadcastRead', { dbURL: this.state.dbListBroadcastReadLogURL, 'clientAuthorisation': jwt }, (data) => {

    //       if (data !== "OK") {
    //         console.log("ackdata", data);
    //       }
    //     });
    //   } else {
    //     console.log("Save values unsuccessful")
    //   }

    //   // data will be 'woot'
    // });
  }
  handleNewDbLogBroadcastRead = (msg) => {
    let data = JSON.parse(msg.data);
    this.setState({ broadcastReadLog: data[0].log,broadcastReadData: data[0] })
    console.log(data)
  }
  handleNewDbLogReadWatchBroadcast = (msg) => {
    let data = JSON.parse(msg.data);
    this.setState({ broadcastWatchReadLog: data[0].log,broadcastWatchReadData: data[0] })
    console.log(data)
  }
  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
  };
  handleOnClickNewEntry=()=>{
      let date= new Date();
      let entry= date.toUTCString();
      let socket = this.context.socket;
      let jwt = JSON.parse(localStorage.getItem('jwt'));
    if (jwt === null) {
      jwt = 'unauthenticated'
    }
    //let newEntry=this.state.broadcastReadData.log;
   // newEntry.push(entry);
    let id=this.state.broadcastReadData['_id']['$oid'];
    console.log(id)

    console.log(this.state.broadcastReadData)
   // console.log(newEntry)
    let newvalues = { '$push': { "log": entry } }
    socket.emit('databaseUpdateOne', { dbURL: this.state.dbListUpdateOneURL, 'id': id, 'newvalues': newvalues, 'clientAuthorisation': jwt }, (data) => {
        console.log("ackdata", data);
        if (data == "OK") {
          socket.emit('databaseBroadcastRead', { dbURL: this.state.dbListBroadcastReadLogURL, 'clientAuthorisation': jwt }, (data) => {
  
            if (data !== "OK") {
              console.log("ackdata", data);
            }
          });
        } else {
          console.log("set status: pending  unsuccessful")
        }
      });
  }
  handleOnClickClearLog=()=>{
    let date= new Date();
    let entry= date.toUTCString();
    let socket = this.context.socket;
    let jwt = JSON.parse(localStorage.getItem('jwt'));
  if (jwt === null) {
    jwt = 'unauthenticated'
  }
  //let newEntry=this.state.broadcastReadData.log;
 // newEntry.push(entry);
  let id=this.state.broadcastReadData['_id']['$oid'];
  console.log(id)

  console.log(this.state.broadcastReadData)
 // console.log(newEntry)
  let newvalues = { '$set': { "log": [] } }
  socket.emit('databaseUpdateOne', { dbURL: this.state.dbListUpdateOneURL, 'id': id, 'newvalues': newvalues, 'clientAuthorisation': jwt }, (data) => {
      console.log("ackdata", data);
      if (data == "OK") {
        socket.emit('databaseBroadcastRead', { dbURL: this.state.dbListBroadcastReadLogURL, 'clientAuthorisation': jwt }, (data) => {

          if (data !== "OK") {
            console.log("ackdata", data);
          }
        });
      } else {
        console.log("set status: pending  unsuccessful")
      }
    });
}
handleDatabaseReadWatchAndBroadcastAck=(msg)=>{
  console.log(msg)
  if ( typeof msg !=='undefined'){
    console.log( "dbWatchId: ",msg.dbWatchId)
    this.setState({dbWatchId:msg.dbWatchId})
  }
  else{
    
  }
}
  getDateTime = (timestamp) => {
    let date = new Date(parseFloat(timestamp))
    console.log(timestamp, date)
    return date.toUTCString()
  }
  componentDidMount() {
    let socket = this.context.socket;
    



    let jwt = JSON.parse(localStorage.getItem('jwt'));
    if (jwt === null) {
      jwt = 'unauthenticated'
    }
    console.log(this.state.dbListBroadcastReadLogURL)
    socket.emit('databaseReadWatchAndBroadcast', 
      { dbURL: this.state.dbListBroadcastReadLogURL, 'clientAuthorisation': jwt }, 
      this.handleDatabaseReadWatchAndBroadcastAck)
    
    socket.on('databaseWatchData:' + this.state.dbListBroadcastReadLogURL, this.handleNewDbLogReadWatchBroadcast);

    socket.emit('databaseBroadcastRead', { dbURL: this.state.dbListBroadcastReadLogURL, 'clientAuthorisation': jwt }, (data) => {

        if (data !== "OK") {
          console.log("ackdata", data);
        }
      });
      socket.on('databaseData:' + this.state.dbListBroadcastReadLogURL, this.handleNewDbLogBroadcastRead);
   // this.setState({watchId:watchId})
  }

  componentWillUnmount(){
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    if (jwt === null) {
      jwt = 'unauthenticated'
    }
    let socket = this.context.socket;
    if (typeof( this.state.dbWatchId) !=='undefined'){
      socket.emit('remove_dbWatch', {dbURL: this.state.dbListBroadcastReadLogURL,dbWatchId:this.state.dbWatchId,'clientAuthorisation':jwt});
    }
    socket.removeListener('databaseWatchData:' + this.state.dbListBroadcastReadLogURL, this.handleNewDbLogReadWatchBroadcast);
    socket.removeListener('databaseData:' + this.state.dbListBroadcastReadLogURL, this.handleNewDbLogBroadcastRead);
  }



  render() {

    
    const { classes } = this.props;
    
    return (
      <React.Fragment>

        <div style={{ "overflowX": "hidden", 'overflowY': 'hidden' }}>
          <Grid
            style={{ marginTop: 8, padding: 8 }}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >


            <Grid item xs={6}  >
            <Button variant="contained" color="primary" onClick={this.handleOnClickNewEntry}>
               New Entry
            </Button>
                </Grid>
                <Grid item xs={6}  >
            <Button variant="contained" color="primary" onClick={this.handleOnClickClearLog}>
               Clear Log
            </Button>
                </Grid>
            <Grid item xs={6}  >
              <Typography> Broadcast Read of Log</Typography>
              <Card style={{padding:8}}>

              
              <Table>
                  <TableHead>
                      <TableCell>
                          index
                      </TableCell>
                      <TableCell>
                          log entry
                      </TableCell>
                  </TableHead>
                  <TableBody>
                      {this.state.broadcastReadLog.map((item,index)=>
                          <TableRow key={index.toString()}>
                              <TableCell>
                                  {index.toString()}
                              </TableCell>
                              <TableCell>
                                  {item}
                              </TableCell>
                          </TableRow>
                      )
  }
                  </TableBody>
              </Table>
              </Card>
                </Grid>
          
          <Grid item xs={6}  >
          <Typography> Watch Broadcast Read of Log</Typography>
              <Card style={{padding:8}}>

              
              <Table>
                  <TableHead>
                      <TableCell>
                          index
                      </TableCell>
                      <TableCell>
                          log entry
                      </TableCell>
                  </TableHead>
                  <TableBody>
                      {this.state.broadcastWatchReadLog.map((item,index)=>
                          <TableRow key={index.toString()}>
                              <TableCell>
                                  {index.toString()}
                              </TableCell>
                              <TableCell>
                                  {item}
                              </TableCell>
                          </TableRow>
                      )
  }
                  </TableBody>
              </Table>
              </Card>
                </Grid>
          </Grid>



        </div>
      </React.Fragment>




    );
  }
}

WatchDbDebug.propTypes = {
  classes: PropTypes.object.isRequired,
};
WatchDbDebug.contextType = AutomationStudioContext;
export default withStyles(styles)(WatchDbDebug);
//export default WatchDbDebug;
