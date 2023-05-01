import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
       Your Work History
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <TextField
           
            id="cardName"
            label="Where Do You Work Now?"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="cardNumber"
            label="For How Long?"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Is Your Job Title?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid><Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Do You Do?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="expDate"
            label="Where'd You Work Before?"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="For How Long?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Was Your Job Title?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid><Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Did You Do?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="expDate"
            label="And Before That?"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="For How Long?"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Was Your Job Title?"
            fullWidth
            autoComplete="cc-csc"
            
            variant="standard"
            onChange={handleChange}
          />
        </Grid><Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="What Did You Do?"
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
