<template>
  <header class="fill-height">
    <v-container class="fill-height">
      <v-row>
        <v-col>
          <v-sheet class="fill-height d-flex flex-column justify-center align-center">
            <v-sheet
              id="monster"
              ref="monster"
              class="text-center my-auto"
              style="position: relative"
            >
              <p
                ref="top-title"
                class="text-body-1 mb-2 font-weight-medium text--tertiary"
                style="letter-spacing: 0.4em"
              >
                <span
                  ref="top-title-start"
                  class="d-inline-block"
                >Front-End</span> <span
                  ref="top-title-end"
                  class="d-inline-block"
                >Engineer.</span>
              </p>
              <h1
                ref="main-title"
                class="text-uppercase mb-4"
                style="font-size: 4rem; line-height: 78.02px"
              >
                <span
                  ref="main-title-start"
                  class="d-inline-block"
                >Mohib</span> <span
                  ref="main-title-end"
                  class="d-inline-block"
                >Arshi</span>
              </h1>
              <p
                ref="content"
                class="mb-8 text-body-2 text--secondary"
                style="max-width: 40rem;"
              >
                <span
                  ref="content-first"
                  class="d-inline-block"
                >Prolific, Full stack engineer with a passion for clean coding</span><br>
                <span
                  ref="content-last"
                  class="d-inline-block"
                >styles and building world class web applications</span>
              </p>

              <v-sheet
                ref="fireball"
                color="#737373"
                elevation="3"
                width="50"
                height="50"
                style="position: absolute; bottom: 0; opacity: 0"
                class="rounded-circle"
              />

              <p
                ref="breath-left"
                class="breath"
              >
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
              </p>

              <p
                ref="breath-middle"
                class="breath"
              >
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
              </p>

              <p
                ref="breath-right"
                class="breath"
              >
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
              </p>

              <v-btn
                ref="cta"
                outlined
                height="3.375rem"
                :disabled="disableCTA"
                @click="transform"
              >
                <span ref="cta-content">Click here</span>
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
</template>

<script lang='ts'>
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import { gsap } from 'gsap';

@Component
export default class TheHeader extends Vue {
  @Ref('top-title') topTitle!: HTMLParagraphElement;
  @Ref('main-title') mainTitle!: HTMLHeadingElement;
  @Ref('content') content!: HTMLParagraphElement;
  @Ref('cta') cta!: Vue;
  @Ref('cta-content') ctaContent!: HTMLSpanElement;
  @Ref('main-title-start') mainTitleStart!: HTMLSpanElement;
  @Ref('main-title-end') mainTitleEnd!: HTMLSpanElement;
  @Ref('top-title-start') topTitleStart!: HTMLSpanElement;
  @Ref('top-title-end') topTitleEnd!: HTMLSpanElement;
  @Ref('content-first') contentFirst!: HTMLSpanElement;
  @Ref('content-last') contentLast!: HTMLSpanElement;
  @Ref('breath-middle') breathMiddle!: HTMLParagraphElement;
  @Ref('breath-left') breathLeft!: HTMLParagraphElement;
  @Ref('breath-right') breathRight!: HTMLParagraphElement;
  @Ref('monster') monster!: any;
  @Ref('fireball') fireball!: Vue;

  disableCTA = false;

  transform () {
    this.disableCTA = true;

    const tl = gsap.timeline();

    // Swapping position of content and cta
    tl
      .add('start')
      .to(this.content, { y: '100', duration: 0.5 }, 'start')
      .to(this.cta.$el, { y: '-100', duration: 0.3 }, 'start')
      .set(this.ctaContent, { text: 'X' })
      .add('upperface-start')
      .to(this.mainTitleStart, { position: 'relative', left: -70, text: 'I' }, 'upperface-start')
      .to(this.mainTitleEnd, { position: 'relative', right: -70, text: 'I' }, 'upperface-start')
      .to(this.mainTitleStart, { rotation: 90 }, 'upperface-start+=.5')
      .to(this.mainTitleEnd, { rotation: 90 }, 'upperface-start+=.5')
      .to(this.topTitleStart, { position: 'relative', left: -45, rotation: 30 }, 'upperface-start')
      .to(this.topTitleEnd, { position: 'relative', right: -40, rotation: -30 }, 'upperface-start');

    // tl.eventCallback('onComplete', this.moveMonster);
  }

  moveMonster () {
    const tl = gsap.timeline({ repeat: -1, repeatRefresh: true, delay: 0 });

    tl
      .to(this.monster.$el, { position: 'relative', left: this.monster.$el.offsetLeft, duration: 4, ease: 'none' })
      .to(this.monster.$el, { left: -this.monster.$el.offsetLeft, duration: 4, ease: 'none' });

    // tl.eventCallback('onRepeat', this.shootFireballs);
  }

  shootFireballs () {
    const tl = gsap.timeline();

    tl.to(this.contentFirst, { y: -20, scaleX: 0.8 })
      .to(this.contentLast, { y: 20, scaleX: 0.8 }, '<')
      .fromTo(this.breathLeft.children,
        { position: 'absolute', left: this.content.offsetWidth / 2 - 100, bottom: -200, opacity: 1, delay: 0.4 },
        { left: this.content.offsetWidth / 2, bottom: 0, opacity: 0, stagger: 0.2, duration: 0.2 }
      )
      .fromTo(this.breathMiddle.children,
        { position: 'absolute', left: this.content.offsetWidth / 2, bottom: -200, opacity: 1 },
        { bottom: 0, opacity: 0, stagger: 0.2, duration: 0.2 },
        '<'
      )
      .fromTo(this.breathRight.children,
        { position: 'absolute', left: this.content.offsetWidth / 2 + 100, bottom: -200, opacity: 1 },
        { left: this.content.offsetWidth / 2, bottom: 0, opacity: 0, stagger: 0.2, duration: 0.2 },
        '<'
      )
      .to(this.contentFirst, { y: 0, scaleX: 1 })
      .to(this.contentLast, { y: 0, scaleX: 1 }, '<')
      .fromTo(this.fireball.$el,
        { x: this.content.offsetWidth / 2 - 10 },
        { y: window.screen.height / 2, opacity: 1, duration: 1, repeatRefresh: true },
        '<'
      )
      .to(this.fireball.$el, { opacity: 0 })
      .to(this.fireball.$el, { y: 0 });
  }
}
</script>

<style lang="scss" scoped>
.breath {
  bottom: -200px;
  color: #737373;
}
.breath span {
  opacity: 0;
  position: absolute;
  color: #737373;
}
</style>
