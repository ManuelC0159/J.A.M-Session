import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/navbar';

export default function Copyright(props) {
  return (
    <>
    <ResponsiveAppBar />
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
      <Link color="inherit" href="https://mui.com/">
       
      </Link>{' '}
     
    </Typography>
    </>
  );
}

const tiers = [
  {
    title: '2nd job',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    
  },
  {
    title: 'current job',
   
  
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
 
  },
  {
    title: '3rd job',

    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
  
  },
];


 






  

