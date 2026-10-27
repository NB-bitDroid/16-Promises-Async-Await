/*
the async keyword can be used when declaring a function that may take some time to run
putting async in front of a function declaration automatically wraps it in a promise
*/

async function petTheCat(){
    // simulate a pause
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "You petted the cat 94 times. It is a very soft cat.";
};

async function doAFlip(){
    // simulate a pause
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "You did a filp. You did not land on your feet. The cat laughs";
};

async function ateAHairball(){
    // simulate a pause
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "The cat coughed up a hairball. Aiden ate it. Gross!";
};

async function dothings(){
    const result1 = await petTheCat();
    console.log(result1)
    const result2 = await doAFlip();
    console.log(result2)
    const result3 = await ateAHairball();
    console.log(result3)
}

dothings();