// result script
// document.querySelector('.result-title01 h4').addEventListener('click', function(){
//     document.querySelector('.result01').style.display = "block";
// });

// document.querySelector('.result-title02 h4').addEventListener('click', function(){
//     document.querySelector('.result02').style.display = "block";
// });

// document.querySelector('.result-title03 h4').addEventListener('click', function(){
//     document.querySelector('.result03').style.display = "block";
// });

// document.querySelector('.result-title04 h4').addEventListener('click', function(){
//     document.querySelector('.result04').style.display = "block";
// });

// document.querySelector('.result-title05 h4').addEventListener('click', function(){
//     document.querySelector('.result05').style.display = "block";
// });

// document.querySelector('.result-title06 h4').addEventListener('click', function(){
//     document.querySelector('.result06').style.display = "block";
// });

// document.querySelector('.result-title07 h4').addEventListener('click', function(){
//     document.querySelector('.result07').style.display = "block";
// });

// document.querySelector('.result-title08 h4').addEventListener('click', function(){
//     document.querySelector('.result08').style.display = "block";
// });

// document.querySelector('.result-title09 h4').addEventListener('click', function(){
//     document.querySelector('.result09').style.display = "block";
// });

// document.querySelector('.result-title10 h4').addEventListener('click', function(){
//     document.querySelector('.result10').style.display = "block";
// });

// document.querySelector('.result-title11 h4').addEventListener('click', function(){
//     document.querySelector('.result11').style.display = "block";
// });

// document.querySelector('.result-title12 h4').addEventListener('click', function(){
//     document.querySelector('.result12').style.display = "block";
// });

// document.querySelector('.result-title13 h4').addEventListener('click', function(){
//     document.querySelector('.result13').style.display = "block";
// });

// document.querySelector('.result-title14 h4').addEventListener('click', function(){
//     document.querySelector('.result14').style.display = "block";
// });

// document.querySelector('.result-title15 h4').addEventListener('click', function(){
//     document.querySelector('.result15').style.display = "block";
// });

// document.querySelector('.result-title16 h4').addEventListener('click', function(){
//     document.querySelector('.result16').style.display = "block";
// });

// document.querySelector('.result-title17 h4').addEventListener('click', function(){
//     document.querySelector('.result17').style.display = "block";
// });


for(let i=1; i<=18; i++){
    if (i<=9) {document.querySelector('.result-title0' + i + ' h4').addEventListener('click', function(){
        document.querySelector(".result0" + i).style.display = "block";
    });}
    else {document.querySelector('.result-title' + i + ' h4').addEventListener('click', function(){
        document.querySelector('.result'+ i).style.display = "block";
    });}
}

// document.querySelectorAll(".result h4").forEach(function(e,i,a){
//     e.addEventListener('click',function(){
//         console.log("Click!");
//     })
// })

// Array.from({length: 12}, function(i){return i}).forEach(function(ele,index,array){
//     console.log(index+1);
// });

// const num = [100, 200, 300, 400, 500];

// for (let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// num.forEach(function(element,index, array){
//     console.log(element);
// });