<template>
      <v-navigation-drawer
        expand-on-hover
        permanent
        rail
        class="rounded-e-xl position-fixed"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="comfortable" nav>
          <v-list-item prepend-icon="mdi-store" title="Vendas" value="sales"></v-list-item>
          <v-list-item prepend-icon="mdi-package-variant" title="Produtos" value="products"></v-list-item>
          <v-list-item prepend-icon="mdi-chart-line" title="Financeiro" value="finance"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup></script>