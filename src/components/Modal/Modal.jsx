import classes from './modal.module.css'
import InfoTovarCard from '../TovarCardInfo/zxc'


export default function Modal ({display, close, card, func_set}) {
    return (
        <div className={classes.modal} style={{ display: display }}>
            <div className={classes.modalContent}>
                <span className={classes.close} onClick={close}>&times;</span>
                <h2 style={{textAlign: 'center'}}>Корзина</h2>
                {!card? <h4 style={{ textAlign: 'center' }}>В корзине нет ни одного товара</h4> : card.map((data)=>InfoTovarCard(data, card, func_set, card.indexOf(data)))}
            </div>
        </div>
    )
}