
document.getElementById('sum').addEventListener("click", function() {
    let first= parseInt(document.getElementById("ftext").value);
    let second= parseInt(document.getElementById("stext").value); 
    if(isNaN(first)|| isNaN(second)){
        alert("PROVIDE TWO NUMBERS!");
    }  
    else{
    let result=first+second;
    document.getElementById("result").innerHTML = "Result of " + first + " + "+ second+" = "+result;
    }
 });
