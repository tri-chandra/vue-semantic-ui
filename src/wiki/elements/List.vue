<template>
<div>
  <sui-header h1>
    List
    <sui-header caption>A list is used to group related content</sui-header>
  </sui-header>

  <sui-header dividing h2>Types</sui-header>

  <sui-header h4>List</sui-header>
  <p>A list groups related content</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item>Apples</sui-list-item>
        <sui-list-item>Pears</sui-list-item>
        <sui-list-item>Oranges</sui-list-item>
      </sui-list>
    </example>

    <example>
      <sui-list>
        <sui-list-item>
          <sui-icon value="users" />
          <sui-list-content>
            Semantic UI
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-icon value="mail" />
          <sui-list-content>
            <a>jack@semantic-ui.com</a>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>

    <example>
      <sui-list>
        <sui-list-item>
          <sui-icon large middle-aligned value="github" />
          <sui-list-content>
            <a slot="header">Semantic-Org/Semantic-UI</a>
            <div slot="description">Updated 10 mins ago</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-icon large middle-aligned value="github" />
          <sui-list-content>
            <a slot="header">Semantic-Org/Semantic-UI-Docs</a>
            <div slot="description">Updated 22 mins ago</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>

    <example>
      <sui-list>
        <sui-list-item>
          <sui-icon value="folder" />
          <sui-list-content>
            <div slot="header">src</div>
            <div slot="description">Source files for project</div>
            <sui-list>
              <sui-list-item>
                <sui-icon value="folder" />
                <sui-list-content>
                  <div slot="header">site</div>
                  <div slot="description">Your site's theme</div>
                </sui-list-content>
              </sui-list-item>
              <sui-list-item>
                <sui-icon value="folder" />
                <sui-list-content>
                  <div slot="header">themes</div>
                  <div slot="description">Packaged theme files</div>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-icon value="folder" />
          <sui-list-content>
            <div slot="header">src</div>
            <div slot="description">Source files for project</div>
            <sui-list>
              <sui-list-item>
                <sui-icon value="folder" />
                <sui-list-content>
                  <div slot="header">site</div>
                  <div slot="description">Your site's theme</div>
                </sui-list-content>
              </sui-list-item>
            </sui-list>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Bulleted</sui-header>
  <p>A list can mark items with a bullet</p>
  <p>
    <example>
      <sui-list bulleted>
        <sui-list-item>Gaining Access</sui-list-item>
        <sui-list-item>Inviting Friends</sui-list-item>
        <sui-list-item>
          <div>Benefits</div>
          <sui-list>
            <sui-list-item link>Link to somewhere</sui-list-item>
            <sui-list-item>Rebates</sui-list-item>
            <sui-list-item>Discounts</sui-list-item>
          </sui-list>
        </sui-list-item>
        <sui-list-item>Warranty</sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Ordered</sui-header>
  <p>A list can be ordered numerically</p>
  <p>
    <example>
      <sui-list ordered>
        <sui-list-item>Gaining Access</sui-list-item>
        <sui-list-item>Inviting Friends</sui-list-item>
        <sui-list-item>
          <div>Benefits</div>
          <sui-list>
            <sui-list-item link>Link to somewhere</sui-list-item>
            <sui-list-item>Rebates</sui-list-item>
            <sui-list-item>Discounts</sui-list-item>
          </sui-list>
        </sui-list-item>
        <sui-list-item>Warranty</sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Link</sui-header>
  <p>A list can be specially formatted for navigation links</p>
  <p>
    <example>
      <sui-list link>
        <sui-list-item active>Home</sui-list-item>
        <sui-list-item link>About</sui-list-item>
        <sui-list-item link>Jobs</sui-list-item>
        <sui-list-item link>Team</sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header dividing h2>Content</sui-header>

  <sui-header h4>Item</sui-header>
  <p>A list item can contain a set of items</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item>1</sui-list-item>
        <sui-list-item>2</sui-list-item>
        <sui-list-item>3</sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Icon</sui-header>
  <p>A list item can contain an icon</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item link>
          <sui-icon value="help" />
          <sui-list-content>
            <div slot="header">Floated Icon</div>
            <div slot="description">This text will always have a left margin to make sure it sits alongside your icon</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item link>
          <sui-icon value="right triangle" />
          <sui-list-content>
            <div slot="header">Icon Alignment</div>
            <div slot="description">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>
          </sui-list-content>
        </sui-list-item><sui-list-item>
          <sui-icon value="help" />
          Inline Text
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Image</sui-header>
  <p>A list item can contain an image</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Link</sui-header>
  <p>A list can contain links</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item link>What is a FAQ</sui-list-item>
        <sui-list-item link>What is a FAQ</sui-list-item>
        <sui-list-item link>What is a FAQ</sui-list-item>
      </sui-list>
    </example>

    <example>
      <sui-list>
        <sui-list-item>
          <sui-list-content>
            <a slot="header">Header</a>
            <div slot="description">Click a link in our <a>description</a>.</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <a class="header">Header</a>
          <div class="description">
            Click a link in our <a>description</a>.
          </div>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Header</sui-header>
  <p>A list item can contain a header</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item>
          <div class="header">New York City</div>
          A lovely city
        </sui-list-item>
        <sui-list-item>
          <div class="header">New York City</div>
          A lovely city
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Description</sui-header>
  <p>A list item can contain a description</p>
  <p>
    <example>
      <sui-list>
        <sui-list-item>
          <sui-icon value="map marker" />
          <sui-list-content>
            <a slot="header">Krolewskie Jadlo</a>
            <div slot="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-icon value="map marker" />
          <sui-list-content>
            <a slot="header">Krolewskie Jadlo</a>
            <div slot="description">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header dividing h2>Variations</sui-header>

  <sui-header h4>Horizontal</sui-header>
  <p>A list can be formatted to have items appear horizontally</p>
  <p>
    <example>
      <sui-list horizontal>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>

    <example>
      <sui-list ordered horizontal>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Inverted</sui-header>
  <p>A list can be inverted to appear on a dark background</p>
  <p>
    <example inverted>
      <sui-list inverted relaxed divided>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-image avatar src="/static/img/jenny.jpg"/>
          <sui-list-content>
            <a slot="header">Jenny</a>
            <div slot="description">Admin</div>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </example>
  </p>

  <sui-header h4>Selection</sui-header>
  <p>A selection list formats list items as possible choices</p>
  <p></p>

  <sui-header h4>Animated</sui-header>
  <p>A list can animate to set the current item apart from the list</p>
  <p></p>

  <sui-header h4>Relaxed</sui-header>
  <p>A list can relax its padding to provide more negative space</p>
  <p></p>

  <sui-header h4>Divided</sui-header>
  <p>A list can show divisions between content</p>
  <p></p>

  <sui-header h4>Celled</sui-header>
  <p>A list can divide its items into cells</p>
  <p></p>

  <sui-header h4>Size</sui-header>
  <p>A list can vary in size</p>
  <p></p>

  <sui-header dividing h2>Content Variations</sui-header>

  <sui-header h4>Vertically Aligned</sui-header>
  <p>An element inside a list can be vertically aligned</p>
  <p></p>

  <sui-header h4>Floated</sui-header>
  <p>A list, or an element inside a list can be floated left or right</p>
  <p></p>
</div>
</template>

<script>
import Example from '@/wiki/components/ExampleSegment'
export default {
  components: {Example}
}
</script>
