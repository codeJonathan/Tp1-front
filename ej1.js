const inp = document.querySelector("#input1");
let val = '';
const label = document.querySelector('#label1');
inp.addEventListener('input', ()=>{
    val += inp.value.split('').pop();
    inp.value = inp.value.slice(0,-1);
    inp.value += '|';
    label.innerHTML = val;
});


