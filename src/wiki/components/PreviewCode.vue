<script>
import Prism from 'prismjs'

export default {
  props: {
    value: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    rawSource() {
      if (typeof this.value === 'object') {
        return this.value.template
      } else {
        return this.value
      }
    },
    prettifiedSource() {
      return Prism.highlight(this.rawSource, Prism.languages.markup)
    }
  },
  render(h) {
    return h(
      'pre',
      {},
      [h(
        'code',
        {
          'class': 'language-markup',
          domProps: {
            innerHTML: this.prettifiedSource
          }
        },
        []
      )]
    )
  }
}
</script>
