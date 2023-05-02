import NearbyJobs from "./NearbyJobs";
import PopularJobs from "./PopularJobs";
import Search from './Search'
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/navbar";
import "./home.css";

const Home = () => {
  
  return (
    <div className="container">
      <ResponsiveAppBar/>
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
