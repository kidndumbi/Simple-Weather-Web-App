

class Weather {

    constructor(config, city, state){

        this.apiKey = config.getApiKey();
        this.city = city;
        this.state = state;
       
    }

    //fetch weather from api

    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const data = await response.json();
        return data.current_observation;
    }

    changeLocation(city, state){

        this.city = city;
        this.state = state;
    }

}



