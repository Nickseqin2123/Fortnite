const dat = {}


function Set (res) {
    console.log(res['data']['featured']['entries'])
    dat['datta'] = res
}

const req = fetch('https://fortnite-api.com/v2/shop/br').then(response => response.json()).then(
    (result) => {Set(result)}
)


for (const a of dt.data.featured.entries) {
    if (a.banner && a.bundle && a.bundle.name) {
        const {bundle, finalPrice, banner} = a
            console.log(`
Название: ${bundle.name}
Цена: ${finalPrice} руб
Цена в V-bucks: ${banner.value.split(' ')[0]}
Фото: ${bundle.image}`)
    }
}

console.log(dat)