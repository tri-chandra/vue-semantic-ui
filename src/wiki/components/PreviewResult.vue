<script>
export default {
  props: {
    value: {
      type: [String, Object],
      required: true
    }
  },
  render(h) {
    return h(
      typeof this.value === 'string' ?
      {
        template: this.value
      } :
      this.value
    )
  }
}
</script>
