<template>
  <div>
    <h1 class="ui header">
      <span>Semantic UI</span>
      <div class="sub header">User Interface is the language of the web</div>
    </h1>
    <sui-button huge @click="toWiki">Get Started</sui-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods: {
    toWiki() {
      this.$router.push('/introduction/getting-started')
    }
  }
}
</script>
