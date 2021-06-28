<template>
  <div
    class="
      flex flex-col
      mb-6
      w-full
      max-w-sm
      bg-white
      rounded-2xl
      shadow-md
      overflow-hidden
      lg:flex-row lg:mb-16 lg:mx-auto lg:max-w-screen-lg lg:h-96
    "
  >
    <skeleton
      :animation="false"
      :is-loaded="isLoaded"
      skeleton-class="w-full h-56 w-36 lg:w-96 lg:h-96"
      :w="null"
      :h="null"
      radius="0px"
    >
      <div
        class="flex items-center justify-center w-full h-56 lg:max-w-sm lg:h-96"
        :style="{
          background: item.bgColor,
        }"
      >
        <img
          class="w-36 lg:w-60"
          :src="require(`~/assets/${item.thumbnail}`)"
        />
      </div>
    </skeleton>

    <div class="relative flex-1 p-6 pb-12 lg:p-8">
      <div class="flex justify-between mb-3 lg:mb-6">
        <skeleton
          skeleton-class="w-28 h-4 lg:h-7"
          :w="null"
          :h="null"
          :is-loaded="isLoaded"
        >
          <div
            class="
              text-gray-500
              font-body
              text-xs
              font-semibold
              uppercase
              lg:text-xl
            "
          >
            {{ item.tag }}
          </div>
        </skeleton>
        <skeleton
          skeleton-class="w-24 h-4 lg:h-7"
          :w="null"
          :h="null"
          :is-loaded="isLoaded"
        >
          <div class="text-gray-500 font-body text-xs lg:text-xl">
            {{ item.date }}
          </div>
        </skeleton>
      </div>
      <div class="flex flex-col">
        <skeleton
          :is-loaded="isLoaded"
          skeleton-class="w-full h-7 lg:h-9"
          class="mb-3"
          :w="null"
          :h="null"
        >
          <div class="h mb-1 font-title text-xl lg:mb-4 lg:text-4xl">
            {{ item.title }}
          </div>
        </skeleton>
        <skeleton
          class="mb-6"
          :is-loaded="isLoaded"
          skeleton-class="w-full h-3 lg:h-5"
          :w="null"
          :h="null"
          m="0 0 8px 0"
          :rep="4"
        >
          <div class="mb-6 text-gray-900 font-body text-sm lg:text-lg">
            {{ item.desc }}
          </div>
        </skeleton>
      </div>
      <div
        class="
          absolute
          bottom-0
          left-0
          flex
          items-center
          justify-between
          pb-6
          px-6
          w-full
          lg:px-8
        "
      >
        <div class="flex items-center text-center">
          <skeleton
            :is-loaded="isLoaded"
            skeleton-class="w-8 h-8 lg:w-11 lg:h-11"
            :w="null"
            :h="null"
            radius="100%"
            class="mr-3"
          >
            <div
              :style="{
                backgroundImage: `url(${require(`~/assets/${item.avatar}`)})`,
              }"
              class="
                mr-3
                w-8
                h-8
                bg-cover bg-center
                rounded-full
                lg:w-11 lg:h-11
              "
            ></div>
          </skeleton>

          <skeleton
            :is-loaded="isLoaded"
            skeleton-class="w-16 h-4 lg:h-7 lg:w-28"
            :w="null"
            :h="null"
          >
            <div class="text-blue-500 text-xs font-semibold lg:text-xl">
              {{ item.author }}
            </div>
          </skeleton>
        </div>
        <skeleton
          :is-loaded="isLoaded"
          skeleton-class="w-16 h-4 lg:h-7 lg:w-28"
          :w="null"
          :h="null"
        >
          <div class="flex items-center">
            <div class="mr-1 text-blue-500 text-xs font-semibold lg:text-xl">
              Read More
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#3b82f6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.17 13L12.59 16.59L14 18L20 12L14 6L12.59 7.41L16.17 11H4V13H16.17Z"
                fill="#3b82f6"
              />
            </svg>
          </div>
        </skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from './Skeleton.vue'

export default {
  name: 'Card',
  components: {
    Skeleton,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isLoaded: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
