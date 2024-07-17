import { useState } from 'react'
import classes from './card.module.css'
import Modal from '../Modal/Modal'


export default function Card () {
    const [display, setDisplay] = useState('none')
    const [products, setProduct] = useState({
        items: []
    })
    
    
    return (
        <>
        <div className={classes.mainCard}>
            <img onClick={() => setDisplay('block')} src="/371979.svg"/>
            <span>{products.items.length}</span>
        </div>
        <Modal display={display} close={() => setDisplay('none')} card={products.items.length? products.items: false}/>
        </>
    )
}