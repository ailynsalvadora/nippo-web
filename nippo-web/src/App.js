import React from 'react';
import './App.css';
import { signInWithGoogle } from './firebase/firebase.utils';
import { auth, db } from './firebase/firebase.utils';
import { DataGrid } from '@material-ui/data-grid';

// define which columns you have in your data
const columns = [
  { field: 'Id', headerName: 'Id', width: 100, hide: true},
  { field: 'Date', headerName: 'Date', width: 150, valueFormatter:toDateTime},
  { field: 'TimeIn', headerName: 'Time In', width: 150, valueFormatter:toDateTime},
  { field: 'TimeOut', headerName: 'Time Out', width: 150, valueFormatter:toDateTime},
  { field: 'DayType', headerName: 'Day Type', width: 150,},
  { field: 'Notes', headerName: 'Notes', width: 150 },
];

function toDateTime(params) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(params.value.seconds);
  return t;
}
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      timesheet: []
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  showTimesheet = e => {
    
    var docRef = db.collection("Employees").doc(this.state.currentUser.email);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log("Entries data:", doc.data().Entries);
            this.setState({ timesheet: doc.data().Entries })
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  };

  render() {
    return (
      <div className='user-info'>
        {
          this.state.currentUser ?
            (<div>
              <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>

              <button onClick={() => auth.signOut()}>LOG OUT</button>  
              <button onClick={() => this.showTimesheet()}>View Timesheet</button>
            <br/>
            <br/>
            { this.state.timesheet ?
                (
                  <div style={{ height: 400, width: '100%' }}>
                <DataGrid getRowId={(row) => row.Id} rows={this.state.timesheet} columns={columns} />
                </div>) :
              <br/>
            }
            </div>
            ) :

            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>

        }
      </div >
    );
  }
}

export default App;
