let num = document.getElementById('num');

num = Number(num);
if(num<10){
    console.log(num);
    console.log("número antes do 10");
} else if (num<20){
    console.log(num);
    console.log("número antes de 20, depois de 10");
}else{
    console.log(num);
    console.log("número maior que 20");
};