<template>
  <wiki-template v-model="wikiContent"></wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Search',
        caption: 'A search module allows a user to query for results from a selection of data',
        sections: [
          {
            title: 'Types',
            subSections: [
              {
                title: 'Standard',
                caption: 'A search can display a set of results',
                examples: [
                  {
                    code:
`<sui-search>
  <sui-input placeholder="Common Password..." />
</sui-search>`
                  },
                  {
                    note: 'Using a ui input allows you to use additional input types, like this icon input',
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
