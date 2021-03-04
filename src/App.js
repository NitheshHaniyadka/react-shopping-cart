//feature

import { render } from '@testing-library/react';
import React from 'react';
import Products from './components/Products'

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
      <Products />

        
      </div>
      <footer>All right reserved</footer>
    </div>
  );
}
}

export default App;
