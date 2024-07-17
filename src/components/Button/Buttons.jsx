import classes from './button.module.css'


export default function Button () {
    return (
        <div className={classes.butt}>
            <button>+</button>
            <button>-</button>
        </div>
    )
}