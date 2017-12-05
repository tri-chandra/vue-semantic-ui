<template>
  <div class="ui segment">
      <sui-dimmer v-model="asd">
        <div slot="content">
          <div class="ui text loader">Loading</div>
        </div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </sui-dimmer>
      <button @click="asd=!asd">click me!</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      asd: false
    }
  }
}
</script>

<style>

</style>
