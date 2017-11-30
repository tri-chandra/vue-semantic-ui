export default {
  props: {
    //grid size
    one: Boolean,
    two: Boolean,
    three: Boolean,
    four: Boolean,
    five: Boolean,
    six: Boolean,
    seven: Boolean,
    eight: Boolean
  },
  computed: {
    gridClass: function() {
      var c = {}

      if (this.one) c.one = true
      else if (this.two) c.two = true
      else if (this.three) c.three = true
      else if (this.four) c.four = true
      else if (this.five) c.five = true
      else if (this.six) c.six = true
      else if (this.seven) c.seven = true
      else if (this.eight) c.eight = true

      return c
    }
  }
}
