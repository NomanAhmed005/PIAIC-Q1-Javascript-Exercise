/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/

function makeCar(manufacture,model, ...carInfo){
    carInfo.manufacture = manufacture;
    carInfo.model = model;
    carInfo.color = color;
    carInfo.sunroof = sunroof;

    // carInfo.otherInfo ={ 
    //     color :,
    //     sunnroof : true
    //}
    // carInfo.color ;
    // carInfo.sunroof;
    // this.color ;
    // this.sunroof = true;
    return carInfo
}

myCar = new makeCar("Suzuki", 2014, color = 'Blue', sunroof= true)
console.log(typeof myCar);
console.log(myCar);