import React from "react";
import List from "react-nested-list-select";
//on-modals

const Modal_Filter_Category = ({ modalClose_Filter, show, children,categoryshow,getProductData,itemInformation }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
 


  return (
    <div className={showHideClassName}>
      <div className="modal-container category">
        {children}
        <button className="modal-close fa-close" onClick={modalClose_Filter}>
          X
        </button>
        <div className="row">
        {/* <div>
        {
              <div className='col-md-4 '>
              <ul className='list-group'>
              {
                  categoryshow.map((cat,index)=>{
                      return<li className="list-group-item  border p-3 text-warning " key={index} onClick={getProductData}>{cat.text}</li>
                  })
              }
              </ul>
              </div>
              }
          </div> */}


          <div className="col-md-4">

                    {
                        <ul className="list-group">
                          {
                            categoryshow.map((items,index)=>{  
                              return<li className="list-group-item  border p-4 text-warning " key={index} >{items.name}</li>

                            })
                          }
                        </ul>
                      
                    }

     </div> 
      </div>

    </div>
    </div>
  );
};

export default Modal_Filter_Category;
