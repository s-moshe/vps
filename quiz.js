// 📌 Quiz Data Structure (Premier League Themed Questions)
const quizData = [
    {
        imgSrc: "images/Arsenal.png",
        questionText: "Has Arsenal ever gone an entire Premier League season unbeaten?",
        correctAnswer: true,
        explanationText: "Arsenal completed the 2003/04 season unbeaten, earning the nickname 'The Invincibles'."
    },
    {
        imgSrc: "images/Bournemouth.png",
        questionText: "Did Bournemouth get promoted to the Premier League in 2022?",
        correctAnswer: true,
        explanationText: "Bournemouth finished second in the Championship in 2021/22 and earned promotion."
    },
    {
        imgSrc: "images/Brentford.png",
        questionText: "Did Brentford beat Arsenal in their first-ever Premier League match?",
        correctAnswer: true,
        explanationText: "Brentford defeated Arsenal 2-0 in their first-ever Premier League match on August 13, 2021."
    },
    {
        imgSrc: "images/Brighton.png",
        questionText: "Is Brighton's home stadium called the Trump Stadium?",
        correctAnswer: false,
        explanationText: "Brighton & Hove Albion play at the American Express Community Stadium, commonly called the Amex."
    },
    {
        imgSrc: "images/Burnley.png",
        questionText: "Did Vincent Kompany become Burnley’s manager after retiring from playing?",
        correctAnswer: true,
        explanationText: "Vincent Kompany became Burnley’s manager in 2022 and led them to Premier League promotion."
    },
    {
        imgSrc: "images/Chelsea.png",
        questionText: "Did Chelsea loose the Champions League in 2021?",
        correctAnswer: false,
        explanationText: "Chelsea defeated Manchester City 1-0 in the 2021 Champions League final, with Kai Havertz scoring the winning goal."
    },
    {
        imgSrc: "images/Everton.png",
        questionText: "Has Everton ever been relegated from the Premier League?",
        correctAnswer: false,
        explanationText: "Everton has never been relegated since the Premier League was formed in 1992."
    },
    {
        imgSrc: "images/Forest.png",
        questionText: "Did Nottingham Forest win back-to-back European Cups in 1979 and 1980?",
        correctAnswer: true,
        explanationText: "Under Brian Clough, Nottingham Forest won the European Cup in both 1979 and 1980."
    },
    {
        imgSrc: "images/Fulham.png", 
        questionText: "Is Fulham’s stadium called Craven Cottage?",
        correctAnswer: true,
        explanationText: "Fulham’s home ground is Craven Cottage, located on the banks of the River Thames."
    },
    {
        imgSrc: "images/Liverpool.png",
        questionText: "Has Liverpool ever won a Premier League title?",
        correctAnswer: true,
        explanationText: "Liverpool won their first Premier League title in the 2019/20 season under Jürgen Klopp."
    },
    {
        imgSrc: "images/Luton.png",
        questionText: "Is Kenilworth Road Luton Town's home stadium?",
        correctAnswer: true,
        explanationText: "Kenilworth Road has been Luton Town’s home stadium since 1905."
    },
    {
        imgSrc: "images/Man-city.png",
        questionText: "Did Manchester City become the first team to win four consecutive Premier League titles in 2024?",
        correctAnswer: true,
        explanationText: "Manchester City made history by winning four consecutive Premier League titles from 2021-2024."
    },
    {
        imgSrc: "images/Man-utd.png",
        questionText: "Did Manchester United lose the FA Cup final in 1999, costing them a Premier League treble?",
        correctAnswer: false,
        explanationText: "Manchester United won the Premier League, FA Cup, and Champions League in 1999."
    },
    {
        imgSrc: "images/Newcastle.png",
        questionText: "Did Newcastle United qualify for the Champions League in 2023?",
        correctAnswer: true,
        explanationText: "Newcastle finished in the top four of the Premier League in 2022/23, qualifying for the Champions League."
    },
    {
        imgSrc: "images/Palace.png",
        questionText: "Is Crystal Palace’s nickname 'The Eagles'?",
        correctAnswer: true,
        explanationText: "Crystal Palace is commonly known as 'The Eagles'."
    },
    {
        imgSrc: "images/Sheffield.png",
        questionText: "Was Sheffield United relegated from the Premier League in 2021?",
        correctAnswer: true,
        explanationText: "Sheffield United finished bottom of the Premier League in the 2020/21 season and were relegated."
    },
    {
        imgSrc: "images/Tottenham.png",
        questionText: "Has Tottenham Hotspur ever won a Premier League title?",
        correctAnswer: false,
        explanationText: "Tottenham Hotspur has never won a Premier League title since its formation in 1992."
    },
    {
        imgSrc: "images/Villa.png",
        questionText: "Did Aston Villa win the European Cup in 1982?",
        correctAnswer: true,
        explanationText: "Aston Villa won the European Cup (now Champions League) in 1982, defeating Bayern Munich in the final."
    },
    {
        imgSrc: "images/West-ham.png",
        questionText: "Did West Ham loose the Europa Conference League in 2023?",
        correctAnswer: false,
        explanationText: "West Ham won the 2022/23 Europa Conference League, defeating Fiorentina in the final."
    },
    {
        imgSrc: "images/Wolves.png",
        questionText: "Are Wolverhampton Wanderers known as 'The Wolves'?",
        correctAnswer: true,
        explanationText: "Wolverhampton Wanderers are commonly known as 'The Wolves'."
    }
];

