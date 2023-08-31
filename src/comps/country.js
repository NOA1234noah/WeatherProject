import React, { useEffect, useState } from 'react';
export default function Country(props) {
    const item=props.country;
    return(
        <div className="col-md-4 m-2 card p-3 border" key={item.name}>
        <div className='row'>
          <h3 className='col-6'>{item.name}</h3>
          <div className='col-6 text-start ps-4'>
            {item.main.temp > 30 ? <i className="fa fa-sun-o fa-2x text-warning " aria-hidden="true"></i> : item.main.temp < 20 ? <i class="fa fa-bolt fa-2x" aria-hidden="true"></i> : <i class="text-info fa-2x fa fa-cloud" aria-hidden="true"></i>}
          </div> </div>
        <h5 className='col-6'>{item.weather[0].description}</h5>
        <div className='row'>
          <div className='col-4'>
            <p>לחות</p>
            <strong>{item.main.humidity}%</strong>
          </div>
          <div className='col-4'>
            <p>טמפ' נמדדת</p>
            <strong>{item.main.temp}C</strong>
          </div>
          <div className='col-4'>
            <p>טמפ' מורגשת</p>
            <strong>{item.main.feels_like}C</strong>
          </div>
        </div>
      </div>
    )
}