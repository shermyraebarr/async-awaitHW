async function getCity(cityName) {
    const res = await fetch("https://geocode.xyz/seattle?json=1");
    const data = await res.json()

    console.log('Latitude: ' + data.lat + '\nLongitide: ' + data.longt)

}

getCity('Seattle')
// getCity('New Orleans')
// getCity('Dallas')
// getCity('Houston')