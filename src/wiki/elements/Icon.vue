<template>
<div>
  <sui-header h1>
    Icon
    <sui-header caption>An icon is a glyph used to represent something else</sui-header>
  </sui-header>

  <sui-header h2>Icon Set</sui-header>

  <sui-header h4>Web Content</sui-header>
  <p>Icons can represent types of content found on websites</p>
  <p>
    <sui-icon value="add to calendar"></sui-icon>
  </p>

  <sui-header dividing h2>States</sui-header>

  <sui-header h4>Disabled</sui-header>
  <p>An icon can show that it is disabled</p>
  <p><sui-icon disabled value="users"></sui-icon></p>

  <sui-header h4>Loading</sui-header>
  <p>An icon can be used as a simple loader</p>
  <p>
    <sui-icon loading value="spinner"></sui-icon>
    <sui-icon loading value="notched circle"></sui-icon>
    <sui-icon loading value="asterisk"></sui-icon>
  </p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Fitted</sui-header>
  <p>An icon can be fitted, without any space to the left or right of it.</p>
  <p>
    Tight spacing
    <sui-icon fitted value="users"></sui-icon>
    Tight spacing
  </p>

  <sui-header h4>Size</sui-header>
  <p>An icon can vary in size</p>
  <p>
    <sui-icon mini value="home"></sui-icon>
    <sui-icon tiny value="home"></sui-icon>
    <sui-icon small value="home"></sui-icon>
    <sui-icon value="home"></sui-icon>
    <sui-icon large value="home"></sui-icon>
    <sui-icon big value="home"></sui-icon>
    <sui-icon huge value="home"></sui-icon>
    <sui-icon massive value="home"></sui-icon>
  </p>

  <sui-header h4>Link</sui-header>
  <p>An icon can be formatted as a link</p>
  <p><sui-icon link value="users"></sui-icon></p>

  <sui-header h4>Flipped</sui-header>
  <p>An icon can be flipped</p>
  <p>
    <sui-icon horizontally-flipped value="home"></sui-icon>
    <sui-icon vertically-flipped value="home"></sui-icon>
  </p>

  <sui-header h4>Rotated</sui-header>
  <p>An icon can be Rotated</p>
  <p>
    <sui-icon rotated value="users"></sui-icon>
    <sui-icon counter-rotated value="users"></sui-icon>
  </p>

  <sui-header h4>Circular</sui-header>
  <p>An icon can be formatted to appear circular</p>
  <p>
    <sui-icon circular value="users"></sui-icon>
    <sui-icon teal circular value="users"></sui-icon>
    <sui-icon inverted circular value="users"></sui-icon>
    <sui-icon inverted teal circular value="users"></sui-icon>
  </p>

  <sui-header h4>Bordered</sui-header>
  <p>An icon can be formatted to appear bordered</p>
  <p>
    <sui-icon bordered value="users"></sui-icon>
    <sui-icon teal bordered value="users"></sui-icon>
    <sui-icon inverted bordered value="users"></sui-icon>
    <sui-icon inverted teal bordered value="users"></sui-icon>
  </p>

  <sui-header h4>Colored</sui-header>
  <p>An icon can be formatted with different colors</p>
  <p>
    <sui-icon red value="users"></sui-icon>
    <sui-icon orange value="users"></sui-icon>
    <sui-icon yellow value="users"></sui-icon>
    <sui-icon olive value="users"></sui-icon>
    <sui-icon green value="users"></sui-icon>
    <sui-icon teal value="users"></sui-icon>
    <sui-icon blue value="users"></sui-icon>
    <sui-icon violet value="users"></sui-icon>
    <sui-icon purple value="users"></sui-icon>
    <sui-icon pink value="users"></sui-icon>
    <sui-icon brown value="users"></sui-icon>
    <sui-icon grey value="users"></sui-icon>
    <sui-icon black value="users"></sui-icon>
  </p>

  <sui-header h4>Inverted</sui-header>
  <p>An icon can have its colors inverted for contrast</p>
  <p style="background-color:black;">
    <sui-icon inverted red value="users"></sui-icon>
    <sui-icon inverted orange value="users"></sui-icon>
    <sui-icon inverted yellow value="users"></sui-icon>
    <sui-icon inverted olive value="users"></sui-icon>
    <sui-icon inverted green value="users"></sui-icon>
    <sui-icon inverted teal value="users"></sui-icon>
    <sui-icon inverted blue value="users"></sui-icon>
    <sui-icon inverted violet value="users"></sui-icon>
    <sui-icon inverted purple value="users"></sui-icon>
    <sui-icon inverted pink value="users"></sui-icon>
    <sui-icon inverted brown value="users"></sui-icon>
    <sui-icon inverted grey value="users"></sui-icon>
    <sui-icon inverted black value="users"></sui-icon>
  </p>

  <sui-header dividing h2>Groups</sui-header>

  <sui-header h4>Icons</sui-header>
  <p>Several icons can be used together as a group</p>
  <p>
    <sui-icons huge>
      <sui-icon big value="thin circle"></sui-icon>
      <sui-icon value="user"></sui-icon>
    </sui-icons>
    <sui-icons huge>
      <sui-icon big red value="dont"></sui-icon>
      <sui-icon black value="user"></sui-icon>
    </sui-icons>
    <sui-icons huge>
      <sui-icon big loading value="sun"></sui-icon>
      <sui-icon value="user"></sui-icon>
    </sui-icons>
  </p>

  <sui-header h4>Corner Icon</sui-header>
  <p>A group of icons can display a smaller corner icon</p>
  <p>
     <sui-icons huge>
      <sui-icon value="puzzle"></sui-icon>
      <sui-icon top left corner value="add"></sui-icon>
    </sui-icons>
    <sui-icons huge>
      <sui-icon value="puzzle"></sui-icon>
      <sui-icon top right corner value="add"></sui-icon>
    </sui-icons>
    <sui-icons huge>
      <sui-icon value="puzzle"></sui-icon>
      <sui-icon bottom left corner value="add"></sui-icon>
    </sui-icons>
    <sui-icons huge>
      <sui-icon value="puzzle"></sui-icon>
      <sui-icon bottom right corner value="add"></sui-icon>
    </sui-icons>
  </p>
</div>
</template>

<script>
export default {

}
</script>
