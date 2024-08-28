let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let inputs1 = document.getElementById('inputs1');
let inputs2 = document.getElementById('inputs2');
let inputs3 = document.getElementById('inputs3');
let sumbit = document.getElementById('sumbit');
let backtomain = document.getElementById('backtomain');
let btn1inp1 = document.getElementById('btn1inp1');
let btn1inp2 = document.getElementById('btn1inp2');
let btn1inp3 = document.getElementById('btn1inp3');
let btn1inp4 = document.getElementById('btn1inp4');
let btn3inp3 = document.getElementById('btn3inp3');
let select2 = document.getElementById('select2');
// btn1 
function show1() {
    inputs1.classList.remove('hideinp');
    btn2.classList.add('hideinp');
    btn3.classList.add('hideinp');
    sumbit.classList.remove('hideinp');
    backtomain.classList.remove('hideinp');
    btn1inp1.classList.remove('hideinp');
    btn1inp2.classList.remove('hideinp');
    btn1inp3.classList.remove('hideinp');
    btn1inp4.classList.remove('hideinp');
};
// btn2
function show2() {
    inputs2.classList.remove('hideinp');
    btn1.classList.add('hideinp');
    btn3.classList.add('hideinp');
    sumbit.classList.remove('hideinp')
    backtomain.classList.remove('hideinp');
};
//btn3
function show3() {
    inputs3.classList.remove('hideinp');
    btn1.classList.add('hideinp');
    btn2.classList.add('hideinp');
    sumbit.classList.remove('hideinp')
    backtomain.classList.remove('hideinp');
    btn3inp3.classList.remove('hideinp');
};
// back
function back() {
    btn1inp1.classList.add('hideinp');
    btn1inp2.classList.add('hideinp');
    btn1inp3.classList.add('hideinp');
    btn1inp4.classList.add('hideinp');
    btn3inp3.classList.add('hideinp');
    sumbit.classList.add('hideinp');
    backtomain.classList.add('hideinp');
    btn1.classList.remove('hideinp');
    btn2.classList.remove('hideinp');
    btn3.classList.remove('hideinp');

};
// sumbit
let jobdata;
if (localStorage.applys1job != null) {
    jobdata = JSON.parse(localStorage.applys1job)
} else {
    jobdata = [];
};
// send data
function send() {
    if (btn1inp1.value !=''&&btn1inp2.value !=''&&btn1inp3.value !=''&&btn1inp4.value !=''&&btn3inp3.value !=''){
        window.location.href = "https://rait4.github.io/RAIT/";
        let jobvalues = {
            select2: select2.value,
            myinp1: btn1inp1.value,
            myinp2: btn1inp2.value,
            myinp3: btn1inp3.value,
            myinp4: btn1inp4.value,
            myinp5: btn3inp3.value,
        };
        jobdata.push(jobvalues);
        localStorage.setItem('applys1job', JSON.stringify(jobdata));
        btn1inp1.value = '';
        btn1inp2.value = '';
        btn1inp3.value = '';
        btn1inp4.value = '';
        btn3inp3.value = '';
    }else{
        alert('الرجاء ملء البيانات بالكامل');
    };
};