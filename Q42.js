/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified*/


let magicians = ["Noman", "Umar", "Ali"]


function makeGreat(){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the great";
    }
}

function showmagician(x,y,z){
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
showmagician(...magicians)
makeGreat()
showmagician(...magicians)