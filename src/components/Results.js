import React from 'react'

function Results({results,selectData}) {
    return (
        <React.Fragment>
            {
                results.map((item,index)=>(
                    <div className="col-md-4 my-2" key={index}>
                        <div className="card">
                            <img  src={item.Poster} className="card-img-top" height="515" onClick={()=>selectData(item.imdbID)} />
                         
                            <h5 className="card-title">{item.Title}</h5>
                            <h5 className="card-title">{item.Year}</h5>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
        
    )
}

export default Results
