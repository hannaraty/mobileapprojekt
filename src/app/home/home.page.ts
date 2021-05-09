import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
// Gets JSON data and parse
  getWeatherData(){
    let data=JSON.parse('{"coord":{"lon":24.9355,"lat":60.1695},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":279.92,"feels_like":277.41,"temp_min":279.82,"temp_max":280.15,"pressure":994,"humidity":76},"visibility":10000,"wind":{"speed":3.6,"deg":10},"clouds":{"all":75},"dt":1620316857,"sys":{"type":1,"id":1332,"country":"FI","sunrise":1620266612,"sunset":1620325810},"timezone":10800,"id":658225,"name":"Helsinki","cod":200}');
  this.setWeatherData(data);
    }
// sets JSON data to wanted form
    setWeatherData(data){
      this.WeatherData=data;
      let sunsetTime=new Date(this.WeatherData.sys.sunset*1000);
      this.WeatherData.sunset_time=sunsetTime.toLocaleDateString();
      let currentDate=new Date();
      this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
      this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
      this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
      this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
      this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    }

}