
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asynProducts'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [prodicts, setProducts] = useState([])

    const {categotyId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 id="h1"><b>{greeting}</b></h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;