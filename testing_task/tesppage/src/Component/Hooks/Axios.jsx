import { useState } from "react";
import axios from 'axios'

const useAxios = () => {

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    
    const url = 'https://jsonplaceholder.typicode.com/users'
   
    const fetchData = async () => { 
        setLoading(true)
        try {
                setTimeout (async ()=>{
                    const res = await axios.get(url)
                    setResponse(res.data)
                    setLoading(false)
                }, 2000 )
            
             
        }
        catch (err) {console.log(err)}
       
        }
   
    return [fetchData, response, loading]
}
export default useAxios