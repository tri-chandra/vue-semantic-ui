<template>
<wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'List',
        caption: 'A list is used to group related content',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Fade',
                caption: 'An element can disappear to reveal content below',
                examples: [
                  {
                    code:
`<sui-reveal fade>
  <div slot="visible">
    <sui-image small src="/static/img/square-image.png" />
  </div>
  <div slot="hidden">
    <sui-image small src="/static/img/nan.jpg" />
  </div>
</sui-reveal>`
                  },
                  {
                    code:
`<sui-reveal small image fade>
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  }
                ]
              },
              {
                title: 'Move',
                caption: 'An element can move in a direction to reveal content',
                examples: [
                  {
                    code:
`<sui-reveal small image move="left">
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  },
                  {
                    code:
`<sui-reveal move="right">
  <div slot="visible">
    <sui-image small src="/static/img/square-image.png" />
  </div>
  <div slot="hidden">
    <sui-image small src="/static/img/nan.jpg" />
  </div>
</sui-reveal>`
                  },
                  {
                    code:
`<sui-reveal small image move="up">
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  },
                  {
                    code:
`<sui-reveal small image move="down">
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  }
                ]
              },
              {
                title: 'Rotate',
                caption: 'An element can rotate to reveal content below',
                examples: [
                  {
                    code:
`<sui-reveal small circular image rotate>
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  },
                  {
                    code:
`<sui-reveal small circular image rotate-left>
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Content',
            subSections: [
              {
                title: 'Visible Content',
                caption: 'A reveal may contain content that is visible before interaction',
                examples: [
                  {
                    note: 'Visible and hidden content should be the same aspect ratio',
                    code:
`<sui-reveal small fade reveal image>
  <img slot="hidden" src="/static/img/square-image.png" />
  <img slot="visible" src="/static/img/nan.jpg" />
</sui-reveal>`
                  }
                ]
              },
              {
                title: 'Hidden Content',
                caption: 'A reveal may contain content that is hidden before user interaction',
                examples: [
                  {
                    code:
`<sui-reveal small fade reveal image>
  <img slot="visible" src="/static/img/square-image.png" />
  <img slot="hidden" src="/static/img/nan.jpg" />
</sui-reveal>`
                  }
                ]
              }
            ]
          },
          {
            title: 'States',
            subSections: [
              {
                title: 'Active',
                caption: 'An active reveal displays its hidden content',
                examples: [
                  {
                    note: 'Adding the class active can allow you to show the hidden contents programatically',
                    code:
`<sui-reveal active fade>
  <div slot="visible">
    <sui-image small src="/static/img/square-image.png" />
  </div>
  <div slot="hidden">
    <sui-image small src="/static/img/nan.jpg" />
  </div>
</sui-reveal>`
                  }
                ]
              },
              {
                title: 'Disabled',
                caption: 'A disabled reveal will not animate when hovered',
                examples: [
                  {
                    code:
`<sui-reveal disabled move="left">
  <div slot="visible">
    <sui-image small src="/static/img/square-image.png" />
  </div>
  <div slot="hidden">
    <sui-image small src="/static/img/nan.jpg" />
  </div>
</sui-reveal>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Instant',
                caption: 'An element can show its content without delay',
                examples: [
                  {
                    code:
`<sui-reveal instant move="left">
  <div slot="visible">
    <sui-image small src="/static/img/square-image.png" />
  </div>
  <div slot="hidden">
    <sui-image small src="/static/img/nan.jpg" />
  </div>
</sui-reveal>`
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
