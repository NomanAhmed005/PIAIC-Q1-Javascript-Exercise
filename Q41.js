/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/


let magicians = ["Noman", "Umar", "Ali"]



function showmagician(x,y,z){
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}  


showmagician(...magicians)