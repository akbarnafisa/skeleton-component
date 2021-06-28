<template>
  <div>
    <div class="flex justify-center p-6">
      <button
        class="
          mb-9
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
    <div class="flex justify-center mx-auto py-16 bg-white">
      <div class="w-96">
        <div v-if="isLoaded">
          <div class="mb-4 font-title text-3xl">My Awesome Content!</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            praesentium commodi doloribus rerum autem iure sed ab ipsum?
            Suscipit debitis sit quasi eligendi eveniet iusto, provident a
            ratione omnis.
          </div>
        </div>
      </div>

      <div class="ml-9 w-96">
        <div v-if="isLoaded">
          <div class="mb-4 font-title text-3xl">My Awesome Content!</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            praesentium commodi doloribus rerum autem iure sed ab ipsum?
            Suscipit debitis sit quasi eligendi eveniet iusto, provident a
            ratione omnis.
          </div>
        </div>
        <div v-else class="wrapper">
          <div id="spinner"></div>
        </div>
      </div>

      <div class="ml-9 w-96">
        <skeleton :is-loaded="isLoaded" h="32px" w="80%" m="0 0 16px 0">
          <div class="mb-4 font-title text-3xl">My Awesome Content!</div>
        </skeleton>
        <skeleton :is-loaded="isLoaded" :rep="5" m="0 0 8px 0">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            praesentium commodi doloribus rerum autem iure sed ab ipsum?
            Suscipit debitis sit quasi eligendi eveniet iusto, provident a
            ratione omnis.
          </div>
        </skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from '../components/Skeleton.vue'

export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      isLoaded: false,
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
      }, 2000)
    },
  },
}
</script>

<style lang="less" scoped>
@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#spinner {
  min-width: 40px;
  min-height: 40px;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-right: 5px solid #3b82f6;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}
</style>
