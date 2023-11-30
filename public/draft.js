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


const players = [
                new Player({
                    name: "Kevin DeBruyne",
                    position: "CM",
                    rating: 91,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Mohamed Salah",
                    position: "RW",
                    rating: 90,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Virgil Van Dijk",
                    position: "RCB",
                    rating: 90,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Cristiano Ronaldo",
                    position: "ST",
                    rating: 90,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Heung Min Son",
                    position: "W",
                    rating: 89,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "Casemiro",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Allison",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Harry Kane",
                    position: "ST",
                    rating: 89,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "Ederson",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Ngolo Kante",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Erling Haaland",
                    position: "ST",
                    rating: 88,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Joao Cancelo",
                    position: "RB",
                    rating: 88,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Ruben Dias",
                    position: "LCB",
                    rating: 88,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Bernardo Silva",
                    position: "CAM",
                    rating: 88,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Fabinho",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Rodri",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Andrew Robertson",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Kalidou Koulibaly",
                    position: "RCB",
                    rating: 87,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Trent Alexander-Arnold",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Hugo Lloris",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "De Gea",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Edouard Mendy",
                    position: "GK",
                    rating: 86,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Aymeric Laporte",
                    position: "LCB",
                    rating: 86,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Raheem Sterling",
                    position: "RW",
                    rating: 86,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Riyad Mahrez",
                    position: "LW",
                    rating: 89,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Thiago",
                    position: "CM",
                    rating: 89,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Thiago Silva",
                    position: "CB",
                    rating: 86,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Bruno Fernandes",
                    position: "CAM",
                    rating: 86,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Ilkay Gundogan",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Phil Foden",
                    position: "RW",
                    rating: 85,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Diogo Jota",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Jorginho",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Kyle Walker",
                    position: "RB",
                    rating: 85,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Jamie Vardy",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Leicester City"
                }),
                new Player({
                    name: "Aubameyang",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Martin Odegaard",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Arsenal"
                }),
                new Player({
                    name: "Mason Mount",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Declan Rice",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "West Ham United"
                }),
                new Player({
                    name: "Jack Grealish",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Ivan Perisic",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "Thomas Partey",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "Arsenal"
                }),
                new Player({
                    name: "Reece James",
                    position: "LB",
                    rating: 84,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Emiliano Martinez",
                    position: "GK",
                    rating: 84,
                    realLifeTeam: "Aston Villa"
                }),
                new Player({
                    name: "Mateo Kovacic",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Luis Diaz",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Raphael Varane",
                    position: "CB",
                    rating: 84,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Youri Tielemans",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Leicester City"
                }),
                new Player({
                    name: "Joel Matip",
                    position: "CB",
                    rating: 84,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Wilfred Ndidi",
                    position: "CDM",
                    rating: 90,
                    realLifeTeam: "Leicester City"
                }),
                new Player({
                    name: "Kai Havertz",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Jadon Sancho",
                    position: "RW",
                    rating: 84,
                    realLifeTeam: "Manchester United"
                }),
                new Player({
                    name: "Kieran Trippier",
                    position: "RB",
                    rating: 84,
                    realLifeTeam: "Newcastle United"
                }),
                new Player({
                    name: "Roberto Firmino",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "Jordan Henderson",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Liverpool"
                }),
                new Player({
                    name: "John Stones",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Manchester City"
                }),
                new Player({
                    name: "Gabriel Jesus",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Arsenal"
                }),
                new Player({
                    name: "Hakim Ziyech",
                    position: "RW",
                    rating: 83,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Ruben Neves",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Wolverhampton Wanderers"
                }),
                new Player({
                    name: "Pierre-Emile Hojbjerg",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "Ricardo Pereira",
                    position: "RB",
                    rating: 83,
                    realLifeTeam: "Leicester City"
                }),
                new Player({
                    name: "Diego Carlos",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Aston Villa"
                }),
                new Player({
                    name: "Lucas Paqueta",
                    position: "CAM",
                    rating: 82,
                    realLifeTeam: "West Ham United"
                }),
                new Player({
                    name: "Kieran Trippier",
                    position: "RB",
                    rating: 84,
                    realLifeTeam: "Newcastle United"
                }),
                new Player({
                    name: "Wilfried Zaha",
                    position: "LW",
                    rating: 82,
                    realLifeTeam: "Crystal Palace"
                }),
                new Player({
                    name: "Lucas Digne",
                    position: "LB",
                    rating: 82,
                    realLifeTeam: "Aston Villa"
                }),
                new Player({
                    name: "Ben Chilwell",
                    position: "RB",
                    rating: 82,
                    realLifeTeam: "Chelsea"
                }),
                new Player({
                    name: "Bukayo Saka",
                    position: "RW",
                    rating: 82,
                    realLifeTeam: "Arsenal"
                }),
                new Player({
                    name: "Idrissa Gueye",
                    position: "CDM",
                    rating: 82,
                    realLifeTeam: "Everton"
                }),
                new Player({
                    name: "Christian Romero",
                    position: "RCB",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur"
                }),
                new Player({
                    name: "Azpilicueta",
                    position: "RCB",
                    rating: 82,
                    realLifeTeam: "Chelsea"
                })
                
];

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return "";
    }
    console.log(getCookie("user"))
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