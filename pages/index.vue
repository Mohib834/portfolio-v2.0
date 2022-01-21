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
            <v-sheet class="fill-height d-flex flex-column justify-center align-center">
              <v-sheet class="text-center my-auto">
                <p
                  class="text-body-1 mb-2 font-weight-medium text--tertiary"
                  style="letter-spacing: 0.4em"
                >
                  Front-End Engineer.
                </p>
                <h1
                  class="text-uppercase mb-6"
                  style="font-size: 4rem; line-height: 78.02px"
                >
                  Mohib Arshi
                </h1>
                <p
                  class="mb-7 text-body-2 text--secondary"
                  style="max-width: 54.375rem;"
                >
                  t is a long established fact that a reader will be distracted by the readable content of a pless normal distribution of letters, as opposed to using 'Content here,
                </p>
                <v-btn
                  outlined
                  height="3.375rem"
                >
                  Work with me
                </v-btn>
              </v-sheet>

              <v-sheet class="text-body-2 mt-auto">
                <a
                  href="mailto:mohibarshi834@gmail.com"
                  class="g-link font-weight-light"
                  style="color: #C6C6C6"
                >mohibarshi834@gmail.com</a>
              </v-sheet>
            </v-sheet>
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
