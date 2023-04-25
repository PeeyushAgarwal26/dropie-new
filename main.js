const rmorebutt = document.getElementById('rmore')
const card = document.getElementsByClassName('card')

function rmore() {
    for (i of card) {
        i.classList.remove('active');
    }
    let e = Array.from(card).indexOf(event.target);

    console.log(e)
    rmorebutt[e].classList.add("active");
}