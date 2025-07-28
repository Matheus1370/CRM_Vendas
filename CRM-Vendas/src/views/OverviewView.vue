<template>
  <v-main>
    <DrawerComponent></DrawerComponent>
    <v-container>
      <v-row>
        <v-col cols="12" md="8" class="pa-6">
          <h4 class="text-h6 text-grey-darken-1">Visão geral</h4>
          <h1 class="text-h4 font-weight-bold">Bem-vindo ao Painel</h1>
        </v-col>
      </v-row>

      <v-row align="center" class="mt-4" style="justify-content: space-between">
        <v-col cols="12" md="auto">
          <v-card flat color="blue-lighten-5" rounded="lg" width="fit-content">
            <v-btn-toggle
              v-model="toggle"
              mandatory
              color="primary"
              divided
              class="toggle-minimal"
              bg-color="blue-lighten-5">
              <v-btn value="weekly" size="small" variant="plain" class="px-9">
                Semanal
              </v-btn>
              <v-btn value="monthly" size="small" variant="plain" class="px-9">
                Mensal
              </v-btn>
              <v-btn value="yearly" size="small" variant="plain" class="px-9">
                Anual
              </v-btn>
            </v-btn-toggle>
          </v-card>
        </v-col>

        <v-col cols="12" md="auto" class="text-right">
          <v-btn color="primary" variant="flat" class="text-white"
            >Download</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import DrawerComponent from "../components/DrawerComponent.vue";

const toggle = ref("weekly");
</script>

<style scoped>
.v-btn--active {
  background-color: white !important;
  color: #1976d2 !important;
  box-shadow: 0 1px 3px rgba(25, 118, 210, 0.2);
  border-radius: 6px;
  font-weight: 500;
}

.toggle-minimal {
  gap: 2px;
  padding: 4px;
}

.v-btn:hover:not(.v-btn--active) {
  opacity: 0.8;
  background-color: transparent !important;
  color: #1976d2 !important;
}

.v-btn {
  font-size: 0.8rem;
  letter-spacing: normal;
  min-width: auto;
  transition: all 0.2s ease;
}

.v-card {
  border: 1px solid #e3f2fd;
}
</style>
