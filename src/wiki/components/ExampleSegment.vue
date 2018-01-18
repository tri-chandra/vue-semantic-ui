<template>
<div>
  <div :class="`html ui top attached ${inverted?'inverted':''} segment custom`">
    <slot></slot>
    <sui-label attached="top" class="custom-label">
      Example
      <sui-icon @click.native="copyClicked" value="copy link" />
      <sui-icon @click.native="codeClicked" value="code" />
    </sui-label>
  </div>
  <div class="ui bottom attached segment" v-if="showCode">
<pre class="language-markup">
<code v-for="(child, idx) in htmlResult" :key="idx" v-html="prettifiedSource" class="language-markup">

</code>
</pre>
  </div>
</div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Example',
  props: {
    inverted: Boolean
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
  padding: 3.5em 1em 1em;
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
