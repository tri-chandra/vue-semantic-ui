<template>
  <div class="ui inverted segment">
      <sui-accordion v-model="acc" inverted fluid exclusive>
        <sui-accordion-title v-model="acc[0]" on="mouseover">
          <i class="dropdown icon"></i>
          What is a dog?
        </sui-accordion-title >
        <sui-accordion-content v-model="acc[0]">
          <p>content 1</p>
        </sui-accordion-content>
        <sui-accordion-title v-model="acc[1]" on="mouseover">
          <i class="dropdown icon"></i>
          What is a dog?
        </sui-accordion-title >
        <sui-accordion-content v-model="acc[1]">
          <p>content 1</p>
        </sui-accordion-content>
        <sui-accordion-title v-model="acc[2]" on="mouseover">
          <i class="dropdown icon"></i>
          What is a dog?
        </sui-accordion-title >
        <sui-accordion-content v-model="acc[2]">
          <p>content 1</p>
        </sui-accordion-content>
      </sui-accordion>
    </div>
</template>

<script>
export default {
  data () {
    return {
      acc: [false, true, false]
    }
  }
}
</script>
