let seconds = document.getElementById('second');
let minutes = document.getElementById('minute');
let hours = document.getElementById('hour');

function clock() {
    setInterval(function () {
        let instant = new Date();
        const second = instant.getSeconds();
        const secondDeg = ((second/60)*360);
        seconds.style.transform = `rotate(${secondDeg}deg)`;

        const minute = instant.getMinutes();
        const minuteDeg = ((minute/60)*360) + ((second/60)*6) + 90;
        minutes.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = instant.getHours();
        const hourDeg = ((hour/12)*360) + ((minute/60)*30) + 90;
        hours.style.transform = `rotate(${hourDeg}deg)`;
    }, 1000);
}

clock();