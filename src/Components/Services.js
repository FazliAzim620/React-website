import React from 'react';

import Data  from './Data';
// import Servicesarry from './Servicesarry';
const Services=()=>{

    return(
        <>
      

        
{        
         
<div id="services">
  <div className="container">
    <div className="section-title">
      <h2>Our Services </h2>
    </div>
    <div className="row">
    {Data.map((val)=>( 
     <div className="col-md-4">
        <div className="service-media"> <img src={val.image} alt="images "/></div>
        <div className="service-desc">
          <h3>{val.title}</h3>
          <p>{val.content}</p>
        </div>
      </div> 
   )) }
    </div>
  </div>


</div> }
        </>
    )
}
export default Services;