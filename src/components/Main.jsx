import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { setFunction } from './icons';

function Main() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bengaluru");
    const [icon,setIcon] = useState((null))
    console.log(search)

    useEffect(()=>{
        async function getData(){
        let api= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5f13226dbf89ff07bab0362f9bc293fe`;
        try {
            let response= await axios.get(api);
            setCity(response.data)
            if (response.data.weather){
                setIcon(response.data.weather[0].icon)
        
            }
            
        } catch (error) {
            console.log(error.response.data.message);
        }
        }
        getData()
    },[search] )
    console.log(city);

  return (
    <div>
        <div>
        <h1>WELCOME TO WEATHER REPORT</h1>
            <input className='inputs' type="search" placeholder='Search City' 
            onChange={(e)=>setSearch(e.target.value)}/>

        </div>
        {
            search ? (<Card search={search} city={city} icon={setFunction(icon)}/> ) : <h1>  "City not found" </h1>
        }
      
        
        
    </div>
  )
}

export default Main