import JobSearch from "../search/[id]";
import NearbyJobs from "./NearbyJobs";
import PopularJobs from "./PopularJobs";
import {useState} from "react";
import Search from './Search'
import { BrowserRouter,  Route, Link } from "react-router-dom";
import { Switch } from "@mui/material";


const Home = () => {
  
  return (
    <div className="container">Welcome
    <div>
      <Link to ="/login">
        <button>Log in</button>
      </Link>
    </div>
      <Search/>
      <PopularJobs/>
      <NearbyJobs/>
    </div>
  );
};

export default Home;
