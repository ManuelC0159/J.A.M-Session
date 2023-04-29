import NearbyJobs from "./NearbyJobs";
import PopularJobs from "./PopularJobs";
import Search from './Search'
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/navbar";


const Home = () => {
  
  return (
    <div className="container">Welcome
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
