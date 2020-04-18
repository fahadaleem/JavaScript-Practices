let input=document.querySelector("#input");
let btn=document.querySelector("#btn");
let ul=document.querySelector("ul");
let create_task_count=document.querySelector("#create-task-count");
let completed_task_count=document.querySelector("#completed-task-count");
let task_day=document.querySelector("#day");
let date=document.querySelector("#date");


let list_items=document.querySelectorAll("li");
var count=0;
let task_added=0;
const createbtn=()=>{
    let delbutton=document.createElement("i");
    //delbutton.setAttribute("type","button");
    delbutton.setAttribute("id","delete"+count);
    delbutton.setAttribute("value","Delete");
    delbutton.setAttribute("class","fa fa-trash icons");
    delbutton.setAttribute("onclick","deleteItem(this.id)");
    return delbutton;
}
const createCheckBox=() =>{
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","radio");
    checkbox.setAttribute("id","delete"+count);
    checkbox.setAttribute("class","radio");
    checkbox.setAttribute("onclick", "itemDone(this.id)");
    return checkbox;
}


for(let i=0;i<list_items.length;i++)
{
    let check=createCheckBox();
    let btn=createbtn();
    var text=list_items[i].innerHTML;
    list_items[i].innerHTML="";
    list_items[i].appendChild(check);
    list_items[i].innerHTML+=text;
    list_items[i].appendChild(btn);
    

}




const addItem=()=>{
    if(input.value.length>0)
    {
    let element=document.createElement("li");
    let text=document.createTextNode(input.value);
    let btn=createbtn();
    let check=createCheckBox();
    element.appendChild(check);
     element.appendChild(text);
     element.appendChild(btn);
     ul.appendChild(element);
    console.log(btn);
    count++;
    task_added++;
    create_task_count.innerHTML=task_added;
    input.value="";
    }
 }




 btn.addEventListener("click", addItem);


//  let variable=createbtn();
//  console.log(variable);


 const deleteItem=(id)=>{
    let delete_list_item=document.querySelector("#"+id);
    delete_list_item.parentElement.remove(); 
    task_added--;
    create_task_count.innerHTML=task_added;
    if(completed_task!=0)
    {
    completed_task--;
    completed_task_count.innerHTML=completed_task;
    }
   console.log(id);
 }

 let completed_task=0;

 const itemDone=(id)=>{
    let delete_list_item=document.querySelector("#"+id);
  var check= delete_list_item.parentElement.classList.toggle("done");
  if(check===false)
    {delete_list_item.checked=false;
    completed_task--;
    }
    else
    {
   completed_task++;
    }
   completed_task_count.innerHTML=completed_task;
 }





 const Day_today= (day)=>{
    day=day+1;
    switch(day)
    {
        case 1:
            day="Sunday";
        break;
        case 2:
            day="Monday";
            break;
        case 3:
            day="Tuesday";
            break;
        case 4:
            day="Wednesday";
            break;
        case 5:
            day="Thursday";
            break;
        case 6:
            day="Friday";
            break;
        case 7:
            day="Saturday";
            break;
    }
    return day;
 }

const month=(month)=>{
    month=month+1;
    switch(month)
    {
        case 1:
            month="january";
        break;
        case 2:
            month="Febuary";
            break;
        case 3:
           month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May";
            break;
        case 6:
            month="June";
            break;
        case 7:
            month="July";
            break;
        case 8:
                month="August";
                break;
        case 9:
            month="September";
            break;
       case 10:
            month="october";
             break;
        case 11:
            month="November";
            break;
         case 12:
             month="December";
             break;
        
    }
    return month;
}


 let dayAndDate=new Date();
 let day = dayAndDate.getDay();
 day=Day_today(day);
 task_day.innerHTML=day;

let date_and_month=dayAndDate.getMonth();
date_and_month=dayAndDate.getDate()+" "+month(date_and_month);
date.innerHTML=date_and_month;
