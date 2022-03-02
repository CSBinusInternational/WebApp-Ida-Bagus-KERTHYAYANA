<script>
// map is used for creating a new arrat from an existing one, applying a function to each one of the elements of the first array.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//Filter is similar to map. it takes each element in an array and applies a conditional argument against it. if it return true, then the element get pushed out. its similar to filter in real life.
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// reduce is used to reduce an array of values down to just one value. in this example, reduce() is used to transform a array of string to a single object.
// it is used to count haw many times a string appear on the array. 
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts);

/*
Output:
 {
    dog: 2,
    chicken: 3,
    cat: 1,
    rabbit: 1
 }
 */
</script>
