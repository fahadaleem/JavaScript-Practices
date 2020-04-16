
let result_heading=document.querySelector(".result-heading");
const check=()=>{
    let marks=document.querySelectorAll(".input-fields");
    let isEmpty=false;
    let arr=[];
    for(var i=0;i<marks.length;i++)
    {
       if(marks[i].value==="")
       {
           alert("please enter all fields");
           isEmpty=true;
           break;
           
       }
    }
     

     let isCorrectValues=check_correct_values(marks);
     if(isEmpty===false && isCorrectValues===true)
     {
         calculate(marks);
     }
     
   
}

const calculate=(arr)=>{
     let sum=0;
    for(let i=0;i<arr.length;i++)
    {
         sum=sum+Number(arr[i].value);
    }

    let percentage=(sum/(arr.length*100)*100);  
    if (isNaN(percentage)===true)
    {
        alert("please enter correct values");
    }
    else
    {
        alert(sum);
        result_heading.innerHTML=`Your Percentage is ${percentage.toFixed(2)}% and Grade is ${grade(percentage)}`;
    }
}

const grade=(percentage)=>{
    if(percentage>=80 && percentage<=99)
    return 'A+';
    else if(percentage>=70 && percentage<80)
    return 'A';
    else if(percentage>=60 && percentage<70)
    return 'B';
    else if(percentage>=50 && percentage<60)
    return 'C';
    else if(percentage>=40 && percentage<50)
    return 'D';
    else return 'F';
}


const check_correct_values=(marks)=>{
    let check=false;
    for(let i=0;i<marks.length;i++)
    {
        if(marks[i].value>100 || marks[i].value<0)
        check=true;
    }
    if(check==true)
    {
        alert("Marks should not be less than 0 or greater than 100");
        return false;
    }
    else if(check!=true)
        return true;
}