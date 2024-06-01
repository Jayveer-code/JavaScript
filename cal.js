function cal(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;


    let result;
    if(operator === '+')
    {
        result = parseInt(num1)+parseInt(num2);
    }
    else if(operator === '-')
    {
        result = parseInt(num1)-parseInt(num2);
    }
    if(operator === '*')
    {
        result = parseInt(num1)*parseInt(num2);
    }
    if(operator === '/')
    {
        result = parseInt(num1)/parseInt(num2);
    }
alert(operator + "  is :  "+result);
}