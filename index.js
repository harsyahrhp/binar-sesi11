// const cars = ["agya", "ayla", "calya", "sigra"];

// const panjang = cars.length;
// console.log(panjang);

// console.log(cars[1]);

// console.log(cars.slice(1,3))

// const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];

// const a = secondCars[3];
// console.log(a[1]);

// const secondCars = ["honda", "toyota", "suzuki"];

// secondCars[3] = "hyundai";
// console.log(secondCars);

// secondCars.push("hyundai");
// console.log(secondCars);
// input diakhir

// secondCars.pop();
// console.log(secondCars);
// ngapus di akhir

// secondCars.shift();
// console.log(secondCars);
// ngapus di awal

// secondCars.unshift("kia");
// console.log(secondCars);
// input di awal

// const secondCars = ["honda", "toyota", "suzuki"];
// const cars = ["bmw", "audi", "jaguar"];

// const newarr = secondCars.concat(cars);
// console.log(newarr);

// const secondCars = ["honda", "toyota", "suzuki"];

// const found = secondCars.includes("honda");
// const foundh = secondCars.indexOf("honda");

// console.log(foundh);
// nyari isi array

// const motor = ['legenda', 'supra', 'rxking', 'karisma'];
// for(let i = 0; i < motor.length; i++){
//     console.log(motor[i]);
//   }

//   for(let i = 0; i <= 3; i++){
//     console.log(motor[i]);
//   }
// cara ngeprint semua array

const data = [80,50,20,10,0];
// const newarr =[];

// for(i=0; i<=4 ; i++){
//     if(data[i]>40){
//         newarr.push(data[i]);
//     }
// }

// console.log(newarr)

// const cetak = data.map(
//     (item) =>{
//         return item
// })
// console.log(cetak);

// const print = data.filter((item) =>{
//     return item > 40;
// }
// );

const print = data.map((item) =>{
    return item > 40;
}
);
console.log(print);