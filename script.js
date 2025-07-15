// ---------- Soccer Field Section ----------

// Starting XI Players
const players = [
  {
    name: "Ederson",
    number: 31,
    birthday: "August 17, 1993",
    position: "Goalkeeper",
    nationality: "Brazil",
    imgSrc: "players/Ederson.png",
    positionCoords: { top: "85%", left: "47%" },
    stats: [33, 0, 0, 5, 0]
  },
  {
    name: "Kyle Walker",
    number: 2,
    birthday: "May 28, 1990",
    position: "Defender",
    nationality: "England",
    imgSrc: "players/Kyle Walker.png",
    positionCoords: { top: "67%", left: "10%" },
    stats: [32, 0, 4, 2, 0]
  },
  {
    name: "Ruben Dias",
    number: 3,
    birthday: "May 14, 1997",
    position: "Defender",
    nationality: "Portugal",
    imgSrc: "players/Ruben Dias.png",
    positionCoords: { top: "70%", left: "60%" },
    stats: [30, 0, 0, 0, 0]
  },
  {
    name: "Nathan Ake",
    number: 6,
    birthday: "February 18, 1995",
    position: "Defender",
    nationality: "Netherlands",
    imgSrc: "players/Nathan Ake.png",
    positionCoords: { top: "67%", left: "85%" },
    stats: [29, 2, 2, 0, 0]
  },
  {
    name: "Josko Gvardiol",
    number: 24,
    birthday: "January 23, 2002",
    position: "Defender",
    nationality: "Croatia",
    imgSrc: "players/Josko Gvardiol.png",
    positionCoords: { top: "70%", left: "35%" },
    stats: [28, 4, 1, 3, 0]
  },
  {
    name: "Rodri",
    number: 16,
    birthday: "June 22, 1996",
    position: "Midfielder",
    nationality: "Spain",
    imgSrc: "players/Rodri.png",
    positionCoords: { top: "45%", left: "25%" },
    stats: [34, 8, 9, 8, 1]
  },
  {
    name: "Bernardo Silva",
    number: 20,
    birthday: "August 10, 1994",
    position: "Midfielder",
    nationality: "Portugal",
    imgSrc: "players/Bernando Silva.png",
    positionCoords: { top: "45%", left: "70%" },
    stats: [33, 6, 9, 8, 0]
  },
  {
    name: "Kevin De Bruyne",
    number: 17,
    birthday: "June 28, 1991",
    position: "Midfielder",
    nationality: "Belgium",
    imgSrc: "players/Kevin De Bruyne.png",
    positionCoords: { top: "47%", left: "48%"},
    stats: [18, 4, 10, 2, 0]
  },
  {
    name: "Phil Foden",
    number: 47,
    birthday: "May 28, 2000",
    position: "Midfielder",
    nationality: "England",
    imgSrc: "players/Phil Foden.png",
    positionCoords: { top: "25%", left: "17%" },
    stats: [35, 19, 8, 2, 0]
  },
  {
    name: "Julian Alvarez",
    number: 19,
    birthday: "January 31, 2000",
    position: "Forward",
    nationality: "Argentina",
    imgSrc: "players/Julian Alvares.png",
    positionCoords: { top: "25%", left: "75%" },
    stats: [36, 11, 9, 0, 0]
  },
  {
    name: "Erling Haaland",
    number: 9,
    birthday: "July 21, 2000",
    position: "Forward",
    nationality: "Norway",
    imgSrc: "players/Erling Haaland.png",
    positionCoords: { top: "20%", left: "48%" },
    stats: [31, 27, 5, 1, 0]
  }
];

