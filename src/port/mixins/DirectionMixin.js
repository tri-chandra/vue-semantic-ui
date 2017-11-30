export default {
  props: {
    top: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean
  },
  computed: {
    directionClass: function() {
      var c = {}

      if (this.top) c.top = true
      else if (this.bottom) c.bottom = true

      if (this.left) c.left = true
      else if (this.right) c.right = true

      return c
    }
  }
}
