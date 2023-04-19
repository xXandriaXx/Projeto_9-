// Crie a função addUser()
function addUser() {
  // Obtenha o valor do usuário através das ids  e player2_name_input
  player1_name_input = document.getElementById("player1_name_input").value;
  player2_name_input = document.getElementById("player2_name_input").value;
  // Armazene esses valores localmente
  localStorage.getItem("player1_name_input");
  localStorage.getItem("player2_name_input");
  // Atribua "game_page.html" para window.location
  window.location.replace("game_page.html")
}

