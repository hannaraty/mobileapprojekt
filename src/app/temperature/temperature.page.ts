import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-weight',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {
 
  value = '';
  convertedOutput = '';
  eka: string;
  toka: string;
 
  constructor() { }
 
  ngOnInit() {
  }
 
 
  Conversion() {
    var output = document.getElementById('convertedOutput');
 
    var madeSelection_1 = this.eka;
    var madeSelection_2 = this.toka;
 
    var numero = parseFloat(this.value);
 
    if (madeSelection_1 == madeSelection_2) {
      var result = numero;
      var muutos = result.toString();
      output.innerHTML = muutos;
    }
    //celsius
    if (madeSelection_1 == "Celsius" && madeSelection_2 == "Fahrenheit") {
      var result = numero * 9 / 5 + 32;
      var result2 = result.toFixed(2);
      var muutos = result2.toString();
      output.innerHTML = muutos+"°F";
    }
    if (madeSelection_1 == "Celsius" && madeSelection_2 == "Kelvin") {
      var result = numero + 273.15;
      var result2 = result.toFixed(2);
      var muutos = result2.toString();
      output.innerHTML = muutos+"K";
    }
    //fahrenheit
    if (madeSelection_1 == "Fahrenheit" && madeSelection_2 == "Celsius") {
      var result = (numero - 32) * 5 / 9;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"°C";
    }
    if (madeSelection_1 == "Fahrenheit" && madeSelection_2 == "Kelvin") {
      var result = (numero + 459.67) * 5 / 9;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"K";
    }
    //kelvin
    if (madeSelection_1 == "Kelvin" && madeSelection_2 == "Celsius") {
      var result = numero - 273.15;
      var result2 = result.toFixed(2);
      var muutos = result2.toString();
      output.innerHTML = muutos+"°C";
    }
    if (madeSelection_1 == "Kelvin" && madeSelection_2 == "Fahrenheit") {
      var result = numero * 9 / 5 - 459.67;
      var result2 = result.toFixed(2);
      var muutos = result2.toString();
      output.innerHTML = muutos+"°F";
    }
 
    if (this.value == null) {
      output.innerHTML = "";
    }
  }
 
}
