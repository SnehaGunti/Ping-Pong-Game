document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball");//targetiing the ball element
    let paddle = document.getElementById("paddle");

    //here ballX and ballY will be helping us to set a starting point of ball wrt table
    let ballX = 50;//dist of the top of the ball wrt pingpong table
    let ballY = 50;//dist of the left of the ball wrt pingpong table

    let dx = 2;//displacement factor in x direction , 2-> u will displace by 2 px in +x direction, -2 ->u will displace by 2px in -x direction
    let dy = 2;//displacement factor in y direction,2-> u will displace by 2 px in +y direction, -2 ->u will displace by 2px in -y direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    setInterval(function exec() {
        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // if(ballX > 700 - 20 || ballX <= 0)
        //     dx *= -1;
        // if(ballY > 400 - 20 || ballY <= 0)
        //     dy *= -1;

        /*
        *ballX < paddle.offsetLeft + paddle.offsetWidth -> if left(wrt table) of ball < right(wrt table) of the paddle
        *ballY > paddle.offsetTop -> if top(wrt table) of ball > top(wrt table) of paddle
        * ballY + ball.offsetHeight ->bottom of the ball
        * paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
        */
        if(ballX < paddle.offsetLeft + paddle.offsetWidth && 
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
        ) {
            dx *= -1;

        }
        //collision of ball and paddle
        

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0)
            dx *= -1;
        if(ballY >= table.offsetHeight - ball.offsetHeight || ballY <= 0)
            dy *= -1;


        
        
    }, 10);

    let paddleY = 0;
    let dPy = 20;//displacemnt for paddle in y direction
    document.addEventListener("keydown" , (event) => {
        event.preventDefault();//prevents the execution of default event behaviour
        if(event.keyCode == 38 && paddleY > 0) {
            //up arrow
            paddleY += (-1)*dPy;
        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            //down arrow
            paddleY += dPy;
        }
        paddle.style.top = `${paddleY}px`;
    })
});