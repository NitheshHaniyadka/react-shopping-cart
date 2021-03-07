import React from 'react'


const Pagination=({postsPerPage,totalPost,paginate})=>{

    const pageNumbers=[];
    for(let i=1;i <= Math.ceil(totalPost/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <div className="row">
            <div className="col-md-12">
            <nav>
                <ul className="pagination">
                    {
                        pageNumbers.map(number=>(
                            <li key={number} className="page-item">
                                <button onClick={()=>paginate(number)}  className="page-link">
                                    {number}
                                </button>
                            </li>
                            
                        ))
                    }

                </ul>
            </nav>
        </div>

        </div>
    )
}

export default Pagination