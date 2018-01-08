<script>
import Vue from 'vue'
import UiIcon from './UIIcon'

var iconInstance = Vue.extend(UiIcon)
export default iconInstance.extend({
  computed: {
    coreClass: function() { return 'icons' }
  },
  render(h) {
    return h(
      'i',
      {
        'class': this.classList
      },
      this.$slots.default
    )
  }
})
</script>
