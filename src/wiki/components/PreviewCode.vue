<script>
import Prism from 'prismjs'

export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    prettifiedSource() {
      return Prism.highlight(this.value, Prism.languages.markup)
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
