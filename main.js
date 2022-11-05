function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia" />
    </li>
  `
}

let delay = -.3;
function createCard(date, day, games) {
  delay = delay + .3;
  return `
        <div class="card" style="animation-delay: ${delay}s;">
          <h2>${date}<span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
        </div>
        `
}
document.querySelector(`#cards`).innerHTML = 
        createCard(
          "21/11",
          "segunda",
          createGame("england", "10:00", "iran") +
            createGame("senegal","13:00", "netherlands") +
            createGame("united states", "16:00", "wales")
        )+
        createCard(
          "22/11",
          "terça",
          createGame("argentina", "07:00", "saudi arabia") +
            createGame("denmark", "10:00", "tunisia") +
            createGame("mexico", "13:00", "poland")
        )+
        createCard(
          "23/11",
          "quarta",
          createGame("germany", "10:00", "japan") +
            createGame("spain", "13:00", "costa rica") +
            createGame("belgium", "16:00", "canada")
        )+
        createCard(
          "24/11",
          "quinta",
          createGame("switzerland", "07:00", "camerron") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        )+
        createCard(
          "28/11",
          "segunda",
          createGame("south korea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguai")
        )+
        createCard(
          "02/12",
          "sexta",
          createGame("south korea", "12:00", "portugal") +
            createGame("ghana", "12:00", "uruguai") +
            createGame("brazil", "16:00", "camerron")
        )

