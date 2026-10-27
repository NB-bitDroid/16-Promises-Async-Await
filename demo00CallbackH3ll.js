function walkDog(callback) {
  setTimeout(() => {
    console.log("You walked the dog");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You cleaned the kitchen");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You took out the trash");
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("You finished all the chores!");
    });
  });
});