<template>
  <header
    v-if="loading"
    style="height: 100vh"
  >
    <v-container class="fill-height">
      <v-row class="fill-height">
        <v-col>
          <v-sheet class="fill-height d-flex align-center justify-center">
            <v-progress-linear
              style="max-width: 300px"
              background-color="secondary"
              color="#fafafa"
              value="30"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class LoadingScreen extends Vue {
  loading = true;

  start () {
    this.loading = true;
  }

  finish () {
    this.loading = false;
  }
}
</script>
