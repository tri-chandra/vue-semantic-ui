<template>
<div>
  <sui-header h1>
    Input
    <sui-header caption>An input is a field used to elicit a response from a user</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>Input</sui-header>
  <p>A standard input</p>
  <p><sui-input placeholder="Search..." /></p>

  <sui-header dividing h2>States</sui-header>

  <sui-header h4>Focus</sui-header>
  <p>An input field can show a user is currently interacting with it</p>
  <p><sui-input focus placeholder="Search..." /></p>

  <sui-header h4>Loading</sui-header>
  <p>An icon input field can show that it is currently loading data</p>
  <p><sui-input left-icon="search" loading placeholder="Search..." /></p>
  <p><sui-input right-icon="search" loading placeholder="Search..." /></p>

  <sui-header h4>Disabled</sui-header>
  <p>An input field can show that it is disabled</p>
  <p>
    <sui-input  disabled placeholder="Search..." />
    <sui-input  disabled icon="search" placeholder="Search..." />
  </p>
</div>
</template>

<script>
export default {

}
</script>
