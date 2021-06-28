<template>
  <div class="flex flex-col items-center">
    <skeleton
      :animation="false"
      w="144px"
      h="144px"
      radius="8px"
      class="mb-6"
    />
    <div class="flex flex-col items-center justify-center w-full">
      <skeleton
        class="w-full"
        skeleton-class="mb-2 mx-auto"
        w="80%"
        h="28px"
        :m="null"
      />
      <skeleton
        class="w-full mb-4"
        skeleton-class="mb-1"
        h="16px"
        :rep="4"
        :m="null"
      />
      <skeleton class="w-full mt" h="44px" />
    </div>
  </div>
</template>

<script>
import Skeleton from './Skeleton.vue'
export default {
  components: {
    Skeleton,
  },
}
</script>
