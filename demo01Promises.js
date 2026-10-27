/**
When we are writing code, we often need to deal with ASYNCHRONOUS OPERATIONS - things that don't happen immedintly
For Example:
- Querying a database
- Fetching a file form the internet
- waiting for a timer to finish

Because they take an unknown amount of time, js gives us a tool called a promise
A PROMISE is an object that represents the eventual completion (or failure) of an async operation
It has 3 states:
1. Pending - still waiting to finish
2. Resolve (Fulfilled) - finished successfully
3. Rejected - something went wrong
*/

function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("You walked the dog");
        }, 1500);
    });
};

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned) resolve("You cleaned the kitchen");
            else reject(new Error("You didn't clean the kitchen"));
        }, 2500);
    });
};

function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("You took out the trash"); // passes this value back
        }, 1500);
    });
};

// we can use .then() on apromise returned to us, to execute code twith the response
walkDog().then((value) => { // value is waht was returned when the promise resolved
    console.log(value);
    //le's talk about chaining!
    return cleanKitchen();
})
.then(
    (value) => {
    console.log(value);
    return takeOutTrash()
})
.then(
    (value) => {
    console.log(value);
    console.log("All chores are complete!");
})
.catch((error) =>{
    console.log("Something went wrong!")
    console.error(error.message)
});
