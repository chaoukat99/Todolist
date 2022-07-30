let inptodo= document.querySelector('#todoinp');
let btnsave= document.querySelector('.savebtn');
let maindiv = document.querySelector('.list');
let newselection = document.querySelectorAll(".list div button");
window.tasks=new Array();

btnsave.onclick=(e)=>{
    if(inptodo.value.length<=0){
        e.preventDefault();
        alert("fill the field please");
    
    }else{

   
    let localitems = JSON.parse(localStorage.getItem("localItem"));
    if(localitems===null){
        tasklist=[];
    }else{
        tasklist=localitems;

    }
    tasklist.push(inptodo.value)
        localStorage.setItem('localItem',JSON.stringify(tasklist))
   window.location.reload();     
} }

let data=JSON.parse(localStorage.getItem("localItem"));

function showlist(){
    let output="";
    let localitems = JSON.parse(localStorage.getItem("localItem"));
    if(localitems===null){
        tasklist=[];
    }else{
        tasklist=localitems;

    }
    tasklist.forEach((data,index)=>{
       output+=`<div class="divactive">
              <span>${data}</span>
              <button class="activebtn" onclick='deletee(${index})'>Delete</button>
       
             </div>`
    });
    maindiv.innerHTML=output;
    
}
showlist();
function deletee(index){
let localItem=JSON.parse(localStorage.getItem('localItem'));
tasklist.splice(index,1)
localStorage.setItem('localItem',JSON.stringify(tasklist))
showlist();
}


