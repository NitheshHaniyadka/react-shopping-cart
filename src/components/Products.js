import React, { Component } from 'react'


class Products extends Component{
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

    render(){
        return<div className="container">
                <div className="col-md-6 form-group">
                    <div className="border p-3">
                        {
                            this.state.productList.map((xproduct,index)=>{
                                return<div key={xproduct.skuId} className="border p-3">
                                    <img src={xproduct.skuImageUrl} alt={xproduct.categoryName} height='120' width='150'/>
                                    <p>{xproduct.parentCategoryName}</p>
                                    <p>{xproduct.skuAverageRating}</p>
                                    <p>{xproduct.skuDermatRating}</p>
                                    </div>
                            })
                        }
                        </div>
                        </div>
                       
            </div>
    }
}

export default Products