const splash = document.getElementById("splash");
const enterBtn = document.getElementById("enter-btn");
const memorySection = document.getElementById("memory-section");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-btn");
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-music");
const finalBtn = document.getElementById("final-btn");
const finalSection = document.getElementById("final-section");
const finalPolaroid = document.getElementById("final-polaroid");

finalBtn.addEventListener("click", () => {

    memorySection.classList.add("fade-out");

    setTimeout(() => {
        memorySection.classList.add("hidden");
        finalSection.classList.remove("hidden");

        // START flowers ONLY here
        flowerInterval = setInterval(createFlower, 700);

        // reveal polaroid after delay
        setTimeout(() => {
            finalPolaroid.classList.remove("hidden");
            finalPolaroid.style.opacity = "1";
            finalPolaroid.style.transform = "scale(1)";
        }, 2500);

    }, 600);
});

// Confetti on splash load
window.onload = () => {
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
    });
};

playBtn.addEventListener("click", () => {
    music.play();
});

music.addEventListener("ended", () => {
    enterBtn.classList.remove("hidden");
});

// Enter button
enterBtn.addEventListener("click", () => {

    music.pause();
    music.currentTime = 0;

    splash.classList.add("fade-out");

    setTimeout(() => {
        splash.classList.add("hidden");
        memorySection.classList.remove("hidden");
        memorySection.classList.add("fade-in");
    }, 600);
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) => {

    tile.addEventListener("click", () => {

        // PHOTO TILES (only these positions)
        if (tile.classList.contains("photo")) {

            let photoMap = {
                0: "photo1.jpeg",
                3: "photo2.jpeg",
                4: "photo3.jpeg",
                7: "photo4.jpeg",
                8: "photo5.jpeg"
            };

            const file = photoMap[index];

            if (!file) return;

            modalBody.innerHTML = `
                <div style="
                    background:#2c2c2c;
                    padding:30px;
                    border-radius:25px;
                    position:relative;
                    box-shadow:0 15px 40px rgba(0,0,0,0.4);
                ">

                    <!-- Top Bar -->
                    <div style="
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                        color:white;
                        font-size:14px;
                        margin-bottom:10px;
                    ">
                        <span>REC ●</span>
                    </div>

                    <!-- Camera Screen -->
                    <div style="
                        background:black;
                        padding:10px;
                        border-radius:15px;
                    ">
                        <img src="images/${file}" 
                            style="width:100%; border-radius:10px;">
                    </div>

                    <!-- Bottom Controls -->
                    <div style="
                        margin-top:15px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    ">
                        <div style="
                            width:70px;
                            height:70px;
                            border-radius:50%;
                            background:#ddd;
                            border:6px solid #aaa;
                        "></div>
                    </div>
                </div>
            `;

            modal.classList.remove("hidden");
        }
        
        // LETTER TILES
        if (tile.classList.contains("letter")) {

            let letterMap = {
                1: "You are one of the softest souls I know (ghante ka soft)",
                2: "I’m really grateful you exist in my life (I am not)",
                5: "Ae mi khup try kela ha, mala nahi jamat tumko notes likhneka. Bhaad me jao tum (blah👅)",
                6: "Some memories with you live rent free in my head👀",
                9: "Upar ka sab fake tha😁"
            };

            const note = letterMap[index];
            if (!note) return;

            modalBody.innerHTML = `
                <div id="envelope" style="
                    position:relative;
                    background:#f8d7da;
                    border-radius:15px;
                    padding:40px 20px;
                    text-align:center;
                    cursor:pointer;
                ">
                    <div style="
                        width:0;
                        height:0;
                        border-left:150px solid transparent;
                        border-right:150px solid transparent;
                        border-top:120px solid #f5c2c7;
                        margin:0 auto;
                    "></div>
                    <p style="margin-top:20px;">Tap to Open 💌</p>
                </div>
            `;

            modal.classList.remove("hidden");

            const envelope = document.getElementById("envelope");

            envelope.addEventListener("click", () => {

                modalBody.innerHTML = `
                    <div style="
                        background:#fff8dc;
                        padding:25px;
                        border-radius:15px;
                        text-align:left;
                        animation: slideUp 0.4s ease forwards;
                    ">
                        <h3>❤️</h3>
                        <p>${note}</p>
                    </div>
                `;
            });
        }
    });

});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 800);

let flowerInterval;

function createFlower() {
    const flowers = ["🌸","🌼","🌷","🌻","💐"];
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 8000);

}

