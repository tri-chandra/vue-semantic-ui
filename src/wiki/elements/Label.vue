<template>
  <wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Label',
        caption: 'A label displays content classification',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Label',
                caption: 'A label',
                examples: [
                  {
                    code:
`<sui-label>
  <sui-icon value="mail" />23
</sui-label>`
                  }
                ]
              },
              {
                title: 'Image',
                caption: 'A label can be formatted to emphasize an image',
                examples: [
                  {
                    code:
`<div>
  <sui-label image>
    <sui-image src="/static/img/jenny.jpg" /> Jenny
  </sui-label>
  <sui-label blue image detail="student">
    <sui-image src="/static/img/jenny.jpg" /> Jenny
  </sui-label>
  <sui-label image>
    <sui-image src="/static/img/jenny.jpg" />
    Jenny
    <sui-icon value="delete" />
  </sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Pointing',
                caption: 'A label can point to content next to it',
                examples: [
                  {
                    code:
`<div>
  <sui-label pointing>Please enter a value</sui-label>
  <sui-label pointing-below>Please enter a value</sui-label>
  <sui-label left-pointing>Please enter a value</sui-label>
  <sui-label right-pointing>Please enter a value</sui-label>

  <sui-label pointing red basic>Please enter a value</sui-label>
  <sui-label pointing-below red basic>Please enter a value</sui-label>
  <sui-label left-pointing red basic>Please enter a value</sui-label>
  <sui-label right-pointing red basic>Please enter a value</sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Corner',
                caption: 'A label can position itself in the corner of an element',
                examples: [
                  {
                    note: 'A corner label must be positioned inside a container with position: relative to display properly. If a container is rounded you will need to add overflow:hidden to the container to produce a rounded label.',
                    code:
`<div>
  <sui-image medium tag="div">
    <sui-label left-corner link>
      <sui-icon value="heart" />
    </sui-label>
    <img src="/static/img/image.png" />
  </sui-image>
  <sui-image medium tag="div">
    <sui-label red right-corner link label>
      <sui-icon value="save" />
    </sui-label>
    <img src="/static/img/image.png" />
  </sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Tag',
                caption: 'A label can appear as a tag',
                examples: [
                  {
                    code:
`<div>
  <sui-label link tag>New</sui-label>
  <sui-label link red tag>Upcoming</sui-label>
  <sui-label link teal tag>Featured</sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Ribbon',
                caption: 'A label can appear as a ribbon attaching itself to an element.',
                examples: [
                  {
                    code:
`<div class="ui two column grid">
  <div class="column">
    <div class="ui raised segment">
      <sui-label red ribbon link><sui-icon value="hotel" />Overview</sui-label>
      <span>Account Details</span>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <sui-label blue ribbon link>Community</sui-label>
      <span>User Reviews</span>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <sui-label orange right-ribbon link>Specs</sui-label>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <sui-label teal right-ribbon link><sui-icon value="spoon" />Reviews</sui-label>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
      <p>Paragraph content: Lorem ipsum</p>
    </div>
  </div>
</div>`
                  }
                ]
              },
              {
                title: 'Attached',
                caption: 'A label can attach to a content segment',
                examples: [
                  {
                    note: [
                      'Attached labels attempt to intelligently pad other content to account for their position, but may not in all cases apply this padding correctly.',
                      'If this happens you may need to manually correct the padding of the other elements inside the container.'
                    ],
                    code:
`<div>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="top">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="bottom">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="top left">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="top right">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="bottom left">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
  <sui-image medium tag="div" class="wireframe">
    <sui-label attached="bottom right">HTML</sui-label>
    <img src="/static/img/paragraph.png" />
  </sui-image>
</div>`
                  }
                ]
              },
              {
                title: 'Horizontal',
                caption: 'A horizontal label is formatted to label content along-side it horizontally',
                examples: [
                  {
                    code:
`<div class="ui divided selection list">
  <a class="item">
    <sui-label red horizontal>Fruit</sui-label>
    Kumquats
  </a>
  <a class="item">
    <sui-label purple horizontal>Candy</sui-label>
    Ice Cream
  </a>
  <a class="item">
    <sui-label red horizontal>Fruit</sui-label>
    Orange
  </a>
  <a class="item">
    <sui-label horizontal>Dog</sui-label>
    Poodle
  </a>
</div>`
                  }
                ]
              },
              {
                title: 'Floating',
                caption: 'A label can float above another element',
                examples: [
                  {
                    code:
`<div class="ui compact menu">
  <a class="item">
    <sui-icon value="mail" /> Messages
    <sui-label red floating>22</sui-label>
  </a>
  <a class="item">
    <sui-icon value="users" /> Friends
    <sui-label teal floating>22</sui-label>
  </a>
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
                title: 'Detail',
                caption: 'A label can contain a detail',
                examples: [
                  {
                    code:
`<sui-label detail="214">Dog</sui-label>`
                  }
                ]
              },
              {
                title: 'Icon',
                caption: 'A label can include an icon',
                examples: [
                  {
                    code:
`<div>
  <sui-label link><sui-icon value="mail" />Main</sui-label>
  <sui-label link>Tag<sui-icon value="delete" /></sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Image',
                caption: 'A label can include an image',
                examples: [
                  {
                    code:
`<div>
  <sui-label>
    <sui-image right-spaced avatar src="/static/img/jenny.jpg" />Elliot
  </sui-label>
  <sui-label>
    <img src="/static/img/jenny.jpg" />Jenny
  </sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Link',
                caption: 'A label can be a link or contain an item that links',
                examples: [
                  {
                    code:
`<sui-label link detail="View Mail">
  <sui-icon value="mail" />23
</sui-label>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Circular',
                caption: 'A label can be circular',
                examples: [
                  {
                    code:
`<div>
  <sui-label red circular link>2</sui-label>
  <sui-label orange circular link>2</sui-label>
  <sui-label yellow circular link>2</sui-label>
  <sui-label olive circular link>2</sui-label>
  <sui-label green circular link>2</sui-label>
  <sui-label teal circular link>2</sui-label>
  <sui-label blue circular link>2</sui-label>
  <sui-label violet circular link>2</sui-label>
  <sui-label purple circular link>2</sui-label>
  <sui-label pink circular link>2</sui-label>
  <sui-label brown circular link>2</sui-label>
  <sui-label grey circular link>2</sui-label>
  <sui-label black circular link>2</sui-label>
</div>`
                  },
                  {
                    code:
`<div>
  <sui-label red empty circular link></sui-label>
  <sui-label orange empty circular link></sui-label>
  <sui-label yellow empty circular link></sui-label>
  <sui-label olive empty circular link></sui-label>
  <sui-label green empty circular link></sui-label>
  <sui-label teal empty circular link></sui-label>
  <sui-label blue empty circular link></sui-label>
  <sui-label violet empty circular link></sui-label>
  <sui-label purple empty circular link></sui-label>
  <sui-label pink empty circular link></sui-label>
  <sui-label brown empty circular link></sui-label>
  <sui-label grey empty circular link></sui-label>
  <sui-label black empty circular link></sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Basic',
                caption: 'A label can reduce its complexity',
                examples: [
                  {
                    code:
`<div>
  <sui-label link basic>Basic</sui-label>
  <sui-label link pointing basic>Pointing</sui-label>
  <sui-label link image basic><img src="/static/img/jenny.jpg" /> Elliot</sui-label>
  <sui-label link red pointing basic>Red Pointing</sui-label>
  <sui-label link blue basic>Blue</sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'A label can have different colors',
                examples: [
                  {
                    code:
`<div>
  <sui-label red link>Red</sui-label>
  <sui-label orange link>Orange</sui-label>
  <sui-label yellow link>Yellow</sui-label>
  <sui-label olive link>Olive</sui-label>
  <sui-label green link>Green</sui-label>
  <sui-label teal link>Teal</sui-label>
  <sui-label blue link>Blue</sui-label>
  <sui-label violet link>Violet</sui-label>
  <sui-label purple link>Purple</sui-label>
  <sui-label pink link>Pink</sui-label>
  <sui-label brown link>Brown</sui-label>
  <sui-label grey link>Grey</sui-label>
  <sui-label black link>Black</sui-label>
</div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'A label can be small or large',
                examples: [
                  {
                    code:
`<div>
  <sui-label mini>Mini</sui-label>
  <sui-label tiny>Tiny</sui-label>
  <sui-label small>Small</sui-label>
  <sui-label>Medium</sui-label>
  <sui-label large>Large</sui-label>
  <sui-label big>Big</sui-label>
  <sui-label massive>Massive</sui-label>
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
                title: 'Group Size',
                caption: 'caption',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Colored Group',
                caption: 'caption',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Tag Group',
                caption: 'caption',
                examples: [
                  {
                    code:
`<div></div>`
                  }
                ]
              },
              {
                title: 'Circular Group',
                caption: 'caption',
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
