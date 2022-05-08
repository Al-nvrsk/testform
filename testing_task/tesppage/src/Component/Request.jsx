import React, {useEffect} from "react";
import useAxios from "./Hooks/Axios";
import Loader from "./Units/Loader";
import Users from "./Users/Users";
import '../App.css'
import { Link } from "react-router-dom";

const Request = (props) => {



const [fetchData,response, loading] = useAxios()
useEffect (() => {fetchData()}, [])
   
let copyRespons = [...response]
     let sortedCity = ()=> {
          
          return copyRespons.sort((a,b)=> a['address']['city'].localeCompare(b['address']['city']))
     }
     
     let sortedCompany = ()=> {
           
          return copyRespons.sort((a,b)=> a['company']['name'].localeCompare(b['company']['name']))
     }
     
    
       return <div>
         <p className='texts'>Список пользователей</p>
         {(loading)&&<div style={{display:'flex', justifyContent: 'center', marginTop :'50px'}}><Loader  /></div>} 
         {(props.req === 'none') && response.map(value => <Users key={value.id} props={value} />)}
         {(props.req === 'company') && sortedCompany().map(value => <Users key={value.id} props={value} />)}
         {(props.req === 'city') && sortedCity().map(value => <Users key={value.id} props={value} />)}
         
       </div>
//    }
}


export default Request