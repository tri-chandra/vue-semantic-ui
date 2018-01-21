export default {
  props: {
    //size
    mini: Boolean,
    tiny: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    big: Boolean,
    huge: Boolean,
    massive: Boolean
  },
  computed: {
    sizeClass: function() {
      var c = {}

      if (this.mini) c.mini = true
      else if (this.tiny) c.tiny = true
      else if (this.small) c.small = true
      else if (this.medium) c.medium = true
      else if (this.large) c.large = true
      else if (this.big) c.big = true
      else if (this.huge) c.huge = true
      else if (this.massive) c.massive = true

      return c
    }
  }
}
