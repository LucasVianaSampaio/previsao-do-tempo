const key = "6cdc80c4c68ec9f09c7508c5ed3cd1da"

function dataView(data){
    

    document.querySelector(".weather-in").innerHTML = `Tempo em ${data.name}`
    document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp)}°C`
    document.querySelector(".clouds").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = `Umidade: ${data.main.humidity}%`
    document.querySelector(".cloud-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    console.log(data)
}

async function searchCity(city){
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    const dataJson = await data.json()
    dataView(dataJson)
}

function clickButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}
