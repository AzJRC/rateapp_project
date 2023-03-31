const btns = document.querySelectorAll('.btn:not(.btnSbmt)');
const submitBtn = document.querySelector('.btnSbmt');
const score = document.querySelector('.userScore');
const beforeRate = document.querySelector('#beforeRating');
const afterRate = document.querySelector('#afterRating');

beforeRate.style.display = 'flex';
afterRate.style.display = 'none';

let activeButton = null;

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        btns.forEach(btn => btn.classList.remove('btnActive'));
        btn.classList.add("btnActive");
        activeButton = btn.getAttribute('data-score');
        console.log(`You selected ${activeButton} out of 5`);
    })
})

submitBtn.addEventListener('click', function() {
    score.innerHTML = activeButton;
    beforeRate.style.display = 'none';
    afterRate.style.display = 'flex';
})

