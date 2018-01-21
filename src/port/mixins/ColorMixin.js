export default {
  props: {
    //flag
    inverted: Boolean,

    //preset-colors
    primary: Boolean,
    secondary: Boolean,
    positive: Boolean,
    negative: Boolean,
    facebook: Boolean,
    twitter: Boolean,
    google: Boolean,
    googlePlus: Boolean,
    vk: Boolean,
    linkedin: Boolean,
    instagram: Boolean,
    youtube: Boolean,

    //colors
    red: Boolean,
    orange: Boolean,
    yellow: Boolean,
    olive: Boolean,
    green: Boolean,
    teal: Boolean,
    blue: Boolean,
    violet: Boolean,
    purple: Boolean,
    pink: Boolean,
    brown: Boolean,
    grey: Boolean,
    black: Boolean
  },
  computed: {
    colorClass: function() {
      var c = {}

      if (this.inverted) c.inverted = true

      if (this.primary) c.primary = true
      else if (this.secondary) c.secondary = true
      else if (this.positive) c.positive = true
      else if (this.negative) c.negative = true

      else if (this.facebook) c.facebook = true
      else if (this.twitter) c.twitter = true
      else if (this.google) c.google = true
      else if (this.googlePlus) c['google plus'] = true
      else if (this.vk) c.vk = true
      else if (this.linkedin) c.linkedin = true
      else if (this.instagram) c.instagram = true
      else if (this.youtube) c.youtube = true

      else if (this.red) c.red = true
      else if (this.orange) c.orange = true
      else if (this.yellow) c.yellow = true
      else if (this.olive) c.olive = true
      else if (this.green) c.green = true
      else if (this.teal) c.teal = true
      else if (this.blue) c.blue = true
      else if (this.violet) c.violet = true
      else if (this.purple) c.purple = true
      else if (this.pink) c.pink = true
      else if (this.brown) c.brown = true
      else if (this.grey) c.grey = true
      else if (this.black) c.black = true

      return c
    }
  }
}
