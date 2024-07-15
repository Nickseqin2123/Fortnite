const req = await fetch('https://fortnite-api.com/v2/shop/br', {
    headers: {
        'Authorization': '7589aa98-088e-4934-8b8e-4adc1979b0b2'
    }
})

const it = await req.json()

for (const a of it.data.featured.entries) {
    if (a.banner && a.bundle && a.bundle.name) {
        const {bundle, finalPrice, banner} = a
            console.log(`
Название: ${bundle.name}
Цена: ${finalPrice} руб
Цена в V-bucks: ${banner.value.split(' ')[0]}
Фото: ${bundle.image}`)
    }
}

