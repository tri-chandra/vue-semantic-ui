<template>
  <div class="pusher">
    <div style="display:flex; flex-direction: row;">
      <sui-menu inverted class="vertical">
        <div v-for="menu in menuItems" :key="menu.text" class="item">
          <div class="header">{{menu.text}}</div>
          <div class="menu">
            <a
              v-for="submenu in menu.children"
              :key="submenu"
              class="item"
              :href="'#/'+menu.text.toLowerCase()+'/'+submenu.toLowerCase()"
              >
              {{submenu}}
            </a>
          </div>
        </div>
      </sui-menu>
      <router-view></router-view>
    </div>
    <div class="ui inverted vertical segment">
      <p>FOOTER</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WikiFrame',
  data()   {
    return {
      menuItems: [
        {
          text: 'UI Docs'
        },
        {
          text: 'Getting Started'
        },
        {
          text: 'Introduction',
          children: [
            'Integration',
            'Build Tools',
            'Recipes',
            'Glossary'
          ]
        },
        {
          text: 'Usage',
          children: [
            'Theming',
            'Layouts'
          ]
        },
        {
          text: 'Elements',
          children: [
            'Button',
            'Flag',
            'Header',
            'Icon'
          ]
        },
        {
          text: 'Modules',
          children: [
            'Accordion',
            'Checkbox',
            'Dimmer',
            'Dropdown',
            'Embed',
            'Modal',
            'Nag',
            'Popup',
            'Progress',
            'Rating',
            'Search',
            'Shape',
            'Sidebar',
            'Sticky',
            'Tab',
            'Transition'
          ]
        }
      ]
    }
  }
}
</script>
