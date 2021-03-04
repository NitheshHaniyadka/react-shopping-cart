//feature

import { render } from '@testing-library/react';
import React from 'react';
import Products from './components/Products'
import Product_new from './components/Product_new'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      productslist:[],
      filterCategory:"",
      sortdiscount:""
    }
  }
  
render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping</a>
      </header>
      <div>
      <div className="main">
        
        Products
      <Products/>
      </div>      
      </div>
    </div>
  );
}
}

export default App;
