<template>
  <div>
    <sui-header h1>
      Dropdown
      <sui-header caption>A dropdown allows a user to select a value from a series of options</sui-header>
    </sui-header>
    <sui-container>
      <sui-header h2>Types</sui-header>

      <sui-header h4>Dropdown</sui-header>
      <p>A dropdown</p>
      <sui-dropdown default-text="File" v-model="val1">
        <sui-dropdown-item @click.native="doAlert">New</sui-dropdown-item>
        <sui-dropdown-item description="ctrl + o">Open...</sui-dropdown-item>
        <sui-dropdown-item>E-mail Collaborators</sui-dropdown-item>
      </sui-dropdown>
      <input v-model="val1"/>

      <sui-header h4>Selection</sui-header>
      <p>A dropdown can be used to select between choices in a form</p>
      <sui-dropdown selection default-text="Gender" v-model="val2">
        <sui-dropdown-item value="1">Male</sui-dropdown-item>
        <sui-dropdown-item value="0">Female</sui-dropdown-item>
        <sui-dropdown-item value="jenny">
        <img class="ui mini avatar image" src="/static/img/jenny.jpg">
          Jenny Hess
        </sui-dropdown-item>
      </sui-dropdown>
      <input v-model="val2"/>
      <sui-dropdown fluid selection default-text="Gender" v-model="val3">
        <sui-dropdown-item value="1">Male</sui-dropdown-item>
        <sui-dropdown-item value="0">Female</sui-dropdown-item>
      </sui-dropdown>
      <input v-model="val3"/>

      <sui-header h4>Search Selection</sui-header>
      <p>A selection dropdown can allow a user to search through a large list of choices.</p>
      <sui-dropdown search selection v-model="val4">
        <sui-dropdown-item value="1">test1</sui-dropdown-item>
        <sui-dropdown-item value="2">test2</sui-dropdown-item>
        <sui-dropdown-item value="3">test3</sui-dropdown-item>
        <sui-dropdown-item value="4"><i class="af flag"></i>Afghanistan</sui-dropdown-item>
        <sui-dropdown-item value="5"><i class="ax flag"></i>Aland Islands</sui-dropdown-item>
        <sui-dropdown-item value="6"><i class="al flag"></i>Albania</sui-dropdown-item>
        <sui-dropdown-item value="7"><i class="dz flag"></i>Algeria</sui-dropdown-item>
        <sui-dropdown-item value="8"><i class="as flag"></i>American Samoa</sui-dropdown-item>
        <sui-dropdown-item value="ge"><i class="ge flag"></i>Georgia</sui-dropdown-item>
        <sui-dropdown-item value="de"><i class="de flag"></i>Germany</sui-dropdown-item>
        <sui-dropdown-item value="gh"><i class="gh flag"></i>Ghana</sui-dropdown-item>
        <sui-dropdown-item value="gi"><i class="gi flag"></i>Gibraltar</sui-dropdown-item>
        <sui-dropdown-item value="gr"><i class="gr flag"></i>Greece</sui-dropdown-item>
      </sui-dropdown>
      <input v-model="val4"/>

      <sui-header h4>Multiple Selection</sui-header>
      <p>A selection dropdown can allow multiple selections.</p>
      <sui-dropdown multiple selection v-model="val5">
        <sui-dropdown-item value="1">test1</sui-dropdown-item>
        <sui-dropdown-item value="2">test2</sui-dropdown-item>
        <sui-dropdown-item value="3">test3</sui-dropdown-item>
        <sui-dropdown-item value="4"><i class="af flag"></i>Afghanistan</sui-dropdown-item>
        <sui-dropdown-item value="5"><i class="ax flag"></i>Aland Islands</sui-dropdown-item>
        <sui-dropdown-item value="6"><i class="al flag"></i>Albania</sui-dropdown-item>
        <sui-dropdown-item value="7"><i class="dz flag"></i>Algeria</sui-dropdown-item>
        <sui-dropdown-item value="8"><i class="as flag"></i>American Samoa</sui-dropdown-item>
        <sui-dropdown-item value="ge"><i class="ge flag"></i>Georgia</sui-dropdown-item>
        <sui-dropdown-item value="de"><i class="de flag"></i>Germany</sui-dropdown-item>
        <sui-dropdown-item value="gh"><i class="gh flag"></i>Ghana</sui-dropdown-item>
        <sui-dropdown-item value="gi"><i class="gi flag"></i>Gibraltar</sui-dropdown-item>
        <sui-dropdown-item value="gr"><i class="gr flag"></i>Greece</sui-dropdown-item>
      </sui-dropdown>
      <input v-model="val5"/>

      <sui-header h4>Multiple Search Selection</sui-header>
      <p>A selection dropdown can allow multiple search selections.</p>
      <sui-dropdown multiple selection>
        <sui-dropdown-item value="1">test1</sui-dropdown-item>
        <sui-dropdown-item value="2">test2</sui-dropdown-item>
        <sui-dropdown-item value="3">test3</sui-dropdown-item>
        <sui-dropdown-item value="4"><i class="af flag"></i>Afghanistan</sui-dropdown-item>
        <sui-dropdown-item value="5"><i class="ax flag"></i>Aland Islands</sui-dropdown-item>
        <sui-dropdown-item value="6"><i class="al flag"></i>Albania</sui-dropdown-item>
        <sui-dropdown-item value="7"><i class="dz flag"></i>Algeria</sui-dropdown-item>
        <sui-dropdown-item value="8"><i class="as flag"></i>American Samoa</sui-dropdown-item>
        <sui-dropdown-item value="ge"><i class="ge flag"></i>Georgia</sui-dropdown-item>
        <sui-dropdown-item value="de"><i class="de flag"></i>Germany</sui-dropdown-item>
        <sui-dropdown-item value="gh"><i class="gh flag"></i>Ghana</sui-dropdown-item>
        <sui-dropdown-item value="gi"><i class="gi flag"></i>Gibraltar</sui-dropdown-item>
        <sui-dropdown-item value="gr"><i class="gr flag"></i>Greece</sui-dropdown-item>
      </sui-dropdown>

      <sui-header h4>Search Dropdown</sui-header>
      <p>A dropdown can be searchable</p>
      <sui-dropdown search labeled icon button default-text="Select Language" arrow-icon="world">
        <sui-dropdown-item>Arabic</sui-dropdown-item>
        <sui-dropdown-item>Chinese</sui-dropdown-item>
        <sui-dropdown-item>Danish</sui-dropdown-item>
      </sui-dropdown>
    </sui-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: [],
      val2: [],
      val3: [],
      val4: [],
      val5: [],
      val6: [],
      val7: [],
      val8: [],
      val9: []
    }
  },
  methods: {
    doAlert() {
      alert('clicked')
    }
  }
}
</script>

<style>

</style>
