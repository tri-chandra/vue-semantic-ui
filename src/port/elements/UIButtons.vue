<script>
import Vue from 'vue'
import UiButton from './UIButton'

var buttonInstance = Vue.extend(UiButton)
export default buttonInstance.extend({
  computed: {
    coreClass: function() { return {ui:true, buttons:true} }
  }
})
</script>
