<template>
  <div :class="{ui:true, accordion:true, styled:styled, fluid:fluid, inverted:inverted}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
    exclusive: Boolean,
    styled: Boolean,
    fluid: Boolean,
    inverted: Boolean
  },
  data: function() {
    return {
      modelCache: []
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function(val) {
        if (this.exclusive) {
          var retVal = []
          var trueCount = 0
          var valTrueCount = 0
          for (let idx in val) {
            if (!!val[idx] === true) valTrueCount++
            if (!!this.modelCache[idx] === !!val[idx]) {
              retVal.push(false)
            } else {
              trueCount++
              retVal.push(true)
            }
          }

          if (valTrueCount === 0) {
            this.modelCache = []
            for (let idx in val) {
              this.modelCache.push(val[idx])
            }

            this.$emit('input', val)
          } else if (trueCount > 0) {
            this.modelCache = []
            for (let idx in retVal) {
              this.modelCache.push(retVal[idx])
            }

            this.$emit('input', retVal)
          }
        } else {
          this.cacheModel()
        }
      }
    }
  },
  created: function() {
    this.cacheModel()
  },
  methods: {
    cacheModel: function() {
      this.modelCache = []
      for (let idx in this.value) {
        this.modelCache.push(this.value[idx])
      }
    }
  }
}
</script>
