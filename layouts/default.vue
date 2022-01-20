<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {}
</script>

<style lang="scss">
// Global styles
@import '@/assets/main.scss';
</style>
