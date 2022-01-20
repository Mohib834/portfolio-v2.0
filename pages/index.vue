<template>
  <Fragment>
    <header
      id="header"
    >
      <v-container class="fill-height">
        <v-row>
          <v-col>
            <nav class="py-5">
              <v-sheet class="d-flex justify-center">
                <a
                  class="logo rounded-circle text-body-2 d-flex justify-center align-center"
                  href="/"
                >
                  MA
                </a>
              </v-sheet>
            </nav>
          </v-col>
        </v-row>
        <v-row class="fill-height">
          <v-col>
            H
          </v-col>
        </v-row>
      </v-container>
    </header>
  </Fragment>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { Fragment } from 'vue-frag';

@Component({
  components: {
    Fragment
  }
})
export default class Index extends Vue {
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
#header{
  height: 100vh;
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
