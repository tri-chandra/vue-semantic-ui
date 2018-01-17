<template>
<div>
  <sui-header h1>
    Reveal
    <sui-header caption>A reveal displays additional content in place of previous content when activated</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>Fade</sui-header>
  <p>An element can disappear to reveal content below</p>
  <p>
    <example>
      <sui-reveal fade>
        <div slot="visible">
          <sui-image small src="/static/img/square-image.png" />
        </div>
        <div slot="hidden">
          <sui-image small src="/static/img/nan.jpg" />
        </div>
      </sui-reveal>
    </example>

    <example>
      <sui-reveal small image fade>
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
  </p>

  <sui-header h4>Move</sui-header>
  <p>An element can move in a direction to reveal content</p>
  <p>
    <example>
      <sui-reveal small image move="left">
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
    <example>
      <sui-reveal move="right">
        <div slot="visible">
          <sui-image small src="/static/img/square-image.png" />
        </div>
        <div slot="hidden">
          <sui-image small src="/static/img/nan.jpg" />
        </div>
      </sui-reveal>
    </example>
    <example>
      <sui-reveal small image move="up">
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
    <example>
      <sui-reveal small image move="down">
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
  </p>

  <sui-header h4>Rotate</sui-header>
  <p>An element can rotate to reveal content below</p>
  <p>
    <example>
      <sui-reveal small circular image rotate>
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
    <example>
      <sui-reveal small circular image rotate-left>
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
  </p>

  <sui-header dividing h2>Content</sui-header>

  <sui-header h4>Visible Content</sui-header>
  <p>A reveal may contain content that is visible before interaction</p>
  <p>
    <example>
      <sui-reveal small fade reveal image>
        <img slot="hidden" src="/static/img/square-image.png" />
        <img slot="visible" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
  </p>

  <sui-header h4>Hidden Content</sui-header>
  <p>A reveal may contain content that is hidden before user interaction</p>
  <p>
    <example>
      <sui-reveal small fade reveal image>
        <img slot="visible" src="/static/img/square-image.png" />
        <img slot="hidden" src="/static/img/nan.jpg" />
      </sui-reveal>
    </example>
  </p>

  <sui-header dividing h2>States</sui-header>

  <sui-header h4>Active</sui-header>
  <p>An active reveal displays its hidden content</p>
  <p>
    <example>
      <sui-reveal active fade>
        <div slot="visible">
          <sui-image small src="/static/img/square-image.png" />
        </div>
        <div slot="hidden">
          <sui-image small src="/static/img/nan.jpg" />
        </div>
      </sui-reveal>
    </example>
  </p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Instant</sui-header>
  <p>An element can show its content without delay</p>
  <p>
    <example>
      <sui-reveal instant move="left">
        <div slot="visible">
          <sui-image small src="/static/img/square-image.png" />
        </div>
        <div slot="hidden">
          <sui-image small src="/static/img/nan.jpg" />
        </div>
      </sui-reveal>
    </example>
  </p>

  <sui-header dividing h2>States</sui-header>

  <sui-header h4>Disabled</sui-header>
  <p>A disabled reveal will not animate when hovered</p>
  <p>
    <example>
      <sui-reveal disabled fade>
        <div slot="visible">
          <sui-image small src="/static/img/square-image.png" />
        </div>
        <div slot="hidden">
          <sui-image small src="/static/img/nan.jpg" />
        </div>
      </sui-reveal>
    </example>
  </p>
</div>
</template>

<script>
export default {

}
</script>
