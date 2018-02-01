<template>
<div class="category">
  <div class="name">{{label}}</div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>
