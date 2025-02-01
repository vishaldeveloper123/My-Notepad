let textearea = document.getElementById("textbox");
let textbox = document.querySelector(".textbox");

function Addnote(){
    if(textearea.value==""){
        alert("write the text");
    }else{
        let newTbox=document.createElement("ul");
        newTbox.innerHTML=`<P>𝓎𝑜𝓊𝓇 𝒾𝓃𝒻𝑜𝓇𝓂𝒶𝓉𝒾𝑜𝓃</P><i class="fa-solid fa-trash"></i><br>${textearea.value}`;
        textbox.appendChild(newTbox);
        textearea.value="";
           
       newTbox.querySelector("i").addEventListener("click",remove);
       function remove(){
        newTbox.remove();
       }

       
    
    }
   
}

 document.addEventListener("contextmenu",(Event)=>{
    Event.preventDefault();
 })