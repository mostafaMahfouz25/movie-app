import React from 'react'

function NotFound({message}) {

    return (
        <React.Fragment>
 
            <div className="col-sm-12 my-2 " >
                
                <div className="alert alert-danger text-center my-3">
                    {message}
                </div>
            </div>
                
            
        </React.Fragment>
        
    )
}

export default NotFound
