//feature
import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter,Route } from 'react-router-dom';
import Products from './components/Products'
import axios from  'axios'
import './style.css'
import Product_new from './components/Product_new'
import Header from './components/Header'
import Form from './components/Header'
import Product_Page from './components/Product_Page'
import Filter from './components/Filter';
import Modal from "./components/popup";
import Modal_Filter_Category from "./components/FilterByCategoryModals";

import Pagination from './components/Pagination'

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      modal:false,
      modal_category:false,
      productlist:[],
      filterproducts:[],
      sort:'',
      startIndex:1,
      endIndex:167,
      postsPerPage:20,
      paginationdata:[],
      indexOfLastPost:'',
      indexOfFirsttPost:'',
      currentPosts:'',
      pageOfItems:[],
      itemInformation:[]
      
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.getProductData=this.getProductData.bind(this)

  }

  getProductData=(index)=>{ // writting this function inorder to get the value of itemInformation 
    console.log("yes")
    this.setState({
        itemInformation:this.state.filterproducts.aggregations // Get the index based product list of each category
    })
    
}
  
  onChangePage=(pageNumber)=>{
    console.log(`active page is ${pageNumber}`)
    this.setState({
      startIndex:pageNumber

    })
  }
    

  getHealthandGlow=async ()=>{
    const {startIndex}=this.state
    const{endIndex}=this.state
    const api_call=await fetch(`https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=${startIndex}:${endIndex}`)

    const data = await api_call.json();
    
    this.setState({productlist:data.data.products,paginationdata:data.data.products})


     
  }

  
  getHealthandGlowFilter=async ()=>{
    
    const api_call=await fetch(`https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20&category=lipstick&shade=Maroon`)

    const data_filter = await api_call.json();
    // console.log(data_filter);
    
    this.setState({filterproducts:data_filter.data.aggregations})


     
  }



  componentDidMount(){
    this.getHealthandGlow();
    this.getHealthandGlowFilter();
  }


  //Sort Event
  handleChangeSort=(event)=>{
    const sort=event.target.value
    this.setState((state)=>({
      sort:sort,
      productlist:this.state.productlist.slice().sort((a,b)=>(
        sort==="lowest" ?((a.defaultPrice >b.defaultPrice) ?1:-1):
        sort==="highest"?((a.defaultPrice <b.defaultPrice) ?1:-1):
        ((a.skuId >b.skuId)?1:-1)     
      ))    
    }));
    this.modalClose();

  }

  //sort category
  handleChangeCategory=(event)=>{
    const sort=event.target.value
    this.setState((state)=>({
      sort:sort,
      productlist:this.state.productlist.slice().sort((a,b)=>(
        sort==="lowest" ?((a.defaultPrice >b.defaultPrice) ?1:-1):
        sort==="highest"?((a.defaultPrice <b.defaultPrice) ?1:-1):
        ((a.skuId >b.skuId)?1:-1)     
      ))    
    }));
    this.modalClose();

  }

//input form
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }
//save
  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  //close button for sort
  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  //close buttn for filter
  modalClose_Filter() {
    this.setState({
      modalInputName: "",
      modal_category: false
    });
  }
//sort open 
  modalOpen() {
    this.setState({ modal: true });
  }
//filter by category open
  modalOpen_category() {
    this.setState({ modal_category: true });
  }


  

render(){
  const {productlist,filterproducts,startIndex,postsPerPage}=this.state
  console.log(filterproducts);


   //Get current Posts-
const indexOfLastPost=startIndex * postsPerPage;
  const indexOfFirsttPost=indexOfLastPost -postsPerPage;
  const currentPosts=productlist.slice(indexOfFirsttPost,indexOfLastPost);
  // console.log(currentPosts);

  

  return (
    <div className="grid-container">
      <header>           
        <Header/>
        <div className="row">
          <div className="col-md-3">
            </div>
            <div className="col-md-3">
        <Filter size={this.state.size} sort={this.state.sort} handleChangeCategory={this.handleChangeCategory}
        handleChangeSort={this.handleChangeSort} count={this.state.productlist.length}/>
        </div>
        </div>
        
        <div className="row">      
          <div className="col-md-1">
          </div>
          
        <div className='col-md-4'>
          <br/>
                    
                    <button className='btn btn-block btn-warning btn-lg buttonColor' onClick={e => this.modalOpen(e)}>SortByDiscount</button>
      </div>
      <div className='col-md-4'>
      <br/>      
                    
                    <button className='btn btn-block btn-warning btn-lg buttonColor'  onClick={e => this.modalOpen_category(e)}>FILTER BY CATEGORY</button>
      </div>
      </div>
      <div className="col-md-1"></div>
        
      </header>    
      <div>
        <main>     
      <div className="content">
      <div className="main">
      <Pagination
                startIndex={this.state.startIndex}
                postsPerPage={20}
                totalPost={this.state.productlist.length}
                paginate={this.onChangePage}
            />
            
        <Product_Page posts={currentPosts}/>
        
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <div className="form-group">
            <button className="btn btn-primary" onClick={event => this.handleChangeSort(event)} type="button">
              Discount
            </button>
          </div>
        </Modal>

        <Modal_Filter_Category itemInformation={this.state.itemInformation} categoryshow={this.state.filterproducts} show={this.state.modal_category} modalClose_Filter={e => this.modalClose_Filter(e)} getProductData={e=>this.getProductData(e)}>
          <div className="form-group">
            <button className="btn btn-primary align-left" onClick={event => this.handleChangeCategory(event)} type="button">
              FILTER ALL
            </button>
          </div>
        </Modal_Filter_Category>
        
      </div>
      </div>
      </main>
      
      </div>
    </div>
  );
}
}


export default App;
