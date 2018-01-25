<template>
  <wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Input',
        caption: 'An input is a field used to elicit a response from a user',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Input',
                caption: 'A standard input',
                examples: [
                  {
                    code:
`<sui-input placeholder="Search..." />`
                  }
                ]
              }
            ]
          },
          {
            title: 'States',
            subSections: [
              {
                title: 'Focus',
                caption: 'An input field can show a user is currently interacting with it',
                examples: [
                  {
                    code:
`<sui-input focus placeholder="Search..." />`
                  }
                ]
              },
              {
                title: 'Loading',
                caption: 'An icon input field can show that it is currently loading data',
                examples: [
                  {
                    note: 'Loading inputs automatically modify the input\'s icon on loading state to show loading indication',
                    code:
`<sui-input left-icon loading placeholder="Search...">
  <sui-icon value="search" />
</sui-input>`
                  },
                  {
                    code:
`<sui-input right-icon loading placeholder="Search...">
  <sui-icon value="search" />
</sui-input>`
                  }
                ]
              },
              {
                title: 'Disabled',
                caption: 'An input field can show that it is disabled',
                examples: [
                  {
                    code:
`<sui-input  disabled placeholder="Search..."></sui-input>`
                  },
                  {
                    code:
`<sui-input  disabled icon placeholder="Search..."><sui-icon value="search" /></sui-input>`
                  }
                ]
              },
              {
                title: 'Error',
                caption: 'An input field can show the data contains errors',
                examples: [
                  {
                    code:
`<sui-input error placeholder="Search..." />`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Icon',
                caption: 'An input can be formatted with an icon',
                examples: [
                  {
                    note: 'Input icons do not receive pointer-events unless a link icon is used.',
                    code:
`<div>
  <sui-input left-icon placeholder="Search...">
    <sui-icon value="user" />
  </sui-input>
  <sui-input icon placeholder="Search...">
    <sui-icon circular link value="search" />
  </sui-input>
  <sui-input icon placeholder="Search...">
    <sui-icon inverted circular link value="search" />
  </sui-input>
</div>`
                  }
                ]
              },
              {
                title: 'Labeled',
                caption: 'An input can be formatted with a label',
                examples: [
                  {
                    code:
`<sui-input labeled placeholder="mysite.com">
  <div slot="label" class="ui label">http://</div>
</sui-input>`
                  },
                  {
                    code:
`<sui-input right-labeled placeholder="Search...">
  <sui-dropdown class="label" default-text="Find domain">
    <sui-dropdown-item>.com</sui-dropdown-item>
    <sui-dropdown-item>.net</sui-dropdown-item>
    <sui-dropdown-item>.org</sui-dropdown-item>
  </sui-dropdown>
</sui-input>`
                  },
                  {
                    code:
`<sui-input right-labeled placeholder="Amount">
  <sui-label for="amount" slot="label">$</sui-label>
  <sui-label basic>.00</sui-label>
</sui-input>`
                  },
                  {
                    code:
`<sui-input right-labeled left-icon placeholder="Enter tags">
  <sui-icon value="tags" />
  <sui-label tag link>Add Tag</sui-label>
</sui-input>`
                  },
                  {
                    code:
`<sui-input left-corner labeled placeholder="Search...">
  <sui-label left-corner>
    <sui-icon value="asterisk" />
  </sui-label>
</sui-input>`
                  },
                  {
                    code:
`<sui-input corner labeled placeholder="Search...">
  <sui-label right-corner>
    <sui-icon value="asterisk" />
  </sui-label>
</sui-input>`
                  }
                ]
              },
              {
                title: 'Action',
                caption: 'An input can be formatted to alert the user to an action they may perform',
                examples: [
                  {
                    code:
`<sui-input action placeholder="Search...">
  <sui-button>Search</sui-button>
</sui-input>`
                  },
                  {
                    code:
`<sui-input left-action :value="'$52.03'">
  <sui-button teal labeled icon slot="label">
    <sui-icon value="cart" />Checkout
  </sui-button>
</sui-input>`
                  },
                  {
                    code:
`<sui-input action left-icon placeholder="Search...">
  <sui-icon value="search" />
  <sui-dropdown basic floating button default-text="This Page">
    <sui-dropdown-item>This Organization</sui-dropdown-item>
    <sui-dropdown-item>Entire Site</sui-dropdown-item>
  </sui-dropdown>
</sui-input>`
                  },
                  {
                    code:
`<sui-input action placeholder="Search...">
  <sui-dropdown compact selection :value="['articles']">
    <sui-dropdown-item vlue="all">All</sui-dropdown-item>
    <sui-dropdown-item value="articles">Articles</sui-dropdown-item>
    <sui-dropdown-item value="products">Products</sui-dropdown-item>
  </sui-dropdown>
  <sui-button type="submit">Search</sui-button>
</sui-input>`
                  },
                  {
                    code:
`<sui-input action :value="'http://ww.short.url/c0opq'">
  <sui-button real right-labeled icon>
    <sui-icon value="copy" />Copy
  </sui-button>
</sui-input>`
                  },
                  {
                    code:
`<sui-input action placeholder="Search...">
  <sui-button icon><sui-icon value="search" /></sui-button>
</sui-input>`
                  }
                ]
              },
              {
                title: 'Transparent',
                caption: 'A transparent input has no background',
                examples: [
                  {
                    code:
`<sui-input transparentplaceholder="Search..." />`
                  },
                  {
                    code:
`<sui-input transparent icon placeholder="Search...">
  <sui-icon value="search" />
</sui-input>`
                  },
                  {
                    code:
`<sui-input transparent left-icon placeholder="Search...">
  <sui-icon value="search" />
</sui-input>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'An input can be formatted to appear on dark backgrounds',
                examples: [
                  {
                    inverted: true,
                    code:
`<div>
  <sui-input inverted placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted left-icon placeholder="Search...">
    <sui-icon value="search" />
  </sui-input>
  <sui-divider inverted />
  <sui-input inverted transparent icon placeholder="Search...">
    <sui-icon value="search" />
  </sui-input>
</div>`
                  }
                ]
              },
              {
                title: 'Fluid',
                caption: 'An input can take the size of its container',
                examples: [
                  {
                    code:
`<div>
  <sui-input fluid icon placeholder="Search a very wide input...">
    <sui-icon value="search" />
  </sui-input>
  <sui-input fluid action placeholder="Search...">
    <sui-button value="search">Search</sui-button>
  </sui-input>
</div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'An input can vary in size',
                examples: [
                  {
                    note: 'Inputs will automatically size themselves unless you manually declare a width',
                    code:
`<div>
  <sui-input mini placeholder="Search..." />
  <sui-input small placeholder="Search..." />
  <sui-input large placeholder="Search..." />
  <sui-input big placeholder="Search..." />
  <sui-input massive placeholder="Search..." />
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
