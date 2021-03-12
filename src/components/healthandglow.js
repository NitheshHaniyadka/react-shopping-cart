import React,{Component} from 'react';

class HealthandGlow extends Component{

    constructor(){
        super();
        this.state={
            productList:[],
            value:''
        }
    }
    getCarDetails=()=>{
        let url ='https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20';
        axios.get(url).then(response=>{
            this.setState({
                productList:response.data
            })
            
        })

    }

    componentDidMount(){
        this.getCarDetails();
    }
    render(){
        return<div className="container">
            <div className="row">
                <div className="col-md-8 text-center">
                    <h2>{this.state.productList.length}</h2>
                </div>
            </div>
        </div>
    }

}

export default HealthandGlow;