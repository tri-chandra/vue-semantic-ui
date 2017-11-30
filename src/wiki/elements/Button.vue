<template>
  <div>
    <sui-header h1>
      Button
      <sui-header sub>A button indicates a possible user action</sui-header>
    </sui-header>
    <sui-button basic active>11 Themes</sui-button>
    <sui-button primary>Download</sui-button>
    <sui-menu right floated icon>
      <a class="item"><i class="edit icon"></i></a>
      <a class="item"><i class="bug icon"></i></a>
      <a class="item"><i class="alternate github icon"></i></a>
    </sui-menu>
    <sui-menu right floated icon>
      <a class="item"><i class="music icon"></i></a>
      <a class="item"><i class="world icon"></i></a>
    </sui-menu>
    <sui-container>
      <sui-rail dividing right style="background-color:black;">
        <div class="ui sticky" style="left: 927px; top: 0px; width: 238px !important; height: 336px !important;">
          <sui-header h4>Button</sui-header>
        </div>
        <div class="ui segment">
          Right Rail Content
        </div>
      </sui-rail>
      <sui-header h2>Types</sui-header>

      <sui-header h4>Button</sui-header>
      <p>A standard button</p>
      <sui-button>Follow</sui-button>
      <sui-button tabindex="0">Focusable</sui-button>

      <sui-header h4>Emphasis</sui-header>
      <p>A button can be formatted to show different levels of emphasis</p>
      <p>
        <sui-button primary>Save</sui-button><sui-button>Discard</sui-button>
      </p>
      <p>
        <sui-button secondary>Okay</sui-button><sui-button>Cancel</sui-button>
      </p>

      <sui-header h4>Animated</sui-header>
      <p>A button can animate to show hidden content</p>
      <p>
        <sui-button animated>
          <div slot="visible">Next</div>
          <div slot="hidden"><i class="right arrow icon" /></div>
        </sui-button>
        <sui-button vertical animated>
          <div slot="visible">Shop</div>
          <div slot="hidden"><i class="shop icon" /></div>
        </sui-button>
        <sui-button animated fade>
          <div slot="visible">Sign-up for a Pro account</div>
          <div slot="hidden">$12.99 a month</div>
        </sui-button>
      </p>

      <sui-header h4>Labeled</sui-header>
      <p>A button can appear alongside a label</p>
      <p>
        <sui-button labeled tabindex="0">
          <sui-button>
            <i class="heart icon"></i> Like
          </sui-button>
          <a class="ui basic label">
            2,048
          </a>
        </sui-button>
        <sui-button left labeled tabindex="0">
          <a class="ui basic right pointing label">
            2,048
          </a>
          <sui-button>
            <i class="heart icon"></i> Like
          </sui-button>
        </sui-button>
        <sui-button left labeled tabindex="0">
          <a class="ui basic label">
            1,048
          </a>
          <sui-button icon>
            <i class="fork icon"></i>
          </sui-button>
        </sui-button>
      </p>
      <p>
        <sui-button labeled tabindex="0">
          <sui-button red>
            <i class="heart icon"></i> Like
          </sui-button>
          <a class="ui basic red left pointing label">
            1,048
          </a>
        </sui-button>
        <sui-button labeled tabindex="0">
          <sui-button basic blue>
            <i class="fork icon"></i> Forks
          </sui-button>
          <a class="ui basic left pointing blue label">
            1,048
          </a>
        </sui-button>
      </p>

      <sui-header h4>Icon</sui-header>
      <p>A button can have only an icon</p>
      <p>
        <sui-button icon>
          <i class="cloud icon"></i>
        </sui-button>
      </p>

      <sui-header h4>Labeled Icon</sui-header>
      <p>A button can use an icon as a label</p>
      <p>
        <sui-button labeled icon><i class="pause icon"></i>Pause</sui-button>
        <sui-button rightLabeled icon><i class="right arrow icon"></i>Next</sui-button>
      </p>

      <sui-header h4>Basic</sui-header>
      <p>A basic button is less pronounced</p>
      <p>
        <sui-button basic><i class="icon user"></i>Add Friend</sui-button>
      </p>
      <p>
        <sui-button primary basic>Primary</sui-button>
        <sui-button secondary basic>Secondary</sui-button>
        <sui-button positive basic>Positive</sui-button>
        <sui-button negative basic>Negative</sui-button>
      </p>
      <p>
        <sui-button red basic>Red</sui-button>
        <sui-button orange basic>Orange</sui-button>
        <sui-button yellow basic>Yellow</sui-button>
        <sui-button olive basic>Olive</sui-button>
        <sui-button green basic>Green</sui-button>
        <sui-button teal basic>Teal</sui-button>
        <sui-button blue basic>Blue</sui-button>
        <sui-button violet basic>Violet</sui-button>
        <sui-button purple basic>Purple</sui-button>
        <sui-button pink basic>Pink</sui-button>
        <sui-button brown basic>Brown</sui-button>
        <sui-button grey basic>Grey</sui-button>
        <sui-button black basic>Black</sui-button>
      </p>

      <sui-header h4>Inverted</sui-header>
      <p>A button can be formatted to appear on dark backgrounds</p>
      <p style="background-color:black;">
        <sui-button inverted>Standard</sui-button>
        <sui-button inverted red>Red</sui-button>
        <sui-button inverted orange>Orange</sui-button>
        <sui-button inverted yellow>Yellow</sui-button>
        <sui-button inverted olive>Olive</sui-button>
        <sui-button inverted green>Green</sui-button>
        <sui-button inverted teal>Teal</sui-button>
        <sui-button inverted blue>Blue</sui-button>
        <sui-button inverted violet>Violet</sui-button>
        <sui-button inverted purple>Purple</sui-button>
        <sui-button inverted pink>Pink</sui-button>
        <sui-button inverted brown>Brown</sui-button>
        <sui-button inverted grey>Grey</sui-button>
        <sui-button inverted black>Black</sui-button>
      </p>
      <p style="background-color:black;">
        <sui-button inverted basic>Basic</sui-button>
        <sui-button inverted red basic>Basic Red</sui-button>
        <sui-button inverted orange basic>Basic Orange</sui-button>
        <sui-button inverted yellow basic>Basic Yellow</sui-button>
        <sui-button inverted olive basic>Basic Olive</sui-button>
        <sui-button inverted green basic>Basic Green</sui-button>
        <sui-button inverted teal basic>Basic Teal</sui-button>
        <sui-button inverted blue basic>Basic Blue</sui-button>
        <sui-button inverted violet basic>Basic Violet</sui-button>
        <sui-button inverted purple basic>Basic Purple</sui-button>
        <sui-button inverted pink basic>Basic Pink</sui-button>
        <sui-button inverted brown basic>Basic Brown</sui-button>
        <sui-button inverted grey basic>Basic Grey</sui-button>
        <sui-button inverted black basic>Basic Black</sui-button>
      </p>

      <sui-header h2>Groups</sui-header>

      <sui-header h4>Buttons</sui-header>
      <p>Buttons can exist together as a group</p>
      <p>
        <sui-buttons>
          <sui-button>One</sui-button>
          <sui-button>Two</sui-button>
          <sui-button>Three</sui-button>
        </sui-buttons>
      </p>

      <sui-header h4>Icon Buttons</sui-header>
      <p>Button groups can show groups of icons</p>
      <p>
        <sui-buttons icon>
          <sui-button><i class="align left icon"></i></sui-button>
          <sui-button><i class="align center icon"></i></sui-button>
          <sui-button><i class="align right icon"></i></sui-button>
          <sui-button><i class="align justify icon"></i></sui-button>
        </sui-buttons>
        <sui-buttons icon>
          <sui-button><i class="bold icon"></i></sui-button>
          <sui-button><i class="underline icon"></i></sui-button>
          <sui-button><i class="text width icon"></i></sui-button>
        </sui-buttons>
      </p>

      <sui-header h2>Content</sui-header>

      <sui-header h4>Conditionals</sui-header>
      <p>Button groups can contain conditionals</p>
      <p>
        <sui-buttons>
          <sui-button>Cancel</sui-button>
          <div class="or"></div>
          <sui-button positive>Save</sui-button>
        </sui-buttons>
      </p>
      <p>
        <sui-buttons>
          <sui-button>un</sui-button>
          <div class="or" data-text="ou"></div>
          <sui-button positive>deux</sui-button>
        </sui-buttons>
      </p>

      <sui-header h2>States</sui-header>

      <sui-header h4>Active</sui-header>
      <p>A button can show it is currently the active user selection</p>
      <p>
        <sui-button active>
          <i class="user icon"></i>
          Follow
        </sui-button>
      </p>

      <sui-header h4>Disabled</sui-header>
      <p>A button can show it is currently unable to be interacted with</p>
      <p>
        <sui-button disabled>
          <i class="user icon"></i>
          Follow
        </sui-button>
      </p>

      <sui-header h4>Loading</sui-header>
      <p>A button can show a loading indicator</p>
      <p>
        <sui-button loading>Loading</sui-button>
        <sui-button basic loading>Loading</sui-button>
        <sui-button primary loading>Loading</sui-button>
        <sui-button secondary loading>Loading</sui-button>
      </p>

      <sui-header h2>Variations</sui-header>

      <sui-header h4>Social</sui-header>
      <p>A button can be formatted to link to a social website</p>
      <p>
        <sui-button facebook><i class="facebook icon"></i>Facebook</sui-button>
        <sui-button twitter><i class="twitter icon"></i>Twitter</sui-button>
        <sui-button google><i class="google plus icon"></i>Google Plus</sui-button>
        <sui-button vk><i class="vk icon"></i>VK</sui-button>
        <sui-button linkedin><i class="linkedin icon"></i>Linkedin</sui-button>
        <sui-button instagram><i class="instagram icon"></i>Instagram</sui-button>
        <sui-button youtube><i class="youtube icon"></i>YouTube</sui-button>
      </p>

      <sui-header h4>Size</sui-header>
      <p>A button can have different sizes</p>
      <p>
        <sui-button mini>Mini</sui-button>
        <sui-button tiny>Tiny</sui-button>
        <sui-button small>Small</sui-button>
        <sui-button medium>Medium</sui-button>
        <sui-button large>Large</sui-button>
        <sui-button big>Big</sui-button>
        <sui-button huge>Huge</sui-button>
        <sui-button massive>Massive</sui-button>
      </p>

      <sui-header h4>Floated</sui-header>
      <p>A button can be aligned to the left or right of its container</p>
      <p>
        <sui-button floated="right">Right floated</sui-button>
        <sui-button floated="left">Left floated</sui-button>
      </p>

      <sui-header h4>Colored</sui-header>
      <p>A button can have different colors</p>
      <p>
        <sui-button red>Red</sui-button>
        <sui-button orange>Orange</sui-button>
        <sui-button yellow>Yellow</sui-button>
        <sui-button olive>Olive</sui-button>
        <sui-button green>Green</sui-button>
        <sui-button teal>Teal</sui-button>
        <sui-button blue>Blue</sui-button>
        <sui-button violet>Violet</sui-button>
        <sui-button purple>Purple</sui-button>
        <sui-button pink>Pink</sui-button>
        <sui-button brown>Brown</sui-button>
        <sui-button grey>Grey</sui-button>
        <sui-button black>Black</sui-button>
      </p>

      <sui-header h4>Compact</sui-header>
      <p>A button can reduce its padding to fit into tighter spaces</p>
      <p>
        <sui-button compact>Hold</sui-button>
        <sui-button compact icon><i class="pause icon"></i></sui-button>
        <sui-button compact labeled icon><i class="pause icon"></i>Pause</sui-button>
      </p>

      <sui-header h4>Toggle</sui-header>
      <p>A button can be formatted to toggle on and off</p>
      <p>
        <sui-button toggle>Vote</sui-button>
      </p>

      <sui-header h4>Positive</sui-header>
      <p>A button can hint towards a positive consequence</p>
      <p>
        <sui-button positive>Positive</sui-button>
      </p>

      <sui-header h4>Negative</sui-header>
      <p>A button can hint towards a negative consequence</p>
      <p>
        <sui-button negative>Negative</sui-button>
      </p>

      <sui-header h2>Group Variations</sui-header>

      <sui-header h4>Active</sui-header>
      <p>A button can show it is currently the active user selection</p>
    </sui-container>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
    }
  }
}
</script>
