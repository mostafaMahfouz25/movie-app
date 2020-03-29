import React from 'react'

function ViewMovie({data,closeView}) {
    return (
        <React.Fragment>
 
            <div className="col-sm-12 my-2 " >
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img  src={data.Poster} className="card-img-top" height="515" style={{width:"400px"}} />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card text-center p-4 border">
                        
                            <h5 className="card-title">{data.Title}</h5>
                            <h5 className="card-title">{data.Year}</h5>
                            <h5 className="card-title">Rated : {data.Rated}</h5>
                            <h5 className="card-title">Released : {data.Released}</h5>
                            <h5 className="card-title">Writer : {data.Writer}</h5>
                            <p className="card-body">{data.Plot}</p>
                            <button className="btn btn-danger btn-block" onClick={closeView}> Close </button>
                        </div>
                    </div>
                </div>
                
            </div>
                
            
        </React.Fragment>
        
    )
}

export default ViewMovie
