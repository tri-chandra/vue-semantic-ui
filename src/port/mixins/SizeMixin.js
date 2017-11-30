export default {
  props: {
    //preset
    compact: Boolean,

    //size
    mini: Boolean,
    tiny: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    big: Boolean,
    huge: Boolean,
    massive: Boolean,

    //responsive
    fluid: Boolean
  },
  computed: {
    sizeClass: function() {
      var c = {}

      if (this.compact) c.compact = true

      if (this.mini) c.mini = true
      else if (this.tiny) c.tiny = true
      else if (this.small) c.small = true
      else if (this.medium) c.medium = true
      else if (this.large) c.large = true
      else if (this.big) c.big = true
      else if (this.huge) c.huge = true
      else if (this.massive) c.massive = true

      if (this.fluid) c.fluid = true

      return c
    }
  }
}
