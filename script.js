 
let weather={
    "apiKey":"470673f5374560a12dbb8afe46da9f74",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&appid="
            + this.apiKey
        )

        .then((Response)=> Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        var temperature = temp;
        var cel=(Math.round(temperature - 273.15));

        document.querySelector(".city").innerHTML = "Weather in "+ name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = cel +"°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: "+speed+"Km/Hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?"+ name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
   if(event.key == "Enter"){
       weather.search();
   }
});

weather.fetchWeather("Delhi");