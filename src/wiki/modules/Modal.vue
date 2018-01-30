<template>
  <wiki-template v-model="wikiContent">
    <sui-header dividing h2>Types</sui-header>
    
    <sui-header h4>Modal</sui-header>
    <p>A standard modal</p>
    <sui-button @click="exampleClicked(1)">Show Modal!</sui-button>
    <sui-modal v-model="models[1]" style="margin-top: -213.578px">
      <i class="close icon"></i>
      <div class="header">
        Profile Picture
      </div>
      <sui-modal-content image>
        <sui-image medium src="/static/img/image.png" />
        <div class="description">
          <sui-header>We've auto-chosen a profile image for you.</sui-header>
          <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </div>
      </sui-modal-content>
      <div class="actions">
        <sui-button black>Nope</sui-button>
        <sui-button positive right-labeled icon>
          Yep, that's me
          <sui-icon value="checkmark" />
        </sui-button>
      </div>
    </sui-modal>
  </wiki-template>
</template>

<script>
export default {
  data() {
    return {
      wikiContent: {
        title: 'Modal',
        caption: 'A modal displays content that temporarily blocks interactions with the main view of a site',
        sections: [

        ]
      },
      models: [false, false]
    }
  },
  methods: {
    exampleClicked(n) {
      this.models.splice(n, 1, true)
    }
  }
}
</script>

<style>

</style>
