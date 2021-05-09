import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenght',
  templateUrl: './lenght.page.html',
  styleUrls: ['./lenght.page.scss'],
})
export class LenghtPage implements OnInit {
  
  value = '';
  convertedOutput = '';
  eka: string;
  toka: string;
  constructor() { }

  ngOnInit() {
  }

  Conversion() {
    var output=document.getElementById('convertedOutput');
    var madeSelection_1 = this.eka;
    var madeSelection_2 = this.toka;
  
    var numero=parseFloat(this.value);
    if (madeSelection_1 == madeSelection_2) {
      var result = numero;
      var muutos = result.toString();
      output.innerHTML = muutos;
    }
    
  
    //feet
    if (madeSelection_1 == "feet1" && madeSelection_2 == "meters1") {
      var result = numero * 0.3048;
      var result2=result.toFixed(3);
      var muutos=result2.toString();
      output.innerHTML=muutos + "m";
    }
    if (madeSelection_1 == "feet1" && madeSelection_2 == "inches1"){
      var result = numero * 12;
      var result2=result.toFixed(2);
      var muutos=result2.toString();
      output.innerHTML=muutos + "in";
    }
    if (madeSelection_1 == "feet1" && madeSelection_2 == "centimeters1"){
      var result = numero * 30.48;
      var result2=result.toFixed(2);
      var muutos=result.toString();
      output.innerHTML=muutos + "cm";
    }
    if (madeSelection_1 == "feet1" && madeSelection_2 == "yards1"){
      var result = numero * 0.333333;
      var result2=result.toFixed(3);
      var muutos=result2.toString();
      output.innerHTML=muutos + "yd";
    }
    if (madeSelection_1 == "feet1" && madeSelection_2 == "kilometers1"){
      var result = numero * 0.0003048;
      var result2=result.toFixed(4);
      var muutos=result2.toString();
      output.innerHTML=muutos + "km";
    }
    if (madeSelection_1 == "feet1" && madeSelection_2 == "miles1"){
      var result = numero * 0.000189394;
      var result2=result.toFixed(5);
      var muutos=result2.toString();
      output.innerHTML=muutos + "mi";
    }
  
    //meters
    if (madeSelection_1 == "meters1" && madeSelection_2 == "feet1") {
        var result = numero * 3.28084;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos + "ft";
      }
      if (madeSelection_1 == "meters1" && madeSelection_2 == "inches1") {
        var result = numero * 39.37;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos + "in";
      }
      if (madeSelection_1 == "meters1" && madeSelection_2 == "centimeters1") {
        var result = numero * 100;
        var muutos = result.toString();
        output.innerHTML = muutos + "cm";
      }
      if (madeSelection_1 == "meters1" && madeSelection_2 == "yards1") {
        var result = numero * 1.094;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos + "yd";
      }
      if (madeSelection_1 == "meters1" && madeSelection_2 == "kilometers1") {
        var result = numero * 0.001;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos + "km";
      }
      if (madeSelection_1 == "meters1" && madeSelection_2 == "miles1") {
        var result = numero * 0.000621371;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos + "mi";
      }
  
  //inches
  if (madeSelection_1 == "inches1" && madeSelection_2 == "feet1") {
    var result = numero * 0.0833333;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "ft";
  }
  if (madeSelection_1 == "inches1" && madeSelection_2 == "meters1"){
    var result = numero * 0.0254;
    var result2=result.toFixed(3);
    var muutos=result2.toString();
    output.innerHTML=muutos + "m";
  }
  if (madeSelection_1 == "inches1" && madeSelection_2 == "centimeters1"){
    var result = numero * 2.54;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "cm";
  }
  if (madeSelection_1 == "inches1" && madeSelection_2 == "yards1"){
    var result = numero * 0.0277778;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "yd";
  }
  if (madeSelection_1 == "inches1" && madeSelection_2 == "kilometers1"){
    var result = numero / 39370;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "km";
  }
  if (madeSelection_1 == "inches1" && madeSelection_2 == "miles1"){
    var result = numero / 63360;
    var result2=result.toFixed(3);
    var muutos=result2.toString();
    output.innerHTML=muutos + "mi";
  }
  
  //centimeters
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "feet1") {
    var result = numero * 0.0328084;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "ft";
  }
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "meters1"){
    var result = numero * 0.01;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "m";
  }
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "inches1"){
    var result = numero * 0.393701;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "in";
  }
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "yards1"){
    var result = numero * 0.0109361;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "yd";
  }
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "kilometers1"){
    var result = numero / 100000;
    var result2=result.toFixed(4);
    var muutos=result2.toString();
    output.innerHTML=muutos + "km";
  }
  if (madeSelection_1 == "centimeters1" && madeSelection_2 == "miles1"){
    var result = numero / 160934;
    var result2=result.toFixed(4);
    var muutos=result2.toString();
    output.innerHTML=muutos + "mi";
  }
  
  //yards
  if (madeSelection_1 == "yards1" && madeSelection_2 == "feet1") {
    var result = numero * 3;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos + "ft";
  }
  if (madeSelection_1 == "yards1" && madeSelection_2 == "meters1") {
    var result = numero * 0.9144;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos + "m";
  }
  if (madeSelection_1 == "yards1" && madeSelection_2 == "inches1") {
    var result = numero * 36;
    var muutos = result.toString();
    output.innerHTML = muutos + "in";
  }
  if (madeSelection_1 == "yards1" && madeSelection_2 == "centimeters1") {
    var result = numero * 91.44;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos + "cm";
  }
  if (madeSelection_1 == "yards1" && madeSelection_2 == "kilometers1") {
    var result = numero * 0.0009144;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos + "km";
  }
  if (madeSelection_1 == "yards1" && madeSelection_2 == "miles1") {
    var result = numero * 0.000568181818;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos + "mi";
  }

  //kilometers
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "feet1") {
    var result = numero * 3280.8999;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "ft";
  }
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "meters1"){
    var result = numero * 1000;
    var result2=result.toFixed(1);
    var muutos=result2.toString();
    output.innerHTML=muutos + "m";
  }
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "inches1"){
    var result = numero * 39370.0787;
    var muutos=result.toString();
    output.innerHTML=muutos + "in";
  }
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "centimeters1"){
    var result = numero * 100000;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "cm";
  }
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "yards1"){
    var result = numero * 1093.6133;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "yd";
  }
  if (madeSelection_1 == "kilometers1" && madeSelection_2 == "miles1"){
    var result = numero * 0.621371192;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "mi";
  }
  //miles
  if (madeSelection_1 == "miles1" && madeSelection_2 == "feet1") {
    var result = numero * 5280;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "ft";
  }
  if (madeSelection_1 == "miles1" && madeSelection_2 == "meters1"){
    var result = numero * 1609.344;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "m";
  }
  if (madeSelection_1 == "miles1" && madeSelection_2 == "inches1"){
    var result = numero * 63360;
    var muutos=result.toString();
    output.innerHTML=muutos + "in";
  }
  if (madeSelection_1 == "miles1" && madeSelection_2 == "centimeters1"){
    var result = numero * 160934.4;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "cm";
  }
  if (madeSelection_1 == "miles1" && madeSelection_2 == "yards1"){
    var result = numero * 1760;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "yd";
  }
  if (madeSelection_1 == "miles1" && madeSelection_2 == "kilometers1"){
    var result = numero * 1.609344;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos + "km";
  }








  if (this.value == null)  {
    output.innerHTML = " ";
  }
  }
}
