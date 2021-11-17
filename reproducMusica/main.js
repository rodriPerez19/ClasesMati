const play=document.querySelector('#play');
const like=document.querySelector('#like')
const log=console.log;

play.addEventListener('click',()=>{

    play.classList.toggle('fa-play-circle')
})

like.addEventListener('click',()=>{
    like.classList.toggle('like')
})
