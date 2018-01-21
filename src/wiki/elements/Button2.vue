<template>
<wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Button',
        caption: 'A button indicates a possible user action',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Button',
                caption: 'A standard button',
                examples: [
                  {
                    code:
`<sui-button tag="button">Follow</sui-button>`
                  },
                  {
                    note: 'Although any tag can be used for a button, it will only be keyboard focusable if you use a <button> tag or you add the property tabindex="0". Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.',
                    code:
`<div>
  <sui-button tag="button">Button</sui-button>
  <sui-button tabindex="0">Focusable</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Emphasis',
                caption: 'A button can be formatted to show different levels of emphasis',
                examples: [
                  {
                    note: 'Setting your brand colors to primary and secondary color variables in site.variables will allow you to use your color theming for UI elements',
                    code:
`<div>
  <sui-button tag="button" primary>Save</sui-button>
  <sui-button tag="button">Discard</sui-button>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-button secondary>Okay</sui-button>
  <sui-button>Cancel</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Animated',
                caption: 'A button can animate to show hidden content',
                examples: [
                  {
                    note: 'The button will be automatically sized according to the visible content size. Make sure there is enough room for the hidden content to show',
                    code:
`<div>
  <sui-button animated tabindex="0">
    <div slot="visible">Next</div>
    <div slot="hidden">
      <sui-icon value="right arrow" />
    </div>
  </sui-button>
  <sui-button verticalAnimated tabindex="0">
    <div slot="hidden">Shop</div>
    <div slot="visible">
      <sui-icon value="shop" />
    </div>
  </sui-button>
  <sui-button fadeAnimated tabindex="0">
    <div slot="visible">Sign-up for a Pro account</div>
    <div slot="hidden">$12.99 a month</div>
  </sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Labeled',
                caption: 'A button can appear alongside a label',
                examples: [
                  {
                    code:
`<div>
  <sui-button labeled>
    <sui-button>
      <sui-icon value="heart" />Like
    </sui-button>
    <sui-label basic>2,048</sui-label>
  </sui-button>
  <sui-button left-labeled>
    <sui-label basic right-pointing>2,048</sui-label>
    <sui-button>
      <sui-icon value="heart" />Like
    </sui-button>
  </sui-button>
  <sui-button left-labeled>
    <sui-label basic>1,048</sui-label>
    <sui-button icon>
      <sui-icon value="fork" />
    </sui-button>
  </sui-button>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-button labeled>
    <sui-button red>
      <sui-icon value="heart" />Like
    </sui-button>
    <sui-label basic left-pointing>1,048</sui-label>
  </sui-button>
  <sui-button labeled>
    <sui-button basic blue>
      <sui-icon value="fork" />Fork
    </sui-button>
    <sui-label basic left-pointing blue>2,048</sui-label>
  </sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Icon',
                caption: 'A button can have only an icon',
                examples: [
                  {
                    code:
`<sui-button icon tag="button">
  <sui-icon value="cloud" />
</sui-button>`
                  }
                ]
              },
              {
                title: 'Labeled Icon',
                caption: 'A button can use an icon as a label',
                examples: [
                  {
                    code:
`<div>
  <sui-button labeled icon>
    <sui-icon value="pause" />Pause
  </sui-button>
  <sui-button right-labeled icon>
    <sui-icon value="right arrow" />Next
  </sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Basic',
                caption: 'A basic button is less pronounced',
                examples: [
                  {
                    code:
`<sui-button basic>
  <sui-icon value="user" />Add Friend
</sui-button>`
                  },
                  {
                    code:
`<div>
  <sui-button basic primary>Primary</sui-button>
  <sui-button basic secondary>Secondary</sui-button>
  <sui-button basic positive>Positive</sui-button>
  <sui-button basic negative>Negative</sui-button>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-button basic red>Red</sui-button>
  <sui-button basic orange>Orange</sui-button>
  <sui-button basic yellow>Yellow</sui-button>
  <sui-button basic olive>Olive</sui-button>
  <sui-button basic green>Green</sui-button>
  <sui-button basic teal>Teal</sui-button>
  <sui-button basic blue>Blue</sui-button>
  <sui-button basic violet>Violet</sui-button>
  <sui-button basic purple>Purple</sui-button>
  <sui-button basic pink>Pink</sui-button>
  <sui-button basic brown>Brown</sui-button>
  <sui-button basic grey>Grey</sui-button>
  <sui-button basic black>Black</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'A button can be formatted to appear on dark backgrounds',
                examples: [
                  {
                    inverted: true,
                    code:
`<div>
  <sui-button inverted red>Red</sui-button>
  <sui-button inverted orange>Orange</sui-button>
  <sui-button inverted yellow>Yellow</sui-button>
  <sui-button inverted olive>Olive</sui-button>
  <sui-button inverted green>Green</sui-button>
  <sui-button inverted teal>Teal</sui-button>
  <sui-button inverted blue>Blue</sui-button>
  <sui-button inverted violet>Violet</sui-button>
  <sui-button inverted purple>Purple</sui-button>
  <sui-button inverted pink>Pink</sui-button>
  <sui-button inverted brown>Brown</sui-button>
  <sui-button inverted grey>Grey</sui-button>
  <sui-button inverted black>Black</sui-button>
</div>`
                  },
                  {
                    inverted: true,
                    code:
`<div>
  <sui-button inverted basic red>Red</sui-button>
  <sui-button inverted basic orange>Orange</sui-button>
  <sui-button inverted basic yellow>Yellow</sui-button>
  <sui-button inverted basic olive>Olive</sui-button>
  <sui-button inverted basic green>Green</sui-button>
  <sui-button inverted basic teal>Teal</sui-button>
  <sui-button inverted basic blue>Blue</sui-button>
  <sui-button inverted basic violet>Violet</sui-button>
  <sui-button inverted basic purple>Purple</sui-button>
  <sui-button inverted basic pink>Pink</sui-button>
  <sui-button inverted basic brown>Brown</sui-button>
  <sui-button inverted basic grey>Grey</sui-button>
  <sui-button inverted basic black>Black</sui-button>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Groups',
            subSections: [
              {
                title: 'Buttons',
                caption: 'Buttons can exist together as a group',
                examples: [
                  {
                    code:
`<sui-buttons>
  <sui-button>One</sui-button>
  <sui-button>Two</sui-button>
  <sui-button>Three</sui-button>
</sui-buttons>`
                  }
                ]
              },
              {
                title: 'Icon Buttons',
                caption: 'Button groups can show groups of icons',
                examples: [
                  {
                    code:
`<div>
<sui-buttons icon>
  <sui-button><sui-icon value="align left"/></sui-button>
  <sui-button><sui-icon value="align center"/></sui-button>
  <sui-button><sui-icon value="align right"/></sui-button>
  <sui-button><sui-icon value="align justify"/></sui-button>
</sui-buttons>
<sui-buttons icon>
  <sui-button><sui-icon value="bold"/></sui-button>
  <sui-button><sui-icon value="underline"/></sui-button>
  <sui-button><sui-icon value="text width"/></sui-button>
</sui-buttons>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Content',
            subSections: [
              {
                title: 'Conditionals',
                caption: 'Button groups can contain conditionals',
                examples: [
                  {
                    code:
`<sui-buttons>
  <sui-button tag="button">Cancel</sui-button>
  <div class="or"></div>
  <sui-button positive tag="button">Save</sui-button>
</sui-buttons>`
                  },
                  {
                    code:
`<sui-buttons>
  <sui-button tag="button">Un</sui-button>
  <div class="or" data-text="ou"></div>
  <sui-button positive tag="button">Deux</sui-button>
</sui-buttons>`
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
                caption: 'A button can show it is currently the active user selection',
                examples: [
                  {
                    code:
`<sui-button active>
  <sui-icon value="user" />Follow
</sui-button>`
                  }
                ]
              },
              {
                title: 'Disabled',
                caption: 'A button can show it is currently unable to be interacted with',
                examples: [
                  {
                    code:
`<sui-button disabled>
  <sui-icon value="user" />Followed
</sui-button>`
                  }
                ]
              },
              {
                title: 'Loading',
                caption: 'A button can show a loading indicator',
                examples: [
                  {
                    code:
`<div>
  <sui-button loading>Loading</sui-button>
  <sui-button basic loading>Loading</sui-button>
  <sui-button primary loading>Loading</sui-button>
  <sui-button secondary loading>Loading</sui-button>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Social',
                caption: 'A button can be formatted to link to a social website',
                examples: [
                  {
                    code:
`<div>
  <sui-button facebook>
    <sui-icon value="facebook" />Facebook
  </sui-button>
  <sui-button twitter>
    <sui-icon value="twitter" />Twitter
  </sui-button>
  <sui-button google-plus>
    <sui-icon value="google plus" />Google Plus
  </sui-button>
  <sui-button vk>
    <sui-icon value="vk" />VK
  </sui-button>
  <sui-button linkedin>
    <sui-icon value="linkedin" />Linkedin
  </sui-button>
  <sui-button instagram>
    <sui-icon value="instagram" />Instagram
  </sui-button>
  <sui-button youtube>
    <sui-icon value="youtube" />Youtube
  </sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'A button can have different sizes',
                examples: [
                  {
                    code:
`<div>
  <sui-button mini>Mini</sui-button>
  <sui-button tiny>Tiny</sui-button>
  <sui-button small>Small</sui-button>
  <sui-button medium>Medium</sui-button>
  <sui-button large>Large</sui-button>
  <sui-button big>Big</sui-button>
  <sui-button massive>Massive</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Floated',
                caption: 'A button can be aligned to the left or right of its container',
                examples: [
                  {
                    code:
`<div style="position:relative;">
  <sui-button right-floated>Right Floated</sui-button>
  <sui-button left-floated>Left Floated</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'A button can have different colors',
                examples: [
                  {
                    code:
`<div>
  <sui-button red>Red</sui-button>
  <sui-button orange>Orange</sui-button>
  <sui-button yellow>Yellow</sui-button>
  <sui-button olive>Olive</sui-button>
  <sui-button green>Green</sui-button>
  <sui-button teal>Teal</sui-button>
  <sui-button blue>Blue</sui-button>
  <sui-button violet>Violet</sui-button>
  <sui-button purple>Purple</sui-button>
  <sui-button pink>Pink</sui-button>
  <sui-button brown>Brown</sui-button>
  <sui-button grey>Grey</sui-button>
  <sui-button black>Black</sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Compact',
                caption: 'A button can reduce its padding to fit into tighter spaces',
                examples: [
                  {
                    code:
`<div>
  <sui-button compact>Hold</sui-button>
  <sui-button compact icon><sui-icon value="pause" /></sui-button>
  <sui-button compact labeled icon>
    <sui-icon value="pause" />Pause
  </sui-button>
</div>`
                  }
                ]
              },
              {
                title: 'Toggle',
                caption: 'A button can be formatted to toggle on and off',
                examples: [
                  {
                    note: 'onClick, add class "active"',
                    code: {
                      template:
`<sui-button toggle @click="onClick" :class="{active:isActive}">Vote</sui-button>`,
                      methods: {
                        onClick() {
                          this.isActive = !this.isActive
                        }
                      },
                      data() {
                        return {
                          isActive: false
                        }
                      }
                    }
                  }
                ]
              },
              {
                title: 'Positive',
                caption: 'A button can hint towards a positive consequence',
                examples: [
                  {
                    code:
`<sui-button positive>Positive Button</sui-button>`
                  }
                ]
              },
              {
                title: 'Negative',
                caption: 'A button can hint towards a negative consequence',
                examples: [
                  {
                    code:
`<sui-button negative>Negative Button</sui-button>`
                  }
                ]
              },
              {
                title: 'Fluid',
                caption: 'A button can take the width of its container',
                examples: [
                  {
                    code:
`<sui-button fluid>Fits container</sui-button>`
                  }
                ]
              },
              {
                title: 'Circular',
                caption: 'A button can be circular',
                examples: [
                  {
                    code:
`<sui-button circular icon><sui-icon value="settings" /></sui-button>`
                  }
                ]
              },
              {
                title: 'Vertically Attached',
                caption: 'A button can be attached to the top or bottom of other content',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Horizontally Attached',
                caption: 'A button can be attached to the left or right of other content',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Group Variations',
            subSections: [
              {
                title: 'Vertical Buttons',
                caption: 'Groups can be formatted to appear vertically',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Icon Buttons',
                caption: 'Groups can be formatted as icons',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Labeled Icon Buttons',
                caption: 'Groups can be formatted as labeled icons',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Mixed Group',
                caption: 'Groups can be formatted to use multiple button types together',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Equal Width',
                caption: 'Groups can have their widths divided evenly',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Colored Buttons',
                caption: 'Groups can have a shared color',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Basic Buttons',
                caption: 'A button group can be less pronounced',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Group Size',
                caption: 'Groups can have a shared size',
                examples: [
                  {
                    code:
`<div></div>`
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

<style scoped>
div >>> .button {
  margin-bottom: 0.75em;
}
</style>