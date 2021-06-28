<template>
  <div>
    <div class="font-title opacity-0">test</div>
    <div class="font-body opacity-0">test</div>
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
        @click="onOpenDialog"
      >
        OPEN DIALOG
      </button>
    </div>
    <dialog-vue v-model="isDialogOpen" />
  </div>
</template>

<script>
import DialogVue from '../components/Dialog.vue'

export default {
  components: {
    DialogVue,
  },
  data() {
    return {
      isDialogOpen: false,
    }
  },
  methods: {
    onOpenDialog() {
      this.isDialogOpen = true
    },
  },
}
</script>
