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
                title: 'List',
                caption: 'A list groups related content',
                examples: [
                  {
                    code:
`<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list>
  <sui-list-item>
    <sui-icon value="users" />
    <sui-list-content>
      Semantic UI
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon value="mail" />
    <sui-list-content>
      <a>jack@semantic-ui.com</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list>
  <sui-list-item>
    <sui-icon large middle-aligned value="github" />
    <sui-list-content>
      <a slot="header">Semantic-Org/Semantic-UI</a>
      <div slot="description">Updated 10 mins ago</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon large middle-aligned value="github" />
    <sui-list-content>
      <a slot="header">Semantic-Org/Semantic-UI-Docs</a>
      <div slot="description">Updated 22 mins ago</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list>
  <sui-list-item>
    <sui-icon value="folder" />
    <sui-list-content>
      <div slot="header">src</div>
      <div slot="description">Source files for project</div>
      <sui-list>
        <sui-list-item>
          <sui-icon value="folder" />
          <sui-list-content>
            <div slot="header">site</div>
            <div slot="description">Your site's theme</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-icon value="folder" />
          <sui-list-content>
            <div slot="header">themes</div>
            <div slot="description">Packaged theme files</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon value="folder" />
    <sui-list-content>
      <div slot="header">src</div>
      <div slot="description">Source files for project</div>
      <sui-list>
        <sui-list-item>
          <sui-icon value="folder" />
          <sui-list-content>
            <div slot="header">site</div>
            <div slot="description">Your site's theme</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Bulleted',
                caption: 'A list can mark items with a bullet',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list bulleted>
  <sui-list-item>Gaining Access</sui-list-item>
  <sui-list-item>Inviting Friends</sui-list-item>
  <sui-list-item>
    <div>Benefits</div>
    <sui-list>
      <sui-list-item link>Link to somewhere</sui-list-item>
      <sui-list-item>Rebates</sui-list-item>
      <sui-list-item>Discounts</sui-list-item>
    </sui-list>
  </sui-list-item>
  <sui-list-item>Warranty</sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Ordered',
                caption: 'A list can be ordered numerically',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list ordered>
  <sui-list-item>Gaining Access</sui-list-item>
  <sui-list-item>Inviting Friends</sui-list-item>
  <sui-list-item>
    <div>Benefits</div>
    <sui-list>
      <sui-list-item link>Link to somewhere</sui-list-item>
      <sui-list-item>Rebates</sui-list-item>
      <sui-list-item>Discounts</sui-list-item>
    </sui-list>
  </sui-list-item>
  <sui-list-item>Warranty</sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Link',
                caption: 'A list can be specially formatted for navigation links',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list link>
  <sui-list-item active>Home</sui-list-item>
  <sui-list-item link>About</sui-list-item>
  <sui-list-item link>Jobs</sui-list-item>
  <sui-list-item link>Team</sui-list-item>
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
                title: 'Item',
                caption: 'A list item can contain a set of items',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item>1</sui-list-item>
  <sui-list-item>2</sui-list-item>
  <sui-list-item>3</sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Icon',
                caption: 'A list item can contain an icon',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item link>
    <sui-icon value="help" />
    <sui-list-content>
      <div slot="header">Floated Icon</div>
      <div slot="description">This text will always have a left margin to make sure it sits alongside your icon</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item link>
    <sui-icon value="right triangle" />
    <sui-list-content>
      <div slot="header">Icon Alignment</div>
      <div slot="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>
    </sui-list-content>
  </sui-list-item><sui-list-item>
    <sui-icon value="help" />
    Inline Text
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Image',
                caption: 'A list item can contain an image',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Link',
                caption: 'A list can contain links',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item link>What is a FAQ</sui-list-item>
  <sui-list-item link>What is a FAQ</sui-list-item>
  <sui-list-item link>What is a FAQ</sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list>
  <sui-list-item>
    <sui-list-content>
      <a slot="header">Header</a>
      <div slot="description">Click a link in our <a>description</a>.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <a class="header">Header</a>
    <div class="description">
      Click a link in our <a>description</a>.
    </div>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Header',
                caption: 'A list item can contain a header',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item>
    <div class="header">New York City</div>
    A lovely city
  </sui-list-item>
  <sui-list-item>
    <div class="header">New York City</div>
    A lovely city
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Description',
                caption: 'A list item can contain a description',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list>
  <sui-list-item>
    <sui-icon value="map marker" />
    <sui-list-content>
      <a slot="header">Krolewskie Jadlo</a>
      <div slot="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon value="map marker" />
    <sui-list-content>
      <a slot="header">Krolewskie Jadlo</a>
      <div slot="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Horizontal',
                caption: 'A list can be formatted to have items appear horizontally',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list ordered horizontal>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'A list can be inverted to appear on a dark background',
                examples: [
                  {
                    inverted: true,
                    code:
`<sui-list inverted relaxed divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Selection',
                caption: 'A selection list formats list items as possible choices',
                examples: [
                  {
                    code:
`<sui-list selection>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Animated',
                caption: 'A list can animate to set the current item apart from the list',
                examples: [
                  {
                    note: 'Be sure content can fit on one line when using the animated variation, otherwise text content will reflow when hovered.',
                    code:
`<sui-list animated>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Admin</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Relaxed',
                caption: 'A list can relax its padding to provide more negative space',
                examples: [
                  {
                    code:
`<sui-list relaxed>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<sui-list very-relaxed>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Divided',
                caption: 'A list can show divisions between content',
                examples: [
                  {
                    code:
`<sui-list divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Celled',
                caption: 'A list can divide its items into cells',
                examples: [
                  {
                    code:
`<sui-list celled>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
      <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'A list can vary in size',
                examples: [
                  {
                    code:
`<sui-list mini horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                   {
                    code:
`<sui-list tiny horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                   {
                    code:
`<sui-list small horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                   {
                    code:
`<sui-list large horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                   {
                    code:
`<sui-list big horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                   {
                    code:
`<sui-list massive horizontal divided>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      <a slot="header">Jenny</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              }
            ]
          },{
            title: 'Content Variations',
            subSections: [
              {
                title: 'Vertically Aligned',
                caption: 'An element inside a list can be vertically aligned',
                examples: [
                  {
                    note: '',
                    code:
`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content alignment="top">
      <a slot="header">Top Aligned</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content alignment="middle">
      <a slot="header">Middle</a>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content alignment="bottom">
      <a slot="header">Bottom</a>
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  }
                ]
              },
              {
                title: 'Floated',
                caption: 'A list, or an element inside a list can be floated left or right',
                examples: [
                  {
                    code:
`<sui-list divided>
  <sui-list-item>
    <sui-list-content right-floated>
      <sui-button>Add</sui-button>
    </sui-list-content>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      Jenny
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-list-content right-floated>
      <sui-button>Add</sui-button>
    </sui-list-content>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      Jenny
    </sui-list-content>
  </sui-list-item><sui-list-item>
    <sui-list-content right-floated>
      <sui-button>Add</sui-button>
    </sui-list-content>
    <sui-image avatar src="/static/img/jenny.jpg"/>
    <sui-list-content>
      Jenny
    </sui-list-content>
  </sui-list-item>
</sui-list>`
                  },
                  {
                    code:
`<div>
<sui-list right-floated horizontal>
  <sui-list-item disabled>© Github, Inc.</sui-list-item>
  <sui-list-item link>Terms</sui-list-item>
  <sui-list-item link>Privacy</sui-list-item>
  <sui-list-item link>Contact</sui-list-item>
</sui-list>
<sui-list horizontal>
  <sui-list-item link>About Us</sui-list-item>
  <sui-list-item link>Jobs</sui-list-item>
</sui-list>
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