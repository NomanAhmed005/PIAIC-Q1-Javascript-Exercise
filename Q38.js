/*Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.*/

function describeCity(city, country = 'Pakistan'){
    console.log(`${city} city is in ${country}`)
}

//calling with default country
describeCity("karachi")

//calling with different country name
describeCity("Frankfurt", "Germany")

describeCity("Delhi", "India")