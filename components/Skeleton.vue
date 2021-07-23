<template>
  <transition
    name="skeleton"
    mode="out-in"
    :css="transition && hasChild ? true : false"
  >
    <slot v-if="isLoaded" />
    <span v-else>
      <span
        v-for="index in rep"
        :key="index"
        :class="componentClass"
        :style="componentStyle"
      />
    </span>
  </transition>
</template>

<script>
export default {
  props: {
    animation: {
      type: [String, Boolean],
      default: 'wave',
      validator: val => ['wave', false].includes(val),
    },
    h: {
      type: String,
      default: '20px',
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
    m: {
      type: String,
      default: '0px',
    },
    rep: {
      type: Number,
      default: 1,
    },
    radius: {
      type: String,
      default: '4px',
    },
    skeletonClass: {
      type: String,
      default: '',
    },
    transition: {
      type: Boolean,
      default: true,
    },
    w: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    componentClass() {
      return [
        this.skeletonClass,
        'skeleton',
        this.animation ? `skeleton--${this.animation}` : null,
      ]
    },
    componentStyle() {
      return {
        width: this.w,
        height: this.h,
        borderRadius: this.radius,
        margin: this.m,
      }
    },
    hasChild() {
      return this.$slots && this.$slots.default
    },
  },
}
</script>

<style lang="less">
.skeleton-enter-active,
.skeleton-leave-active-active {
  transition: opacity 0.15s ease-in-out;
  -webkit-transition: -webkit-opacity 0.15s ease-in-out;
}

.skeleton-enter,
.skeleton-leave-active {
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  -webkit-transition: -webkit-opacity 0.15s ease-in-out;
}

.skeleton {
  color: transparent;
  display: block;
  user-select: none;
  background: #d1d5db;

  * {
    visibility: hidden;
  }

  &--wave {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    &::after {
      animation: wave 1.5s linear 0s infinite;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.5),
        transparent
      );
      content: '';
      position: absolute;
      transform: translate3d(-100%, 0, 0);
      will-change: transform;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}

@keyframes wave {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  60% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
