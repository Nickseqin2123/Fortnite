import { useState } from "react";
import Tovar from "../Tovar/Tovar";
import classes from './tovars.module.css'
import Card from '../Card/Card'
import { useEffect } from "react";


export default function Tovars () {
    const [val, setVal] = useState({
        IsLoading: true,
        items: []
    })

    const [products, setProducts] = useState({
        items: []
    })

    useEffect(() => {
        fetch('https://fortnite-api.com/v2/shop/br').then(res => res.json()).then((result) => {
            setVal({
                IsLoading: false,
                items: result['data']['featured']['entries']
            })
        })}, [])



    if (val.IsLoading) {
        return (
            <div className={classes.spinner}></div>
        )
    } else {
        return (
            <>
            <Card products={products} func_set={setProducts}/>
                <div className={classes.carts}>
                    {val.items.map((data) => {
                        return Tovar(data, setProducts, products.items)
                    })}
                </div>
            </>
        )   
    }
}