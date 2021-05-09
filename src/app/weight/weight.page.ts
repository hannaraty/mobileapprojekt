import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage implements OnInit {

  value='';
  convertedOutput='';
  eka:string;
  toka:string;


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
  

  //kilograms
  if (madeSelection_1 == "kilograms1" && madeSelection_2 == "pounds1") {
    var result = numero * 2.2046;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"lb";
  }
  if (madeSelection_1 == "kilograms1" && madeSelection_2 == "ounces1"){
    var result = numero * 35.27396195;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"oz";
  }
  if (madeSelection_1 == "kilograms1" && madeSelection_2 == "grams1"){
    var result = numero * 1000;
    var muutos=result.toString();
    output.innerHTML=muutos+"g";
  }
  if (madeSelection_1 == "kilograms1" && madeSelection_2 == "stones1"){
    var result = numero * 0.157473044;
    var result2=result.toFixed(2);
    var muutos=result2.toString();
    output.innerHTML=muutos+"st";
  }

    //pounds
    if (madeSelection_1 == "pounds1" && madeSelection_2 == "kilograms1") {
      var result = numero * 0.45359237;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"kg";
    }
    if (madeSelection_1 == "pounds1" && madeSelection_2 == "ounces1") {
      var result = numero * 16;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"oz";
    }
    if (madeSelection_1 == "pounds1" && madeSelection_2 == "grams1") {
      var result = numero * 453.59237;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"g";
    }
    if (madeSelection_1 == "pounds1" && madeSelection_2 == "stones1") {
      var result = numero * 0.0714285714;
      var result2 = result.toFixed(2)
      var muutos = result2.toString();
      output.innerHTML = muutos+"st";
    }

//ounces
if (madeSelection_1 == "ounces1" && madeSelection_2 == "kilograms1") {
  var result = numero * 0.0283495231;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"kg";
}
if (madeSelection_1 == "ounces1" && madeSelection_2 == "pounds1"){
  var result = numero * 0.0625;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"lb";
}
if (madeSelection_1 == "ounces1" && madeSelection_2 == "grams1"){
  var result = numero * 28.3495231;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"g";
}
if (madeSelection_1 == "ounces1" && madeSelection_2 == "stones1"){
  var result = numero * 0.00446428571;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"st";
}

//grams
if (madeSelection_1 == "grams1" && madeSelection_2 == "kilograms1") {
  var result = numero * 1000;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"kg";
}
if (madeSelection_1 == "grams1" && madeSelection_2 == "ounces1"){
  var result = numero * 0.0352739619;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"oz";
}
if (madeSelection_1 == "grams1" && madeSelection_2 == "pounds1"){
  var result = numero * 0.00220462262;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"lb";
}
if (madeSelection_1 == "grams1" && madeSelection_2 == "stones1"){
  var result = numero * 0.000157473044;
  var result2=result.toFixed(4);
  var muutos=result2.toString();
  output.innerHTML=muutos+"st";
}

//stones
if (madeSelection_1 == "stones1" && madeSelection_2 == "kilograms1") {
  var result = numero * 6.35;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"kg";
}
if (madeSelection_1 == "stones1" && madeSelection_2 == "pounds1"){
  var result = numero * 14;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"lb";
}
if (madeSelection_1 == "stones1" && madeSelection_2 == "ounces1"){
  var result = numero * 224;

  var muutos=result.toString();
  output.innerHTML=muutos+"oz";
}
if (madeSelection_1 == "stones1" && madeSelection_2 == "grams1"){
  var result = numero * 6350;
  var result2=result.toFixed(2);
  var muutos=result2.toString();
  output.innerHTML=muutos+"g";
}
if (this.value == null)  {
  output.innerHTML = " ";
}
}


}
