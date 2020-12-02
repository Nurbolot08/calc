import React, { useState } from 'react';
import Alert from "./alert";

const Search = ({getNutrition,message}) => {
    const [ products, setProducts ] = useState('')
    const handleData = () => {
        getNutrition(products)
        setProducts('')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center offset-md-4">
                    <input type="text" className="form-control mb-3" onChange={e => setProducts(e.target.value)}
                     onKeyDown={e => e.key === 'Enter' ? handleData() : null}
                           value={products}
                    />
                    {
                        message && <Alert text={message} type="danger"/>
                    }
                    <button className="btn btn-success" onClick={handleData}>Get Nutrition</button>
                </div>
            </div>
        </div>
    );
};

export default Search;