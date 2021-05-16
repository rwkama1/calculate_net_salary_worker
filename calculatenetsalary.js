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

module.exports={calculate_net_salary};
