<script>
import Vue from 'vue'
import UiLabel from './UILabel'

var labelInstance = Vue.extend(UiLabel)
export default labelInstance.extend({
  computed: {
    coreClass() {
      return 'labels'
    }
  }
})
</script>
