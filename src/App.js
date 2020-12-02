import React, { useState } from "react";
import './App.css'
import Search from "./components/search";
import Colorias from "./components/colorias";
import axios from "axios";

const API_URL = 'https://api.calorieninjas.com/v1/nutrition?query='
const headers = {
    headers:
        {'X-Api-Key': 'vHCH2UXmRQaM1dNSb3SgCA==sLhOvrdnQmhs9yV5'}
}

function App() {
    const [ nutrition, setNutrition ] = useState([])
    const [ message, setMessage ] = useState('')
    const getNutrition = (products) => {
        axios(`${API_URL}${products}`,headers)
            .then(({data}) => {
                if (data.items.length === 0){
                    setMessage('No Found!!!')
                }else {
                    setNutrition(data)
                    setMessage('')
                }
            })
    }
  return (
    <div className="main">
        <h1 className="text-center mb-5 text-white">Get Nutrition Facts Now</h1>
      <Search setNutrition={setNutrition} getNutrition={getNutrition} message={message}/>
      <Colorias nutrition={nutrition}/>
    </div>
  );
}

export default App;
