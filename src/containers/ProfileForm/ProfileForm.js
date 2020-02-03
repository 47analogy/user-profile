import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase/firestoreConfig';

// TODO: PHOTO UPLOAD

const ProfileForm = () => {
  // maybe create a profile obj
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [securityQ1, setSecurityQ1] = useState('');
  const [securityQ2, setSecurityQ2] = useState('');
  const [securityQ3, setSecurityQ3] = useState('');

  const handleSubmitProfile = event => {
    event.preventDefault();

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const profileRef = db.collection('profiles').add({
      email,
      phone,
      address1,
      address2,
      securityQ1,
      securityQ2,
      securityQ3,
    });
    setEmail('');
    setPhone('');
    setAddress1('');
    setAddress2('');
    setSecurityQ1('');
    setSecurityQ2('');
    setSecurityQ3('');
  };

  return (
    <form onSubmit={handleSubmitProfile}>
      <div>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="email"
              name="email"
              fullWidth
              required
              type="email"
              label="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="phone"
              name="phone"
              fullWidth
              required
              type="tel" // CHECK THIS
              label="Phone Number"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address-1"
              name="address-l"
              fullWidth
              required
              type="text"
              label="Address (Line 1)"
              value={address1}
              onChange={event => setAddress1(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address-2"
              name="address-2"
              fullWidth
              required
              type="text"
              label="Address (Line 2)"
              value={address2}
              onChange={event => setAddress2(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="security-1"
              name="security-1"
              fullWidth
              required
              type="text"
              label="Security Question 1:"
              value={securityQ1}
              onChange={event => setSecurityQ1(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="security-2"
              name="security-2"
              fullWidth
              required
              type="text"
              label="Security Question 2:"
              value={securityQ2}
              onChange={event => setSecurityQ2(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="security-3"
              name="security-3"
              fullWidth
              required
              type="text"
              label="Security Question 3:"
              value={securityQ3}
              onChange={event => setSecurityQ3(event.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ProfileForm;
