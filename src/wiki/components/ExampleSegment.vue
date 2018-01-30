<template>
<div>
  <div
      v-for="(item, idx) in transformedNote"
      :key="idx"
      class="ui info ignored message">{{item}}</div>

  <div :class="`html ui top attached ${inverted?'inverted':''} segment custom`">
    <preview-result v-model="value"></preview-result>
    <sui-label attached="top" class="custom-label">
      Example
      <sui-icon @click.native="copyClicked" value="copy link" class="custom-action" />
      <sui-icon @click.native="codeClicked" value="code" class="custom-action" />
    </sui-label>
  </div>
  <div class="ui bottom attached segment" v-if="showCode">
<preview-code v-model="value" />
  </div>
</div>
</template>

<script>
import Prism from 'prismjs'
import PreviewResult from '@/wiki/components/PreviewResult'
import PreviewCode from '@/wiki/components/PreviewCode'

export default {
  name: 'ExampleSegment',
  components: {PreviewResult, PreviewCode},
  props: {
    value: {
      type: [String, Object],
      default: '<!-- -->'
    },
    inverted: Boolean,
    note: [String, Array]
  },
  data() {
    return {
      showCode: false
    }
  },
  computed: {
    transformedNote() {
      if (Object.prototype.toString.call(this.note) === '[object Array]') {
        return this.note
      } else if (this.note) {
        let retVal = []
        retVal.push(this.note)
        return retVal
      } else {
        return []
      }
    }
  },
  methods: {
    copyClicked() {
      alert('copy')
    },
    codeClicked() {
      this.showCode = !this.showCode
    }
  }
}
</script>

<style scoped>
.custom {
  padding: 3.5em 1em 1em;
}
.custom:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.custom-label {
  background-color: #F8F8F8;
  box-shadow: 0px 0px 0px 1px #DDDDDD;
  user-select: none;
}
.custom-action {
  float: right;
  cursor: pointer;
}
</style>
