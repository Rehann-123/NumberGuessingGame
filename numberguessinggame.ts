#! /usr/bin/env node
import inquirer from "inquirer";

const Computerguessednumber = Math.floor(Math.random()*5+1)
const userguessed = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type:"number",
        message:"Guess The Number Between 1 and 5"

}
]);
if(userguessed.UserGuessedNumber==Computerguessednumber){
    console.log("Congrats The Number You Guess Was Correct")
}else{
    console.log("You Have Guessed Wrong Number")
}

