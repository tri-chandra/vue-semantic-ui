<template>
<a class="result">
  <div class="content">
    <div v-if="title" class="title">{{title}}</div>
    <div v-if="description" class="description">{{description}}</div>
    <slot></slot>
  </div>
</a>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>
