import React, {useEffect, useState} from "react";
import useAxios from "./Hooks/Axios";

import '../App.css'
import MyBotton from "./Units/Bottom";
import './UserInfo.css'

const UserInfo = (props) => {
    
    const [fetchData,response, loading] = useAxios()
useEffect (() => {fetchData()}, [])

    const [disable, setdis] = useState ({disabled: true})
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [webSite, setWebSite] = useState('')
    const [comment, setComment] = useState('')

const send = (e) => {
    e.preventDefault()
    if (name==='') {console.log('emptyName')}
    if (userName==='') {console.log('emptyuserName')}
    if (email==='') {console.log('emptyemail')}
    if (street==='') {console.log('emptystreet')}
    if (city==='') {console.log('emptycity')}
    if (zipCode==='') {console.log('emptyzipCode')}
    if (phone==='') {console.log('emptyphone')}
    if (webSite==='') {console.log('emptywebSite')}
    if (name&&userName&&email&&street&&city&&zipCode&&phone&&webSite) {console.log ('error is empty')}
}


    // const [val, setVal] = useState({...response})

    if (response.length>0){
       
    const reduct = () => {
        return (setdis({disabled:false}),
        setName(props['name']),
        setUserName(response[0]['username']),
        setStreet(response[0]['address']['street']),
        setCity(response[0]['address']['city']),
        setZipCode(response[0]['address']['zipcode']),
        setPhone(response[0]['phone']),
        setWebSite(response[0]['website']),
        setComment(response[0]['comment']),
        setEmail(response[0]['email']))
    }
    let arr=['name','username',['email'],['address']['street'],['address']['city'],['address']['zipcode'],['phone'],['website'] ]

         
    
       return <div className="mainStyle">
         <h1 className='texts'>Профиль пользователя</h1>
            <div style={{display: 'flex', justifyContent:'right'}}>
            <MyBotton onClick={reduct} >Редактировать</MyBotton>
            </div>
            <form >

                 <p className="inputName">Name</p> 
                <input className="input" type="text" name="Name" placeholder={props['name']} {...disable} 
                onChange = {event => setName(event.target.value) } value={name} />      

                <p className="inputName">User name</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['username']} {...disable}
                 onChange = {event => setUserName(event.target.value) } value={userName}/>
               
                <p className="inputName">E-mail</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['email']} {...disable} 
                 onChange = {event => setEmail(event.target.value) } value={email}/>
                
                <p className="inputName">Street</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['address']['street']} {...disable}
                onChange = {event => setStreet(event.target.value) } value={street} />
                
                <p className="inputName"> City</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['address']['city']} {...disable}
                onChange = {event => setCity(event.target.value) } value={city} />
                
                <p className="inputName">Zip code</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['address']['zipcode']} {...disable}
                onChange = {event => setZipCode(event.target.value) } value={zipCode} />

                <p className="inputName">Phone</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['phone']} {...disable}
                onChange = {event => setPhone(event.target.value) } value={phone} />

                <p className="inputName">Website</p>
                <input className="input" type="text" name="Name" placeholder={response[0]['website']} {...disable}
                onChange = {event => setWebSite(event.target.value) } value={webSite}/>

                <p className="inputName">Comment</p>
                <input className="inputComment" type="text" name="Comment" {...disable}
                onChange = {event => setComment(event.target.value) } value={comment} />
                
                <div style={{display: 'flex', justifyContent:'right'}}>
                <button className="btn" onClick={send}  {...disable}>Отправить</button>
                </div>
            </form>
        </div>
}
}


export default UserInfo