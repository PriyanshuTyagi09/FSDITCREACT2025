//DOM

// const div = document.getElementsByTagName('div');
// div[0].innerText = "hello world";
// div[0].style.color ='red';
// div[0].style.backgroundColor = 'cyan';
// console.log(div);

const container = document.getElementsByClassName('container');

// container[0].innerHTML = '<h2 style=color:red > hello user </h2>';
// console.dir(container);

const h2 = document.createElement('h2'); //creating dynamic elements through DOM
h2.innerText = "ABES Engineering College";
h2.style.color = "white";
h2.style.backgroundColor = "brown";
console.log(h2);
container[0].appendChild(h2);



const button = document.getElementById('btn');
console.log(button);
document.getElementById('disp').innerHTML = "<h2> loading...</h2>"

function msg(){
    // console.log("hi, im working on DOm");
    const img =document.createElement('img');
    img.src ='https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU.png';
    img.setAttribute('height','200px');
    img.setAttribute('width','300px');
    console.log(img);
    document.getElementById('disp').innerHTML = "<h2> welcome to abes ENgineering college </h2>";
    container[0].appendChild(img);
    // alert("hi, im working on dom");
}
button.addEventListener('click',msg);