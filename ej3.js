const inp3 = document.querySelector("#input3");
const label3 = document.querySelector('#label3');
const nums = ['cero', 'uno', 'dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
inp3.addEventListener('input', ()=>{
    label3.innerHTML='';
    let arr = inp3.value.split('');
    arr.forEach(e => {
        if(!isNaN(e)){
            label3.innerHTML += nums[e] + '<br />'
        }
    });
});
