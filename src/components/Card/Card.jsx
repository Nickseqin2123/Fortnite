import { useState } from 'react'
import classes from './card.module.css'
import Modal from '../Modal/Modal'


export default function Card ({products, func_set}) {
    const [display, setDisplay] = useState('none')
    
    return (
        <>
        <div className={classes.mainCard}>
            <img onClick={() => setDisplay('block')} src="/371979.svg"/>
            <span>{products.items.length}</span>
        </div>
        <Modal
         display={display}
          close={() => setDisplay('none')}
           card={products.items.length? products.items: false}
           func_set={func_set}
           />
        </>
    )
}