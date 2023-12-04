


    
// let cityOutPut = document.getElementById("cityOutPut")

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let cityOutPut = document.getElementById("cityOutPut")
let trialData;
const apiKey = "ad63be9b03ab80ede8d8ad89a9a8b920";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

async function searchWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      console.log(response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
      
        // console.log(data);

        return data;

        // cityOutPut.innerHTML = data.name;
       //other
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
    }
}


    
searchBtn.addEventListener("click", async (event) => {
  
    try {
        const dataResult = await searchWeather(searchInput.value);

        trialData = dataResult;

        console.log(trialData);

        if (trialData && trialData.name) {
            cityOutPut.innerHTML = trialData.name;
            tempOutPut.innerHTML = Math.round(trialData.main.temp);
            



        }
    } catch (error) {
        console.error('Error in click event:', error);
    }
});

// searchBtn.addEventListener("click", async (event) => {
    
//     try {
//         const dataResult = await searchWeather(searchInput.value);

//         trialData = dataResult;

//         console.log(trialData);

//         if (trialData && trialData.main.temp) {
//             tempOutPut.innerHTML = trialData.main.temp;

//         }
//     } catch (error) {
//         console.error('Error in click event:', error);
//     }
// });


