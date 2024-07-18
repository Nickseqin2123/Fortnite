const req = await fetch('https://fortnite-api.com/v2/shop/br')


const data = await req.json()


for (const a of data.data.featured.entries) {
    console.log(a)
    }

