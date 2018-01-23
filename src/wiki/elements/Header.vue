<template>
<wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
data() {
    return {
      wikiContent: {
        title: 'Header',
        caption: 'A header provides a short summary of content',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Page Headers',
                caption: 'Headers may be oriented to give the hierarchy of a section in the context of the page',
                examples: [
                  {
                    note: 'Page headings are sized using rem and are not affected by surrounding content size.',
                    code:
`<div>
<sui-header h1>First header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header h2>Second header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header h3>Third header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header h4>Fourth header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header h5>Fifth header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header h6>Sixth header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Content Headers',
                caption: 'Headers may be oriented to give the importance of a section in the context of the content that surrounds it',
                examples: [
                  {
                    note: [
                      'Content headings are sized with em and are based on the font-size of their container.',
                      'Note: massive is not supported.'],
                    code:
`<div>
<sui-header huge>Huge header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header large>Large header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header medium>Medium header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header small>Small header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
<sui-header tiny>Tiny header</sui-header>
<sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Icon Headers',
                caption: 'A header can be formatted to emphasize an icon',
                examples: [
                  {
                    code:
`<sui-header icon h2>
  <sui-icon value="settings" />
  <div class="content">
    Account Settings
    <sui-header sub base-class="header">
      Manage your account settings and set e-mail preferences.
    </sui-header>
  </div>
</sui-header>`
                  },
                  {
                    code:
`<div>
  <sui-header center-aligned icon h2>
    <sui-icon circular value="users" /> Friends
  </sui-header>
  <sui-image centered medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Sub Headers',
                caption: 'Headers may be formatted to label smaller or de-emphasized content.',
                examples: [
                  {
                    code:
`<div>
  <sui-header sub h2>Price</sui-header>
  <span>$10.99</span>
</div>`
                  },
                  {
                    code:
`<sui-list horizontal>
  <sui-list-item>
    <sui-image mini circular src="/static/img/jenny.jpg" />
    <sui-list-content>
      <sui-header sub>Molly</sui-header>Coordinator
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image mini circular src="/static/img/jenny.jpg" />
    <sui-list-content>
      <sui-header sub>Elyse</sui-header>Developer
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image mini circular src="/static/img/jenny.jpg" />
    <sui-list-content>
      <sui-header sub>Eve</sui-header>Project Manager
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Content',
            subSections: [
              {
                title: 'Image',
                caption: 'A header may contain an image',
                examples: [
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-image src="/static/img/square-image.png" />
    <div class="content">Learn More</div>
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-image circular src="/static/img/jenny.jpg" />
    Patrick
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-image src="/static/img/square-image.png" />
    <div class="content">
      Plug-ins
      <sui-header sub base-class="header">Check out our plug-in marketplace</sui-header>
    </div>
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Icon',
                caption: 'A header may contain an icon',
                examples: [
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-icon value="plug" />
    <div class="content">
      Uptime Guarantee
    </div>
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-icon value="settings" />
    <div class="content">
      Account Settings
      <sui-header sub base-class="header">Manage your preferences</sui-header>
    </div>
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Subheader',
                caption: 'Headers may contain subheaders',
                examples: [
                  {
                    code:
`<div>
  <sui-header h2>
    Account Settings
    <sui-header sub base-class="header">Manage your account settings and set e-mail preferences.</sui-header>
  </sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-header h1>
    H1
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
  <sui-header h2>
    H2
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
  <sui-header h3>
    H3
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
  <sui-header h4>
    H4
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
  <sui-header h5>
    H5
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
  <sui-header h6>
    H6
    <sui-header sub base-class="header">Sun Header</sui-header>
  </sui-header>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'States',
            subSections: [
              {
                title: 'Disabled',
                caption: 'A header can show that it is inactive',
                examples: [
                  {
                    code:
`<div>
  <sui-header disabled>Disabled Header</sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
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
                title: 'Dividing',
                caption: 'A header can be formatted to divide itself from the content below it',
                examples: [
                  {
                    code:
`<div>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
  <sui-header dividing h3>Dividing Header</sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
  <sui-header divider="horizontal" h3>Dividing Header</sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Block',
                caption: 'A header can be formatted to appear inside a content block',
                examples: [
                  {
                    code:
`<div>
  <sui-header block h3>Block Header</sui-header>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Attached',
                caption: 'A header can be attached to other content, like a segment',
                examples: [
                  {
                    code:
`<div>
  <sui-header top-attached h3>Top Attached</sui-header>
  <div class="ui attached segment">
    <sui-image medium src="/static/img/paragraph.png""></sui-image>
  </div>
  <sui-header attached h3>Attached</sui-header>
  <div class="ui attached segment">
    <sui-image medium src="/static/img/paragraph.png""></sui-image>
  </div>
  <sui-header bottom-attached h3>Bottom Attached</sui-header>
</div>`
                  }
                ]
              },
              {
                title: 'Floating',
                caption: 'A header can sit to the left or right of other content',
                examples: [
                  {
                    code:
`<div class="ui clearing segment">
  <sui-header right-floated h3>Go Forward</sui-header>
  <sui-header left-floated h3>Go Back</sui-header>
</div>`
                  }
                ]
              },
              {
                title: 'Text Alignment',
                caption: 'A header can have its text aligned to a side',
                examples: [
                  {
                    code:
`<div>
  <sui-header right-aligned h3>Right</sui-header>
  <sui-header left-aligned h3>Left</sui-header>
  <sui-header justified h3>This should take up the full width even if only one line</sui-header>
  <sui-header center-aligned h3>Center</sui-header>
</div>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'A header can be formatted with different colors',
                examples: [
                  {
                    code:
`<div>
  <sui-header red h4>Red</sui-header>
  <sui-header orange h4>Orange</sui-header>
  <sui-header yellow h4>Yellow</sui-header>
  <sui-header olive h4>Olive</sui-header>
  <sui-header green h4>Green</sui-header>
  <sui-header teal h4>Teal</sui-header>
  <sui-header blue h4>Blue</sui-header>
  <sui-header purple h4>Purple</sui-header>
  <sui-header violet h4>Violet</sui-header>
  <sui-header pink h4>Pink</sui-header>
  <sui-header brown h4>Brown</sui-header>
  <sui-header grey h4>Grey</sui-header>
</div>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'A header can have its colors inverted for contrast',
                examples: [
                  {
                    inverted: true,
                    note: 'Inverted headers use modified light versions of your site\'s color scheme that are adapted to have more contrast on dark background',
                    code:
`<div>
  <sui-header inverted red h4>Red</sui-header>
  <sui-header inverted orange h4>Orange</sui-header>
  <sui-header inverted yellow h4>Yellow</sui-header>
  <sui-header inverted olive h4>Olive</sui-header>
  <sui-header inverted green h4>Green</sui-header>
  <sui-header inverted teal h4>Teal</sui-header>
  <sui-header inverted blue h4>Blue</sui-header>
  <sui-header inverted purple h4>Purple</sui-header>
  <sui-header inverted violet h4>Violet</sui-header>
  <sui-header inverted pink h4>Pink</sui-header>
  <sui-header inverted brown h4>Brown</sui-header>
  <sui-header inverted grey h4>Grey</sui-header>
</div>`
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
