

const Weather = new Weather(new Config(),'Pemberton', 'NJ' );

Weather.getWeather().then(data => { console.log(data) })