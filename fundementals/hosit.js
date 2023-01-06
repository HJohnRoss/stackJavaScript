// 1
console.log(hello); // logs undifined           
var hello = 'world'; // sets hello = "world"

// 2
var needle = 'haystack'; // sets global needle = "haystack"
test(); // runs test function
function test(){
    var needle = 'magnet'; // sets local test() needle var = magnet
    console.log(needle); // logs magnet
}

// 3
var brendan = 'super cool'; // sets brendan = super cool
function print(){ // never runs
    brendan = 'only okay'; 
    console.log(brendan);
}
console.log(brendan); // logs super cool

// 4
var food = 'chicken'; // sets food = chicken
console.log(food); // logs chicken
eat(); // runs the eat function
function eat(){
    food = 'half-chicken'; // sets food = half-chicken
    console.log(food); // logs half-chicken
    var food = 'gone'; // sets local var = gon
}

// 5
mean(); // error cant set a var = to a function
console.log(food); // undifined
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); // undifined

// 6
console.log(genre); // undifined
var genre = "disco"; // sets genre = disco
rewind(); // calls rewind function
function rewind() {
    genre = "rock"; // sets local genre = rock
    console.log(genre); // logs rock
    var genre = "r&b"; // sets local genre = r&b
    console.log(genre); // logs r&b
}
console.log(genre); // logs disco

// 7
dojo = "san jose"; // error not doing let, var, const
console.log(dojo); // undifinded
learn(); // calls learn() function
function learn() {
    dojo = "seattle"; // no var created
    console.log(dojo); // undifinded
    var dojo = "burbank"; // creates local dojo and sets = burbank
    console.log(dojo); // logs burbank
}
console.log(dojo); // undifined

// 8
console.log(makeDojo("Chicago", 65)); // {name : "Chicago", students : 65, hiring : true}
console.log(makeDojo("Berkeley", 0)); // error
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}