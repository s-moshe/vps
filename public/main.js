// Load the CSV data for EPL rankings and set up scrolling graph
const dataUrl = "CSE_442_Final_project.csv";

// Define matchweek ranges for each section
const matchweekRanges = [
  { id: "section1", min: 1, max: 1 },
  { id: "section2", min: 1, max: 9 },
  { id: "section3", min: 1, max: 15 },
  { id: "section5", min: 1, max: 37 },
  { id: "section6", min: 1, max: 38 }
];

fetch(dataUrl)
  .then(response => response.text())
  .then(data => {
    const parsedData = d3.csvParse(data);
    let currentMatchweek = 1;
    let isAnimating = false;

    function animateGraph(targetWeek) {
      if (currentMatchweek === targetWeek || isAnimating) return;
      isAnimating = true;
      let step = targetWeek > currentMatchweek ? 1 : -1;
      function stepAnimation() {
        if (currentMatchweek === targetWeek) {
          isAnimating = false;
          return;
        }
        currentMatchweek += step;
        renderGraph(1, currentMatchweek);
        setTimeout(stepAnimation);
      }
      stepAnimation();
    }

    function renderGraph(minWeek, maxWeek) {
      const epl = {
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        description: "EPL 23/24 Team Rankings by Matchweek",
        background: "rgb(255, 255, 255)",
        data: { values: parsedData },
        params: [
          {
            name: "Matchweek",
            value: maxWeek,
            bind: {
              input: "range",
              min: 1,
              max: 38,
              step: 1
            }
          }
        ],
        transform: [{ filter: "datum.Played <= Matchweek" }],
        encoding: {
          x: { field: "Played", type: "quantitative", title: "Matchweek" },
          y: { field: "Position", type: "quantitative", title: "League Position", scale: { domain: [1, 20], reverse: true } },

          
          color: {
            field: "Club",
            type: "nominal",
            title: "Team",
            scale: {
              domain: ["Manchester City"].concat(
                ["Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton And Hove Albion", 
                "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", 
                "Luton Town", "Manchester United", "Newcastle United", "Nottingham Forest", 
                "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"]
              ),
              // range: ["#1DA1F2"].concat(new Array(19).fill("lightgray")) // City in official blue, others gray
              range: ["rgba(12, 177, 232, 1)"].concat(new Array(19).fill("lightgray")) // City is fully blue, others gray
            },
            legend: { title: "Team" } // Ensures legend stays visible
          },
          opacity: {
            condition: {
              test: "datum.Club === 'Manchester City'",
              value: 1 // Keeps Manchester City's line fully visible
            },
            value: 0.3 // Makes all other teams semi-transparent
          },
          
          
          

          
          tooltip: [
            { field: "Club", type: "nominal", title: "Team" },
            { field: "Played", type: "quantitative", title: "Matchweek" },
            { field: "Position", type: "quantitative", title: "Standing" }
          ]
        },
        layer: [
          {
            transform: [{ filter: "datum.Played == Matchweek" }],
            mark: { type: "image", width: 30, height: 30 },
            encoding: {
              x: { field: "Played", type: "quantitative" },
              y: { field: "Position", type: "quantitative" },
              url: { field: "Logo" }
            }
          },
          {
            mark: { type: "line", point: true, strokeWidth: 3 },
            encoding: {
              x: { field: "Played", type: "quantitative" },
              y: { field: "Position", type: "quantitative" },
              color: { field: "Club", type: "nominal" }
            }
          }
        ],
        width: Math.min(550, window.innerWidth * 0.4),
        height: Math.min(800, window.innerHeight * 0.6),
        title: {
          text: `EPL 23/24 Team Rankings - Matchweek ${maxWeek}`,
          fontSize: 20,
          anchor: "middle",
          color: "white"
        }
      };
      vegaEmbed("#epl", epl);
    }

    // Initial render with matchweek 1
    renderGraph(1, 1);

    // Set up Intersection Observer for scrolling effect
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = matchweekRanges.find(s => s.id === entry.target.id);
          if (section) {
            animateGraph(section.max);
          }
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.6 });

    matchweekRanges.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const audioButton = document.getElementById("play-audio");
    const audioClip = document.getElementById("audio-clip");

    if (audioButton && audioClip) {
        audioButton.addEventListener("click", function () {
            if (audioClip.paused) {
                audioClip.play();
                audioButton.textContent = "⏸ Pause Audio";
            } else {
                audioClip.pause();
                audioButton.textContent = "🔊 Play Audio";
            }
        });

        audioClip.addEventListener("ended", function () {
            audioButton.textContent = "🔊 Play Audio";
        });
    }
});


