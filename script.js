let yer = prompt("What is year?");
function calleapYear (year) {

if(yer % 400 ==0 || (yer % 100 != 0 && yer % 4 == 0))
{alert("This is not leap!");}
else{alert("This is a leap!");}


}

