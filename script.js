function showMainMenu() {
    console.log("Switching to Main Menu...");
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

function startGame() {
    console.log("Starting Game...");
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function goToSettings() {
    alert('Settings page is not implemented yet!');
}

function earnCoins() {
    alert('Earn coins functionality is not implemented yet!');
}

function pauseGame() {
    console.log("Game Paused...");
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('pause-menu').style.display = 'block';
}

function resumeGame() {
    console.log("Resuming Game...");
    document.getElementById('pause-menu').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function restartGame() {
    console.log("Restarting Game...");
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('pause-menu').style.display = 'none';
    document.getElementById('splash-screen').style.display = 'block';
}

function goHome() {
    console.log("Going Home...");
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('pause-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

function restartLevel() {
    console.log("Restarting Level...");
    document.getElementById('level-complete').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function proceedToNextLevel() {
    console.log("Proceeding to Next Level...");
    document.getElementById('level-complete').style.display = 'none';
    alert('Proceed to next level (Level 2)!');
}
