const player1 = {
    name: 'Player1',
    total: 0
};
const player2 = {
    name: 'Player2',
    total: 0
}
for (let i=0; i<3; i++) {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;
    console.log(player1.name, value1);
    console.log(player2.name, value2);
    player1.total = player1.total + value1;
    player2.total = player2.total + value2;
}
console.log(player1);
console.log(player2);
if (player1.total > player2.total) {
    console.log(player1.name + ' won');
} else if (player1.total < player2.total) {
    console.log(player2.name + ' won');
} else {
    console.log ('Draw');
}