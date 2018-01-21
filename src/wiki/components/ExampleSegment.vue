<template>
<div>
  <div :class="`html ui top attached ${inverted?'inverted':''} segment custom`">
    <div v-show="note" class="ui message">{{note}}</div>
    <preview-result v-model="value"></preview-result>
    <sui-label attached="top" class="custom-label">
      Example
      <sui-icon @click.native="copyClicked" value="copy link" />
      <sui-icon @click.native="codeClicked" value="code" />
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
    note: String
  },
  data() {
    return {
      showCode: false,
      htmlResult: [],
      temp:
`<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`
    }
  },
  computed: {
    prettifiedSource() {
      // let result = ''
      // for (let idx in this.htmlResult) {
      //   result += (Prism.highlight(this.htmlResult[idx], Prism.languages.markup))
      // }
      // return result

      return Prism.highlight(this.temp, Prism.languages.markup)
    }
  },
  methods: {
    copyClicked() {
      alert('copy')
    },
    codeClicked() {
      this.showCode = !this.showCode
    }
  },
  mounted() {
    this.htmlResult = []
    for (let idx in this.$slots.default) {
      let child = this.$slots.default[idx]
      if (child.elm) {
        let html = child.elm.outerHTML
        this.htmlResult.push(html)
      }
    }
  }
}
</script>

<style scoped>
.custom {
  padding: 3.5em 1em 0em;
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
.label >>> .icon {
  float: right;
  cursor: pointer;
}
</style>
