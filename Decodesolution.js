const challenges = [
    { name: "CTF 1", flag: "cytri{life_is_hard}" },
    { name: "CTF 2", flag: "cytri{S1lv3r_W0lf_w4s_h3r3_4nd_I_alr34dy_s0ld_th3_inf0s_:3}" },
];+

document.addEventListener("DOMContentLoaded", function() {
    const solutionBoxes = document.querySelectorAll(".solution-box");

    solutionBoxes.forEach(function(box, index) {
        box.addEventListener("click", function() {
            openPopup(index + 1);
        });
    });
});

function openPopup(challengeNumber) {
    const popup = document.getElementById("popup");
    const challengeTitle = document.getElementById("challengeTitle");
    challengeTitle.textContent = "CTF " + challengeNumber;

    const flagResult = document.getElementById("flagResult");
    flagResult.textContent = "";

    const flagInput = document.getElementById("flagInput");
    flagInput.value = "";

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}


function openPopup1() {
    console.log("Opening Popup 1");
    const popup = document.getElementById("popup1");
    popup.style.display = "block";
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

function checkFlag(popupId) {
    const flagInput = document.getElementById("flagInput" + popupId.substr(-1));
    const flagResult = document.getElementById("flagResult" + popupId.substr(-1));
    const flag = flagInput.value.trim();
}


const challengePoints = {
    popup1: 50, 
    popup2: 50, 
};

let totalScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    updateScoreboard();

    const ctfBoxes = document.querySelectorAll(".ctf-box");

    ctfBoxes.forEach(function(box) {
        box.addEventListener("click", function() {
            const popupId = box.getAttribute("data-popup");
            openPopup(popupId);
        });
    });
});

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

function checkFlag(popupId) {
    const flagInput = document.getElementById("flagInput" + popupId.substr(-1));
    const flagResult = document.getElementById("flagResult" + popupId.substr(-1));
    const flag = flagInput.value.trim();
    const challengePoint = challengePoints[popupId];
    const ctfCode = document.querySelector("#"+popupId).querySelector("h2").textContent;
    const correctFlag = challenges.find(challenge => ctfCode == challenge.name).flag;
    console.log(correctFlag, document.querySelector("#"+popupId).querySelector("h2").textContent)
    if (flag === correctFlag) {
        flagResult.textContent = "Correct flag!";
        flagResult.style.color = "green";
        totalScore += challengePoint;
        updateScoreboard();
        const ctfBox = document.querySelector('.ctf-box[data-popup="' + popupId + '"]');
        ctfBox.classList.add("correct");
    } else {
        flagResult.textContent = "Incorrect flag!";
        flagResult.style.color = "red";
    }
}

function updateScoreboard() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.textContent = "Total Score: " + totalScore;
    for (const popupId in challengePoints) {
        const challengePoint = challengePoints[popupId];
        const pointsElement = document.getElementById("points" + popupId.substr(-1));
        pointsElement.textContent = " " + challengePoint;
    }
}
