import React , {useState} from 'react'
import './App.css'
import MyBotton from './Component/Units/Bottom';

import Request from './Component/Request';
import UserInfo from './Component/UserInfo';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  const [sortChange, setSortChange] = useState('none')

  const sortCompany = ()=> {
    return setSortChange('company')
  }

  const sortCity = ()=> {
    return setSortChange('city')
  }
  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2)

  return (
    <div className="App">
     
      <div className='Main'> 
       
      <Routes>
       <Route path="/UserInfo" element={ <UserInfo />} />
       <Route path="/" element={ <Request req={sortChange} /> } />
        <Route path='*' element={<Request req={sortChange} />} />
      </Routes>
      </div> 
      
      <div className='Navigation'>
        <p className='texts'> Сортировка </p>
        <MyBotton onClick={sortCity} > по городу </MyBotton>
        <MyBotton onClick={sortCompany} > По компании </MyBotton> 
        
      </div>   
     </div>
    
  );
}

export default App;
