let one=document.querySelector("#one");
let two = document.querySelector("#two");
//   let subme=document.querySelector(".subme");
let input=document.querySelector('input');
   
   
one.onclick=()=>{
  input.value=1;
  console.log(input.value);
} ;
two.onclick=()=>{
  input.value+=2;
}