import useFetch from './hook/useFetch'

let userSearch = //Enter user data here, must be a string
function callAPI(search){
    const {data, isLoading, error} = useFetch('search', {
        query: userSearch,
        num_pages: 1
      })
      return data;

      /*data we need job tittle, location(job city/country), logo, company name, about, job apply link */ 
}
  console.log(data);

  export default callAPI;


//build front it here 

