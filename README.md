# Calculate the net salary of a worker

This package contains a function to calculate the net salary of a worker

## Description

Calculation of a worker's net salary, taking into account that said employee earns a salary x.
If the salary is equal to or less than USD 113, you will receive two bonuses: one of 5% and another of 15%, in addition to a 2% discount.
If it is greater than USD 113, a 10% bonus is granted and finally a 5% discount

## Solution

```Javascript

const  calculate_net_salary=(salary)=>
{
    let bond,final_salary,discount;
    if(salary<=113)
    {
        bond=(salary*.05)+(salary*.15);
        discount=salary*.02;
        final_salary=salary+bond-discount;
    }
    else{
        bond=salary*.10;
        discount=salary*.05;
        final_salary=salary+bond-discount;  
    }
    return {bond,discount,final_salary}
}

```

## Usage

```Javascript

var calculate_net_salary=require("./calculatenetsalary").calculate_net_salary;

let calc=calculate_net_salary(500);
console.log("You get a bonus of: USD "+calc.bond);
console.log("The discount applied is: USD "+calc.discount);
console.log("Your final salary is: USD "+calc.final_salary);

```