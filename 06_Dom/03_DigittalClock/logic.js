const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleString);

setInterval(function() {
    let date = new Date()
    // console.log(date.toLocaleString);
    clock.innerHTML = date.toLocaleTimeString();

}, 1000)
