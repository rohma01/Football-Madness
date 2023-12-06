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
let turn=0;

//login as 4 diff users
//refresh page every second

const players = [
                {
                    name: "Kevin DeBruyne",
                    position: "CM",
                    rating: 91,
                    realLifeTeam: "Manchester City",
                    FBref_id: "e46012d4"
                },
                {
                    name: "Mohamed Salah",
                    position: "RW",
                    rating: 90,
                    realLifeTeam: "Liverpool",
                    FBref_id: "e342ad68"
                    
                },
                {
                    name: "Virgil Van Dijk",
                    position: "RCB",
                    rating: 90,
                    realLifeTeam: "Liverpool",
                    FBref_id: "e06683ca"
                },
                {
                    name: "Cristiano Ronaldo",
                    position: "ST",
                    rating: 90,
                    realLifeTeam: "Manchester United",
                    FBref_id: "dea698d9"
                },
                {
                    name: "Heung Min Son",
                    position: "LW",
                    rating: 89,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "92e7e919"
                },
                {
                    name: "Casemiro",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Manchester United",
                    FBref_id: "4d224fe8"
                },
                {
                    name: "Allison",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Liverpool",
                    FBref_id: "7a2e46a8"
                },
                {
                    name: "Harry Kane",
                    position: "ST",
                    rating: 89,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "21a66f6a"
                },
                {
                    name: "Ederson",
                    position: "GK",
                    rating: 89,
                    realLifeTeam: "Manchester City",
                    FBref_id: "3bb7b8b4"
                },
                {
                    name: "Ngolo Kante",
                    position: "CDM",
                    rating: 89,
                    realLifeTeam: "Chelsea",
                    FBref_id: "b9fbae28"
                },
                {
                    name: "Erling Haaland",
                    position: "ST",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "1f44ac21"
                },
                {
                    name: "Joao Cancelo",
                    position: "RB",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "bd6351cd"
                },
                {
                    name: "Ruben Dias",
                    position: "LCB",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "31c69ef1"
                },
                {
                    name: "Bernardo Silva",
                    position: "CAM",
                    rating: 88,
                    realLifeTeam: "Manchester City",
                    FBref_id: "3eb22ec9"
                },
                {
                    name: "Fabinho",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "7f3b388c"
                },
                {
                    name: "Rodri",
                    position: "CDM",
                    rating: 87,
                    realLifeTeam: "Manchester City",
                    FBref_id: "6434f10d"
                },
                {
                    name: "Andrew Robertson",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "2e4f5f03"
                },
                {
                    name: "Kalidou Koulibaly",
                    position: "RCB",
                    rating: 87,
                    realLifeTeam: "Chelsea",
                    FBref_id: "da974c7b"
                },
                {
                    name: "Trent Alexander-Arnold",
                    position: "LB",
                    rating: 87,
                    realLifeTeam: "Liverpool",
                    FBref_id: "cd1acf9d"
                },
                {
                    name: "Hugo Lloris",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "8f62b6ee"
                },
                {
                    name: "De Gea",
                    position: "GK",
                    rating: 87,
                    realLifeTeam: "Manchester United",
                    FBref_id: "7ba6d84e"
                },
                {
                    name: "Edouard Mendy",
                    position: "GK",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "33887998"
                },
                {
                    name: "Aymeric Laporte",
                    position: "LCB",
                    rating: 86,
                    realLifeTeam: "Manchester City",
                    FBref_id: "119b9a8e"
                },
                {
                    name: "Raheem Sterling",
                    position: "RW",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "b400bde0"
                },
                {
                    name: "Riyad Mahrez",
                    position: "LW",
                    rating: 89,
                    realLifeTeam: "Manchester City",
                    FBref_id: "892d5bb1"    
                },
                {
                    name: "Thiago",
                    position: "CM",
                    rating: 89,
                    realLifeTeam: "Liverpool",
                    FBref_id: "77e84962"
                },
                {
                    name: "Thiago Silva",
                    position: "RCB",
                    rating: 86,
                    realLifeTeam: "Chelsea",
                    FBref_id: "86e7deaf"
                },
                {
                    name: "Bruno Fernandes",
                    position: "CAM",
                    rating: 86,
                    realLifeTeam: "Manchester United",
                    FBref_id: "507c7bdf"
                },
                {
                    name: "Ilkay Gundogan",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "819b3158"
                },
                {
                    name: "Phil Foden",
                    position: "RW",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "ed1e53f3"
                },
                {
                    name: "Diogo Jota",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Liverpool",
                    FBref_id: "178ae8f8"
                },
                {
                    name: "Jorginho",
                    position: "CM",
                    rating: 85,
                    realLifeTeam: "Chelsea",
                    FBref_id: "45db685d"
                },
                {
                    name: "Kyle Walker",
                    position: "RB",
                    rating: 85,
                    realLifeTeam: "Manchester City",
                    FBref_id: "86dd77d1"
                },
                {
                    name: "Jamie Vardy",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Leicester City",
                    FBref_id: "45963054"
                },
                {
                    name: "Aubameyang",
                    position: "ST",
                    rating: 85,
                    realLifeTeam: "Chelsea",
                    FBref_id: "d5dd5f1f"
                },
                {
                    name: "Martin Odegaard",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Arsenal",
                    FBref_id: "79300479"
                },
                {
                    name: "Mason Mount",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "9674002f"
                },
                {
                    name: "Declan Rice",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "West Ham United",
                    FBref_id: "1c7012b8"
                },
                {
                    name: "Jack Grealish",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Manchester City",
                    FBref_id: "b0b4fd3e"
                },
                {
                    name: "Ivan Perisic",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "6fe90922"
                },
                {
                    name: "Thomas Partey",
                    position: "CDM",
                    rating: 84,
                    realLifeTeam: "Arsenal",
                    FBref_id: "529f49ab"
                },
                {
                    name: "Reece James",
                    position: "LB",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "1265a93a"
                },
                {
                    name: "Emiliano Martinez",
                    position: "GK",
                    rating: 84,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "7956236f"
                },
                {
                    name: "Mateo Kovacic",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "79c0821a"
                },
                {
                    name: "Luis Diaz",
                    position: "LW",
                    rating: 84,
                    realLifeTeam: "Liverpool",
                    FBref_id: "4a1a9578"
                },
                {
                    name: "Raphael Varane",
                    position: "RCB",
                    rating: 84,
                    realLifeTeam: "Manchester United",
                    FBref_id: "9f8e9423"
                },
                {
                    name: "Youri Tielemans",
                    position: "CM",
                    rating: 84,
                    realLifeTeam: "Leicester City",
                    FBref_id: "56f7a928 "
                },
                {
                    name: "Joel Matip",
                    position: "LCB",
                    rating: 84,
                    realLifeTeam: "Liverpool",
                    FBref_id: "b217ef29"
                },
                {
                    name: "Wilfred Ndidi",
                    position: "CDM",
                    rating: 90,
                    realLifeTeam: "Leicester City",
                    FBref_id: "6b47c5db"
                },
                {
                    name: "Kai Havertz",
                    position: "CAM",
                    rating: 84,
                    realLifeTeam: "Chelsea",
                    FBref_id: "fed7cb61"
                },
                {
                    name: "Jadon Sancho",
                    position: "RW",
                    rating: 84,
                    realLifeTeam: "Manchester United",
                    FBref_id: "dbf053da"
                },
                {
                    name: "Kieran Trippier",
                    position: "RB",
                    rating: 84,
                    realLifeTeam: "Newcastle United",
                    FBref_id: "21512407"
                },
                {
                    name: "Roberto Firmino",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Liverpool",
                    FBref_id: "4c370d81"
                },
                {
                    name: "Jordan Henderson",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Liverpool",
                    FBref_id: "935e6b8f"
                },
                {
                    name: "John Stones",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Manchester City",
                    FBref_id: "5eecec3d"
                },
                {
                    name: "Gabriel Jesus",
                    position: "ST",
                    rating: 83,
                    realLifeTeam: "Arsenal",
                    FBref_id: "b66315ae"
                },
                {
                    name: "Hakim Ziyech",
                    position: "RW",
                    rating: 83,
                    realLifeTeam: "Chelsea",
                    FBref_id: "6622454d"
                },
                {
                    name: "Ruben Neves",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Wolverhampton Wanderers",
                    FBref_id: "44bfb6c5"
                },
                {
                    name: "Pierre-Emile Hojbjerg",
                    position: "CM",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "8b04d6c1"   
                },
                {
                    name: "Ricardo Pereira",
                    position: "RB",
                    rating: 83,
                    realLifeTeam: "Leicester City",
                    FBref_id: "75a72a99"
                },
                {
                    name: "Diego Carlos",
                    position: "LCB",
                    rating: 83,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "b4a014b1"
                },
                {
                    name: "Lucas Paqueta",
                    position: "CAM",
                    rating: 82,
                    realLifeTeam: "West Ham United",
                    FBref_id: "9b6f7fd5"
                },
                {
                    name: "Wilfried Zaha",
                    position: "LW",
                    rating: 82,
                    realLifeTeam: "Crystal Palace",
                    FBref_id: "b2bc3b1f"
                },
                {
                    name: "Lucas Digne",
                    position: "LB",
                    rating: 82,
                    realLifeTeam: "Aston Villa",
                    FBref_id: "1b84dbe1"
                },
                {
                    name: "Ben Chilwell",
                    position: "RB",
                    rating: 82,
                    realLifeTeam: "Chelsea",
                    FBref_id: "d2424d1b"
                },
                {
                    name: "Bukayo Saka",
                    position: "RW",
                    rating: 82,
                    realLifeTeam: "Arsenal",
                    FBref_id: "bc7dc64d"
                },
                {
                    name: "Idrissa Gueye",
                    position: "CDM",
                    rating: 82,
                    realLifeTeam: "Everton",
                    FBref_id: "72c812f3"
                },
                {
                    name: "Christian Romero",
                    position: "RCB",
                    rating: 83,
                    realLifeTeam: "Tottenham Hotspur",
                    FBref_id: "a3d94a58"
                },
                {
                    name: "Azpilicueta",
                    position: "RCB",
                    rating: 82,
                    realLifeTeam: "Chelsea",
                    FBref_id: "53cad200"
                }
                
];




