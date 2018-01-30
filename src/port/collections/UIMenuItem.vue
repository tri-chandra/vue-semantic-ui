<script>
import colorMixin from '@/port/mixins/ColorMixin'

export default {
  mixins: [colorMixin],
  props: {
    header: Boolean,
    headerItem: Boolean,
    link: Boolean,
    active: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,

    right: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    active(val) {
      this.isActive = val
    }
  },
  computed: {
    classList() {
      let retVal = []
      if (this.header) retVal = ['header']
      else if (this.headerItem) retVal = ['header', 'item']
      else retVal = ['item']

      if (this.right) retVal.splice(0, 0, 'right')
      if (this.isActive) retVal.splice(0, 0, 'active')
      if (this.disabled) retVal.splice(0, 0, 'disabled')

      for (let c in this.colorClass) {
        retVal.splice(0, 0, c)
      }

      return retVal
    }
  },
  methods: {
    onClicked(e) {
      // this.isActive = true
      this.$parent.$emit('childClicked', {eventSource: e, id: this._uid})
    }
  },
  mounted() {
    this.isActive = this.active
  },
  render(h) {
    return h(
      this.link ? 'a' : 'div',
      {
        'class': this.classList,
        on: {
          click: this.onClicked
        }
      },
      this.$slots.default
    )
  }
}
</script>
