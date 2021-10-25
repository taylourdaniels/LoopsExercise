for (i = 1; i <= 7; i++){
  console.log(i);
}

console.log("========");

for (i = 5; i <= 25; i+=4){
  console.log(i);
}

console.log("========");

const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley"
];

for (items of wizards){
  console.log(items);
}

console.log("========");

let harryPotterMovies = 0;

while (harryPotterMovies < 8){
  harryPotterMovies++;
}

console.log(harryPotterMovies);