import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product(){

    // const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/3"
    // const url = "https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/3"
    const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/3"
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response =>{
                setProduct(response.data)
            })
    }, [url])

    if(product){
        return (
            <div>
                <h1 className="font-bold text-2xl mb-3">PRODUCTS PAGE</h1>
                <h1>{product.name}</h1>
            </div>
        )
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Product