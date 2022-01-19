document.querySelectorAll('.result').forEach((el) => {
    el.addEventListener('click',function(){
        el.classList.toggle("dn");
    });
});




// for(let i=1; i<=18; i++){
//     if (i<=9) {document.querySelector('.result-title0' + i + ' h4').addEventListener('click', function(){
//         document.querySelector(".result0" + i).style.display = "block";
//     });}
//     else {document.querySelector('.result-title' + i + ' h4').addEventListener('click', function(){
//         document.querySelector('.result'+ i).style.display = "block";
//     });}
// }
