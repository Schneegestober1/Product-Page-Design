import "../css/style.scss";

let productImg = document.getElementById('productImg');
let btns = document.querySelectorAll('.btn');

let images = ['public/img/image1.png', 'public/img/image2.png', 'public/img/image3.png'];

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        let index = parseInt(btn.dataset.index);
        productImg.src = images[index];
    })
})
