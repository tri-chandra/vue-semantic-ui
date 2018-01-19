<template>
  <div>
    <h1 class="ui header">
      <span>Semantic UI</span>
      <div class="sub header">User Interface is the language of the web</div>
    </h1>
    <sui-button huge @click="toWiki">Get Started</sui-button>

    <example v-model="example1"></example>
  </div>
</template>

<script>
import Example from '@/wiki/components/ExampleSegment'

export default {
  name: 'hello',
  components: {Example},
  data () {
    return {
      example1:
`<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`
    }
  },
  methods: {
    toWiki() {
      this.$router.push('/introduction/getting-started')
    }
  }
}
</script>
