//feature

import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter,Route } from 'react-router-dom';
import Products from './components/Products'
import Product_new from './components/Product_new'
import Header from './components/Header'
import Form from './components/Header'
import Product_Page from './components/Product_Page'
import Filter from './components/Filter';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      productlist:[],
      filterproducts:[],
      sort:''
    };
    // this.handleChangeSort=this.handleChangeSort.bind(this);
  }


  getHealthandGlow=async ()=>{
    const api_call=await fetch(`https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20`)

    const data = await api_call.json();
    // console.log(productList.data.products[0].skuId);
    this.setState({productlist:data.data.products,filterproducts:data.data.products})
    console.log(this.state.productlist);
    console.log(this.state.filterproducts);
     
  }

  componentDidMount(){
    this.getHealthandGlow()

  }

  

 

  handleChangeSort=(event)=>{
    // this.setState({sort:e.target.value});
    // this.listProducts();

    const sort=event.target.value

    console.log(event.target.value);
    this.setState((state)=>({
      sort:sort,
      productlist:this.state.productlist.slice().sort((a,b)=>(
        sort==="lowest" ?((a.defaultPrice >b.defaultPrice) ?1:-1):
        sort==="highest"?((a.defaultPrice <b.defaultPrice) ?1:-1):
        ((a.skuId >b.skuId)?1:-1)
        
      ))
     
    }))

  }

  

render(){
  return (

   
    <div className="grid-container">
      <header>
        <a href="/">React Shopping</a>
        <Form getFilter={this.getFilter}/>
        
      </header>
      
      
      <div>
        <main>
       
      <div className="content">
      <div className="main">
        <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
        handleChangeSort={this.handleChangeSort} count={this.state.filterproducts.length}/>
        <hr/>
        <Product_Page getData={this.state.productlist}/>
        
      </div>
      </div>
      </main>    
      </div>
    </div>
  );
}
}

export default App;
