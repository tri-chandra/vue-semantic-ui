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

    <sui-search category v-model="dummySearchResult2" @changed="onChanged">
      <sui-input prompt placeholder="Common Password..." />
      <template slot="results" slot-scope="d">
        <sui-search-category
          v-for="(item, idx) in d.result"
          :key="idx"
          :label="item.name">
          <sui-search-result
            v-for="(it, idx2) in item.results"
            :key="idx2">
            {{it.title}}
          </sui-search-result>
        </sui-search-category>
      </template>
      <template slot="action" href="">View all 20 results...</template>
    </sui-search>

    <sui-search v-model="dummySearchResult" @changed="onChanged">
      <sui-input prompt placeholder="Common Password..." />
      <template slot="action" href="">View all 20 results...</template>
    </sui-search>
    <sui-search category v-model="dummySearchResult2" @changed="onChanged">
      <sui-input prompt placeholder="Common Password..." />
      <template slot="action" href="">View all 20 results...</template>
    </sui-search>
    <sui-search category v-model="dummySearchResult3" @changed="onChanged">
      <sui-input prompt placeholder="Common Password..." />
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
      dummySearchResult2: [
        {
          name: 'animal',
          results: [
            { title: 'cat' },
            { title: 'dog' }
          ]
        },
        {
          name: 'person',
          results: [
            { title: 'male' },
            { title: 'female' }
          ]
        }
      ],
      dummySearchResult3: [
        {
          name: 'animal',
          results: [
            { title: 'cat', description: 'lorem ipsum' },
            { title: 'dog', description: 'lorem ipsum' }
          ]
        },
        {
          name: 'person',
          results: [
            { title: 'male', description: 'lorem ipsum' },
            { title: 'female', description: 'lorem ipsum' }
          ]
        }
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
