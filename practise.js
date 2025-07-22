let repeat="yes";

while (repeat.toLowerCase() === "yes"){
    let a=Number(prompt("Write any number between 1-99"));
    let b=Number(prompt("Write a second number between 1-99"));
    let operator=prompt("Select which operation you wanna perform between the given for your selected number(+,-,*,/)");
    let Output=0;
    if(operator === "+"){
        Output=a+b;
    }
    else if(operator === "-"){
        Output=a-b;
    }
    else if(operator === "*"){
        Output=a*b;
    }
    else if(operator === "/"){
        if(b===0){
            console.log("your second number cannot be 0")
        };
        Output=a/b;
    }
    else{
        Output="invalid operator";
    }
    console.log(`${a} ${operator} ${b} = ${Output}`);

    repeat = prompt("Wanna calculate again? (yes/no)");
}
console.log("Thanks for using calculator!");