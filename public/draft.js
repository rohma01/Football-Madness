// class Player{
//     #name
//     #position
//     #rating
//     #points
//     #team
//     #fantasyTeam

//     constructor(name,position,rating,team){
//         this.#name=name;
//         this.#position=position;
//         this.#rating=rating;
//         this.#team=team;
//         this.#points=0;
//     }
//     setFantasyTeam(user){
//         this.#fantasyTeam=user;
//     }
//     get name(){return this.#name}
//     get position(){return this.#position}
//     get rating(){return this.#rating}
//     get points(){return this.#points}
//     get team(){return this.#team}
//     get fantasyTeam(){return this.#fantasyTeam}
//     addPoints(p){
//         this.#points+=p;
//     }
//     set team(t){
//         this.#team=t;
//     }
// }
// const Player = require("../Player")

const players = [
                new Player({
                    name: "Kevin DeBruyne",
                    position: "CM",
                    rating: 91,
                    realLifeTeam: "Manchester City",
                    FBref_id: "e46012d4"
                }),
                new Player({
                    name: "Mohamed Salah",
                    position: "RW",
                    rating: 90,
                    realLifeTeam: "Liverpool",
                    FBref_id: "e342ad68"
                }),
                new Player({
                    name: "Virgil Van Dijk",
                    position: "RCB",
                    rating: 90,
                    realLifeTeam: "Liverpool",
                    FBref_id: "e06683ca"
                }),
                new Player({
                    name: "Cristiano Ronaldo",
                    position: "ST",
                    rating: 90,
                    realLifeTeam: "Manchester United",
                    FBref_id: "dea698d9"
                }),
                new Player({
                    name: "Heung Min Son",
                    position: "W",
                    rating: 89,     
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "92e7e919"
                }),
                new Player({
                    name: "Casemiro",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Manchester United",
                    FBref_id: "4d224fe8"
                }),
                new Player({
                    name: "Allison",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Liverpool",
                    FBref_id: "7a2e46a8"
                }),
                new Player({
                    name: "Harry Kane",
                    position: "ST",
                    rating: 89,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "21a66f6a"
                }),
                new Player({
                    name: "Ederson",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Manchester City",
                    FBref_id: "3bb7b8b4"
                }),
                new Player({
                    name: "Ngolo Kante",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Chelsea",
                    FBref_id: "b9fbae28"
                }),
                new Player({
                    name: "Erling Haaland",
                    position: "ST",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "1f44ac21"
                }),
                new Player({
                    name: "Joao Cancelo",
                    position: "RB",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "bd6351cd"
                }),
                new Player({
                    name: "Ruben Dias",
                    position: "LCB",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "31c69ef1"
                }),
                new Player({
                    name: "Bernardo Silva",
                    position: "CAM",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "3eb22ec9"
                }),
                new Player({
                    name: "Fabinho",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "7f3b388c"
                }),
                new Player({
                    name: "Rodri",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Manchester City",
                    FBref_id: "6434f10d"
                }),
                new Player({
                    name: "Andrew Robertson",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "2e4f5f03"
                }),
                new Player({
                    name: "Kalidou Koulibaly",
                    position: "RCB",
                    rating: 87,
                    realLifeTeam: "Chelsea",
                    FBref_id: "da974c7b"
                }),
                new Player({
                    name: "Trent Alexander-Arnold",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "cd1acf9d"
                }),
                new Player({
                    name: "Hugo Lloris",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "8f62b6ee"
                }),
                new Player({
                    name: "De Gea",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Manchester United",
                    FBref_id: "7ba6d84e"
                }),
                new Player({
                    name: "Edouard Mendy",
                    position: "GK",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "33887998"
                }),
                new Player({
                    name: "Aymeric Laporte",
                    position: "LCB",
                    rating: 86,
                    realLifeTeam: "Manchester City",
                    FBref_id: "119b9a8e"
                }),
                new Player({
                    name: "Raheem Sterling",
                    position: "RW",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "b400bde0"
                }),
                new Player({
                    name: "Riyad Mahrez",
                    position: "LW",
                    rating: 86,
                    realLifeTeam: "Manchester City",
                    FBref_id: "892d5bb1"
                }),
                new Player({
                    name: "Thiago",
                    position: "CM",
                    rating: 86,
                    realLifeTeam: "Liverpool",
                    FBref_id: "77e84962"
                }),
                new Player({
                    name: "Thiago Silva",
                    position: "CB",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "86e7deaf"
                }),
                new Player({
                    name: "Bruno Fernandes",
                    position: "CAM",
                    rating: 86,
                    realLifeTeam: "Manchester United",
                    FBref_id: "507c7bdf"
                }),
                new Player({
                    name: "Ilkay Gundogan",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "819b3158"
                }),
                new Player({
                    name: "Phil Foden",
                    position: "RW",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "ed1e53f3"
                }),
                new Player({
                    name: "Diogo Jota",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Liverpool",
                    FBref_id: "178ae8f8"
                }),
                new Player({
                    name: "Jorginho",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Chelsea",
                    FBref_id: "45db685d"
                }),
                new Player({
                    name: "Kyle Walker",
                    position: "RB",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "86dd77d1"
                }),
                new Player({
                    name: "Jamie Vardy",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Leicester City",
                    FBref_id: "45963054"
                }),
                new Player({
                    name: "Aubameyang",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Chelsea",
                    FBref_id: "d5dd5f1f"
                }),
                new Player({
                    name: "Martin Odegaard",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Arsenal",
                    FBref_id: "79300479"
                }),
                new Player({
                    name: "Mason Mount",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "9674002f"
                }),
                new Player({
                    name: "Declan Rice",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "West Ham United",
                    FBref_id: "1c7012b8"
                }),
                new Player({
                    name: "Jack Grealish",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Manchester City",
                    FBref_id: "b0b4fd3e"
                }),
                new Player({
                    name: "Ivan Perisic",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "6fe90922"
                }),
                new Player({
                    name: "Thomas Partey",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "Arsenal",
                    FBref_id: "529f49ab"
                }),
                new Player({
                    name: "Reece James",
                    position: "LB",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "1265a93a"
                }),
                new Player({
                    name: "Emiliano Martinez",
                    position: "GK",
                    rating: 84,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "7956236f"
                }),
                new Player({
                    name: "Mateo Kovacic",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "79c0821a"
                }),
                new Player({
                    name: "Luis Diaz",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Liverpool",
                    FBref_id: "4a1a9578"
                }),
                new Player({
                    name: "Raphael Varane",
                    position: "CB",
                    rating: 84,
                    realLifeTeam: "Manchester United",
                    FBref_id: "9f8e9423"
                }),
                new Player({
                    name: "Youri Tielemans",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Leicester City",
                    FBref_id: "56f7a928 "
                }),
                new Player({
                    name: "Joel Matip",
                    position: "CB",
                    rating: 84,
                    realLifeTeam: "Liverpool",
                    FBref_id: "b217ef29"
                }),
                new Player({
                    name: "Wilfred Ndidi",
                    position: "CDM",
                    rating: 90,
                    realLifeTeam: "Leicester City",
                    FBref_id: "6b47c5db"
                }),
                new Player({
                    name: "Kai Havertz",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "fed7cb61"
                }),
                new Player({
                    name: "Jadon Sancho",
                    position: "RW",
                    rating: 84,
                    realLifeTeam: "Manchester United",
                    FBref_id: "dbf053da"
                }),
                new Player({
                    name: "Kieran Trippier",
                    position: "RB",
                    rating: 84,
                    realLifeTeam: "Newcastle United",
                    FBref_id: "21512407"
                }),
                new Player({
                    name: "Roberto Firmino",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Liverpool",
                    FBref_id: "4c370d81"
                }),
                new Player({
                    name: "Jordan Henderson",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Liverpool",
                    FBref_id: "935e6b8f"
                }),
                new Player({
                    name: "John Stones",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Manchester City",
                    FBref_id: "5eecec3d"
                }),
                new Player({
                    name: "Gabriel Jesus",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Arsenal",
                    FBref_id: "b66315ae"
                }),
                new Player({
                    name: "Hakim Ziyech",
                    position: "RW",
                    rating: 83,
                    realLifeTeam: "Chelsea",
                    FBref_id: "6622454d"
                }),
                new Player({
                    name: "Ruben Neves",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Wolverhampton Wanderers",
                    FBref_id: "44bfb6c5"
                }),
                new Player({
                    name: "Pierre-Emile Hojbjerg",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "8b04d6c1"
                }),
                new Player({
                    name: "Ricardo Pereira",
                    position: "RB",
                    rating: 83,
                    realLifeTeam: "Leicester City",
                    FBref_id: "75a72a99"
                }),
                new Player({
                    name: "Diego Carlos",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "b4a014b1"
                }),
                new Player({
                    name: "Lucas Paqueta",
                    position: "CAM",
                    rating: 82,
                    realLifeTeam: "West Ham United",
                    FBref_id: "9b6f7fd5"
                }),
                new Player({
                    name: "Wilfried Zaha",
                    position: "LW",
                    rating: 82,
                    realLifeTeam: "Crystal Palace",
                    FBref_id: "b2bc3b1f"
                }),
                new Player({
                    name: "Lucas Digne",
                    position: "LB",
                    rating: 82,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "1b84dbe1"
                }),
                new Player({
                    name: "Ben Chilwell",
                    position: "RB",
                    rating: 82,
                    realLifeTeam: "Chelsea",
                    FBref_id: "d2424d1b"
                }),
                new Player({
                    name: "Bukayo Saka",
                    position: "RW",
                    rating: 82,
                    realLifeTeam: "Arsenal",
                    FBref_id: "bc7dc64d"
                }),
                new Player({
                    name: "Idrissa Gueye",
                    position: "CDM",
                    rating: 82,
                    realLifeTeam: "Everton",
                    FBref_id: "72c812f3"
                }),
                new Player({
                    name: "Christian Romero",
                    position: "RCB",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "a3d94a58"
                }),
                new Player({
                    name: "Azpilicueta",
                    position: "RCB",
                    rating: 82,
                    realLifeTeam: "Chelsea",
                    FBref_id: "53cad200"
                })
                
];

