document.getElementById('connectButton').addEventListener('click', function() {
   // window.location.href = 'index.html';
   document.body.innerHTML = `
        <title>Hacked</title>
        <style>
            body {
                background-color: black;
                color: white;
                text-align: center;
                padding-top: 200px;
                font-size: 40px;
                font-family: "Arial Black", sans-serif;
            }

            #top-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1;
                animation: flicker 1s infinite alternate;
            }

            #bottom-image {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: 1;
                animation: flicker 1.5s infinite alternate;
            }

            #message {
                position: relative;
                z-index: 2;
                animation: shake 0.5s infinite alternate;
            }

            @keyframes flicker {
                0% { opacity: 1; }
                50% { opacity: 0.8; }
                100% { opacity: 1; }
            }

            @keyframes shake {
                0% { transform: translateX(0); }
                50% { transform: translateX(-10px); }
                100% { transform: translateX(0); }
            }
        </style>
        <script>
            var seconds = 10;

            var countdown = setInterval(function() {
                document.getElementById("counter").textContent = seconds;
                seconds--;

                if (seconds < 0) {
                    clearInterval(countdown);
                    document.getElementById("message").style.display = "none";
                }
            }, 1000);
        </script>
        <body>
            <img id="top-image" src="assets/head.gif" alt="Top Image">
            <h1 id="message" style="background-color: red;">Tu device será intervenido en <span id="counter">10</span> segundos</h1>
            <img id="bottom-image" src="assets/head.gif" alt="Bottom Image">
        </body>
    `;
    var audio = new Audio('assets/sound.mp3');
    audio.play();
});
