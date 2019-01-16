let canvas = document.getElementById("sandbox");
let context = canvas.getContext("2d");

function drowDivisions(R) {
    for (let d = 0; d < 60; ++d) {
        let angle,pX,pY,qX,qY;
        angle = (d/60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;

        qX = 0.9 * pX;
        qY = 0.9 * pY;

        pX += R; pY += R;
        qX += R; qY += R;

        let line = new Path2D();
        line.moveTo(pX,pY);
        line.lineTo(qX,qY);
        if (d % 5 == 0) {
            context.lineWidth = 3;
        } else {
            context.lineWidth = 1;
        }
        context.stroke(line);
    }
}

function getTimeNow() {
    let date = new Date();
    let hours, minutes, seconds;

    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function getAngles() {
    let timeNow = getTimeNow();

    let hoursAngle, minutesAngle, secondsAngle;

    secondsAngle = (timeNow.seconds / 60) * (2 * Math.PI);
    minutesAngle = (timeNow.minutes / 60) * (2 * Math.PI);
    hoursAngle = ((timeNow.hours % 12)/12) * (2 * Math.PI);

    secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;

    return {
        secondsAngle: secondsAngle,
        minutesAngle: minutesAngle,
        hoursAngle: hoursAngle
    }
}

function drawSecondsHand(angle, R) {
    let pX,pY;

    pX = Math.cos(angle) * 0.8 * R;
    pY = -Math.sin(angle) * 0.8 * R;
    pX += R; pY += R;

    let line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(pX,pY);
    context.strokeStyle = "red";
    context.stroke(line);
    context.strokeStyle = "black";
}

function drawMinutesHand(angle, R) {
    let pX,pY;

    pX = Math.cos(angle) * 0.6 * R;
    pY = -Math.sin(angle) * 0.6 * R;
    pX += R; pY += R;

    let line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(pX,pY);
    context.lineWidth = 3;
    context.stroke(line);
    context.lineWidth = 1;
}

function drawHoursHand(angle, R) {
    let pX,pY;

    pX = Math.cos(angle) * 0.4 * R;
    pY = -Math.sin(angle) * 0.4 * R;
    pX += R; pY += R;

    let line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(pX,pY);
    context.lineWidth = 5;
    context.stroke(line);
    context.lineWidth = 1;
}

function drawWatch() {
    context.clearRect(0,0,300,300);

    let R = 300/2;

    circle = new Path2D();
    circle.arc(R,R,R,0,2*Math.PI);
    context.stroke(circle);

    drowDivisions(R);

    let angles = getAngles();

    drawSecondsHand(angles.secondsAngle, R);
    drawMinutesHand(angles.minutesAngle, R);
    drawHoursHand(angles.hoursAngle, R);

    circle = new Path2D();
    circle.arc(R,R,5,0,2*Math.PI);
    context.fill(circle);

    setTimeout(drawWatch, 1000);
}

window.onload = function() {
    drawWatch();
};
