/* function fact(n){
    if(n==1||n==0){
        return 1;
    }
    else{
        return n* fact(n-1);
    }
}
console.log(fact(5));
let num=6;
let fac=1;
for(let i=num;i>0;i--){
    fac *= i;
}
 console.log(fac); */
 // factorial function
function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// handle form submit
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    let num = parseInt(document.getElementById("numberInput").value);
    let output = document.getElementById("result");

    if (isNaN(num)) {
        output.innerText = "Please enter a valid number";
        return;
    }

    output.innerText = "Factorial: " + factorial(num);
});
