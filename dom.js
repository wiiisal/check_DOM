var buttonplus=Array.from(document.getElementsByClassName("add"))
var buttonminus=Array.from(document.getElementsByClassName("minus"))
console.log(buttonplus)
for(let i=0;i<buttonplus.length;i++){
  buttonplus[i].addEventListener("click",function(){
    buttonplus[i].nextElementSibling.innerHTML++
 somme()
  })
}

for(let i=0;i<buttonminus.length;i++){
  buttonminus[i].addEventListener("click",function(){
    if(buttonminus[i].previousElementSibling.innerHTML > 0){
    buttonminus[i].previousElementSibling.innerHTML--
    }
  somme()
  })
}
function somme() {
  let quantity =Array.from( document.getElementsByClassName("qte"));
  let prices =Array.from( document.getElementsByClassName("price"));
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += quantity[i].innerHTML * prices[i].innerHTML;
  }
  return (document.getElementById("totalp").innerHTML =
    "Shooping Bag Total : $" + sum);
}
let heart=Array.from(document.getElementsByClassName("fa-heart"))
for(let i=0; i<heart.length; i++){
heart[i].addEventListener("click",function(){
  if (heart[i].style.color=="grey"){
    heart[i].style.color="red"
  }
  else{
    heart[i].style.color="grey"
  }
})
}
let trash=Array.from(document.getElementsByClassName("fa-trash-alt"));
for( let i=0 ; i<trash.length; i++){
  trash[i].addEventListener("click",function(){
 
   trash[i].parentElement.remove() ;
    somme()
  })
}