import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios=()=>{

  const [error, setError] = useState (null)
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState('characters')

const url= `https://www.breakingbadapi.com/api/${params}`
  // headers: {
  //   'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
  //   'X-RapidAPI-Key': 'a4f5bb9c3dmshf2c57e4963876ccp179eb9jsn8378b438ec88'
  // }


const fetchData = async () => {
  try{
    setLoading(true)
    const res = await axios.get(url);
    setResponse(res.data)
  }
  catch (err){
    setError(err)
  }
  finally{
    setLoading(false)
  }
}
// }
// const fetchData = (async () => {await axios.get(url).then((resp) => {
//   const allPersons = resp.data;
//   setResponse(allPersons)})
// })

 return [fetchData, response]
}
 
export default useAxios