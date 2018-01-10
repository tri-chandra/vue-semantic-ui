<template>
<div>
   <sui-header h1>
    Label
    <sui-header caption>A label displays content classification</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>Label</sui-header>
  <p>A label</p>
  <p>
    <sui-label>
      <sui-icon value="mail" /> 23
    </sui-label>
  </p>

  <sui-header h4>Image</sui-header>
  <p>A label can be formatted to emphasize an image</p>
  <p>
    <sui-label image>
      <sui-image src="/static/img/jenny.jpg" /> Jenny
    </sui-label>
    <sui-label blue image detail="student">
      <sui-image src="/static/img/jenny.jpg" /> Jenny
    </sui-label>
    <sui-label image>
      <sui-image src="/static/img/jenny.jpg" />
      Jenny
      <sui-icon value="delete" />
    </sui-label>
  </p>

  <sui-header h4>Pointing</sui-header>
  <p>A label can point to content next to it</p>
  <p>
    <sui-label pointing>Please enter a value</sui-label>
    <sui-label pointing-below>Please enter a value</sui-label>
    <sui-label left-pointing>Please enter a value</sui-label>
    <sui-label right-pointing>Please enter a value</sui-label>

    <sui-label pointing red basic>Please enter a value</sui-label>
    <sui-label pointing-below red basic>Please enter a value</sui-label>
    <sui-label left-pointing red basic>Please enter a value</sui-label>
    <sui-label right-pointing red basic>Please enter a value</sui-label>
  </p>

  <sui-header h4>Corner</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Tag</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Ribbon</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Attached</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Horizontal</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Pointing</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header dividing h2>Content</sui-header>

  <sui-header h4>Detail</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Icon</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Image</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Link</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Circular</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Basic</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Colored</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Size</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header dividing h2>Groups</sui-header>

  <sui-header h4>Group Size</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Colored Group</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Tag Group</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

  <sui-header h4>Circular Group</sui-header>
  <p>Lorem ipsum</p>
  <p></p>

</div>
</template>

<script>
export default {

}
</script>