// Get references to HTML elements
const questionContainer = document.getElementById("question");
const trueButton = document.getElementById("true-btn");
const falseButton = document.getElementById("false-btn");
const feedbackContainer = document.getElementById("feedback");
const iconGrid = document.getElementById("icon-grid");

let currentQuestionIndex = 0;

// Function to update the displayed question
function updateQuestion(index) {
    const data = quizData[index];
    questionContainer.textContent = data.questionText;
    feedbackContainer.innerHTML = ""; // Clear previous feedback
}

// Function to check answer
function checkAnswer(selectedAnswer, event) {
    const data = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === data.correctAnswer;
    
    feedbackContainer.innerHTML = `
        <p>${isCorrect ? " Correct!" : " Incorrect!"}</p>
        <p><strong></strong> ${data.explanationText}</p>
    `;
    feedbackContainer.style.color = isCorrect ? "green" : "red";

    //  Trigger fireworks only if the answer is correct
    if (isCorrect) {
        console.log(" Correct answer! Triggering fireworks...");
        
        // Get button position
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + window.scrollX + rect.width / 2;
        const y = rect.top + window.scrollY + rect.height / 2;

        console.log(`Fireworks Position - X: ${x}, Y: ${y}`);
        createFireworks(x, y);
    } else {
        console.log(" Incorrect answer! No fireworks.");
    }
}

// Generate icons dynamically
quizData.forEach((item, index) => {
    const icon = document.createElement("img");
    icon.src = item.imgSrc;
    icon.classList.add("quiz-icon");
    icon.addEventListener("click", () => {
        currentQuestionIndex = index;
        updateQuestion(index);
    });
    iconGrid.appendChild(icon);
});

// Event listeners for answer buttons (pass event to checkAnswer)
trueButton.addEventListener("click", (event) => checkAnswer(true, event));
falseButton.addEventListener("click", (event) => checkAnswer(false, event));

// Initialize the first question
updateQuestion(0);


// Fireworks Effect - Fade Away
function createFireworks(x, y) {
    console.log(" Fireworks function called at:", x, y);

    // Create the fireworks canvas
    const canvas = document.createElement("canvas");
    canvas.classList.add("fireworks-canvas");
    document.body.appendChild(canvas);

    //  Set the size of the canvas
    const canvasSize = 2000;
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // Adjust positioning to keep it centered
    canvas.style.position = "absolute";
    canvas.style.left = `${x - canvasSize / 2}px`;
    canvas.style.top = `${y - canvasSize / 2}px`;
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";
    canvas.style.background = "transparent";
    canvas.style.opacity = "1"; // Fully visible initially

    console.log(" Fireworks canvas created at:", canvas.style.left, canvas.style.top);

    const ctx = canvas.getContext("2d");

    // Fireworks animation logic
    function drawFireworkParticle(x, y, color, size) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    let particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: canvasSize / 2,
            y: canvasSize / 2,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 4 + 2,
            size: Math.random() * 8 + 3,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`
        });
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            drawFireworkParticle(p.x, p.y, p.color, p.size);
        });
        requestAnimationFrame(animateFireworks);
    }

    animateFireworks();

    //  Fade out effect
    setTimeout(() => {
        console.log(" Fireworks fading out...");
        let fadeOut = setInterval(() => {
            let opacity = parseFloat(canvas.style.opacity);
            if (opacity <= 0) {
                clearInterval(fadeOut);
                canvas.remove();
                console.log(" Fireworks canvas removed.");
            } else {
                canvas.style.opacity = (opacity - 0.05).toFixed(2);
            }
        }, 50);
    }, 1200); // Start fading out after 1.2 seconds
}

