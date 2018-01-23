<template>
<wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Flag',
        caption: 'A flag is used to represent a political state',
        sections: [
          {
            title: 'Definition',
            subSections: [
              {
                title: 'Flag',
                caption: 'A flag can use the two digit country code, the full name, or a common alias',
                examples: [
                  {
                    code:
`<div>
  <sui-flag value="ae" />
  <sui-flag value="france" />
  <sui-flag value="myanmar" />
</div>`
                  }
                ]
              },
              {
                title: 'Types',
                caption: '',
                examples: [
                  {
                    note: 'Many flag sets use SVG to render flags at multiple sizes. However svg flags usually appear blurry or render improperly at smaller sizes. Semantic\'s default theme uses an image sprite solution which provides crisper icons, but without the ability to resize',
                    code:
`<div>
  <sui-flag value="ad" />
  <sui-flag value="bb" />
  <sui-flag value="id" />
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
