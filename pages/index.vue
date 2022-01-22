<template>
  <div
    style="height: 100vh"
    class="d-flex flex-column"
  >
    <nav class="py-5">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet class="d-flex justify-center">
              <a
                class="logo rounded-circle text-body-2 d-flex justify-center align-center"
                href="/"
              >
                MA
              </a>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </nav>

    <TheHeader />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import TheHeader from '@/components/TheHeader.vue';

@Component({
  components: {
    TheHeader
  }
})
export default class Index extends Vue {
  loading = true;
}
</script>

<style lang="scss" scoped>
#header{
  height: 100vh;
  transition: all .5s;
}

.hide{
  opacity: 0;
}

.logo{
    width: 50px;
    height: 50px;
    background: var(--v-secondary-base);
    color: #C6C6C6;
    text-decoration: none;
    font-weight: 300;
}
</style>
