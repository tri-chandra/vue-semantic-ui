<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  render(h) {
    return h({
      template: this.value
    })
  }
}
</script>
