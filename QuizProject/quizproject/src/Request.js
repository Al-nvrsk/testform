import React, { useEffect } from "react";
import useAxios from "./Hooks/useAxios";
import CardApi from "./component/CardApi";
import './Request.css'

    const Request = () => {
const [fetchData, response] = useAxios()

useEffect (() => {fetchData()} , [] )
  

        console.log('request', response)
        console.log (typeof(response))
    // const mapped = response.map((request)=><CardApi api={request} key={request.char_id} />)
    // if (!response) {return <div>'no data'</div>}
    // else {
    return <div className="cardAll"> {response.map((request)=><CardApi key={request.char_id} api={request} />)} <br/> </div>
    // }
    return <div>1</div>
}


export default Request