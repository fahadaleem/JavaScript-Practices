let calculate_btn=document.querySelector(".calculate");
let calcule_heading=document.querySelector(".calcule-heading");
console.log(calculate_btn);

let dateOfBirth=document.querySelector("#calender");

function printDate()
{

    if(dateOfBirth.value!="")
    {

    let current_date=new Date();
    let data=dateOfBirth.value.split('-')
    let year=current_date.getFullYear() - Number(data[0]);
    let month=(current_date.getMonth()+1)-Number(data[1]);
    let date=current_date.getDate()-Number(data[2]);


    if (month<0)
    {
        year=year-1;
        month=12+month;
    }
    if(date<0)
    {
        month=month-1;
        date=31+date;
    }
    calcule_heading.innerHTML=`You are ${year} years, ${month} months and ${date} day Old!`;
}
    else
    {
        alert("Please Enter Your Birthday")
    }
}




dateOfBirth.addEventListener("click", function(){
    dateOfBirth.value="";
    calcule_heading.innerHTML="";
})

calculate_btn.addEventListener("click", printDate);