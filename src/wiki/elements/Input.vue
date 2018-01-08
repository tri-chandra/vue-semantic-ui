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
  <p>
    <sui-input left-icon loading placeholder="Search...">
      <sui-icon value="search" />
    </sui-input>
  </p>
  <p>
    <sui-input right-icon loading placeholder="Search...">
      <sui-icon value="search" />
    </sui-input>
  </p>

  <sui-header h4>Disabled</sui-header>
  <p>An input field can show that it is disabled</p>
  <p>
    <sui-input  disabled placeholder="Search..."></sui-input>
    <sui-input  disabled icon placeholder="Search..."><sui-icon value="search" /></sui-input>
  </p>

  <sui-header h4>Error</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Icon</sui-header>
  <p>An input field can show the data contains errors</p>
  <p>
    <sui-input left-icon placeholder="Search...">
      <sui-icon value="user" />
    </sui-input>
    <sui-input icon placeholder="Search...">
      <sui-icon circular link value="search" />
    </sui-input>
    <sui-input icon placeholder="Search...">
      <sui-icon inverted circular link value="search" />
    </sui-input>
  </p>

  <sui-header h4>Labeled</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header h4>Action</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header h4>Transparent</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header h4>Inverted</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header h4>Fluid</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>

  <sui-header h4>Size</sui-header>
  <p>An input field can show the data contains errors</p>
  <p><sui-input error placeholder="Search..." /></p>
</div>
</template>

<script>
export default {

}
</script>
