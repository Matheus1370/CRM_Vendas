<template>
    <v-layout>
        <DrawerComponent></DrawerComponent>
        <v-main>
            <v-row>
                <v-col cols="12">
                    <v-container>
                        <v-card class="text-h5" prepend-icon="mdi-hand-wave" variant="text">
                            <template v-slot:title>
                                <span class="text-h3 ml-1">Bem-vindo(a)</span>
                            </template>
                            <v-card-text class="text-h6">Veja todos os seus resultados em um só lugar</v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10">
                    <v-container class="pl-10 pt-0">
                        <v-card class="bg-grey-darken-1 mb-2 rounded-xl" min-height="300">
                            <v-card-title>Graphic 1</v-card-title>
                        </v-card>
                        <v-card class="bg-grey-darken-1 mb-2 rounded-xl" min-height="300">
                            <v-card-title>Graphic 2</v-card-title>
                        </v-card>
                        <v-card class="bg-grey-darken-1 mb-2 rounded-xl" min-height="300">
                            <v-card-title>Graphic 3</v-card-title>
                        </v-card>
                        <v-card class="bg-grey-darken-1 mb-2 rounded-xl" min-height="300">
                            <v-card-title>Graphic 4</v-card-title>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col cols="2">
                    <v-card class="bg-grey-darken-1 rounded-xl" height="96vh" width="250">
                        <v-card-title>
                            Aside 
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-layout>
    

</template>
<script setup>
import { ref } from "vue";
import DrawerComponent from "../components/DrawerComponent.vue";
</script>
<style scoped>

</style>
