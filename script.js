const bg = document.querySelector('h5').addEventListener('mouseover', changeBg);
const bx = document.querySelectorAll('box');
let bool = true;



function changeBg() {
    console.log('mouseover');
    if (bool === true) {
        document.querySelector('h5').style.backgroundColor = 'darkcyan';
        bool = false;
    } else if (bool === false) {
        document.querySelector('h5').style.backgroundColor = 'rgb(3, 202, 202)';
        bool = true;
    }

}

function scale() {
    
}