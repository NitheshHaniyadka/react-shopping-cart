import React from "react";
import List from "react-nested-list-select";
//on-modals

const Modal_Filter_Category = ({ handleClose, show, children,categoryshow }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  console.log(categoryshow);
  // this.state={
  //   itemInformation:[]
  // }

//   getProductData=(index)=>{ // writting this function inorder to get the value of itemInformation 
//     this.setState({
//         itemInformation:this.state.itemList[index].product // Get the index based product list of each category
//     })
// }

  return (
    <div className={showHideClassName}>
      <div className="modal-container category">
        {children}
        <button className="modal-close fa-close" onClick={handleClose}>
          X
        </button>
        <div>
        {



<div className='col-md-4 '>
<ul className='list-group'>
{
    categoryshow.map((cat,index)=>{
        return<li className="list-group-item  border p-3 text-warning " key={index}>{cat.text}</li>
    })
}
</ul>
</div>

        }
        </div>
        
       
        
      </div>

    </div>
  );
};

export default Modal_Filter_Category;
