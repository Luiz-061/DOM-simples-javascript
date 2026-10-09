let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let divocul = document.getElementById('divocul');
let btnRec = document.getElementById('btn-rec');

btn.addEventListener('click', () => {

    txt.innerHTML='Texto mudado';
    txt.style.color='blue';
    txt.style.transition='0.6s';

    divocul.style.display= 'block';
});

btnRec.addEventListener('click', () => {
    window.location.reload();
     divocul.style.display= 'none';
})