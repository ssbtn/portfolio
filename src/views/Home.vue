<template>
  <div>
    <v-carousel
    :cycle="false"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-flex>
            <h3 class="display-3">Welcome to the site</h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
        </v-flex>
      </v-carousel-item>
    </v-carousel>
    <v-tabs fixed-tabs>
      <v-tab
        v-for="n in 3"
        :key="n"
      >
        Item {{ n }}
      </v-tab>
    </v-tabs>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">Gwen Danielle Merida</p>
        <p
          class="title font-weight-thin mt-3"
        >Hello I'm a Full Stack Web Developer and iOS Developer from Philippines. Have 5 years work experience in IT Industry.</p>
      </v-flex>
    </v-layout>
    <v-timeline>
      <v-timeline-item
        v-for="n in 3"
        :key="n"
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          }
        ]
      }
    }
  }
</script>