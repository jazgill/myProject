function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let amount = parseInt(principal) + parseFloat(interest);
    let result = document.getElementById("result");

    let year = new Date().getFullYear() + parseInt(years);

    if(principal <= 0){
        alert("Please Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = `If you deposit <mark>$${principal}</mark>, <br>
                    at an interest rate of <mark>${rate}%</mark>.<br>
                    You will receive an amount of <mark>$${amount}</mark>,<br>
                    in the year <mark>${year}</mark><br>`
    }
}
function updateRate(){
    let rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;
}
        