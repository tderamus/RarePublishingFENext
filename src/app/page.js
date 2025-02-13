'use client';

import React, { useEffect, useState } from 'react';
import { firebase } from '../utils/client';
import SignIn from '../components/SignIn';
import NavBar from '../components/NavBar';
import UserProfile from './UserProfile/[uid]/page';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((users) => {
      setUser(users);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <SignIn />;
  }

  if (user) {
    return (
      <>
        <NavBar />
        <UserProfile />
      </>
    );
  }

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>page.js</h1>
    </div>
  );
}

export default Home;
