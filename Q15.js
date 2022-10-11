dinnerList = ["Noman", "Salman", "Umar"]

console.log("dinner guests: ",dinnerList);

console.log(`${dinnerList[1]} cannot make it to the dinner \n 'new guest' will join instead`)

dinnerList[1] = "new guest"

for(i = 0; i < dinnerList.length; i++){
    console.log(`Hello ${dinnerList[i]}, You are cordially invited to dinner at my place`)
}
