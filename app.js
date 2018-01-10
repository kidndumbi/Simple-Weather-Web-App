
const storage = new Storage();

//get location data
const WeatherLocation = storage.getLocationData()

console.log(WeatherLocation);


const weather = new Weather(new Config(), WeatherLocation.city,WeatherLocation.state );
const ui = new UI();

//weather.changeLocation('Lanham','MD' );


document.addEventListener('DOMContentLoaded', getWeather);


document.getElementById('w-change-btn').addEventListener('click', e => {


    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change weather location
    weather.changeLocation(city,state);

    //set location in storage
    storage.setLocationData(city, state);

    getWeather();

    $('#locModal').modal('hide');

});



function getWeather(){

    weather.getWeather()
.then(results => {
     console.log(results)
       
     ui.paint(results)
     

     })
.catch(err => console.log(err));

}

