<template>
  <div class="ui search">
    <slot></slot>
    <transition name="slide-fade">
      <div
        v-show="displayResult"
        class="results"
        style="display: block !important">
        <slot name="results" :result="data">

        </slot>
        <a v-if="$slots.action" class="action">
          <slot name="action"></slot>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: [Object, Array, String]
  },
  data() {
    return {
      data: null,
      displayResult: false
    }
  },
  computed: {

  },
  methods: {
    onFocus() {
      this.displayResult = true
    },
    onBlur() {
      this.displayResult = false
    }
  },
  created() {
    this.data = this.value
    this.$on('focus', this.onFocus)
    this.$on('blur', this.onBlur)
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
