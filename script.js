function determinarNivel() {
    var nome = document.getElementById('heroName').value;
    var xp = document.getElementById('heroXP').value;
  
    // Verifica se algum dos campos está vazio
    if (nome.trim() === '' && xp.trim() === '') {
      alert('Digite o nome e o nível do herói!');
      return;
    } else if (nome.trim() === '') {
      alert('Digite o nome do herói!');
      return;
    } else if (xp.trim() === '') {
      alert('Digite o nível do herói!');
      return;
    }
  
    xp = parseInt(xp);
  
    var nivel;
  
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
  
    var resultText = document.getElementById('resultText');
    resultText.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
  
    var resultSection = document.querySelector('.result');
    resultSection.classList.add('active');
  }
  