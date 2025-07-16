function carregamento() {
  let Paragrafo = document.getElementById("Paragrafo");
  let Foto = document.getElementById("Foto");
  let data = new Date();
  let hora = data.getHours();
  Paragrafo.innerHTML = `Agora são ${hora} horas!`;
  if (hora >= 0 && hora < 12) {
    Imagem.src = "imagens/imagem3.png";
    document.body.style.background = "#13678a";
  } else if (hora >= 12 && hora < 18) {
    Imagem.src = "imagens/imagem2.png";
    document.body.style.background = "#f2ae2e";
  } else {
    Imagem.src = "imagens/imagem1.png";
    document.body.style.background = "#262626";
  }
}
