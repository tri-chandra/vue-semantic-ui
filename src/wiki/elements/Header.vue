<template>
<div>
  <sui-header h1>
    Header
    <sui-header caption>A header provides a short summary of content</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>Page Headers</sui-header>
  <p>Headers may be oriented to give the hierarchy of a section in the context of the page</p>
  <p>
    <sui-header h1>First header</sui-header>
    <sui-header h2>Second header</sui-header>
    <sui-header h3>Third header</sui-header>
    <sui-header h4>Fourth header</sui-header>
    <sui-header h5>Fifth header</sui-header>
  </p>

  <sui-header h4>Content Headers</sui-header>
  <p>Headers may be oriented to give the importance of a section in the context of the content that surrounds it</p>
  <p>
    <sui-header huge>Huge Header</sui-header>
    <sui-header large>Large Header</sui-header>
    <sui-header medium>Medium Header</sui-header>
    <sui-header small>Small Header</sui-header>
    <sui-header tiny>Tiny Header</sui-header>
  </p>

  <sui-header h4>Icon Headers</sui-header>
  <p>A header can be formatted to em[hasize an icon</p>
  <p>
    <sui-header icon>
      <i class="settings icon"></i>
      <div class="content">
        Account Settings
        <sui-header sub>Manage your account settings and set e-mail preferences.</sui-header>
      </div>
    </sui-header>
    <sui-header center-aligned icon>
      <i class="circular users icon"></i>
      Friends
    </sui-header>
  </p>

  <sui-header h4>Sub Headers</sui-header>
  <p>Headers may be formatted to label smaller or de-emphasized content.</p>
  <p>
    <sui-header sub>Price</sui-header>$10.99
    <div class="ui horizontal list">
      <div class="item">
        <img class="ui mini circular image" src="/static/img/jenny.jpg">
        <div class="content">
          <sui-header sub>Molly</sui-header>
          Coordinator
        </div>
      </div>
      <div class="item">
        <img class="ui mini circular image" src="/static/img/jenny.jpg">
        <div class="content">
          <sui-header sub>Jenny</sui-header>
          Developer
        </div>
      </div>
    </div>
  </p>

  <sui-header dividing h2>Content</sui-header>

  <sui-header h4>Image</sui-header>
  <p>A header may contain an image.</p>

  <sui-header h4>Colored</sui-header>
  <p>A header can be formatted with different colors.</p>
  <p>
    <sui-header red>Red</sui-header>
    <sui-header orange>Orange</sui-header>
    <sui-header yellow>Yellow</sui-header>
    <sui-header olive>Olive</sui-header>
    <sui-header green>Green</sui-header>
    <sui-header teal>Teal</sui-header>
    <sui-header blue>blue</sui-header>
    <sui-header purple>Purple</sui-header>
    <sui-header violet>Violet</sui-header>
    <sui-header pink>Pink</sui-header>
    <sui-header brown>Brown</sui-header>
    <sui-header grey>Grey</sui-header>
  </p>

  <sui-header h4>Inverted</sui-header>
  <p>A header can have its colors inverted for contrast.</p>
  <p style="background-color:#000000">
    <sui-header inverted red>Red</sui-header>
    <sui-header inverted orange>Orange</sui-header>
    <sui-header inverted yellow>Yellow</sui-header>
    <sui-header inverted olive>Olive</sui-header>
    <sui-header inverted green>Green</sui-header>
    <sui-header inverted teal>Teal</sui-header>
    <sui-header inverted blue>blue</sui-header>
    <sui-header inverted purple>Purple</sui-header>
    <sui-header inverted violet>Violet</sui-header>
    <sui-header inverted pink>Pink</sui-header>
    <sui-header inverted brown>Brown</sui-header>
    <sui-header inverted grey>Grey</sui-header>
  </p>
</div>
</template>

<script>
export default {

}
</script>
