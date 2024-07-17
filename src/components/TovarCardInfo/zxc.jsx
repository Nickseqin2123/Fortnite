import Buttons from '../Button/Buttons'


export default function InfoTovarCard (props) {
    return (
        <>
        <p>Название: {props.name}</p>
        <p>Цена: <span>{props.price}</span></p>
        <p>Количество: <span>{props.count}</span></p>
        <Buttons />
        <hr/>
        </>
    )
}