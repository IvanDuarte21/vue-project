<template>
  <div class="header">
    <p class="img-header"><img src="./imagens/align-justify.svg" alt="" /></p>
    <p class="utility">Utilitários</p>
    <p class="barra">/</p>
    <p class="users">Usuários</p>
    <p class="manager">Manager</p>
  </div>
  <div class="header-lefth">
    <div class="ordinary">
      <p><img src="./imagens/Vector.svg" alt="" /></p>
      <p><img src="./imagens/Vector (2).svg" alt="" /></p>
      <p><img src="./imagens/cifrao.svg" alt="" /></p>
      <p><img src="./imagens/menina.svg" alt="" /></p>
      <p><img src="./imagens/lista.svg" alt="" /></p>
      <div class="circle">
        <p><img src="./imagens/setins.svg" alt="" /></p>
      </div>
    </div>
    <div class="logo">
      <img src="./imagens/Ellipse 18.svg" alt="" />
    </div>
  </div>
  <div class="center-header">
    <p>Usuários</p>
    <button><img src="./imagens/cruz.svg" alt="" /></button>
  </div>
  <div class="fantasma">
    <p><img src="./imagens/fantama1.png" alt="" /></p>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color: #007ad6;
}

.header p {
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  line-height: 25.1px;
  font-family: "Mulish";
}

.img-header {
  margin-left: -40px;
  margin-top: 5px;
}

.utility {
  text-decoration: underline;
  margin-right: 5px;
  margin-left: 5px;
}

.barra {
  margin-left: -40px;
}
.users {
  margin-left: -40px;
}

.manager {
  margin-left: 1400px;
}

.header-lefth {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0091ff;
  height: 870px;
  width: 50px;
}

.header-lefth p {
  margin-top: 20px;
  margin-left: 10px;
}

.circle {
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 90, 90, 0.531);
  width: 40px;
  height: 40px;
  border-radius: 15px;
}

.circle img {
  margin-right: 10px;
}

.ordinary p {
  margin-top: 40px;
  margin-bottom: 35px;
}

.logo {
  margin-left: 4px;
  margin-bottom: 9px;
}

.center-header {
  display: flex;
  justify-content: start;
  margin-top: -930px;
  margin-left: 60px;
  align-items: center;
  height: 224px;
  gap: 5px;
}

.center-header p {
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  line-height: 22.59px;
  font-family: "Mulish";
}

button {
  width: 40px;
  height: 40px;
  margin-left: 300px;
  background-color: #0077ff;
  border-radius: 5px;
  border-color: transparent;
}

.fantasma {
  display: flex;
  justify-content: center;
  margin: 210px;
}
</style>
