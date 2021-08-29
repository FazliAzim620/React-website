import React from 'react';
import Services from './Services';
import Data from './Data';
const Servicesarry=()=>{
    
 
    return(
    
       
        <>   
         {/* {Data.map((val)=>(
    <div className="col-md-4">
        <div className="service-media"> <img src={val.image} alt="images "/></div>
        <div className="service-desc">
          <h3>{val.title}</h3>
          <p>{val.content}</p>
        </div>
      </div>
   ))}  */}
   <div className="row">
           {Data.map((value)=>(

                   <Services title={value.title}
                       image={value.image}
                       content={value.content}
                   />
                  
               )) } 
               </div>
               

        </>
        
    )
}
export default Servicesarry;