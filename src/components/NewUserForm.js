import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    verify_password: '',
    profile_picture_url: '',
    bio: '',
    firebaseKey: '',
  };

  function NewUserForm({ obj = initialState }) {
    const [formInput, setFormInput] = useState(obj);
    const router = useRouter();
    const { user } = useAuth();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (obj.firebaseKey) {
    //       updateRoutine(formInput).then(() => router.push(`/`));
    //     } else {
    //       const payload = { ...formInput, uid: user.uid };
    //       createRoutine(payload).then(({ name }) => {
    //         const patchPayload = { firebaseKey: name };
    //         updateRoutine(patchPayload).then(() => {
    //           router.push('/');
    //         });
    //       });
    //     }
    //   };

      return (
        <Form onSubmit={handleSubmit} className="text-black">
          <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Create Account</h2>
      
          {/* FIRST NAME INPUT */}
          <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="First Name" 
              name="first_name" 
              value={formInput.first_name || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* LAST NAME INPUT */}
          <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Last Name" 
              name="last_name" 
              value={formInput.last_name || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* EMAIL INPUT */}
          <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formInput.email || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* USERNAME INPUT */}
          <FloatingLabel controlId="floatingInput4" label="Username" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Username" 
              name="username" 
              value={formInput.username || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* PASSWORD INPUT */}
          <FloatingLabel controlId="floatingInput5" label="Password" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formInput.password || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* VERIFY PASSWORD INPUT */}
          <FloatingLabel controlId="floatingInput6" label="Verify Password" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="Verify Password" 
              name="verify_password" 
              value={formInput.verify_password || ''} 
              onChange={handleChange} 
              required 
            />
          </FloatingLabel>
      
          {/* PROFILE PICTURE URL INPUT */}
          <FloatingLabel controlId="floatingInput7" label="Profile Picture URL" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Profile Picture URL" 
              name="profile_picture_url" 
              value={formInput.profile_picture_url || ''} 
              onChange={handleChange} 
            />
          </FloatingLabel>
      
          {/* BIO INPUT */}
          <FloatingLabel controlId="floatingInput8" label="Bio" className="mb-3">
            <Form.Control 
              as="textarea" 
              placeholder="Tell us about yourself" 
              name="bio" 
              value={formInput.bio || ''} 
              onChange={handleChange} 
            />
          </FloatingLabel>
      
          {/* SUBMIT BUTTON */}
          <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Sleep Log Entry</Button>
        </Form>
      );
    }

    NewUserForm.propTypes = {
      obj: PropTypes.shape({
        first_name: PropTypes.string,
        Last_name: PropTypes.string,
        email: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        verify_password: PropTypes.string,
        profile_picture_url: PropTypes.string,
        bio: PropTypes.string,
        firebaseKey: PropTypes.string,
      }).isRequired,
      onUpdate: PropTypes.func.isRequired,
    };
    
    export default NewUserForm;