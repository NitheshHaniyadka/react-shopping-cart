// import React,{useState,useEffect} from 'react';


// const Hook5=()=>{

//     const[carlist,updateCar]=useState([]);

//     useEffect(()=>{ //like a map function
//         getCar();
//         //Use effect will get triggered after render function
//         console.log(carlist.data.totalCount);
//     },);




//     const getCar= async()=>{
//         fetch('https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20').
//         then(response=>response.json()).  
//         then(carlist=>updateCar(carlist))
        
        
//     }

 

//     return<div className='container'>
//         <div className='row'>
//             <div className='col-md-5'>
//                 <h3>Total length of the product is</h3>
//             </div>

            

//         </div>
//     </div>



// }

// export default Hook5;