const draftedPlayers = {};
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.username)


// Function to generate player list
function generatePlayerList() {
    const playerListDiv = document.getElementById('playerList');
    playerListDiv.innerHTML = '';
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        
        playerDiv.innerHTML = `
            <span>${player.name} - ${player.position} (${player.rating})</span>
            <button onclick="draftPlayer('${player.name}', '${player.position}', '${player.rating}', '${player.realLifeTeam}', '${player.FBref_id}')">Draft</button>

        `;
        playerListDiv.appendChild(playerDiv);
    });
}

function updateDraftedPlayerList(position) {
    // Get the container for the drafted players
    const draftedPlayersContainer = document.getElementById(`userBox1`);
    

    // Iterate through the positions and update the display
        const playerName = user.team.ST.name;
        if (position === "ST" && playerName !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            playerDiv.textContent = `${"ST"}: ${playerName}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName2 = user.team.RW.name;
        if (position === "RW" && playerName2 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            playerDiv.textContent = `${"RW"}: ${playerName2}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName3 = user.team.LW.name;
        if (position === "LW" && playerName3 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"LW"}: ${playerName3}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName4 = user.team.CAM.name;
        if (position === "CAM" && playerName4 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"CAM"}: ${playerName4}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName5 = user.team.CM.name;
        if (position === "CM" && playerName5 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"CM"}: ${playerName5}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName6 = user.team.CDM.name;
        if (position === "CDM" && playerName6 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"CDM"}: ${playerName6}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName7 = user.team.RCB.name;
        if (position === "RCB" && playerName7 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"RCB"}: ${playerName7}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName8 = user.team.LCB.name;
        if (position === "LCB" && playerName8 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"LCB"}: ${playerName8}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName9 = user.team.RB.name;
        if (position === "RB" && playerName9 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"RB"}: ${playerName9}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName10 = user.team.LB.name;
        if (position === "LB" && playerName10 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"LB"}: ${playerName10}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }

        const playerName11 = user.team.GK.name;
        if (position === "GK" && playerName11 !== ' ') {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('userBox');
            
            playerDiv.textContent = `${"GK"}: ${playerName11}`;
            draftedPlayersContainer.appendChild(playerDiv);
        }
    
}


