import React from 'react'
import {MdLocationOn} from 'react-icons/md'
function Card(props) {
  return (
    <main className='card'>
        

        <div className='card-body'>
        <header>
            
           
                <h1><MdLocationOn/> {props.search} ({props.city?.sys.country}) </h1>
            </header>

        <div className='sub-block'>
        <div>
                <img src={props.icon} alt="" width={100} height={100} />
            </div>
            
            <div>
                <h2>{props.city?.main.temp+'\xB0'}C </h2>
                <p>Feels like {props.city?.main.feels_like+'\xB0'}C</p>
                <h3>{props.city?.weather[0].description}</h3>
                <div className='subTemp'>
                    <span> Max temp:{props.city?.main.temp_max+'\xB0'}C </span>
                    <span> Min temp:{props.city?.main.temp_min+'\xB0'}C </span>
                     
                </div>
                <p>Humidity: {props.city?.main.humidity}</p>

        </div>
           
                
            </div>

        </div>

    </main>
  )
}

export default Card