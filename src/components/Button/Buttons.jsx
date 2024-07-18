import classes from './button.module.css'


export default function Button ({card, func_click, index}) {
    const data = card

    function add() {
        data[index].count++
        data.splice(index, 1, {...data[index], price: data[index].price * data[index].count})
        return func_click({items: data})
    }

    function sub() {
        data[index].count--
        if (data[index].count === 0) {
            data.splice(index, 1)
        } else {
            data.splice(index, 1, {...data[index], price: data[index].normalprice * data[index].count})
        }
        return func_click({items: data})
    }

    return (
        <div className={classes.butt}>
            <button onClick={() => add()}>+</button>
            <button onClick={() => sub()}>-</button>
        </div>
    )
}