async function draftPlayer(playerName,position,rating,realLifeTeam,FBref_id) {
    //console.log(user.team.ST.name)
    let validPick=false;

    
    if (position==="ST" && user.team.ST.name==" "){
        user.team.ST.name=playerName
        user.team.ST.position=position
        user.team.ST.rating=rating
        user.team.ST.realLifeTeam=realLifeTeam
        user.team.ST.FBref_id=FBref_id
        
        validPick=true;
        updateDraftedPlayerList(position);
        //console.log(user.team.ST.FBref_i
        
        //console.log(user.username);
    }

    if (position==="RW" && user.team.RW.name==" "){
        user.team.RW.name=playerName
        user.team.RW.position=position
        user.team.RW.rating=rating
        user.team.RW.realLifeTeam=realLifeTeam
        user.team.RW.FBref_id=FBref_id
      
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.RW.FBref_id)
        //console.log(user.username);
    }
    if (position==="LW" && user.team.LW.name==" "){
        user.team.LW.name=playerName
        user.team.LW.position=position
        user.team.LW.rating=rating
        user.team.LW.realLifeTeam=realLifeTeam
        user.team.LW.FBref_id=FBref_id
        
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.LW.FBref_id)
        //console.log(user.username);
    }
    if (position==="CAM" && user.team.CAM.name==" "){
        user.team.CAM.name=playerName
        user.team.CAM.position=position
        user.team.CAM.rating=rating
        user.team.CAM.realLifeTeam=realLifeTeam
        user.team.CAM.FBref_id=FBref_id
    
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.CAM.FBref_id)
        //console.log(user.username);
    }
    if (position==="CM" && user.team.CM.name==" "){
        user.team.CM.name=playerName
        user.team.CM.position=position
        user.team.CM.rating=rating
        user.team.CM.realLifeTeam=realLifeTeam
        user.team.CM.FBref_id=FBref_id

        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.CM.FBref_id)
       // console.log(user.username);
    }
    if (position==="CDM" && user.team.CDM.name==" "){
        user.team.CDM.name=playerName
        user.team.CDM.position=position
        user.team.CDM.rating=rating
        user.team.CDM.realLifeTeam=realLifeTeam
        user.team.CDM.FBref_id=FBref_id;
     
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.CDM.FBref_id)
        //console.log(user.username);
    }
    if (position==="RCB" && user.team.RCB.name==" "){
        user.team.RCB.name=playerName
        user.team.RCB.position=position
        user.team.RCB.rating=rating
        user.team.RCB.realLifeTeam=realLifeTeam
        user.team.RCB.FBref_id=FBref_id
    
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.RCB.FBref_id)
        //console.log(user.username);
    }
    if (position==="LCB" && user.team.LCB.name==" "){
        user.team.LCB.name=playerName
        user.team.LCB.position=position
        user.team.LCB.rating=rating
        user.team.LCB.realLifeTeam=realLifeTeam
        user.team.LCB.FBref_id=FBref_id
      
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.LCB.FBref_id)
        //console.log(user.username);
    }
    if (position==="RB" && user.team.RB.name==" "){
        user.team.RB.name=playerName
        user.team.RB.position=position
        user.team.RB.rating=rating
        user.team.RB.realLifeTeam=realLifeTeam
        user.team.RB.FBref_id=FBref_id
       
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.RB.FBref_id)
        //console.log(user.username);
    }
    if (position==="LB" && user.team.LB.name==" "){
        user.team.LB.name=playerName
        user.team.LB.position=position
        user.team.LB.rating=rating
        user.team.LB.realLifeTeam=realLifeTeam
        user.team.LB.FBref_id=FBref_id
   
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.team.LB.FBref_id)
        //console.log(user.username);
    }
    if (position==="GK" && user.team.GK.name==" "){
        user.team.GK.name=playerName
        user.team.GK.position=position
        user.team.GK.rating=rating
        user.team.GK.realLifeTeam=realLifeTeam
        user.team.GK.FBref_id=FBref_id
     
        updateDraftedPlayerList(position);
        validPick=true;
        //console.log(user.username);
    }
    const positionElement = document.getElementById(`${user}-${position}`);
    
    if (validPick) {
        turn = (turn + 1) % 4;
        updateDraftingBoxBackground(turn);
    }

    console.log(user.team);
    const response2 = await fetch('/stats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({FBref_id}),
    });
    let fpoints = "";
    if (response2.ok){
        const data = await response2.json();
        const goals = data.goals.split(' ');
        const assists = data.assists.split(' ');
        const shots= data.shots.split(' ');
        const touches = data.touches.split(' ');
        const tackles = data.tackles.split(' ');
        const passComplete = data.passComplete.split(' ');
        const saves= data.saves.split(' ');
        const goalsAgainst = data.goalsAgainst.split(' ');
        console.log("goal: ", goals)
        console.log("assist: ",assists);
        console.log("shots: ", shots);
        console.log("touches: ",touches);
        console.log("tackles: ", tackles);
        console.log("passComplete: ",passComplete);
        console.log("saves: ", saves);
        console.log("goalsAgainst: ",goalsAgainst);
       
        for (let i = 0; i<8; i++){
            console.log()
            if (position == "GK"){
                fpoints += (parseInt(saves[i]*6)+parseInt(goalsAgainst[i]*-1));
            }   
            else{
                fpoints += ((parseInt(goals[i])*12)+(parseInt(assists[i])*6)+(parseInt(shots[i]*2))+(parseInt(touches[i])*0.1)+(parseInt(tackles[i])*2)+(parseInt(passComplete[i])*0.25))+" ";
            }
        }
        console.log(fpoints)
    }

        const response = await fetch('/draft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user, playerName, position, rating, realLifeTeam, FBref_id, fpoints}),
        });

    


    

}
function updateDraftingBoxBackground(turn) {
    if (turn<4){
        const draftingBox = document.getElementById(`userBox${turn + 1}`);
        draftingBox.style.backgroundColor = 'yellow';
    }
    else{
        const draftingBox = document.getElementById(`userBox${1}`);
        draftingBox.style.backgroundColor = 'yellow';
    }
    if (turn!=0){
        const draftingBoxOld = document.getElementById(`userBox${turn}`);
        draftingBoxOld.style.backgroundColor = 'white';
    }
    else{
        const draftingBoxOld = document.getElementById(`userBox${4}`);
        draftingBoxOld.style.backgroundColor = 'white';
    }
}

