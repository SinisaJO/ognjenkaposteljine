window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = 50;
    canvas.width = 650;

    
    // Rect lines
    //ctx.strokeStyle = 'red';
   // ctx.lineWidth = 5;
   // ctx.strokeRect(100, 50, 200, 500);
    //ctx.strokeStyle = 'blue';
   // ctx.lineWidth = 2;
   // ctx.strokeRect(200, 100, 200, 500);

    //Lines
    ctx.beginPath();
    ctx.strokeStyle = ' #333';
    ctx.lineWidth = 1;
    ctx.moveTo(313,48); //starting position
    ctx.lineTo(323,25);
    ctx.lineTo(333,48);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(323, 30, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "#4d1a00";
    ctx.fill(); 

});

    //window.addEventListener('resize, ')
    //variables
    //let painting = false;

    //function startPosition(e) {
    //    painting = true;
    //    draw(e);
    //}
    //function finishedPosition(){
    //    painting = false;
    //    ctx.beginPath();
    //}
    //function draw(e){
    //    if(!painting) return;
    //    ctx.strokeStyle = 'red';
    //    ctx.lineWidth = 50;
    //    ctx.lineCap = 'round';

    //    ctx.lineTo(e.clientX, e.clientY);
    //    ctx.stroke();
    //    ctx.beginPath();
    //    ctx.moveTo(e.clientX, e.clientY);
    //}
    //EventListeners
    //canvas.addEventListener('mousedown', startPosition);
    //canvas.addEventListener('mouseup', finishedPosition);
    //canvas.addEventListener('mousemove', draw);
//});
