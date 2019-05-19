<template>
  <div>
    <v-card>
      <v-img
        class="white--text"
        height="400px"
        :src="page_image"
      >
        <v-flex>
            <h3 class="display-3">{{page_title}}</h3>
            <span class="subheading">{{page_description}}</span>
        </v-flex>
      </v-img>
    </v-card>
    <v-tabs fixed-tabs>
      <v-tab
        v-for="section in sections"
        :key="section.id"
        v-on:click="$vuetify.goTo(section.to, scrollOpt)">
        {{ section.title }}
      </v-tab>
    </v-tabs>
    <v-layout text-xs-center mt-5 px-3 py-3 id="aboutme">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            :src="my_icon"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">{{my_name}}</p>
        <p
          class="title font-weight-thin mt-3"
        >{{my_profile}}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout text-xs-center mt-5 px-3 py-3 id="portfolio">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">Portfolio</span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3
        v-for="portfolio in portfolios"
        :key="portfolio.id"
      >
        <v-card>
          <v-img
            :src="portfolio.image"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{portfolio.title}}</h3>
              <div> {{ portfolio.text }} </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout>
        <v-flex></v-flex>
      </v-layout>
    </v-container>  
    <v-divider></v-divider>
    <v-layout text-xs-center mt-5 px-3 py-3 id="history">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">History</span>
      </v-flex>
    </v-layout>
    <div class="my-5">
    <v-timeline class="mt-4">
      <v-timeline-item
        v-for="turning_point in turning_points"
        :key="turning_point.id"
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>{{turning_point.year}}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{turning_point.title}}</v-card-title>
          <v-card-text>
            {{turning_point.text}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
        page_image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        page_title: 'Welcome to the ssbtn`s site',
        page_description: `page_desctiption`,

        sections: [
          {
            id: '1',
            title: 'About Me',
            to: '#aboutme'
          },
                    {
            id: '2',
            title: 'Portfolio',
            to: '#portfolio'
          },
          {
            id: '3',
            title: 'History',
            to: '#history'
          }
        ],

        my_icon: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
        my_name: 'ssbtn',
        my_profile: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n aaaaaaaaaaaa\naaaaaaaaaaaaaaaa',

        portfolios: [
          {
            id: 1,
            image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
            title: 'Kangaroo Valley Safari',
            text: 'Lorem ipsum dolor sit amet.'
          }
        ],

        turning_points: [
          {
            id: 1,
            year: '2018',
            title: 'Kangaroo Valley Safari',
            text: 'Lorem ipsum dolor sit amet.'
          },
          {
            id: 2,
            year: '2019',
            title: 'Kangaroo Valley Safari',
            text: 'Lorem ipsum dolor sit amet.'
          },
          {
            id: 3,
            year: '2020',
            title: 'Kangaroo Valley Safari',
            text: 'Lorem ipsum dolor sit amet.'
          }
        ],

        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        card_text: 'Lorem ipsum dolor sit amet.',

        scrollOpt: {
        duration: 1500,
        offset: 10,
        easing: "easeInOutCubic"
        }
    })
  }
</script>