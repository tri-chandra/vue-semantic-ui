<template>
<div>
  <sui-header h1>
    Image
    <sui-header caption>An image is a graphic representation of something</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>Image</sui-header>
  <p>An image</p>
  <p><sui-image small src="/static/img/image.png" /></p>

  <sui-header h4>Image link</sui-header>
  <p>An image can be formatted to link to other content</p>
  <p><sui-image medium tag="a" href="http://google.com"><img src="/static/img/image.png" /></sui-image></p>

  <sui-header dividing h2>States</sui-header>

  <sui-header h4>Hidden</sui-header>
  <p>An image can be hidden</p>
  <p><sui-image hidden src="/static/img/image.png" /></p>

  <sui-header h4>Disabled</sui-header>
  <p>An image can show that it is disabled and cannot be selected</p>
  <p><sui-image disabled medium src="/static/img/image.png" /></p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Avatar</sui-header>
  <p>An image can be formatted to appear inline with text as an avatar</p>
  <p><sui-image avatar src="/static/img/jenny.jpg" /><span>Username</span></p>

  <sui-header h4>Bordered</sui-header>
  <p>An image may include a border to emphasize the edges of white or transparent content</p>
  <p><sui-image medium bordered src="/static/img/image.png" /></p>

  <sui-header h4>Fluid</sui-header>
  <p>An image can take up the width of its container</p>
  <p><sui-image fluid src="/static/img/image.png" /></p>

  <sui-header h4>Rounded</sui-header>
  <p>An image may appear rounded</p>
  <p><sui-image medium rounded src="/static/img/image.png" /></p>

  <sui-header h4>Circular</sui-header>
  <p>An image may appear circular</p>
  <p><sui-image medium circular src="/static/img/square-image.png" /></p>

  <sui-header h4>Vertically Aligned</sui-header>
  <p>n image can specify its vertical alignment</p>
  <p>
    <sui-image top-aligned tiny src="/static/img/image.png" /><span>Top Aligned</span>
    <div class="ui divider"></div>
    <sui-image middle-aligned tiny src="/static/img/image.png" /><span>Middle Aligned</span>
    <div class="ui divider"></div>
    <sui-image bottom-aligned tiny src="/static/img/image.png" /><span>Bottom Aligned</span>
  </p>

  <sui-header h4>Centered</sui-header>
  <p>An image can appear centered in a content block</p>
  <p><sui-image medium centered src="/static/img/image.png" /></p>

  <sui-header h4>Spaced</sui-header>
  <p>An image can specify that it needs an additional spacing to separate it from nearby content</p>
  <p>
    lorem
    <sui-image mini spaced rounded src="/static/img/image.png" />
    ipsum
    <sui-image mini left-spaced rounded src="/static/img/image.png" />
    dolor
    <sui-image mini right-spaced rounded src="/static/img/image.png" />
    amet
  </p>

  <sui-header h4>Floated</sui-header>
  <p>An image can sit to the left or right of other content</p>
  <p>
    <sui-image left-floated small rounded src="/static/img/image.png" />
    <sui-image right-floated small rounded src="/static/img/image.png" />
  </p>

  <sui-header h4>Size</sui-header>
  <p>An image may appear at different sizes</p>
  <p>
    <sui-image mini rounded src="/static/img/image.png" />
    <sui-image tiny rounded src="/static/img/image.png" />
    <sui-image small rounded src="/static/img/image.png" />
    <sui-image medium rounded src="/static/img/image.png" />
    <sui-image large rounded src="/static/img/image.png" />
    <sui-image big rounded src="/static/img/image.png" />
    <sui-image huge rounded src="/static/img/image.png" />
    <sui-image massive rounded src="/static/img/image.png" />
  </p>
</div>
</template>

<script>
export default {

}
</script>
