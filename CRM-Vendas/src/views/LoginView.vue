<script setup>
</script>
<template>
    <v-main>
        <v-container 
            class="fill-height d-flex bg-login" 
            fluid="true"
        >
            <div class="gradientOverlay"></div>
            <v-row>
                <v-col cols="4" offset="4">
                    <v-card 
                        variant="outlined"
                        style="background-color: rgba(255, 255, 255, 0.2);"
                        class="pa-8 rounded-xl"
                    >
                        <v-card-text class="text-center text-h3 font-weight-bold">Login</v-card-text>

                        <v-form>
                            <v-row>
                                <v-col cols="12">
                                <v-text-field
                                    class="my-4"
                                    bg-color="#D9D9D9"
                                    variant="solo"
                                    label="Digite seu e-mail"
                                />
                                <v-text-field
                                    class="my-4"
                                    bg-color="#D9D9D9"
                                    variant="solo"
                                    label="Digite sua senha"
                                    type="password"
                                />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="4" offset-md="4">
                                    <v-btn class="my-2 bg-light-green-accent-3 text-white font-weight-bold" elevation="0" variant="outlined" size="large">Enviar</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style scoped>
.bg-login {
  background-image: url('../assets/images/loginBackground.jpg') ;
  background-size: cover;
  background-position: center;
}

.gradientOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  z-index: 0;
}
</style>