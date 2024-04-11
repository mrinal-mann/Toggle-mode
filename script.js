var toggled=false;
var header = document.getElementsByTagName("h1")[0];
var body = document.getElementsByTagName("body")[0];
var circle=document.getElementById('circle');


document.getElementById('toggle').onclick=function(){
    if(!toggled){
        header.classList.add('color-white');
        body.classList.add('background-black');
        circle.style.marginLeft='100px';
        toggled=true;
    }else{
        header.classList.remove('color-white');
        body.classList.remove('background-black');
        circle.style.marginLeft='1px';
        toggled=false;
    }
}