
<!--Author Rostislav Dolbilov-->

function displayClock(){
    let canvasHTML = document.getElementById('clock');
    canvasHTML.width = window.innerHeight/100 * 35;
    canvasHTML.height = window.innerHeight/100 * 35;
    let clock = canvasHTML.getContext('2d');
    clock.strokeRect(0,0,canvasHTML.width, canvasHTML.height);

    //center and radius of clock
    let radiusClock = canvasHTML.width/2 - window.innerHeight/100 * 2.5;
    let xCenterClock = canvasHTML.width/2;
    let yCenterClock = canvasHTML.height/2;

    //cleaning screen
    clock.fillStyle = "#ffffff";
    clock.fillRect(0,0,canvasHTML.width,canvasHTML.height);

    //watch outline
    clock.strokeStyle =  "#000000";
    clock.lineWidth = 0.8;
    clock.beginPath();
    clock.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    clock.arc(xCenterClock, yCenterClock, radiusClock + window.innerHeight/100*0.25, 0, 2*Math.PI, true);
    clock.moveTo(xCenterClock, yCenterClock);
    clock.fillStyle = "#ffffff";
    clock.fill();
    clock.stroke();
    clock.closePath();

    //watch risks
    let radiusRisks = radiusClock - window.innerHeight/100;
    let radiusPoint;
    for(let i = 0; i < 60; i++){
        clock.beginPath();
        if(i % 5 === 0){
            radiusPoint = window.innerHeight/100/5;
            clock.fillStyle = "#ff5351";
        }else{
            radiusPoint = window.innerHeight/100/10;
            clock.fillStyle = "rgba(0,0,0,1)";
        }
        let xRisk = xCenterClock + radiusRisks * Math.cos(-6*i*(Math.PI/180) + Math.PI/2);
        let yRisk = yCenterClock - radiusRisks * Math.sin(-6*i*(Math.PI/180) + Math.PI/2);
        clock.arc(xRisk, yRisk, radiusPoint, 0, 2*Math.PI, true);
        clock.stroke();
        clock.fill();
        clock.closePath();
    }

    //numbers of clock
    for(let i = 3; i <= 12; i+=3){
        clock.beginPath();
        clock.font = window.innerHeight/100*1.3 + 'px Arial, serif';
        let xText = xCenterClock + (radiusClock - window.innerHeight/100*2.5) * Math.cos(-30*i*(Math.PI/180) + Math.PI/2);
        let yText = yCenterClock - (radiusClock - window.innerHeight/100*2.5) * Math.sin(-30*i*(Math.PI/180) + Math.PI/2);
        clock.strokeText(i.toString(), xText - window.innerHeight/100*0.5, yText + window.innerHeight/100*0.5);
        clock.stroke();
        clock.closePath();
    }

    //hands
    let lengthSeconds = radiusRisks - window.innerHeight/100;
    let lengthMinutes = radiusRisks - window.innerHeight/100 * 2;
    let lengthHour = lengthMinutes / 1.5;
    let d = new Date();
    let secStep = 6*d.getSeconds();
    let minStep = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    let hourStep = 30*(d.getHours() + (1/60)*d.getMinutes());

    //second hand
    clock.beginPath();
    clock.strokeStyle =  "#ff5351";
    clock.lineWidth = window.innerHeight/100/10;
    clock.moveTo(xCenterClock, yCenterClock);
    clock.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - secStep*(Math.PI/180)),
                 yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - secStep*(Math.PI/180)));
    clock.stroke();
    clock.closePath();


    //minute hand
    clock.beginPath();
    clock.strokeStyle =  "#000000";
    clock.lineWidth = window.innerHeight/100/4;
    clock.moveTo(xCenterClock, yCenterClock);
    clock.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - minStep*(Math.PI/180)),
                 yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - minStep*(Math.PI/180)));
    clock.stroke();
    clock.closePath();

    //hour hand
    clock.beginPath();
    clock.lineWidth = window.innerHeight/100/2.5;
    clock.moveTo(xCenterClock, yCenterClock);
    clock.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - hourStep*(Math.PI/180)),
                 yCenterClock - lengthHour*Math.sin(Math.PI/2 - hourStep*(Math.PI/180)));
    clock.stroke();
    clock.closePath();

    //center of clock
    clock.beginPath();
    clock.strokeStyle =  "#000000";
    clock.fillStyle = "#ff5351";
    clock.lineWidth = window.innerHeight/100/4;
    clock.arc(xCenterClock, yCenterClock, window.innerHeight/100/5, 0, 2*Math.PI, true);
    clock.stroke();
    clock.fill();
    clock.closePath();
}

    //display clock in html(canvas)
window.onload = function(){
    window.setInterval(
        function(){
            displayClock();
            },10);
};

<!--Author Rostislav Dolbilov-->
