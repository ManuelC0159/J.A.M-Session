import NearbyJobs from "./NearbyJobs";
import PopularJobs from "./PopularJobs";
import ResponsiveAppBar from "../components/navbar";
const Home = () => {
  return (
    <>
    
   
    <ResponsiveAppBar/>
      <PopularJobs/>
      <NearbyJobs/>
  
    </>
  );
};

export default Home;
