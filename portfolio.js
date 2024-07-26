// function spark(event){
//     let i=document.createElement('i');
//     i.style.left=(event.pageX)+'px';
//     i.style.top=(event.pageY)+'px';
//     i.style.scale=`${Math.random()*2 +1}`;
//     i.style.setProperty('--x',getrand());   
//     i.style.setProperty('--y',getrand());   
//    document.body.appendChild(i);
//    setTimeout(()=>{
//     document.body.removeChild(i);
//    },2000)
// }
// function getrand(){
//     return `${Math.random() * 400-200}px`;
// }
//document.addEventListener('mousemove',spark);
ScrollReveal({ 
    reset: true,
    distance:'800px',
    duration:1300,
    delay: 10

 });
ScrollReveal().reveal("#skill",{delay:500,origin: 'left'});