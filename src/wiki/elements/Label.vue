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
  <p>A label can position itself in the corner of an element</p>
  <p>
    <sui-image medium tag="div">
      <sui-label left-corner link>
        <sui-icon value="heart" />
      </sui-label>
      <img src="/static/img/image.png" />
    </sui-image>
    <sui-image medium tag="div">
      <sui-label red right-corner link label>
        <sui-icon value="save" />
      </sui-label>
      <img src="/static/img/image.png" />
    </sui-image>
  </p>

  <sui-header h4>Tag</sui-header>
  <p>A label can appear as a tag</p>
  <p>
    <sui-label link tag>New</sui-label>
    <sui-label link red tag>Upcoming</sui-label>
    <sui-label link teal tag>Featured</sui-label>
  </p>

  <sui-header h4>Ribbon</sui-header>
  <p>A label can appear as a ribbon attaching itself to an element.</p>
  <p>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui raised segment">
          <sui-label red ribbon link><sui-icon value="hotel" />Overview</sui-label>
          <span>Account Details</span>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <sui-label blue ribbon link>Community</sui-label>
          <span>User Reviews</span>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
        </div>
      </div>
      <div class="column">
        <div class="ui segment">
          <sui-label orange right-ribbon link>Specs</sui-label>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <sui-label teal right-ribbon link><sui-icon value="spoon" />Reviews</sui-label>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
          <p>Paragraph content: Lorem ipsum</p>
        </div>
      </div>
    </div>
  </p>

  <sui-header h4>Attached</sui-header>
  <p>A label can attach to a content segment</p>
  <p>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="top">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="bottom">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="top left">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="top right">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="bottom left">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
    <sui-image medium tag="div" class="wireframe">
      <sui-label attached="bottom right">HTML</sui-label>
      <img src="/static/img/paragraph.png" />
    </sui-image>
  </p>

  <sui-header h4>Horizontal</sui-header>
  <p>A horizontal label is formatted to label content along-side it horizontally</p>
  <p>
    <div class="ui divided selection list">
      <a class="item">
        <sui-label red horizontal>Fruit</sui-label>
        Kumquats
      </a>
      <a class="item">
        <sui-label purple horizontal>Candy</sui-label>
        Ice Cream
      </a>
      <a class="item">
        <sui-label red horizontal>Fruit</sui-label>
        Orange
      </a>
      <a class="item">
        <sui-label horizontal>Dog</sui-label>
        Poodle
      </a>
    </div>
  </p>

  <sui-header h4>Pointing</sui-header>
  <p>A label can float above another element</p>
  <p>
    <div class="ui compact menu">
      <a class="item">
        <sui-icon value="mail" /> Messages
        <sui-label red floating>22</sui-label>
      </a>
      <a class="item">
        <sui-icon value="users" /> Friends
        <sui-label teal floating>22</sui-label>
      </a>
    </div>
  </p>

  <sui-header dividing h2>Content</sui-header>

  <sui-header h4>Detail</sui-header>
  <p>A label can contain a detail</p>
  <p><sui-label detail="214">Dog</sui-label></p>

  <sui-header h4>Icon</sui-header>
  <p>A label can include an icon</p>
  <p>
    <sui-label link><sui-icon value="mail" />Main</sui-label>
    <sui-label link>Tag<sui-icon value="delete" /></sui-label>
  </p>

  <sui-header h4>Image</sui-header>
  <p>A label can include an image</p>
  <p>
    <sui-label>
      <sui-image right-spaced avatar src="/static/img/jenny.jpg" />Elliot
    </sui-label>
    <sui-label>
      <img src="/static/img/jenny.jpg" />Jenny
    </sui-label>
  </p>

  <sui-header h4>Link</sui-header>
  <p>A label can be a link or contain an item that links</p>
  <p><sui-label link detail="View Mail"><sui-icon value="mail" />23</sui-label></p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Circular</sui-header>
  <p>A label can be circular</p>
  <p>
    <sui-label red circular link>2</sui-label>
    <sui-label orange circular link>2</sui-label>
    <sui-label yellow circular link>2</sui-label>
    <sui-label olive circular link>2</sui-label>
    <sui-label green circular link>2</sui-label>
    <sui-label teal circular link>2</sui-label>
    <sui-label blue circular link>2</sui-label>
    <sui-label violet circular link>2</sui-label>
    <sui-label purple circular link>2</sui-label>
    <sui-label pink circular link>2</sui-label>
    <sui-label brown circular link>2</sui-label>
    <sui-label grey circular link>2</sui-label>
    <sui-label black circular link>2</sui-label>
  </p>
  <p>
    <sui-label red empty circular link></sui-label>
    <sui-label orange empty circular link></sui-label>
    <sui-label yellow empty circular link></sui-label>
    <sui-label olive empty circular link></sui-label>
    <sui-label green empty circular link></sui-label>
    <sui-label teal empty circular link></sui-label>
    <sui-label blue empty circular link></sui-label>
    <sui-label violet empty circular link></sui-label>
    <sui-label purple empty circular link></sui-label>
    <sui-label pink empty circular link></sui-label>
    <sui-label brown empty circular link></sui-label>
    <sui-label grey empty circular link></sui-label>
    <sui-label black empty circular link></sui-label>
  </p>

  <sui-header h4>Basic</sui-header>
  <p>A label can reduce its complexity</p>
  <p>
    <sui-label link basic>Basic</sui-label>
    <sui-label link pointing basic>Pointing</sui-label>
    <sui-label link image basic><img src="/static/img/jenny.jpg" /> Elliot</sui-label>
    <sui-label link red pointing basic>Red Pointing</sui-label>
    <sui-label link blue basic>Blue</sui-label>
  </p>

  <sui-header h4>Colored</sui-header>
  <p>A label can have different colors</p>
  <p>
    <sui-label red link>Red</sui-label>
    <sui-label orange link>Orange</sui-label>
    <sui-label yellow link>Yellow</sui-label>
    <sui-label olive link>Olive</sui-label>
    <sui-label green link>Green</sui-label>
    <sui-label teal link>Teal</sui-label>
    <sui-label blue link>Blue</sui-label>
    <sui-label violet link>Violet</sui-label>
    <sui-label purple link>Purple</sui-label>
    <sui-label pink link>Pink</sui-label>
    <sui-label brown link>Brown</sui-label>
    <sui-label grey link>Grey</sui-label>
    <sui-label black link>Black</sui-label>
  </p>

  <sui-header h4>Size</sui-header>
  <p>A label can be small or large</p>
  <p>
    <sui-label mini>Mini</sui-label>
    <sui-label tiny>Tiny</sui-label>
    <sui-label small>Small</sui-label>
    <sui-label>Medium</sui-label>
    <sui-label large>Large</sui-label>
    <sui-label big>Big</sui-label>
    <sui-label massive>Massive</sui-label>
  </p>
</div>
</template>

<script>
export default {

}
</script>

<style scope>
.wireframe {
  border:1px solid rgba(34,36,38,.15);
  border-radius:.28571429rem;
}
</style>
