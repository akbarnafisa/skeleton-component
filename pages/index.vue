<template>
  <div>
    <div class="flex justify-center p-6">
      <button
        class="
          px-6
          py-4
          w-full
          max-w-xs
          text-white
          font-semibold
          tracking-wider
          bg-blue-500
          hover:bg-blue-600
          rounded
        "
        :disabled="!isLoaded"
        @click="onLoad"
      >
        RELOAD
      </button>
    </div>
    <div class="flex flex-wrap justify-around p-4 lg:p-16">
      <Card
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        :is-loaded="isLoaded"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card,
  },
  data() {
    return {
      isLoaded: false,
      items: [
        {
          thumbnail: 'laptop.svg',
          avatar: 'avatar_1.jpeg',
          bgColor: '#BCD1FF',
          tag: 'PRODUCTIVITY',
          date: '3 days ago',
          title: '7 Skills of Highly Effective Programmers',
          desc: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven...',
          author: 'Glen Williams',
        },
        {
          thumbnail: 'socmed.svg',
          avatar: 'avatar_2.jpeg',
          bgColor: '#F395BA',
          tag: 'MEDIA',
          date: '17 days ago',
          title: 'SMM starter pack, part 2: content promotion',
          desc: 'This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.',
          author: 'Patricia Kemp',
        },
        {
          thumbnail: 'business.svg',
          avatar: 'avatar_3.jpeg',
          bgColor: '#D2EBF7',
          tag: 'BUSINESS',
          date: '1 month ago',
          title: '11 Things I Wish I Knew When I Started My Business',
          desc: 'Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from...',
          author: 'Lisa Barnes',
        },
        {
          thumbnail: 'socmed.svg',
          avatar: 'avatar_2.jpeg',
          bgColor: '#F395BA',
          tag: 'MEDIA',
          date: '17 days ago',
          title: 'SMM starter pack, part 2: content promotion',
          desc: 'This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media...',
          author: 'Patricia Kemp',
        },
      ],
    }
  },
  mounted() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      this.isLoaded = false
      setTimeout(() => {
        this.isLoaded = true
      }, 3000)
    },
  },
}
</script>