function removePlayer(playerName) {
    const playerListDiv = document.getElementById('playerList');

    // Iterate through the player list and find the player with the specified name
    for (let i = 0; i < playerListDiv.children.length; i++) {
        const playerDiv = playerListDiv.children[i];
        const playerSpan = playerDiv.querySelector('span');
        const nameInList = playerSpan.textContent.split(' - ')[0].trim();
        console.log(nameI)
        if (nameInList === playerName) {
            // Remove the player from the player list
            playerListDiv.removeChild(playerDiv);
            break; // Exit the loop since you found and removed the player
        }
    }
}

// Identify the element to refresh (replace with your actual selector)
//const elementToRefresh = document.getElementById('playerList');
// let playersDrafted=[]
// // Function to fetch and update the element with new content
// function updateElement() {
//   // Send an AJAX request to your server (replace with your actual URL)
//   fetch(`/retrieveDraftedPlayers`)
//     .then(response => response.json())
//     .then(data => {
//       // Update the element's innerHTML with the fetched data
//       playersDrafted = data.playersDrafted.join(', ');
//       //elementToRefresh.innerHTML = data.content;
//     });
//     console.log(playersDrafted);
//     for (let i=0; i<playersDrafted.length; i++){
//         //removePlayer(playerName)
//     }

//     fetch('/retrieveUserTurn')
//     .then(response => response.json())
//     .then(data => {

//       // Update the element's innerHTML with the fetched data
//       elementToRefresh.innerHTML = data.content;
//     });
// }

// // Set an interval to call the update function every second
// const intervalId = setInterval(updateElement, 1000);

// // Optionally, clear the interval when the page is unloaded
// window.addEventListener('unload', () => clearInterval(intervalId));




// Call the function to generate player list when the page loads
window.onload = function () {
    generatePlayerList();
    updateDraftingBoxBackground(turn);

    
    //generateUserDrafts();
    //updateDraftedPlayerList();
};