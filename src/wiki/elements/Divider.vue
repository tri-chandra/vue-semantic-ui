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
                title: 'Divider',
                caption: 'A standard divider',
                examples: [
                  {
                    note: 'To add a divider between parts of a grid use a divided grid variation.',
                    code:
`<div>
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
  <sui-divider />
  <sui-image medium src="/static/img/paragraph.png""></sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Vertical Divider',
                caption: 'A divider can segment content vertically',
                examples: [
                  {
                    note: [
                      'Vertical dividers requires position: relative on the element that you would like to contain the divider',
                      'A vertical divider will automatically swap to a horizontal divider at mobile resolutions when used inside a stackable grid',
                      'There is a know bug of vertical dividers after a W3C update. Please read #4342 for more information'
                      ],
                    code:
`<div class="ui three column very relaxed grid">
  <div class="column">
    <sui-image medium src="/static/img/paragraph.png""></sui-image>
  </div>
  <sui-divider vertical>and</sui-divider>
  <div class="column">
    <sui-image medium src="/static/img/paragraph.png""></sui-image>
  </div>
  <sui-divider vertical>not</sui-divider>
  <div class="column">
    <sui-image medium src="/static/img/paragraph.png""></sui-image>
  </div>
</div>`
                  },
                  {
                    code:
`<div class="ui two column middle aligned very relaxed stackable grid">
  <div class="column">
    <div class="ui form">
      <div class="field">
        <label>Username</label>
        <div class="ui left icon input">
          <input type="text" placeholder="Username">
          <i class="user icon"></i>
        </div>
      </div>
      <div class="field">
        <label>Password</label>
        <sui-input left-icon>
          <sui-icon value="lock" />
        </sui-input>
      </div>
      <sui-button blue>Login</sui-button>
    </div>
  </div>
  <sui-divider vertical>Or</sui-divider>
  <div class="center aligned column">
    <sui-button big green labeled icon>
      <sui-icon value="signup" />Sign Up
    </sui-button>
  </div>
</div>`
                  }
                ]
              },
              {
                title: 'Horizontal Divider',
                caption: 'A divider can segment content horizontally',
                examples: [
                  {
                    note: [
                      'Horizontal dividers can also be used in combination with headers and icons to create different styles of dividers.',
                      'Dividers will automatically vary the size of their dividing rules to match the length of your text'
                    ],
                    code:
`<div class="ui center aligned basic segment">
  <sui-input left-icon action placeholder="Order #">
    <sui-icon value="search" />
    <sui-button blue>Search</sui-button>
  </sui-input>
  <sui-divider horizontal>Or</sui-divider>
  <sui-button teal labeled icon>
    Create New Order<sui-icon value="add" />
  </sui-button>
</div>`
                  },
                  {
                    code:
`<div>
<sui-header horizontal divider h4>
  <sui-icon value="tag" />
  Description
</sui-header>
<p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
<h4 class="ui horizontal divider header">
  <i class="bar chart icon"></i>
  Specifications
</h4>
<table class="ui definition table">
  <tbody>
    <tr>
      <td class="two wide column">Size</td>
      <td>1" x 2"</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>6 ounces</td>
    </tr>
    <tr>
      <td>Color</td>
      <td>Yellowish</td>
    </tr>
    <tr>
      <td>Odor</td>
      <td>Not Much Usually</td>
    </tr>
  </tbody>
</table>
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
                title: 'Inverted',
                caption: 'A divider can have its colors inverted',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Fitted',
                caption: 'A divider can be fitted, without any space above or below it.',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Hidden',
                caption: 'A hidden divider divides content without creating a dividing line',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Section',
                caption: 'A divider can provide greater margins to divide sections of content',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Clearing',
                caption: 'A divider can clear the contents above it',
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
