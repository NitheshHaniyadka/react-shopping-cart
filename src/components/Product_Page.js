import React from 'react'
import formatCurrency from'./utility'

const Product_Page=({posts,loading})=>(

                    <div>
                        <ul className="products">
                            {
                                posts.map((xproduct)=>{
                                    return(<div className="col-md-6 border p-4" key={xproduct.skuId}>
                                    <li >
                                    <div className="product">   
                                    <img src={xproduct.skuImageUrl} alt={xproduct.categoryName}/>
                                    </div>
                                    <div className="name">
                                    <a href={"!#"+xproduct.deepLinkUrl}>
                                    <p >{xproduct.skuName}</p>
                                    
                                    </a>
                                    </div>
                                    <div className="product-price">
                                        <p className="price">{formatCurrency(xproduct.defaultPrice)}</p>
                                        
                                    </div>
                                    
                                    </li>
                                    </div>)

                                })
                            }
                        </ul>

                    </div>
                    

                

);

export default Product_Page