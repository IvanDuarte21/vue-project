<template style="margin: 0px">
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet"
  />

  <main>
    <div class="box-lefth">
      <img src="./assets/tablet.svg" alt="" />
    </div>
    <div class="box-rigth">
      <h1>Login</h1>
      <form action="">
        <div class="campo-1">
          <p class="descripty">Email</p>
          <input type="email" />
        </div>
        <div class="campo-2">
          <p class="descripty">Senha</p>
          <input type="password" />
        </div>
      </form>
      <div class="keyRemember">
        <p>Esqueceu a Senha?</p>
        <p><button @click="entrar">Entrar</button></p>
      </div>
      <div class="footer">
        <img src="./assets/footer.svg" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Footer from "./assets/footer.svg";

import { useRouter } from "vue-router";

const router = useRouter();

const entrar = () => {
  // Redireciona para a rota desejada, por exemplo:
  router.push("/home");
};


</script>
<style scoped>
main {
  width: 100%;
  display: flex;
}

.box-lefth {
  height: 100vh;
  width: 55%;
}

.box-lefth img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.box-rigth {
  width: 45%;
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box-rigth h1 {
  color: #000000;
  font-family: "Mulish";
  font-weight: 900;
  font-size: 32px;
  line-height: 40.16px;
  margin-top: 64px;
  margin-bottom: 64px;
}

.box-rigth p {
  font-family: "Mulish";
  font-weight: 900;
  font-size: 12px;
  line-height: 15.06px;
}

.box-rigth input {
  color: #e9eef2;
  width: 375px;
  height: 35px;
}

input {
  color: black;
}
.campo-1 input {
  color: black;
}
.campo-2 {
  margin-top: 59px;
}

.campo-2 input {
  color: black;
}
.descripty {
  display: flex;
  margin-bottom: 8px;
}

.keyRemember {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.keyRemember p {
  color: #000000;
  font-family: "Mulish";
  font-weight: 900;
  font-size: 16px;
  line-height: 20.08px;
}

.keyRemember button {
  border-radius: 4px;
  gap: 10px;
  color: #ffffff;
  margin-left: 78px;
  width: 149px;
  height: 48px;
  background-color: #070202da;
}

.keyRemember p button {
  font-family: "Mulish";
  font-weight: 900;
  font-size: 12px;
  line-height: 15.06px;
}
.footer {
  margin-top: 118px;
  width: 100%;
}
.footer img {
  width: 100%;
}
</style>
