/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. 
  If it has, print a message that the person will need to enter a new username. 
  If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

currentUsersRaw = ["JOHN", "SARA", "Tom", "Bob", "Rio"];
newUsersRaw = ["Ralph", "Catherine", "sara", "Bob"];
currentUsers = [];
newUsers = [];

// converting usernames to lower case
for (items in currentUsersRaw){
    let temp;
    temp = currentUsersRaw[items].toLowerCase()
    currentUsers.push(temp)
}

for (items in newUsersRaw){
    let temp;
    temp = newUsersRaw[items].toLowerCase()
    newUsers.push(temp)
}

// checking existing usernames
for (newUser in newUsers){
    if (currentUsers.includes(newUsers[newUser])){
        console.log(`Username: ${newUsers[newUser]} is already taken`);
    }else console.log(`Username: ${newUsers[newUser]} is available`);
}