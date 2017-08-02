import { Car } from './interface'
import { carDetail } from './implementation'

  let myCar: Car = { model: "Wagon R", engine: "K10B", horsepower: 1000 }
  carDetail(myCar);