  
let input=document.querySelector("input");
let clearbut=document.querySelector("#clear");
let backspace=document.querySelector("#backspace");
let equal=document.querySelector("#equal")

function myfunction(clickednumber){
  input.value+=clickednumber;
  
};

clearbut.onclick=()=>{
  input.value="";
};


backspace.onclick=()=>{
  input.value=input.value.substring(0,input.value.length-1);
};


equal.onclick=()=>{
  let values=input.value;
  let result= eval(values);
  console.log(result);
  input.value=result;
};