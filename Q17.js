let dinnerList = ["Noman", "Salman", "Umar"];

console.log("dinner guests: ",dinnerList);

console.log(`${dinnerList[1]} cannot make it to the dinner \n 'new guest' will join instead`)

dinnerList[1] = "new guest"

for(i = 0; i < dinnerList.length; i++){
    console.log(`Hello ${dinnerList[i]}, You are cordially invited to dinner at my place`)
}

console.log("Hi Folks, Just got a bigger dinning table")

dinnerList.splice(0,0, "Rio");
console.log(dinnerList)

dinnerList.splice(2,0, "Stark");
console.log(dinnerList)

dinnerList.push("Tony");
console.log(dinnerList)

//.............................................Q17 Starts Here..........................................................................//
console.log("you can invite only two people for dinner")



while (dinnerList.length > 2){
    console.log(`${dinnerList[dinnerList.length - 1]}, sorry i couldn't invite you this time`);
    dinnerList.pop();
}
console.log(dinnerList)

for (i = 0; i < dinnerList.length; i++){
    console.log(`${dinnerList[dinnerList.length - i-1]}, you are still invited`)
}

delete dinnerList[1];
delete dinnerList[0];
console.log(dinnerList)