class Player{
    #name
    #position
    #rating
    #points
    #team
    #fantasyTeam

    constructor(name,position,rating,team){
        this.#name=name;
        this.#position=position;
        this.#rating=rating;
        this.#team=team;
        this.#points=0;
    }
    setFantasyTeam(user){
        this.#fantasyTeam=user;
    }
    get name(){return this.#name}
    get position(){return this.#position}
    get rating(){return this.#rating}
    get points(){return this.#points}
    get team(){return this.#team}
    get fantasyTeam(){return this.#fantasyTeam}
    addPoints(p){
        this.#points+=p;
    }
    set team(t){
        this.#team=t;
    }
}
//const Player = require('../Player')

const players = [
                // new Player({
                //     name: "Kevin DeBruyne",
                //     position: "CM",
                //     rating: 91,
                //     realLifeTeam: "Manchester City"
                // }),
                  new Player("Mohamed Salah","W",90,"Liverpool"), 
                  new Player("Virgil Van Dijk","CB",90,"Liverpool"),
                  new Player("Cristiano Ronaldo","ST",90,"Manchester United"),
                  new Player("Heung Min Son","W",89,"Tottenham Hotspur"),
                  new Player("Casemiro","CDM",89,"Manchester United"),
                  new Player("Allison","GK",89,"Liverpool"), 
                  new Player("Harry Kane","ST",89,"Tottenham Hotspur"),
                  new Player("Ederson","GK",89,"Manchester City"),
                  new Player("Ngolo Kante","CDM",89,"Chelsea"),
                  new Player("Erling Haaland","ST",88,"Manchester City"),
                  new Player("Joao Cancelo","FB",88,"Manchester City"), 
                  new Player("Ruben Dias","CB",88,"Manchester City"),
                  new Player("Bernardo Silva","CAM",88,"Manchester City"),
                  new Player("Fabinho","CDM",87,"Liverpool"),
                  new Player("Rodri","CDM",87,"Manchester City"),
                  new Player("Andrew Robertson","FB",87,"Liverpool"), 
                  new Player("Kalidou Koulibaly","CB",87,"Chelsea"),
                  new Player("Trent Alexander-Arnold","FB",87,"Liverpool"),
                  new Player("Hugo LLoris","GK",87,"Tottenham Hotspur"),
                  new Player("De Gea","GK",87,"Manchester United"),
                  new Player("Edouard Mendy","GK",86,"Chelsea"), 
                  new Player("Aymeric Laporte","CB",86,"Manchester City"),
                  new Player("Raheem Sterling","W",86,"Chelsea"),
                  new Player("Riyad Mahrez","W",89,"Manchester City"),
                  new Player("Thiago","CM",89,"Liverpool"),
                  new Player("Thiago Silva","CB",86,"Chelsea"), 
                  new Player("Bruno Fernandes","CAM",86,"Manchester United"),
                  new Player("Ilkay Gundogan","CM",85,"Manchester City"),
                  new Player("Phil Foden","W",85,"Manchester City"),
                  new Player("Diogo Jota","ST",85,"Liverpool"),
                  new Player("Jorginho","CM",85,"Chelsea"), 
                  new Player("Kyle Walker","FB",85,"Manchester City"),
                  new Player("Jamie Vardy","ST",85,"Leicester City"),
                  new Player("Aubameyang","ST",85,"Chelsea"),
                  new Player("Martin Odegaard","CAM",84,"Arsenal"),
                  new Player("Mason Mount","CAM",84,"Chelsea"), 
                  new Player("Declan Rice","CDM",84,"West Ham United"),
                  new Player("Jack Grealish","W",84,"Manchester City"),
                  new Player("Ivan Perisic","W",84,"Tottenham Hotspur"),
                  new Player("Thomas Partey","CDM",84,"Arsenal"),
                  new Player("Reece James","FB",84,"Chelsea"), 
                  new Player("Emiliano Martinez","GK",84,"Aston Villa"),
                  new Player("Mateo Kovacic","CM",84,"Chelsea"),
                  new Player("Luis Diaz","W",84,"Liverpool"),
                  new Player("Raphael Varane","CB",84,"Manchester United"),
                  new Player("Youri Tielemans","CM",84,"Leicester City"), 
                  new Player("Joel Matip","CB",84,"Liverpool"),
                  new Player("Wilfred Ndidi","CDM",90,"Leicester City"),
                  new Player("Kai Havertz","CAM",84,"Chelsea"),
                  new Player("Jadon Sancho","W",84,"Manchester United"),
                  new Player("Kieran Trippier","FB",84,"Newcastle United"),
                  new Player("Roberti Firmino","ST",83,"Liverpool"),
                  new Player("Jordan Henderson","CM",83,"Liverpool"),
                  new Player("John Stones","CB",83,"Manchester City"),
                  new Player("Gabriel Jesus","ST",83,"Arsenal"),
                  new Player("Hakim Ziyech","W",83,"Chelsea"),
                  new Player("Ruben Neves","CM",83,"Wolverhampton Wanderers"),
                  new Player("Pierre-Emile Hojbjerg","CM",83,"Tottenham Hotspur"),
                  new Player("Ricardo Pereira","FB",83,"Leicester City"),
                  new Player("Diego Carlos","CB",83,"Aston Villa"),
                  new Player("Lucas Paqueta","CAM",82,"West Ham United"),
                  new Player("Kieran Trippier","FB",84,"Newcastle United"),
                  new Player("Wilfred Zaha","W",82,"Crystal Palace"),
                  new Player("Lucas Digne","FB",82,"Aston Villa"),
                  new Player("Ben Chilwell","FB",82,"Chelsea"),
                  new Player("Bukayo Saka","RW",82,"Arsenal"),
                  new Player("Idrissa Gueye","CDM",82,"Everton")
];

const users = ["User 1", "User 2", "User 3", "User 4"];
const draftedPlayers = {};
const user = JSON.parse(localStorage.getItem('user'));


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

    if (user.team.length == 12) {
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