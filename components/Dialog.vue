<template>
  <div class="dialog">
    <transition name="fade">
      <div v-if="isDisplay" class="overlay" @click="dismiss" />
    </transition>
    <transition name="alert-dialog">
      <div v-if="isDisplay" class="dialog__container">
        <div class="dialog__inner">
          <transition name="fade" mode="out-in">
            <dialog-content />
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SkeletonDialogContent from './SkeletonDialogContent.vue'
import DialogFailed from './DialogFailed.vue'

const DialogContent = () => ({
  component: import('./DialogContent.vue'),
  loading: SkeletonDialogContent,
  error: DialogFailed,
  timeout: 3000,
})

export default {
  components: {
    DialogContent,
  },
  model: {
    event: 'toggle',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDisplay: false,
    }
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.show()
        } else {
          this.hide()
        }
      },
      immediate: true,
    },
    isDisplay: {
      handler(value) {
        this.$emit('toggle', value)
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.isDisplay && this.hide()
  },
  methods: {
    dismiss() {
      this.hide()
    },
    show() {
      if (this.isDisplay) return
      this.isDisplay = true
      const $body = document.querySelector('body')
      $body.classList.add('lock-dialog')
      this.$emit('show')
    },
    hide() {
      if (!this.isDisplay) return
      this.isDisplay = false
      const $body = document.querySelector('body')
      $body.classList.remove('lock-dialog')
      this.$emit('hide')
    },
  },
}
</script>

<style lang="less" scoped>
.lock-dialog {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter,
.fade-leave-active,
.alert-dialog-leave-active {
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}

.alert-dialog-enter-active {
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

.alert-dialog-leave-active {
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

.alert-dialog-enter {
  opacity: 0;
  transform: scale(0.92) translate3d(-50%, -50%, 0) !important;
}

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.48);
}

.dialog {
  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: top left;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 32px);
    max-width: 320px;
    background: white;
    border-radius: 8px;
  }

  &__inner {
    width: 100%;
    padding: 24px;
  }
}
</style>
