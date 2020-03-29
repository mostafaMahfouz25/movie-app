import React from 'react'

function Search({handleInput,search}) {
    return (
        <div className="col-sm-12 p-3 border my-3">
            <div className="form-group m-0">
                <input className="form-control" onChange={handleInput}  
                id="input-search" placeholder="Type Name Of Movie"  onKeyDown={search}  />
            </div>
        </div>
    )
}

export default Search