const users = ["User 1", "User 2", "User 3", "User 4"];
const draftedPlayers = {};
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.username)

// Function to generate player list
function generatePlayerList() {
    const playerListDiv = document.getElementById('playerList');

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `
            <span>${player.name} - ${player.position} (${player.rating})</span>
            <button onclick="draftPlayer('${player.name}', '${player.position}')">Draft</button>

        `;
        playerListDiv.appendChild(playerDiv);
    });
}

async function draftPlayer(playerName,position) {
    console.log(`Player "${playerName}" drafted!`);

    const user = users[0];
    const positionElement = document.getElementById(`${user}-${position}`);
    
    const playerSpan = document.createElement('span');
    playerSpan.textContent = playerName;
    console.log(playerSpan)
    if (positionElement.innerHTML==''){
        positionElement.appendChild(playerSpan);
    }

    //add player to user's team
    // player
    // user.team[player.position] = player
    let validDraft;
    for(let x of user.team){
        if(x==player.position){
            validDraft = false;
            break;
        }
    }
    if(validDraft){
        user.team[player.position] = player;
    }

    if (user.team.length == 11) {
        try {
            const response = await fetch('/draft', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
        } catch {

        }
    }
    //positionElement.innerHTML = ''; // Clear existing content


}
function generateUserDrafts() {
    const userDraftsDiv = document.getElementById('userDrafts');

    users.forEach(user => {
        const userDraftDiv = document.createElement('div');
        userDraftDiv.classList.add('userDraft');
        userDraftDiv.innerHTML = `
            <div class="userTitle">${user}</div>
            <div class="positionDraft">
                <span>ST:</span>
                <span id="${user}-ST"></span>
            </div>
            <div class="positionDraft">
                <span>W1:</span>
                <span id="${user}-W"></span>
            </div>
            <div class="positionDraft">
                <span>W2:</span>
                <span id="${user}-W"></span>
            </div>
            <div class="positionDraft">
                <span>CAM:</span>
                <span id="${user}-CAM"></span>
            </div>
            <div class="positionDraft">
                <span>CM:</span>
                <span id="${user}-CM"></span>
            </div>
            <div class="positionDraft">
                <span>CDM:</span>
                <span id="${user}-CDM"></span>
            </div>
            <div class="positionDraft">
                <span>CB1:</span>
                   <span id="${user}-CB"></span>
            </div>
            <div class="positionDraft">
                <span>CB2:</span>
                <span id="${user}-CB"></span>
            </div>
            <div class="positionDraft">
                <span>FB1:</span>
                <span id="${user}-FB"></span>
            </div>
            <div class="positionDraft">
                <span>FB2:</span>
                <span id="${user}-FB"></span>
            </div>
            <div class="positionDraft">
                <span>GK:</span>
                <span id="${user}-GK"></span>
            </div>
        `;
        userDraftsDiv.appendChild(userDraftDiv);
    });
}



// Call the function to generate player list when the page loads
window.onload = function () {
    generatePlayerList();
    generateUserDrafts();
};