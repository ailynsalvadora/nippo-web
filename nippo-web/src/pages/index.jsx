import React, { useEffect, useState } from 'react';
import { signInWithGoogle } from '../firebase/firebase.utils';
import { auth } from '../firebase/firebase.utils';


const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);
  
    useEffect(() => {
      setUnsubscribeFromAuth(auth.onAuthStateChanged(user => setCurrentUser(user)));
    }, []);
  
    return (
      <div className='user-info'>
      {
        currentUser ?
  
          (<div>
            <div>
              <img src={currentUser.photoURL} />
            </div>
            <div>Name: {currentUser.displayName}</div>
            <div>Email: {currentUser.email}</div>
  
            <button onClick={() => auth.signOut()}>LOG OUT</button>
            <a href="/dashboard">Go to dashboard</a>
          </div>
          ) :
  
          <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
  
      }
    </div >
    );
};

export default LoginPage;