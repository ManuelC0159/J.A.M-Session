import {useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = (endpoint , query)=>{
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
        params: { ... query },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': 'ebb3fe1ecdmsh8ffecb3cfaa3064p1f6cc2jsn314f610d483d',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async ()=>{
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('There is an error');
        }finally{
            setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[]);

      const refetch = () =>{
        setIsLoading(true);
        fetchData();
      }

      return{ data, isLoading, error, refetch};
}

export default useFetch