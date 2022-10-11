// equality test with strings
let myName = "noman"

if (myName === "noman"){
    console.log("my name is Noman")
}else if (toLowerCase(myName) === "noman"){
    console.log("myName")
}

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators

let a = 99;
if (a === 110){
    console.log("Exact match")
}else if (a > 110 && a < 120){
    console.log("2nd check")
}else if (a < 110 && a > 100){
    console.log("third check")
}else if (a < 100 || a > 120) {
    console.log("number is greater than 120 or less than 100")
}

//Test whether an item is in a array

let arr = ["string1", "string2", 4];
let found = false;

for (item in arr){
    if (arr[item] === 4){
        found = true;
        console.log("found " )
        break;
    }
}

//Test whether an item is not in a array

let myArr = ["string1", "string2", 4];
let notFound = true;

for (item in myArr){
    if (myArr[item] != 5){
        notFound = false;
        console.log("not found" )
        break;
    }
}