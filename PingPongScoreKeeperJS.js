const p1 = {
    button: document.querySelector('#P1Button'),
    PointsDisplay: document.querySelector('#P1Display'),
    MatchsWinDisplay: document.querySelector('#P1MatchsWinDisplay'),
    score: 0,
    wins: 0,
};
const p2 = {
    button: document.querySelector('#P2Button'),
    PointsDisplay: document.querySelector('#P2Display'),
    MatchsWinDisplay: document.querySelector('#P2MatchsWinDisplay'),
    score: 0,
    wins: 0,
};
const ResetButton = document.querySelector('#reset');
const WinningSelect = document.querySelector('#PlayTo');;

let WinningScore = 3;
let IsGameOver = false;
function UpdateGame(player, opponent) {
    if (!IsGameOver) {
        player.score += 1;
        player.PointsDisplay.innerText = player.score;
        if (player.score === WinningScore) {
            player.score = opponent.score = 0;
            player.PointsDisplay.innerText = opponent.PointsDisplay.innerText = 0;
            player.wins += 1;
            player.MatchsWinDisplay.innerText = player.wins;
            if (player.wins + opponent.wins === SeriesOf) {
                IsGameOver = true;
                if (player.wins > opponent.wins) {
                    player.MatchsWinDisplay.classList.add('winner');
                    opponent.MatchsWinDisplay.classList.add('loser');
                }
                else {
                    player.MatchsWinDisplay.classList.add('loser');
                    opponent.MatchsWinDisplay.classList.add('winner');

                }
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
    }

}
function ResetGame() {
    IsGameOver = false;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.score = p2.score = 0;
    p1.PointsDisplay.innerText = p2.PointsDisplay.innerText = '0';
    p1.MatchsWinDisplay.classList.remove('winner', 'loser');
    p2.MatchsWinDisplay.classList.remove('winner', 'loser');
    p1.wins = p2.wins = 0;
    p1.MatchsWinDisplay.innerText = p2.MatchsWinDisplay.innerText = 0;
}
p1.button.addEventListener('click', () => {
    UpdateGame(p1, p2);
});
p2.button.addEventListener('click', () => {
    UpdateGame(p2, p1);
});
ResetButton.addEventListener('click', ResetGame);
WinningSelect.addEventListener('change', () => {
    WinningScore = parseInt(WinningSelect.value);
    ResetGame();
});
let SeriesOf = 3;
const SeriesSelect = document.querySelector('#SeriesOf');
SeriesSelect.addEventListener('change', () => {
    SeriesOf = parseInt(SeriesSelect.value);
    ResetGame();
});