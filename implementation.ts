import {Car} from './interface'

  export function carDetail(car: Car) {
    console.log(` The car details are : Model ${car.model} , 
     Engine ${car.engine} and the horespower is ${car.horsepower}`);
  };



