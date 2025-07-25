<template>
  <div class="container-login">
    <v-container
      class="fill-height"
      fluid
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      ">
      <v-card
        variant="outlined"
        width="100%"
        max-width="400px"
        class="pa-6 card-login"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          border: #fff 1px solid;
        ">
        <v-card-title>LOGIN</v-card-title>
        <v-text-field
          v-model="email"
          label="Digite seu E-mail"
          variant="solo-filled"
          class="mb-4"
          density="comfortable"
          style="width: 80%; position: relative"
          hide-details />

        <v-text-field
          v-model="senha"
          label="Digite sua Senha"
          variant="solo-filled"
          class="mb-4"
          density="comfortable"
          hide-details
          style="width: 80%" />

        <v-btn
          @click="handleEnviarLogin"
          class="white--text"
          style="font-weight: 800; background-color: #26d403; color: #fff"
          block>
          Enviar
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const senha = ref("");

const verificaCampos = () => {
  try {
    if (!email.value || !senha.value) {
      alert("Preencha todos os campos!");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Erro na verificação:", error);
    return false;
  }
};
const handleEnviarLogin = async () => {
  if (!verificaCampos()) return;

  try {
    const resposta = await fetch("http://api/aqui", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        senha: senha.value,
      }),
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log("Login realizado com sucesso:", dados);
      // redirecionamento, token, etc.
    } else {
      console.error("Erro ao fazer login:", dados.message || dados);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
}
.container-login {
  background-image: url("../assets/login.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-login {
  background-color: rgba(217, 217, 217, 0.034);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}
</style>
