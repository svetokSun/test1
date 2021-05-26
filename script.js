let button = document.querySelector('.button');
button.addEventListener('click', function () {
    $('.background, .float-block').show()
});
let background = document.querySelector('.background');
background.addEventListener('click', function () {
    $('.background, .float-block').fadeOut(20)
})
