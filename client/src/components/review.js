import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './profile.css';

export default function PaymentForm() {
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
          />
        </Grid>
        <Grid item xs={20} md={6}>
          <TextField
            
            id="cardNumber"
            label="What's Your Github Username?"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What's Your Twitter Handle?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid><Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What's Your LinkedIn?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        
       
      
      </Grid>
    </React.Fragment>
  );
}