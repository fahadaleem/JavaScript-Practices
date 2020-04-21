let password=document.querySelector("#input-text");
let progressBar=document.querySelector(".progress>div");
let label=document.querySelector("#label");


//let password=prompt("Enter Password");


const passwordValidator=()=>{

    var char=/[a-zA-z]/g;
var num=/[0-9]/g
var specialChar=/[!@#$%^&*()_]/g;

var checkConditions=num.test(password.value) && char.test(password.value) && specialChar.test(password.value);

var lengthOfchar=0;
if(checkConditions===true)
{
    lengthOfchar=password.value.match(specialChar).length;
}

if(checkConditions===true && lengthOfchar>=2)
{
    label.setAttribute("id","done");
    progressBar.setAttribute("class","strong");
    progressBar.innerHTML="Strong";
}
else if(checkConditions===true && lengthOfchar<2)
{
    label.setAttribute("id","done");
    progressBar.setAttribute("class","good");
    progressBar.innerHTML="Good";
}
else if(password.value.length>=1)
{

    label.setAttribute("id","done");
    progressBar.setAttribute("class","weak");
    progressBar.innerHTML="Weak";
}
else
{
    progressBar.setAttribute("class","width");
    label.setAttribute("id","label");
    progressBar.innerHTML="";
}
}



password.addEventListener("input", passwordValidator);