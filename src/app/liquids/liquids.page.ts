import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-liquids',
  templateUrl: './liquids.page.html',
  styleUrls: ['./liquids.page.scss'],
})
export class LiquidsPage implements OnInit {
 
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
 
 
    //liters
    if (madeSelection_1 == "liters1" && madeSelection_2 == "deci1") {
      var result = numero * 10;
      var muutos=result.toString();
      output.innerHTML=muutos+"DL";
    }
    if (madeSelection_1 == "liters1" && madeSelection_2 == "cups1"){
      var result = numero * 4.227;
      var result2=result.toFixed(1);
      var muutos=result2.toString();
      output.innerHTML=muutos+"cup";
    }
    if (madeSelection_1 == "liters1" && madeSelection_2 == "pints1"){
      var result = numero * 2.113;
      var result2=result.toFixed(1);
      var muutos=result.toString();
      output.innerHTML=muutos+"pt";
    }
    if (madeSelection_1 == "liters1" && madeSelection_2 == "quarts1"){
      var result = numero * 1.057;
      var result2=result.toFixed(3);
      var muutos=result2.toString();
      output.innerHTML=muutos+"qt";
    }
    if (madeSelection_1 == "liters1" && madeSelection_2 == "gallons1"){
      var result = numero * 0.264172;
      var result2=result.toFixed(2);
      var muutos=result2.toString();
      output.innerHTML=muutos+"gal";
    }
 
    //deciliters
    if (madeSelection_1 == "deci1" && madeSelection_2 == "liters1") {
        var result = numero * 0.1;
        var result2 = result.toFixed(1);
        var muutos = result2.toString();
        output.innerHTML = muutos+"L";
      }
      if (madeSelection_1 == "deci1" && madeSelection_2 == "cups1") {
        var result = numero / 2.366;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos+"cup";
      }
      if (madeSelection_1 == "deci1" && madeSelection_2 == "pints1") {
        var result = numero / 4.732;
        var result2= result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos+"pt";
      }
      if (madeSelection_1 == "deci1" && madeSelection_2 == "quarts1") {
        var result = numero / 9.464;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos+"qt";
      }
      if (madeSelection_1 == "deci1" && madeSelection_2 == "gallons1") {
        var result = numero / 37.854;
        var result2 = result.toFixed(2);
        var muutos = result2.toString();
        output.innerHTML = muutos+"gal";
      }
 
  //cups
  if (madeSelection_1 == "cups1" && madeSelection_2 == "liters1") {
    var result = numero / 4.227;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"L";
  }
  if (madeSelection_1 == "cups1" && madeSelection_2 == "deci1"){
    var result = numero * 2.366;
    var result2=result.toFixed(1);
    var muutos=result2.toString();
    output.innerHTML=muutos+"DL";
  }
  if (madeSelection_1 == "cups1" && madeSelection_2 == "pints1"){
    var result = numero * 0.5;
    var result2=result.toFixed(1);
    var muutos=result2.toString();
    output.innerHTML=muutos+"pt";
  }
  if (madeSelection_1 == "cups1" && madeSelection_2 == "quarts1"){
    var result = numero * 0.25;
    var result2=result.toFixed(1);
    var muutos=result2.toString();
    output.innerHTML=muutos+"qt";
  }
  if (madeSelection_1 == "cups1" && madeSelection_2 == "gallons1"){
    var result = numero / 16;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"gal";
  }
 
  //pints
  if (madeSelection_1 == "pints1" && madeSelection_2 == "liters1") {
    var result = numero / 2.113;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"L";
  }
  if (madeSelection_1 == "pints1" && madeSelection_2 == "deci1"){
    var result = numero * 4.732;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"DL";
  }
  if (madeSelection_1 == "pints1" && madeSelection_2 == "cups1"){
    var result = numero * 2;
    var result2=result.toFixed(1);
    var muutos=result.toString();
    output.innerHTML=muutos+"cup";
  }
  if (madeSelection_1 == "pints1" && madeSelection_2 == "quarts1"){
    var result = numero / 2;
    var result2=result.toFixed(1);
    var muutos=result2.toString();
    output.innerHTML=muutos+"qt";
  }
  if (madeSelection_1 == "pints1" && madeSelection_2 == "gallons1"){
    var result = numero / 8;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"gal";
  }
 
  //quarts
  if (madeSelection_1 == "quarts1" && madeSelection_2 == "liters1") {
    var result = numero / 1.057;
    var result2 = result.toFixed(2);
    var muutos = result2.toString();
    output.innerHTML = muutos+"L";
  }
  if (madeSelection_1 == "quarts1" && madeSelection_2 == "deci1") {
    var result = numero * 9.464;
    var result2 = result.toFixed(1);
    var muutos = result2.toString();
    output.innerHTML = muutos+"DL";
  }
  if (madeSelection_1 == "quarts1" && madeSelection_2 == "cups1") {
    var result = numero * 9.464;
    var muutos = result.toString();
    output.innerHTML = muutos+"cup";
  }
  if (madeSelection_1 == "quarts1" && madeSelection_2 == "pints1") {
    var result = numero * 2;
    var muutos = result.toString();
    output.innerHTML = muutos+"pt";
  }
  if (madeSelection_1 == "quarts1" && madeSelection_2 == "gallons1") {
    var result = numero / 4;
    var result2 = result.toFixed(1);
    var muutos = result2.toString();
    output.innerHTML = muutos+"gal";
  }
 
  //gallons
  if (madeSelection_1 == "gallons1" && madeSelection_2 == "liters1") {
    var result = numero * 3.785;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"L";
  }
  if (madeSelection_1 == "gallons1" && madeSelection_2 == "deci1"){
    var result = numero * 37.854;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"DL";
  }
  if (madeSelection_1 == "gallons1" && madeSelection_2 == "cups1"){
    var result = numero * 16;
    var muutos=result.toString();
    output.innerHTML=muutos+"cup";
  }
  if (madeSelection_1 == "gallons1" && madeSelection_2 == "pints1"){
    var result = numero * 8;
    var muutos=result.toString();
    output.innerHTML=muutos+"pt";
  }
  if (madeSelection_1 == "gallons1" && madeSelection_2 == "quarts1"){
    var result = numero * 4;
    var muutos=result.toString();
    output.innerHTML=muutos+"qt";
  }
 
  if (this.value == null)  {
    output.innerHTML = " ";
  }
  }
}