
<script>
export default {
  render(h) {
    let children = []

    if (this.$slots.header && this.$slots.header.length > 0) {
      if (this.$slots.header[0].data.staticClass) {
        this.$slots.header[0].data.staticClass += ' header'
      } else {
        this.$slots.header[0].data.staticClass = 'header'
      }

      children.push(this.$slots.header[0])
      console.log(this.$slots.header[0])
    }

    if (this.$slots.description && this.$slots.description.length > 0) {
      if (this.$slots.description[0].data.staticClass) {
        this.$slots.description[0].data.staticClass += ' description'
      } else {
        this.$slots.description[0].data.staticClass = 'description'
      }

      children.push(this.$slots.description[0])
    }

    for (let idx in this.$slots.default) {
      children.push(this.$slots.default[idx])
    }

    return h(
      'div',
      {
        'class': ['content']
      },
      children
    )
  }
}
</script>
