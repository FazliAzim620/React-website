import React from 'react';

import Data  from './Data';
// import Servicesarry from './Servicesarry';
const Work=()=>{

    return(
        <>
      

        
{        
         
<div id="services">
  <div className="container">
    <div className="section-title">
      <h2>Our Works </h2>
    </div>
    <div className="row">
    {Data.map((val)=>( 
     <div className="col-md-4">
        <div className="service-media "> <img src={val.image} alt="images "/></div>
        
      </div> 
   )) }
    </div>
  </div>


</div> }
        </>
    )
}
export default Work;