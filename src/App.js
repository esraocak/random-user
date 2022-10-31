import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Buton from './components/buton';
import Card from './components/card';


function App() {

const [info,setInfo] = useState({})


const url = "https://randomuser.me/api/"

const getUser = async () =>{

  const {data} = await axios (url)
  
  const{
  picture:{large},
  name: {title, first, last},
  email,
  cell,
  location: {state, country},
  registered: {date,age}}= data.results[0];
  

  setInfo(
    {large,title,first, last,email,
      cell,state, country, date, age}
  )

}

useEffect(() => {
 getUser ()
 
}, [])

return (
  <div>
    <div className='maincontainer'>
      <Card info={info}/>
      <Buton getUser={getUser}/>
    </div>

  </div>
);
    
}

export default App;
