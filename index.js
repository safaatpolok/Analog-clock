let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2; // 30 degrees for each hour, and half a degree for each minute
    let mRotation = 6 * mm;           // 6 degrees for each minute
    let sRotation = 6 * ss;           // 6 degrees for each second

    hr.style.transform = `rotate(${hRotation}deg)`; 
    min.style.transform = `rotate(${mRotation}deg)`; 
    sec.style.transform = `rotate(${sRotation}deg)`; 
}

setInterval(displayTime, 1000);
