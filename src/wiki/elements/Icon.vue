<template>
  <wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Icon',
        caption: 'An icon is a glyph used to represent something else',
        sections: [
          {
            title: 'Icon Set',
            subSections: [
              {
                title: 'Web Content',
                caption: 'Icons can represent types of content found on websites',
                examples: [
                  {
                    code:
`<div>
  <sui-icon value="add to calendar"></sui-icon>
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
                caption: 'An icon can show that it is disabled',
                examples: [
                  {
                    code:
`<div>
  <sui-icon disabled value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Loading',
                caption: 'An icon can be used as a simple loader',
                examples: [
                  {
                    code:
`<div>
  <sui-icon loading value="spinner"></sui-icon>
  <sui-icon loading value="notched circle"></sui-icon>
  <sui-icon loading value="asterisk"></sui-icon>
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
                title: 'Fitted',
                caption: 'An icon can be fitted, without any space to the left or right of it.',
                examples: [
                  {
                    code:
`<div>
  Tight spacing
  <sui-icon fitted value="users"></sui-icon>
  Tight spacing
</div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'An icon can vary in size',
                examples: [
                  {
                    code:
`<div>
  <sui-icon mini value="home"></sui-icon>
  <sui-icon tiny value="home"></sui-icon>
  <sui-icon small value="home"></sui-icon>
  <sui-icon value="home"></sui-icon>
  <sui-icon large value="home"></sui-icon>
  <sui-icon big value="home"></sui-icon>
  <sui-icon huge value="home"></sui-icon>
  <sui-icon massive value="home"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Link',
                caption: 'An icon can be formatted as a link',
                examples: [
                  {
                    code:
`<div>
  <sui-icon link value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Flipped',
                caption: 'An icon can be flipped',
                examples: [
                  {
                    code:
`<div>
  <sui-icon horizontally-flipped value="home"></sui-icon>
  <sui-icon vertically-flipped value="home"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Rotated',
                caption: 'An icon can be Rotated',
                examples: [
                  {
                    code:
`<div>
  <sui-icon rotated value="users"></sui-icon>
  <sui-icon counter-rotated value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Circular',
                caption: 'An icon can be formatted to appear circular',
                examples: [
                  {
                    code:
`<div>
  <sui-icon circular value="users"></sui-icon>
  <sui-icon teal circular value="users"></sui-icon>
  <sui-icon inverted circular value="users"></sui-icon>
  <sui-icon inverted teal circular value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Bordered',
                caption: 'An icon can be formatted to appear bordered',
                examples: [
                  {
                    code:
`<div>
  <sui-icon bordered value="users"></sui-icon>
  <sui-icon teal bordered value="users"></sui-icon>
  <sui-icon inverted bordered value="users"></sui-icon>
  <sui-icon inverted teal bordered value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'An icon can be formatted with different colors',
                examples: [
                  {
                    code:
`<div>
  <sui-icon red value="users"></sui-icon>
  <sui-icon orange value="users"></sui-icon>
  <sui-icon yellow value="users"></sui-icon>
  <sui-icon olive value="users"></sui-icon>
  <sui-icon green value="users"></sui-icon>
  <sui-icon teal value="users"></sui-icon>
  <sui-icon blue value="users"></sui-icon>
  <sui-icon violet value="users"></sui-icon>
  <sui-icon purple value="users"></sui-icon>
  <sui-icon pink value="users"></sui-icon>
  <sui-icon brown value="users"></sui-icon>
  <sui-icon grey value="users"></sui-icon>
  <sui-icon black value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'An icon can have its colors inverted for contrast',
                examples: [
                  {
                    code:
`<div>
  <sui-icon inverted red value="users"></sui-icon>
  <sui-icon inverted orange value="users"></sui-icon>
  <sui-icon inverted yellow value="users"></sui-icon>
  <sui-icon inverted olive value="users"></sui-icon>
  <sui-icon inverted green value="users"></sui-icon>
  <sui-icon inverted teal value="users"></sui-icon>
  <sui-icon inverted blue value="users"></sui-icon>
  <sui-icon inverted violet value="users"></sui-icon>
  <sui-icon inverted purple value="users"></sui-icon>
  <sui-icon inverted pink value="users"></sui-icon>
  <sui-icon inverted brown value="users"></sui-icon>
  <sui-icon inverted grey value="users"></sui-icon>
  <sui-icon inverted black value="users"></sui-icon>
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
                title: 'Icons',
                caption: 'Several icons can be used together as a group',
                examples: [
                  {
                    code:
`<div>
  <sui-icons huge>
    <sui-icon big value="thin circle"></sui-icon>
    <sui-icon value="user"></sui-icon>
  </sui-icons>
  <sui-icons huge>
    <sui-icon big red value="dont"></sui-icon>
    <sui-icon black value="user"></sui-icon>
  </sui-icons>
  <sui-icons huge>
    <sui-icon big loading value="sun"></sui-icon>
    <sui-icon value="user"></sui-icon>
  </sui-icons>
</div>`
                  }
                ]
              },
              {
                title: 'Corner Icon',
                caption: 'A group of icons can display a smaller corner icon',
                examples: [
                  {
                    code:
`<div>
  <sui-icons huge>
    <sui-icon value="puzzle"></sui-icon>
    <sui-icon top left corner value="add"></sui-icon>
  </sui-icons>
  <sui-icons huge>
    <sui-icon value="puzzle"></sui-icon>
    <sui-icon top right corner value="add"></sui-icon>
  </sui-icons>
  <sui-icons huge>
    <sui-icon value="puzzle"></sui-icon>
    <sui-icon bottom left corner value="add"></sui-icon>
  </sui-icons>
  <sui-icons huge>
    <sui-icon value="puzzle"></sui-icon>
    <sui-icon bottom right corner value="add"></sui-icon>
  </sui-icons>
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
