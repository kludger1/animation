const boy = document.getElementById('boy')
const dog = document.getElementById('dog')
const bird = document.getElementById('bird')
const instuctions = document.getElementById('instuctions')
const gn = document.getElementById('gn')


$(window).keydown(function (e) {
    if (e.keyCode === 39) {
        instuctions.style.visibility = 'hidden'
        boy.style.animationName = 'boyRun'
        dog.style.animationName = 'dogRun'
        bird.style.visibility = 'visible'
        boy.style.transform = 'translate(900px, -80px)';
        dog.style.transform = 'translate(800px, -100px)';
        bird.style.transform = 'translate(-1600px, -350px)';
        gn.style.transform = 'translateY(200px) rotateX(360deg) scale(2)'


    }





})


