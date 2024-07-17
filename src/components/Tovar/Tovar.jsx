import classes from './tovar.module.css'


export default function Tovar (data) {
    if (data.banner && data.bundle && data.bundle.name) {
        const {bundle} = data
        return (
                <div className={classes.info}>
                    <img src={bundle.image} width='250px' height='250px'/>
                    <h4 style={{ width: '100px' }}>{bundle.name}</h4>
                    <img className={classes.icon} src="/371979.svg"/>
                </div>
        )
    }

}