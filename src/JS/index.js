const apiKey = "5fd0ffdc08844ad08eb94127232412";

const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", async () => {
    const location = document.querySelector(".searchInput").value;

    if(!location) return

    const data = await searchLocationData(location);

    console.log(data);

    showData(data, location)

})


function searchLocationData(location){
 const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}
 &q=${location}&lang=pt`;

return fetch (apiUrl)
    .then(response=>response.json())
    .catch(erro=>console.log("Deu erro aqui",erro))

}

function showData(data){

    const temp = data.current.temp_c;
    const condition = data.current.condition.text
    const humidityNumber = data.current.humidity
    const windNumber = data.current.wind_kph
    const iconeClima = data.current.condition.icon
    const nomeaAPI = data.location.name
    const regiãoAPI = data.location.region

    document.querySelector(".location").textContent = nomeaAPI + " / " + regiãoAPI

    document.querySelector(".temp").textContent = `${temp} °C`

    document.querySelector(".condition").textContent = condition
    
    document.querySelector(".humidityNumber").textContent = `${humidityNumber}`

    document.querySelector(".windNumber").textContent = `${windNumber} Km/h`

    document.querySelector(".weatherIcon").setAttribute("src",iconeClima)
}