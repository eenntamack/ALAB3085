/**
 * 
 * PART 1
 * 
*/

//A. calculating the sum of numbers in ana array
function sumOfArray(arr = []){
    let total = 0;    
    if(arr.length > 0){
        for(let i = 0; i< arr.length; i++){
            if (typeof arr[i] == "string"){
                throw new Error( "array must only have numbers")
            }else{
                total += arr[i]
            }
        }
        return total 
    }else{
        console.log("Error_____________________________")
        console.log("please input and array ");
        console.log("__________________________________")
    }
}




console.log(`The sum of the array [1,2,3,4] is:`);
console.log(sumOfArray([1,2,3,4]));
console.log();


/**uncomment below
 * _________________
console.log(`An error will be thrown if any of the elements in the array is not the numebr data type| below e.g. ["Hi","There"]`);
let ex1 = sumOfArray();
console.log(ex1);

console.log(`Also handles if there aren't any elements in the array,\n used console since i couldnt find a way to throw\n more than one error in a function| below`);
let ex2 = sumOfArray(["Hi","There"]);
console.log(ex2);
*/

//B. Calculate the average of the array
//Refactored sumOfArray function to return the sum divided by the length of the array
function averageArr(arr = []){
    let total = 0;    
    if(arr.length > 0){
        for(let i = 0; i< arr.length; i++){
            if (typeof arr[i] == "string"){
                throw new Error( "array must only have numbers")
            }else{
                total += arr[i]
            }
        }
        return total/arr.length 
    }else{
        console.log("Error_____________________________")
        console.log("please input and array ");
     
    }
}

console.log("Average of the array [3,6,9] is: ")
console.log(averageArr([3,6,9]));
console.log();

//C. find the longest substring of the array

function longestString(arr = []){
    let longestString = '';
    if(arr.length > 0){
        for(let i = 0; i< arr.length; i++){
            if (typeof arr[i] == "number"){
                throw new Error("array must contain only string");
            }else{
                //reinitilaize the longestString variable whenever its current string is less than the string in the array , otherwise
                //continue
                if (longestString.length < arr[i].length){
                    longestString = arr[i];
                }else{
                    continue;
                }
            }
        }
        return longestString;
    }else{
        console.log("Error_____________________________")
        console.log("please input and array ");
    }
}

//The function return the first instant of the longest string, given there are more than one string that is the longest
//If an array input was ["Hi","Bye","I","yellow"] the output would give the longest string "yellow"
console.log("The longest string in the array [\"Hi\",\"Bye\",\"I\",\"Yellow\"] is :")
console.log(longestString(["Hi","Bye","I","Yellow"]));
console.log();

/** D.Find the string thats bigger than n
*
* adds string from array to an empty array if its length is bigger than n and returns it */
function stringBiggerThanN(arr,n){
    let answers = [];
    for (let i = 0; i< arr.length; i++){
        if(arr[i].length > n){
            answers.push(arr[i]);
        }
    }
    return answers
}
console.log("given the array [\"Lorem\",\"Ipsum\",\"Javascript\",\"HTML\"] the strings bigger than the length of 5 is :")
console.log(stringBiggerThanN(["Loreem","Ipsum","Javascript","HTML"], 5))
console.log();


//E. Rcursion is like function inception, using a function within itself until its final outcome
//I was confused if between 1 and n is to include 1 and n or not but chose to include both
function everyNumber(n){
    if(n == 1){
        console.log(1)
        return
    }else{
        console.log(n)
        n -= 1
        everyNumber(n) //recursion occurs 
    }
}

console.log("Using the function everyNumber(n) given the arg value of 7 the output will show: ")
everyNumber(7);


/**
 * 
 * PART 2
 * 
 * 
 *  when comparing numbers implicitly , ive noticed that after organizing the ages,
 *  Bilbo whos age is 111 would always  be placed at the beginning,
 * after debugging with other numbers like 122, they would be plced below the other numbers 
 * starting from least to greatest, my theory is that javascript reads the numbers like 111 as binary 
 * which would return 7 which would follow the order, im assuming its the same for reading octal
 * so instead of reading them as strings I decided to convert 
 */
