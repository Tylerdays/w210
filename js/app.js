// imports

//classes if implicable
//constants
//functions

//category 2
function printString(message){
    console.log(message); // function scope
}
printString("hello World");
let message = "Hello, Again" //script scope
printString(message); //different scope

//booleans should be named is==
function getMood(isHappy){
    if(isHappy){
        console.log("happy");
    } else{
        console.log("sad");
    }
    
}

function max(num1, num2){
    if (num1 > num2){
    return num1;
    }
    else if (num2 > num1){
        return num2;
    }else {
        return null;
    }
    }

    function findMax(arr){
        //look at first box
        //Write down the number as the current largest
        let maximum = arr[0];
        for (let i=1; i<arr.lengthl;i++){// because we started with 0 we can start with 1 here as a small optimization if you want, depends on your logic!
        // go to next box
        // look at the content of the next box
        // compair value of what I've written down
        // If the new number is larger than the one written down, overwrite the larger number
        if (arr[i] > maximum){// you need to compair the index to the current max that's why [i]
            maximum = arr[i]; //iff the number I compared to is greated it becomes the new maximum   
        } // if else is inactive you don't need to write it down, If can exist on its own, Else cannot exist without if.
        //otherwise move on
        // go to line 39 (next box step)
        // after finishing looking at all boxes
        // return the larget number currently written down
        }

        return maximum;

    }

    
function findHappiness(arr){
    //iterate through the array
    let curStr;
        while (arr.length > 0){

        curStr = arr.pop();
            if (curStr.includes("happy")){
                return curStr;
            }
        }

        // rule for loops is to get closer to the end of the loop
    // if it does return the string
    //otherwise pop the string
    
    
    //if is not happy, return null (Loop finishes return nul)
}
//should print happy or sad
getMood(true);
getMood(false);

//console logs and return are two different things.




//executed script

let result = max(2,5);
//two ways to print return type functions
console.log(`the larger number was ${result}`);
console.log(`the larger number was ${max(2,5)}`);
result = man(10, 4);

//testing is important in a variety of different ways

let myArr = [1,2,3,4,5]
console.log(findMax(myArr));
myArr = [0,0,0,0,0]
console.log(findMax([5,20,30,65,54,20,1])); //without an actual varriable it's called a anon varriable (wont be remembered)

