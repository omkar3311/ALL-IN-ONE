globalThis.stack=[5];
stack[0]= document.getElementById('stack15');
stack[1]= document.getElementById('stack14');
stack[2]= document.getElementById('stack13');
stack[3]= document.getElementById('stack12');
stack[4]= document.getElementById('stack11');
let t=-1;
function push(){
    t=t+1;
    if(t==0){
        const element = document.getElementById('stack7').value;
        stack[0].innerHTML=`${element}`;
        document.getElementById('stack16').innerHTML=""+element+" is pushed";
        document.getElementById('stack7').innerHTML="";
    }else if(t==1){
        const element = document.getElementById('stack7').value;
        stack[1].innerHTML=`${element}`;
        document.getElementById('stack16').innerHTML=""+element+" is pushed";
    }else if(t==2){
        const element = document.getElementById('stack7').value;
        stack[2].innerHTML=`${element}`;
        document.getElementById('stack16').innerHTML=""+element+" is pushed";
    }else  if(t==3){
        const element = document.getElementById('stack7').value;
        stack[3].innerHTML=`${element}`;
        document.getElementById('stack16').innerHTML=""+element+" is pushed";
    }else  if(t==4){
        const element = document.getElementById('stack7').value;
        stack[4].innerHTML=`${element}`;
        document.getElementById('stack16').innerHTML=""+element+" is pushed";
    }else if(t==5){
        document.getElementById('stack16').innerHTML="stack is overflow!";
    } 
}
function pop (){
   if(t==0){
    document.getElementById('stack16').innerHTML="element is poped";
    stack[0].innerHTML="";
    t=t-1;
   }else if(t==1){
    document.getElementById('stack16').innerHTML="element is poped";
    stack[1].innerHTML="";
    t=t-1;
   }else if(t==2){
    document.getElementById('stack16').innerHTML="element is poped";
    stack[2].innerHTML="";
    t=t-1;
   }else if(t==3){
    document.getElementById('stack16').innerHTML="element is poped";
    stack[3].innerHTML="";
    t=t-1;
   }else if(t==4){
    document.getElementById('stack16').innerHTML="element is poped";
    stack[4].innerHTML="";
    t=t-1;
   }else if(t==-1){
    document.getElementById('stack16').innerHTML="stack is empty!";
    t=t-1;
   }else{
    t=t-1;
    pop();
   }
    
}
