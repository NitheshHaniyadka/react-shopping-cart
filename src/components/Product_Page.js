import React from 'react'
import formatCurrency from'./utility'

const Product_Page=props=>(
                    <div>
                        <ul className="products">
                            {
                                props.getData.map((xproduct)=>{
                                    return(<li key={xproduct.skuId}>
                                    <div className="product">
                                        <a href={"#"+xproduct.skuId}>
                                    <img src={xproduct.skuImageUrl} alt={xproduct.categoryName}/>
                                    <p>{xproduct.skuName}</p>  
                                    </a>
                                    <div className="product-price">
                                        <p>{formatCurrency(xproduct.defaultPrice)}</p>
                                        <button className="button primary">Filter</button>
                                        
                                    </div>
                                    </div>

                                    
                                    </li>)

                                })
                            }
                        </ul>

                    </div>
                    

                

);

export default Product_Page



// export default class Product_Page extends Component {
//     constructor(){
//         super();
//         this.state={
//             productList:[]        }
//     }


//     render() {
//         return (
//             <div>
//                 <ul className="products">
//                 {
//                             this.state.productList.map((xproduct)=>{
//                                 return<li key={xproduct.skuId}>
//                                     <div className="product">
//                                         <a href={"#"+xproduct.skuId}>
//                                     <img src={xproduct.skuImageUrl} alt={xproduct.categoryName}/>
//                                     <p>{xproduct.skuName}</p>  
//                                     </a>
//                                     <div className="product-price">
//                                         <p>{formatCurrency(xproduct.defaultPrice)}</p>
//                                         <button className="button primary">Filter</button>
                                        
//                                     </div>
//                                     </div>

                                    
//                                     </li>
//                             })
//                         }
//                 </ul>
                
//             </div>
//         )
//     }
// }
