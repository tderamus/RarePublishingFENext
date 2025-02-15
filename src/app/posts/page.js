'use client';

import React, { useEffect, useState } from 'react';
import { getPosts } from '@/api/callData';

export default function PostsPage() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    getPosts().then(setPostData);
  }, []);

  console.warn(postData);

  // foreach (post in postData) {
  //   return             <Card.Body> YEEEAAAHHH </Card.Body>

  // }

  return <div>Posts Page</div>;
}