// Substitute Players
const substitutes = [
  {
    name: "Mateo Kovacic",
    number: 8,
    birthday: "May 6, 1994",
    position: "Midfielder",
    nationality: "Croatia",
    imgSrc: "players/Mateo Kovacic.png",
    stats: [30, 1, 0, 4, 0]
  },
  {
    name: "Jack Grealish",
    number: 10,
    birthday: "September 10, 1995",
    position: "Midfielder",
    nationality: "England",
    imgSrc: "players/Jack Grealish.png",
    stats: [20, 3, 1, 7, 0]
  },
  {
    name: "Stefan Ortega",
    number: 18,
    birthday: "November 6, 1992",
    position: "Goalkeeper",
    nationality: "Germany",
    imgSrc: "players/Stefan Ortega.png",
    stats: [9, 0, 0, 0, 0]
  },
  {
    name: "Jeremy Doku",
    number: 11,
    birthday: "May 27, 2002",
    position: "Forward",
    nationality: "Belgium",
    imgSrc: "players/Jeremy Doku.png",
    stats: [29, 3, 8, 0, 0]
  },
  {
    name: "John Stones",
    number: 5,
    birthday: "May 28, 1994",
    position: "Defender",
    nationality: "England",
    imgSrc: "players/John Stones.png",
    stats: [16, 1, 0, 2, 0]
  },
  {
    name: "Manuel Akanji",
    number: 25,
    birthday: "July 19, 1995",
    position: "Defender",
    nationality: "Switzerland",
    imgSrc: "players/Manuel Akanji.png",
    stats: [30, 2, 0, 3, 1]
  },
  {
    name: "Matheus Nunes",
    number: 27,
    birthday: "August 27, 1998",
    position: "Midfielder",
    nationality: "Portugal",
    imgSrc: "players/Matheus Nunes.png",
    stats: [19, 0, 2, 1, 1]
  },
  {
    name: "Oscar Bobb",
    number: 52,
    birthday: "July 12, 2003",
    position: "Midfielder",
    nationality: "Norway",
    imgSrc: "players/Oscar Bobb.png",
    stats: [14, 1, 1, 0, 0]
  },
  {
    name: "Rico Lewis",
    number: 82,
    birthday: "November 21, 2004",
    position: "Defender",
    nationality: "England",
    imgSrc: "players/Rico Lewis.png",
    stats: [16, 2, 0, 1, 0]
  },
  {
    name: "Sergio Gomez",
    number: 21,
    birthday: "September 4, 2000",
    position: "Midfielder",
    nationality: "Spain",
    imgSrc: "players/Sergio Gomez.png",
    stats: [6, 0, 1, 0, 0]
  }
];

  
  // Place starting XI players on the soccer field
  const playersContainer = document.getElementById("players");
  players.forEach(player => {
    const img = document.createElement("img");
    img.src = player.imgSrc;
    img.alt = player.name;
    img.classList.add("player");
    img.style.top = player.positionCoords.top;
    img.style.left = player.positionCoords.left;
    img.addEventListener("click", () => {
      // When a soccer field player is clicked, hide soccer field elements and show overlay
      displaySoccerDetailedStats(player);
    });
    playersContainer.appendChild(img);
  });
  
  // Place substitutes on the field (stacked to the right)
  const subsContainer = document.getElementById("substitutes");
  substitutes.forEach(sub => {
    const img = document.createElement("img");
    img.src = sub.imgSrc;
    img.alt = sub.name;
    img.classList.add("substitute");
    img.title = sub.name; // Tooltip using title attribute
    img.addEventListener("click", () => {
      displaySoccerDetailedStats(sub);
    });
    subsContainer.appendChild(img);
  });
  
 // Detailed Soccer View Overlay Function
function displaySoccerDetailedStats(player) {
  const soccerField = document.querySelector(".soccer-field");
  const playersContainer = document.getElementById("players");
  const subsContainer = document.getElementById("substitutes");

  // Hide soccer field elements
  soccerField.style.display = "none";
  playersContainer.style.display = "none";
  subsContainer.style.display = "none";

  // Show detailed overlay for soccer field
  const overlay = document.getElementById("detailed-soccer-view");
  overlay.innerHTML = "";
  overlay.classList.remove("hidden");
  overlay.style.display = "flex";

  // Create Black Box for Player Info
  const playerInfoBox = document.createElement("div");
  playerInfoBox.classList.add("player-info-box");

  // Create detailed player image
  const img = document.createElement("img");
  img.src = player.imgSrc;
  img.alt = player.name;
  img.classList.add("detailed-player-image");

  // Player Stats Text Section
  const playerStatsText = document.createElement("div");
  playerStatsText.classList.add("player-stats-text");
  playerStatsText.innerHTML = `
      <h2>${player.name}</h2>
      <p><strong>Number:</strong> ${player.number || "N/A"}</p>
      <p><strong>Position:</strong> ${player.position || "N/A"}</p>
      <p><strong>Date of Birth:</strong> ${player.birthday || "N/A"}</p>
      <p><strong>Nationality:</strong> ${player.nationality || "N/A"}</p>
  `;

  // Create White Transparent Box for Bar Chart
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  // Create Canvas for Bar Chart
  const canvas = document.createElement("canvas");
  canvas.style.maxWidth = "400px";
  canvas.style.maxHeight = "300px";

  // Back Button
  const backButton = document.createElement("button");
  backButton.textContent = "← Back";
  backButton.classList.add("back-button");
  backButton.addEventListener("click", () => {
      overlay.style.display = "none";
      overlay.innerHTML = "";
      soccerField.style.display = "block";
      playersContainer.style.display = "block";
      subsContainer.style.display = "flex";
  });

  // Append Elements
  playerInfoBox.appendChild(img);
  playerInfoBox.appendChild(playerStatsText);
  statsContainer.appendChild(canvas);

  overlay.appendChild(backButton);
  overlay.appendChild(playerInfoBox);
  overlay.appendChild(statsContainer);

  // Build chart data
  const chartData = {
      labels: ["Games Played", "Goals", "Assists", "Yellow Cards", "Red Cards"],
      datasets: [{
          label: `${player.name}'s Stats`,
          data: player.stats,
          backgroundColor: ["#3498db", "#2ecc71", "#e67e22", "#f1c40f", "#e74c3c"],
          borderColor: ["#2980b9", "#27ae60", "#f39c12", "#d35400", "#c0392b"],
          borderWidth: 1
      }]
  };

  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true } }
      }
  });
}

