document.getElementById('color1-btn').addEventListener('click', function() {
    document.body.classList.remove('scheme2');
    document.body.classList.toggle('scheme1');
    document.querySelector(".header").classList.remove("scheme2");
    document.querySelector(".header").classList.toggle("scheme1");
});

document.getElementById('color2-btn').addEventListener('click', function() {
    document.body.classList.remove('scheme1');
    document.body.classList.toggle('scheme2');
    document.querySelector(".header").classList.remove("scheme1");
    document.querySelector(".header").classList.toggle("scheme2");
});