<template>
<div>
  <sui-header h1>
    {{wikiContent.title}}
    <sui-header caption>{{wikiContent.caption}}</sui-header>
  </sui-header>

  <template v-for="(section, idx) in wikiContent.sections">
    <sui-header dividing h2 :key="idx">{{section.title}}</sui-header>

    <template v-for="subsection, idx in section.subSections">
      <sui-header h4>{{subsection.title}}</sui-header>
      <p>{{subsection.caption}}</p>
      <p>
        <example-segment
          v-for="(example, idx) in subsection.examples"
          :key="idx"
          v-model="example.code"
          :note="example.note"
          :inverted="example.inverted" />
      </p>
    </template>
  </template>
</div>
</template>

<script>
import ExampleSegment from '@/wiki/components/ExampleSegment'

export default {
  name: 'WikiTemplate',
  components: { ExampleSegment },
  props: ['value'],
  data() {
    return {
      wikiContent: {
        
      }
    }
  },
  mounted() {
    this.wikiContent = this.value
  }
};
</script>