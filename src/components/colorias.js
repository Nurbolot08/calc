import React from 'react';

const Colorias = ({nutrition}) => {
    const getTotal = (consist) => {
        return nutrition.items.reduce((acc,rec) => acc + rec[consist],0).toFixed(1)
    }
    return (
        <div className="container">
            {nutrition.items && (
                <div className="row">
                    <div className="col-md-8 offset-md-2 overflow-scroll">
                        <table className="table bg-light mt-5 table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Serving Size</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Total Fat</th>
                                <th scope="col">Sugar</th>
                                <th scope="col">Protein</th>
                            </tr>
                            </thead>
                            <tr>
                                <th scope="row">Total</th>
                                <th scope="col">{getTotal('serving_size_g')}g</th>
                                <th scope="col">{getTotal('calories')}</th>
                                <th scope="col">{getTotal('fat_total_g')}g</th>
                                <th scope="col">{getTotal('sugar_g')}g</th>
                                <th scope="col">{getTotal('protein_g')}g</th>
                            </tr>
                            {
                                nutrition.items.map(el => (
                                    <tbody>
                                    <tr>
                                        <th scope="row">{el.name}</th>
                                        <td>{el.serving_size_g}g</td>
                                        <td>{el.calories}</td>
                                        <td>{el.fat_total_g}g</td>
                                        <td>{el.sugar_g}g</td>
                                        <td>{el.protein_g}g</td>
                                    </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Colorias;