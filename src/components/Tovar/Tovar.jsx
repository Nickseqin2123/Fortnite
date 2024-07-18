import classes from './tovar.module.css'


export default function Tovar (data, func_set, items) {
    const sps = items


    function base(name, price) {
        let ind = -1

        for (let q of sps) {
            if (q.name === name) {
                ind = sps.indexOf(q)
                break
            }
        }

        if (ind !== -1) {
            const dt = sps[ind]
            sps.splice(ind, 1, {...dt, price: price * dt.count, count: dt.count + 1})
        } else {
            sps.push({name: name, price: price, count: 1, normalprice: price})
        }

        return func_set({items: sps})
    }


    if (data.banner && data.bundle && data.bundle.name) {
        const {bundle, finalPrice} = data
        return (
                <div className={classes.info}>
                    <img src={bundle.image} width='250px' height='250px'/>
                    <h4 style={{ width: '100px' }}>{bundle.name}</h4>
                    <img className={classes.icon} onClick={() => base(bundle.name, finalPrice)} src="/371979.svg"/>
                </div>
        )
    }

}