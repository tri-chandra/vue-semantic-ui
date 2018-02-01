<template>
  <wiki-template v-model="wikiContent">
    <sui-search v-model="dummySearchResult" @changed="onChanged">
      <sui-input prompt placeholder="Common Password..." />
      <template slot="results" slot-scope="d">
        <sui-search-result
          v-for="(item, idx) in d.result"
          :key="idx">
          {{item.title}}
        </sui-search-result>
      </template>
      <template slot="action" href="">View all 20 results...</template>
    </sui-search>
  </wiki-template>
</template>

<script>
export default {
  data() {
    return {
      dummySearchResult: [
        {title: 'a'},
        {title: 'b'},
        {title: 'c'},
        {title: 'd'},
        {title: 'e'}
      ],
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
  <sui-input prompt placeholder="Common Password..." />
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
  },
  methods: {
    onChanged(e) {
      console.log(e)
    }
  }
}
</script>
