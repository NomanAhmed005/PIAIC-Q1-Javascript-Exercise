/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function makeShirt(x = "Large", y = "I love javascript"){
    console.log(`size: ${x} and text: ${y}`)
}

//calling function with default parameters
makeShirt();

//calling function with passing one parameter
makeShirt("medium")

//calling for any other shirt size and text
makeShirt("small","this is a small Tshirt")