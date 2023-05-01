import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './profile.css';
import useProfileData from '../context/useProfileData';

export default function PaymentForm() {
  const [profileData, setProfileData] = useProfileData()
  const handleChange = (event) => {
    setProfileData({
    ...profileData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Almost Done!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
           
            id="cardName"
            label="What's Your Email Address?"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={20} md={6}>
          <TextField
            
            id="cardNumber"
            label="What's Your Github Username?"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What's Your Twitter Handle?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid><Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What's Your LinkedIn?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        
       
      
      </Grid>
    </React.Fragment>
  );
}
