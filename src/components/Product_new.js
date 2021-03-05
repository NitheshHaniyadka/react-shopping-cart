import React, { Component } from 'react'
import formatCurrency from'./utility'

export default class Product_new extends Component {
    constructor(){
        super();
        this.state={
            productList:[]        }
    }

    getRecipe=async ()=>{
        const api_call=await fetch(`https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20`)
    
        const data = await api_call.json();
        // console.log(productList.data.products[0].skuId);
        this.setState({productList:data.data.products})
        console.log(this.state.productList);
      }
    
      componentDidMount(){
        this.getRecipe()
    
      }
    render() {
        return (
            <div>
                <ul className="products">
                {
                            this.state.productList.map((xproduct)=>{
                                return<li key={xproduct.skuId}>
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

                                    
                                    </li>
                            })
                        }
                </ul>
                
            </div>
        )
    }
}
