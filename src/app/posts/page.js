'use client';

import React, { useEffect, useState } from 'react';
import { getPosts } from '@/api/callData';
import firebase from 'firebase';
import SignIn from '@/components/SignIn';
import NavBar from '@/components/NavBar';

export default function PostsPage() {
  const [user, setUser] = useState(null);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    getPosts().then(setPostData);
  }, []);

  console.warn(postData);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((users) => {
      setUser(users);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <strong>Title</strong>
          </div>
          <div className="col">
            <strong>Author</strong>
          </div>
          <div className="col">
            <strong>Date</strong>
          </div>
          <div className="col">
            <strong>Category</strong>
          </div>
          <div className="col">
            <strong>Tags</strong>
          </div>
        </div>
        {postData &&
          postData.map((post) => (
            <div className="row text-center" key={post.id}>
              <div className="col">{post.title}</div>
              <div className="col">{post.user_Id}</div>
              <div className="col">{post.publicationDate}</div>
              <div className="col">{post.category_Id}</div>
              <div className="col"> </div>
            </div>
          ))}
      </div>
    </>
  );
}