console.log();
console.log("response to comment (above this line) above: comparing 111 (as binary implicitly) and 99 as strings");
console.log(`\"111\" > than \"99\" would return ${"111" > "99"} because 111 is read as binary`);
console.log();



let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//A.Sort the data by age
//
//used recursion to sort the array every time values are switched 
//upon the condition that the current index is smaller than the next index

//Update after solving: completely forgot about the sort function
//One way of sorting what I had initially worked with
function sorter(arr){
    let needsSorting = false;
    let temp = {}
    let temp2 = {}
    for(let i = 0; i < arr.length ; i++){
        if (i == arr.length - 1 ){
            break;
        }
        if(parseInt(arr[i].age) > parseInt(arr[i + 1].age)){
            temp = arr[i];
            temp2 = arr[i + 1];
            arr[i] = temp2;
            arr[i + 1] = temp;
            sorter(arr)
        }else{
            continue
        }
    }
   return arr
}


//simple sorter solution, had completely forgot about the sort function
function simpleSorter(arr){
    let newArr = arr.sort(function (a,b) {return a.age - b.age})
    return newArr;
}

console.log("The data is sorted below with the sorter method original");
console.log(simpleSorter(data));
console.log();
console.log("The data is sorted below with the sorter method simple");
console.log(sorter(data));
console.log();

//B. filter data where  age is more than 50

function ageLessThan50(sortMethod){
    let filtered = sortMethod.sort(function(a,b){return a.age - b.age})
    return filtered.filter((filtered) => filtered.age < 50);
}

console.log(ageLessThan50(simpleSorter(data)))

//C. Had to change the type of the string for the age to an int to add the age by 1
//stored every value from the data into a new object that will be pushed into a new array

function newMapper(arr){
    let newArr = []
    let temp ={}
    for (let i = 0; i < arr.length; i++){
        temp = {
        id : arr[i].id,
        name : arr[i].name,
        job : arr[i].occupation,
        age :`${parseInt(arr[i].age) + 1}`
        }
        newArr.push(temp);
    }
    return newArr;
}
console.log("\"occupation\" replaced with \"job\" below")
console.log(newMapper(data))
console.log()

//D. Calculate the sum and average of all ages in the data
// 
//  Had to convert to an integer to do calculation

function sumOfAges(arr){
    let ages = [];
    for(let i =0; i < arr.length; i++){
        ages.push(parseInt(arr[i].age));
    }
    function adder(totalAges, Eachnum){
        return totalAges + Eachnum;
    }
    return ages.reduce(adder,0);
}

console.log("total age for all")
console.log(sumOfAges(data))
console.log()
console.log("the average age")
console.log(sumOfAges(data)/data.length)
console.log()


/**
 * 
 * PART 3
 * 
 * Incrementing by reference and copy with the spread operator below
 * 
 */



//Given an object without its key of age, used falsy to check if it exists
function incrementByReference(arr){
    let update_at = Date();
    for(let i = 0; i< arr.length; i++){
        if(!arr[i].age){
            arr[i].age = '20';
            arr[i].update_at = update_at;
        }else{
            num = `${parseInt(arr[i].age) + 1}`;
            arr[i].age = num
            arr[i].update_at = update_at;
        }
        
    }
    return arr;
}


function incrementByCopy(arr){
    let copy = [...arr];
    let num = 0;
    let update_at = Date();
    for(let i = 0; i< copy.length; i++){
        if(!copy[i].age){
            copy[i].age = '20';
            copy[i].update_at = update_at;
        }else{
            num = `${parseInt(copy[i].age) + 1}`;
            copy[i].age = num
            copy[i].update_at = update_at
        }
    }
    return copy;
}





console.log("incrementing by reference");
console.log(incrementByReference(data));
console.log()
console.log("After calling incrementing by reference\n the data reserves its change and the copy method copies that change")
console.log("incrementing by copy");
console.log(incrementByCopy(data));


console.log("even after calling the raw data variable again the change was reserved");
console.log(data);
console.log()

console.log(`Even with an object with only its id of 44 : {id: 44} \n it will stil return with a new default age of 20 `);
console.log(incrementByReference([{id:"44"}]))

