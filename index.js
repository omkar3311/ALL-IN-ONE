function showsection(id){
  const sections=document.querySelectorAll('.section');
  sections.forEach(section =>section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  }

function newsection(name){
          const sections=document.querySelectorAll('.otherr');
          sections.forEach(section =>section.classList.remove('active'));
          document.getElementById(name).classList.add('active');
          }

function shows(come){
  document.getElementById('data').classList.add('hidden');
  // slidebar.classList.toggle('compressed');
  document.getElementById('logo').classList.add('blur');
}

function login(){
  const nameInput = document.getElementById('data1').value;
  const msg = document.getElementById('msg');
  const welcomeText = document.getElementById('name1');
  if (nameInput.trim() === "") {
              msg.textContent = "Please enter your name.";
              msg.style.color = "red";
             } else {
              document.getElementById('data').classList.remove('hidden');
              document.getElementById('login').classList.add('act');
              document.getElementById('name1').textContent = `${nameInput}`;
              // slidebar.classList.toggle('compressed');
}
}    

function under(){
  let button=document.getElementById('open');
  button.addEventListener('click', ()=>{
    slidebar.classList.toggle('compressed');

  });
}

function bubblesort(){
    let array=[5];
    array[0]=document.getElementById('input1').value;
    array[1]=document.getElementById('input2').value;
    array[2]=document.getElementById('input3').value;
    array[3]=document.getElementById('input4').value;
    array[4]=document.getElementById('input5').value;
     for(let i=0 ;i<5;i++){
    array[i]=Number.parseInt(array[i]);
     }
    for(let i=0;i<5;i++){
        for(let j=0;j<5-i;j++){
            if(array[j]>array[j+1]){
                let t=array[j];
                array[j]=array[j+1];
                array[j+1]=t;
            }
        }
    }
    document.getElementById('output1').innerText=`${array[0]}`;
    document.getElementById('output2').innerText=`${array[1]}`;
    document.getElementById('output3').innerText=`${array[2]}`;
    document.getElementById('output4').innerText=`${array[3]}`;
    document.getElementById('output5').innerText=`${array[4]}`;
    document.getElementById('bubble').innerText="Array has been sorted!";
}
let string="";
let buttons= document.querySelectorAll('.cal5');
Array.from(buttons).forEach((cal5) =>{
    cal5.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML == '='){
           string= eval(string);
            document.getElementById('cal3').innerHTML=string;
        }else if(e.target.innerHTML == 'AC') {
            string="";
            document.getElementById('cal3').innerHTML="";
        }else{
            string=string +e.target.innerHTML;
            document.getElementById('cal3').innerHTML=string;
        }
    })
})

function fact(){
  let number=document.getElementById('fact6').value;
  number=Number.parseInt(number);
  let  fact=1;
  while(number>=1){
      fact=fact*number;
      number=number-1;
  }
  document.getElementById('fact9').innerHTML=`factorial = ${fact}`;
}

function ls(){
  array=[5];
  array[0]=document.getElementById('li1').value;
  array[1]=document.getElementById('li2').value;
  array[2]=document.getElementById('li3').value;
  array[3]=document.getElementById('li4').value;
  array[4]=document.getElementById('li5').value;
  let min=array[0];
  let max=array[0];
  for(let i=0;i<5;i++){
      if(array[i]>array[i+1]){
          min=array[i+1];
      }
      if(array[i]<array[i+1]){
          max=array[i+1];
      }
  }
  document.getElementById('ls5').innerHTML=`large element=${max}`;
  document.getElementById('ls7').innerHTML=`small element=${min}`;
}

//function fseries(){
//  let a=0;
//  let b=1;
//}
//
//function count(){
//  let string=document.getElementById('c2').string;
//  
//}
