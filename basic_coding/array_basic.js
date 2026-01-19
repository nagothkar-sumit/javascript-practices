

let colors = ['red', 'green', 'blue'];

// Accessing elements
console.log(colors[0]); // Output: red
console.log(colors[1]); // Output: green
console.log(colors[2]); // Output: blue

// Modifying elements
colors[2] = 'yellow';
console.log(colors); // Output: ['red', 'green', 'yellow']

//to access all elements

//traditional for loop
for (let i =0; i<colors.length; i++){
    console.log(colors[i]);
}

//for..of loop
for (let col of colors){
    console.log(col);
}

//forEach method
colors.forEach((e) => {
    console.log(e);
});