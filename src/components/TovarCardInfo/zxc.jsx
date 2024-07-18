import Buttons from '../Button/Buttons'


export default function InfoTovarCard (props, card, func_click, index) {
    return (
        <>
        <p>Название: {props.name}</p>
        <p>Цена: <span>{props.price}</span></p>
        <p>Количество: <span>{props.count}</span></p>
        <Buttons card={card} func_click={func_click} index={index}/>
        <hr/>
        </>
    )
}