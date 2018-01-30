<template>
  <wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Menu',
        caption: 'A menu displays grouped navigation actions',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Menu',
                caption: 'A menu',
                examples: [
                  {
                    note: [
                      'Starting in 2.0 menus now use flexbox. This allows each menu item to automatically stretch to the size of the largest item.',
                      'Many of the following examples use a coupling with dropdowns to display dropdown menus inside of ui menu. Please consult the dropdown documentation for the correct javascript initialization for this component.'
                    ],
                    code:
`<sui-menu three item>
  <a class="active item">Editorials</a>
  <a class="item">Reviews</a>
  <a class="item">Upcoming Events</a>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Secondary Menu',
                caption: 'A menu can adjust its appearance to de-emphasize its contents',
                examples: [
                  {
                    code:
`<sui-menu secondary>
  <sui-menu-item active link>Home</sui-menu-item>
  <sui-menu-item link>Messages</sui-menu-item>
  <sui-menu-item link>Friends</sui-menu-item>
  <sui-menu right sub>
    <sui-menu-item link>
      <sui-input icon placeholder="Search...">
        <sui-icon value="search link" />
      </sui-input>
    </sui-menu-item>
    <sui-menu-item link>Logout</sui-menu-item>
  </sui-menu>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Pointing',
                caption: 'A menu can point to show its relationship to nearby content',
                examples: [
                  {
                    code:
`<div>
  <sui-menu pointing>
    <sui-menu-item active link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu-item link>Friends</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item link>
        <sui-input icon placeholder="Search...">
          <sui-icon value="search link" />
        </sui-input>
      </sui-menu-item>
    </sui-menu>
  </sui-menu>
  <div class="ui segment"><sui-image src="/static/img/paragraph.png"/></div>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-menu secondary pointing>
    <sui-menu-item active link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu-item link>Friends</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item link>Logout</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <div class="ui segment"><sui-image src="/static/img/paragraph.png"/></div>
</div>`
                  }
                ]
              },
              {
                title: 'Tabular',
                caption: 'A menu can be formatted to show tabs of information',
                examples: [
                  {
                    note: 'Be sure to visit the tab documentation for information on how to set up dynamic tabs',
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Text',
                caption: 'A menu can be formatted for text content',
                examples: [
                  {
                    code:
`<sui-menu text>
  <sui-menu-item header-item>Sort By</sui-menu-item>
  <sui-menu-item link>Closest</sui-menu-item>
  <sui-menu-item link>Most Comments</sui-menu-item>
  <sui-menu-item link>Most Popular</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Vertical Menu',
                caption: 'A vertical menu displays elements vertically..',
                examples: [
                  {
                    note: 'A vertical menu\'s width defaults to an arbitrary size. To have it fit your content more precisely use the fluid variation in conjunction with ui grid.',
                    code:
`<sui-menu vertical>
  <sui-menu-item active teal link>
    Inbox
    <sui-label teal left-pointing>1</sui-label>
  </sui-menu-item>
  <sui-menu-item link>
    Spam
    <sui-label>51</sui-label>
  </sui-menu-item>
  <sui-menu-item link>
    Updates
    <sui-label>1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-input transparent icon placeholder="Search mail...">
      <sui-icon value="search" />
    </sui-input>
  </sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu vertical text>
  <sui-menu-item header-item>Sort By</sui-menu-item>
  <sui-menu-item active link>Closest</sui-menu-item>
  <sui-menu-item link>Most Comments</sui-menu-item>
  <sui-menu-item link>Most Popular</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu vertical pointing>
  <sui-menu-item active link>Home</sui-menu-item>
  <sui-menu-item link>Messages</sui-menu-item>
  <sui-menu-item link>Friends</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu secondary vertical pointing>
  <sui-menu-item active link>Home</sui-menu-item>
  <sui-menu-item link>Messages</sui-menu-item>
  <sui-menu-item link>Friends</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Pagination',
                caption: 'A pagination menu is specially formatted to present links to pages of content',
                examples: [
                  {
                    code:
`<sui-menu pagination>
  <sui-menu-item active link>1</sui-menu-item>
  <sui-menu-item disabled>...</sui-menu-item>
  <sui-menu-item link>10</sui-menu-item>
  <sui-menu-item link>11</sui-menu-item>
  <sui-menu-item link>12</sui-menu-item>
</sui-menu>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Content',
            subSections: [
              {
                title: 'Header',
                caption: 'A menu item may include a header or may itself be a header',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item header-item>Our Company</sui-menu-item>
  <sui-menu-item>About Us</sui-menu-item>
  <sui-menu-item>Jobs</sui-menu-item>
  <sui-menu-item>Locations</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu vertical>
  <sui-menu-item>
    <sui-menu-item header>Products</sui-menu-item>
    <sui-menu sub>
      <sui-menu-item>Enterprise</sui-menu-item>
      <sui-menu-item>Consumer</sui-menu-item>
    </sui-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-menu-item header>CMS Solutions</sui-menu-item>
    <sui-menu sub>
      <sui-menu-item>Rails</sui-menu-item>
      <sui-menu-item>Python</sui-menu-item>
      <sui-menu-item>PHP</sui-menu-item>
    </sui-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-menu-item header>Hosting</sui-menu-item>
    <sui-menu sub>
      <sui-menu-item>Shared</sui-menu-item>
      <sui-menu-item>Dedicated</sui-menu-item>
    </sui-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-menu-item header>Support</sui-menu-item>
    <sui-menu sub>
      <sui-menu-item>E-mail Support</sui-menu-item>
      <sui-menu-item>FAQs</sui-menu-item>
    </sui-menu>
  </sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Text',
                caption: 'A vertical menu item can include any type of text content.',
                examples: [
                  {
                    code:
`<sui-menu vertical>
  <sui-menu-item link>
    <sui-header h4>Promotions</sui-header>
    <p>Check out our new promotions</p>
  </sui-menu-item>
  <sui-menu-item link>
    <sui-header h4>Coupons</sui-header>
    <p>Check out our collection if coupons</p>
  </sui-menu-item>
  <sui-menu-item link>
    <sui-header h4>Rebates</sui-header>
    <p>Visit our rebate forum for information on claiming rebates</p>
  </sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Input',
                caption: 'A menu item can contain an input inside of it',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item>
    <sui-input icon placeholder="Search...">
      <sui-icon value="search" />
    </sui-input>
  </sui-menu-item>
  <sui-menu-item right>
    <sui-input action placeholder="Navigate to...">
      <sui-button>Go</sui-button>
    </sui-input>
  </sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Button',
                caption: 'A menu item can contain a button inside of it',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item>
    <sui-button primary>Sign up</sui-button>
  </sui-menu-item>
  <sui-menu-item>
    <sui-button>Log-in</sui-button>
  </sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Link Item',
                caption: 'A menu may contain a link item, or an item formatted as if it is a link.',
                examples: [
                  {
                    code:
`<sui-menu vertical>
  <sui-menu-item link href="http://www.google.com">Visit Google</sui-menu-item>
  <sui-menu-item link>Javascript Link</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Dropdown Item',
                caption: 'An item may contain a nested menu in a dropdown.',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Popup Menu',
                caption: 'A menu item may show a large menu, or additional content using a popup',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Search',
                caption: 'A menu can contain a search input',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Menu',
                caption: 'A menu may contain another menu group in the same level as menu items.',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item>Browse</sui-menu-item>
  <sui-menu-item>Submit</sui-menu-item>
  <sui-menu right sub>
    <sui-menu-item>Sign Up</sui-menu-item>
    <sui-menu-item>Help</sui-menu-item>
  </sui-menu>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Sub Menu',
                caption: 'A menu item may contain another menu nested inside that acts as a grouped sub-menu.',
                examples: [
                  {
                    note: 'To be fixed!',
                    code:
`<sui-menu vertical>
  <sui-menu-item><sui-input placeholder="Search..." /></sui-menu-item>
  <sui-menu-item>
    Home
    <sui-menu sub>
      <sui-menu-item link active>Search</sui-menu-item>
      <sui-menu-item link>Add</sui-menu-item>
      <sui-menu-item link>Remove</sui-menu-item>
    </sui-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon value="grid layout" />Browse
  </sui-menu-item>
  <sui-menu-item link>Messages</sui-menu-item>
  <div class="ui simple dropdown item">
    More
    <sui-icon value="dropdown" />
    <sui-menu sub>
      <sui-menu-item link>
        <sui-icon value="edit" />Edit Profile
      </sui-menu-item>
      <sui-menu-item link>
        <sui-icon value="globe" />Choose Language
      </sui-menu-item>
      <sui-menu-item link>
        <sui-icon value="settings" />Account Settings
      </sui-menu-item>
    </sui-menu>
  </div>
</sui-menu>`
                  }
                ]
              }
            ]
          },
          {
            title: 'States',
            subSections: [
              {
                title: 'Hover',
                caption: 'A menu item can be hovered',
                examples: [
                  {
                    note: 'Menu items are only hoverable if they are a links, or given the class name link',
                    code:
`<sui-menu compact>
  <sui-menu-item link>A link</sui-menu-item>
  <sui-menu-item link>B link</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Active',
                caption: 'A menu item can be active',
                examples: [
                  {
                    code:
`<sui-menu compact>
  <sui-menu-item active>A link</sui-menu-item>
  <sui-menu-item>B link</sui-menu-item>
</sui-menu>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Fixed',
                caption: 'A menu can be fixed to a side of its context',
                examples: [
//                   {
//                     note: [
//                       'These examples use a an iframe, to prevent content from sticking to the browser viewport.',
//                       'For more advanced behaviors consider using a sticky menu or visibility APIs.'
//                     ],
//                     code:
// `<div>
//   <sui-menu fixed="top">
//     <sui-menu-item><sui-image src="/static/img/jenny.jpg" /></sui-menu-item>
//     <sui-menu-item>Features</sui-menu-item>
//     <sui-menu-item>Testimonials</sui-menu-item>
//     <sui-menu-item>Sign-in</sui-menu-item>
//   </sui-menu>
//   <sui-menu fixed="bottom">
//     <sui-menu-item><sui-image src="/static/img/jenny.jpg" /></sui-menu-item>
//     <sui-menu-item>Features</sui-menu-item>
//     <sui-menu-item>Testimonials</sui-menu-item>
//     <sui-menu-item>Sign-in</sui-menu-item>
//   </sui-menu>
//   <sui-image src="/static/img/paragraph.png" />
// </div>`
//                   },
//                   {
//                     code:
// `<div>
//   <sui-menu fixed="left">
//     <sui-menu-item><sui-image src="/static/img/jenny.jpg" /></sui-menu-item>
//     <sui-menu-item>Features</sui-menu-item>
//     <sui-menu-item>Testimonials</sui-menu-item>
//     <sui-menu-item>Sign-in</sui-menu-item>
//   </sui-menu>
//   <sui-menu fixed="right">
//     <sui-menu-item><sui-image src="/static/img/jenny.jpg" /></sui-menu-item>
//     <sui-menu-item>Features</sui-menu-item>
//     <sui-menu-item>Testimonials</sui-menu-item>
//     <sui-menu-item>Sign-in</sui-menu-item>
//   </sui-menu>
//   <sui-image src="/static/img/paragraph.png" />
// </div>`
//                   }
                ]
              },
              {
                title: 'Stackable',
                caption: 'A menu can stack at mobile resolutions',
                examples: [
                  {
                    note: 'Stackable menus are intended to be used with only simple menu content. Stacked menus will not replicate all additional stylings for vertical menus like adjusting dropdown position.',
                    code:
`<sui-menu stackable>
  <sui-menu-item><sui-image src="/static/img/jenny.jpg" /></sui-menu-item>
  <sui-menu-item>Features</sui-menu-item>
  <sui-menu-item>Testimonials</sui-menu-item>
  <sui-menu-item>Sign-in</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'A menu may have its colors inverted to show greater contrast',
                examples: [
                  {
                    code:
`<sui-menu inverted>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu inverted vertical>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu inverted vertical pointing>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`
                  },
                  {
                    inverted: true,
                    code:
`<sui-menu inverted secondary>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`
                  },
                  {
                    inverted: true,
                    code:
`<sui-menu inverted secondary pointing>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'Additional colors can be specified.',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item active red>Red</sui-menu-item>
  <sui-menu-item orange>Orange</sui-menu-item>
  <sui-menu-item yellow>Yellow</sui-menu-item>
  <sui-menu-item olive>Olive</sui-menu-item>
  <sui-menu-item green>Green</sui-menu-item>
  <sui-menu-item teal>Teal</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<sui-menu>
  <sui-menu-item active blue>Blue</sui-menu-item>
  <sui-menu-item violet>Violet</sui-menu-item>
  <sui-menu-item purple>Purple</sui-menu-item>
  <sui-menu-item pink>Pink</sui-menu-item>
  <sui-menu-item brown>Brown</sui-menu-item>
  <sui-menu-item grey>Grey</sui-menu-item>
</sui-menu>`
                  },
                  {
                    code:
`<div>
  <sui-menu red three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu orange three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu yellow three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu olive three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu green three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu teal three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu blue three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu violet three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu purple three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu pink three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu brown three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu grey three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
</div>`
                  },
                  {
                    note: 'These colors can also be inverted',
                    code:
`<div>
  <sui-menu inverted>
    <sui-menu-item active red>Red</sui-menu-item>
    <sui-menu-item orange>Orange</sui-menu-item>
    <sui-menu-item yellow>Yellow</sui-menu-item>
    <sui-menu-item olive>Olive</sui-menu-item>
    <sui-menu-item green>Green</sui-menu-item>
    <sui-menu-item teal>Teal</sui-menu-item>
  </sui-menu>
  <sui-menu inverted>
    <sui-menu-item active blue>Blue</sui-menu-item>
    <sui-menu-item violet>Violet</sui-menu-item>
    <sui-menu-item purple>Purple</sui-menu-item>
    <sui-menu-item pink>Pink</sui-menu-item>
    <sui-menu-item brown>Brown</sui-menu-item>
    <sui-menu-item grey>Grey</sui-menu-item>
  </sui-menu>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-menu red inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu orange inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu yellow inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu olive inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu green inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu teal inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu blue inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu violet inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu purple inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu pink inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu brown inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
  <sui-menu grey inverted three item>
    <sui-menu-item active>Home</sui-menu-item>
    <sui-menu-item>Messages</sui-menu-item>
    <sui-menu-item>Friends</sui-menu-item>
  </sui-menu>
</div>`
                  }
                ]
              },
              {
                title: 'Icons',
                caption: 'A menu may have just icons',
                examples: [
                  {
                    code:
`<div>
  <sui-menu icon>
    <sui-menu-item link>
      <sui-icon value="gamepad" />
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />
    </sui-menu-item>
  </sui-menu>
  <sui-menu vertical icon>
    <sui-menu-item link>
      <sui-icon value="gamepad" />
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />
    </sui-menu-item>
  </sui-menu>
</div>`
                  }
                ]
              },
              {
                title: 'Labeled Icon',
                caption: 'A menu may have labeled icons',
                examples: [
                  {
                    code:
`<div>
  <sui-menu labeled icon>
    <sui-menu-item link>
      <sui-icon value="gamepad" />Games
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />Channels
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />Videos
    </sui-menu-item>
  </sui-menu>
  <sui-menu vertical labeled icon>
    <sui-menu-item link>
      <sui-icon value="gamepad" />Games
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />Channels
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />Videos
    </sui-menu-item>
  </sui-menu>
</div>`
                  }
                ]
              },
              {
                title: 'Fluid',
                caption: 'A vertical menu may take the size of its container. (A horizontal menu does this by default)',
                examples: [
                  {
                    code:
`<sui-menu fluid vertical>
  <sui-menu-item link>Run</sui-menu-item>
  <sui-menu-item link>Walk</sui-menu-item>
  <sui-menu-item link>Bike</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Compact',
                caption: 'A menu can take up only the space necessary to fit its content',
                examples: [
                  {
                    code:
`<div>
  <sui-menu compact>
    <sui-menu-item link>
      <sui-icon value="gamepad" />Games
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />Channels
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />Videos
    </sui-menu-item>
  </sui-menu>
  <sui-menu compact vertical labeled icon>
    <sui-menu-item link>
      <sui-icon value="gamepad" />Games
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="video camera" />Channels
    </sui-menu-item>
    <sui-menu-item link>
      <sui-icon value="vide play" />Videos
    </sui-menu-item>
  </sui-menu>
</div>`
                  }
                ]
              },
              {
                title: 'Evenly Divided',
                caption: 'A menu may divide its items evenly',
                examples: [
                  {
                    code:
`<sui-menu fluid three item>
  <sui-menu-item link>Buy</sui-menu-item>
  <sui-menu-item link>Sell</sui-menu-item>
  <sui-menu-item link>Rent</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Attached',
                caption: 'A menu may be attached to other content segments',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'A menu can vary in size',
                examples: [
                  {
                    code:
`<div>
  <sui-menu mini>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <sui-menu tiny>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <sui-menu small>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <sui-menu large>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <sui-menu big>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
  <sui-menu massive>
    <sui-menu-item link>Home</sui-menu-item>
    <sui-menu-item link>Messages</sui-menu-item>
    <sui-menu right sub>
      <sui-menu-item>
        <sui-button primary>Sign Up</sui-button>
      </sui-menu-item>
      <sui-menu-item>Language</sui-menu-item>
    </sui-menu>
  </sui-menu>
</div>`
                  },
                  {
                    note: 'A vertical menu can also vary in size',
                    code:
`<div>
  <sui-menu mini vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
  <sui-menu tiny vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
  <sui-menu small vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
  <sui-menu large vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
  <sui-menu big vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
  <sui-menu massive vertical>
    <sui-menu-item active link>
      <sui-label teal>1</sui-label>
      Inbox
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>51</sui-label>
      Spam
    </sui-menu-item>
    <sui-menu-item link>
      <sui-label>1</sui-label>
      Updates
    </sui-menu-item>
    <sui-menu-item link>
      <sui-input icon>
        <sui-icon value="search" />
      </sui-input>
    </sui-menu-item>
  </sui-menu>
</div>`
                  }
                ]
              },
              {
                title: 'Fitted',
                caption: 'A menu item or menu can remove element padding, vertically or horizontally',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item fitted>No padding whatsoever</sui-menu-item>
  <sui-menu-item horizontally-fitted>No horizontal padding</sui-menu-item>
  <sui-menu-item vertically-fitted>No vertical padding</sui-menu-item>
</sui-menu>`
                  }
                ]
              },
              {
                title: 'Borderless',
                caption: 'A menu item or menu can have no borders',
                examples: [
                  {
                    code:
`<sui-menu>
  <sui-menu-item link>1</sui-menu-item>
  <sui-menu-item link>2</sui-menu-item>
  <sui-menu-item link>3</sui-menu-item>
  <sui-menu-item link>4</sui-menu-item>
  <sui-menu-item link>5</sui-menu-item>
  <sui-menu-item link>6</sui-menu-item>
</sui-menu>`
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
