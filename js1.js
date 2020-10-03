const colorBtn = document.querySelector('.colorBtn');
const bckbg = document.querySelector('body');
const color = ['yellow','blue','red','orange','#123ffgfh']
colorBtn.addEventListener('click',change);
function change(){
    //bckbg.style.backgroundColor= 'yellow';
    let random = Math.floor(Math.random()*color.length);
    bckbg.style.backgroundColor= color[random];

}

