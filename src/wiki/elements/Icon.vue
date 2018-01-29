<template>
  <wiki-template v-model="wikiContent">
    <sui-header dividing h2>Icon Set</sui-header>
    <p>An icon set contains an arbitrary number of glyphs</p>
    <div class="ui ignored warning message">
      Icons serve a very similar function to text in a page. In Semantic icons receive a special tag <code>&lt;i&gt;</code> which allow for an abbreviated markup when sitting along-side text.
    </div>
    <div class="ui ignored message">
      Semantic includes a complete port of
      <a href="http://fontawesome.io/whats-new/" target="_blank">
        Font Awesome 4.7.0
      </a>
       designed by
      <a href="http://www.twitter.com/davegandy">
        Dave Gandy
      </a>
      for its standard icon set.
    </div>

    <template v-for="(item, idx) in iconSets">
      <sui-header h4 :key="`hh${idx}`">{{item.title}}</sui-header>
      <p :key="`cc${idx}`">{{item.caption}}</p>
      <div :key="`d${idx}`" class="ui doubling five column styled grid">
        <div v-for="(icon, idx2) in item.examples" :key="`d${idx}${idx2}`" class="column">
          <sui-icon :value="icon.toLowerCase()" />{{icon}}
        </div>
      </div>
    </template>
  </wiki-template>
</template>

<script>
export default {
  data() {
    return {
      iconSets: [
        {
          title: 'Web Content',
          caption: 'Icons can represent types of content found on websites',
          examples: [
            'Add To Calendar',
            'Address Book',
            'Address Book Outline',
            'Address Card',
            'Address Card Outline',
            'Alarm',
            'Alarm Mute',
            'Alarm Mute Outline',
            'Alarm Outline',
            'At',
            'Browser',
            'Bug',
            'Calendar',
            'Calendar Outline',
            'Checked Calendar',
            'Cloud',
            'Code',
            'Comment',
            'Comment Outline',
            'Comments',
            'Comments',
            'Comments Outline',
            'Copyright',
            'Creative Commons',
            'Dashboard',
            'Delete Calendar',
            'External',
            'External',
            'External Square',
            'Eyedropper',
            'Feed',
            'Find',
            'Hand Pointer',
            'Handshake',
            'Hashtag',
            'Heartbeat',
            'History',
            'Home',
            'Hourglass Empty',
            'Hourglass End',
            'Hourglass Full',
            'Hourglass Half',
            'Hourglass Start',
            'Id Badge',
            'Id Card',
            'Id Card Outline',
            'Idea',
            'Image',
            'Inbox',
            'Industry',
            'Lab',
            'Mail',
            'Mail Outline',
            'Mail Square',
            'Mouse Pointer',
            'Open Envelope',
            'Open Envelope Outline',
            'Options',
            'Paint Brush',
            'Payment',
            'Percent',
            'Podcast',
            'Privacy',
            'Protect',
            'Registered',
            'Remove From Calendar',
            'Search',
            'Setting',
            'Settings',
            'Shop',
            'Shopping Bag',
            'Shopping Basket',
            'Sidebar',
            'Signal',
            'Sitemap',
            'Tag',
            'Tags',
            'Tasks',
            'Terminal',
            'Text Telephone',
            'Ticket',
            'Trademark',
            'Trophy',
            'Window Close',
            'Window Close Outline',
            'Window Maximize',
            'Window Minimize',
            'Window Restore'
          ]
        },
        {
          title: 'User Actions',
          caption: 'Icons can represent common actions a user can take',
          examples: [
            'Add To Cart',
            'Add User',
            'Adjust',
            'Archive',
            'Ban',
            'Bookmark',
            'Call',
            'Call Square',
            'Clone',
            'Cloud Download',
            'Cloud Upload',
            'Talk',
            'Talk Outline',
            'Compress',
            'Configure',
            'Download',
            'Edit',
            'Erase',
            'Exchange',
            'Expand',
            'External Share',
            'Filter',
            'Hide',
            'In Cart',
            'Lock',
            'Mail Forward',
            'Group Object',
            'Ungroup Object',
            'Pin',
            'Print',
            'Random',
            'Recycle',
            'Refresh',
            'Remove Bookmark',
            'Remove User',
            'Repeat',
            'Reply All',
            'Reply',
            'Retweet',
            'Send',
            'Send Outline',
            'Share Alternate',
            'Share Alternate Square',
            'Share',
            'Share Square',
            'Sign In',
            'Sign Out',
            'Theme',
            'Translate',
            'Undo',
            'Unhide',
            'Unlock Alternate',
            'Unlock',
            'Upload',
            'Wait',
            'Wizard',
            'Write',
            'Write Square'
          ]
        },
        {
          title: 'Message',
          caption: 'Icons can alert users to the type of message being displayed',
          examples: [
            'Announcement',
            'Birthday',
            'Help Circle',
            'Help Circle Outline',
            'Help',
            'Info Circle',
            'Info',
            'Warning Circle',
            'Warning',
            'Warning Sign'
          ]
        },
        {
          title: 'User Types',
          caption: 'Icons can represent types of people',
          examples: [
            'Child',
            'Doctor',
            'Handicap',
            'Spy',
            'Student',
            'User',
            'User Circle',
            'User Circle Outline',
            'User Outline',
            'Users'
          ]
        },
        {
          title: 'Gender & Sexuality',
          caption: 'Icons can represent genders or types of sexuality',
          examples: [
            'Female',
            'Gay',
            'Genderless',
            'Heterosexual',
            'Intergender',
            'Lesbian',
            'Male',
            'Man',
            'Neuter',
            'Non Binary Transgender',
            'Other Gender Horizontal',
            'Other Gender',
            'Other Gender Vertical',
            'Transgender',
            'Woman'
          ]
        },
        {
          title: 'Layout Adjustment',
          caption: 'Icons can alert users to common ways to adjust page layouts',
          examples: [
            'Block Layout',
            'Crop',
            'Grid Layout',
            'List Layout',
            'Maximize',
            'Resize Horizontal',
            'Resize Vertical',
            'Zoom',
            'Zoom Out'
          ]
        },
        {
          title: 'Objects',
          caption: 'Icons can be used to represent common objects',
          examples: [
            'Anchor',
            'Bar',
            'Bathtub',
            'Bomb',
            'Book',
            'Bullseye',
            'Calculator',
            'Cocktail',
            'Diamond',
            'Fax',
            'Fire Extinguisher',
            'Fire',
            'Flag Checkered',
            'Flag',
            'Flag Outline',
            'Gift',
            'Hand Lizard',
            'Hand Peace',
            'Hand Paper',
            'Hand Pointer',
            'Hand Rock',
            'Hand Scissors',
            'Hand Spock',
            'Law',
            'Leaf',
            'Legal',
            'Lemon',
            'Life Ring',
            'Lightning',
            'Magnet',
            'Money',
            'Moon',
            'Plane',
            'Puzzle',
            'Road',
            'Rocket',
            'Shipping',
            'Shower',
            'Snowflake',
            'Soccer',
            'Sticky Note',
            'Sticky Note Outline',
            'Suitcase',
            'Sun',
            'Empty Thermometer Icon',
            'Quarter Thermometer Icon',
            'Half Thermometer Icon',
            'Three Quarters Thermometer Icon',
            'Full Thermometer Icon',
            'Travel',
            'Treatment',
            'TV',
            'Umbrella',
            'World'
          ]
        },
        {
          title: 'Shapes',
          caption: 'Icons can be used to create shapes',
          examples: [
            'Asterisk',
            'Certificate',
            'Circle',
            'Circle Notched',
            'Circle Thin',
            'Crosshairs',
            'Cube',
            'Cubes',
            'Ellipsis Horizontal',
            'Ellipsis Vertical',
            'Quote Left',
            'Quote Right',
            'Spinner',
            'Square',
            'Square Outline'
          ]
        },
        {
          title: 'Item Selection',
          caption: 'Icons can show whether an item is included in a set',
          examples: [
            'Add Circle',
            'Add Square',
            'Check Circle',
            'Check Circle Outline',
            'Check Square',
            'Checkmark Box',
            'Checkmark',
            'Minus Circle',
            'Minus',
            'Minus Square',
            'Minus Square Outline',
            'Move',
            'Plus',
            'Plus Square Outline',
            'Radio',
            'Remove Circle',
            'Remove Circle Outline',
            'Remove',
            'Selected Radio',
            'Toggle Off',
            'Toggle On'
          ]
        },
        {
          title: 'Media',
          caption: 'Icons can represent common media types',
          examples: [
            'Area Chart',
            'Bar Chart',
            'Camera Retro',
            'Newspaper',
            'Film',
            'Line Chart',
            'Photo',
            'Pie Chart',
            'Sound'
          ]
        },
        {
          title: 'Pointers',
          caption: 'Icons can be used to indicate a direction',
          examples: [
            'Angle Double Down',
            'Angle Double Left',
            'Angle Double Right',
            'Angle Double Up',
            'Angle Down',
            'Angle Left',
            'Angle Right',
            'Angle Up',
            'Arrow Circle Down',
            'Arrow Circle Left',
            'Arrow Circle Outline Down',
            'Arrow Circle Outline Left',
            'Arrow Circle Outline Right',
            'Arrow Circle Outline Up',
            'Arrow Circle Right',
            'Arrow Circle Up',
            'Arrow Down',
            'Arrow Left',
            'Arrow Right',
            'Arrow Up',
            'Caret Down',
            'Caret Left',
            'Caret Right',
            'Caret Up',
            'Chevron Circle Down',
            'Chevron Circle Left',
            'Chevron Circle Right',
            'Chevron Circle Up',
            'Chevron Down',
            'Chevron Left',
            'Chevron Right',
            'Chevron Up',
            'Long Arrow Down',
            'Long Arrow Left',
            'Long Arrow Right',
            'Long Arrow Up',
            'Pointing Down',
            'Pointing Left',
            'Pointing Right',
            'Pointing Up',
            'Toggle Down',
            'Toggle Left',
            'Toggle Right',
            'Toggle Up'
          ]
        },
        {
          title: 'Mobile',
          caption: 'Icons can represent mobile devices, types of content found on mobile devices.',
          examples: [
            'Mobile',
            'Tablet',
            'Battery Empty',
            'Battery Low',
            'Battery Medium',
            'High Battery',
            'Battery Full'
          ]
        },
        {
          title: 'Computer',
          caption: 'Icons can represent computing devices, or types of content found on a computer.',
          examples: [
            'Desktop',
            'Disk Outline',
            'Game',
            'Keyboard',
            'Laptop',
            'Plug',
            'Power'
          ]
        },
        {
          title: 'Computer and File System',
          caption: 'Icons can represent elements of a computer and its file system',
          examples: [
            'File Archive Outline',
            'File Audio Outline',
            'File Code Outline',
            'File Excel Outline',
            'File',
            'File Image Outline',
            'File Outline',
            'File Pdf Outline',
            'File Powerpoint Outline',
            'File Text',
            'File Text Outline',
            'File Video Outline',
            'File Word Outline',
            'Folder',
            'Folder Open',
            'Folder Open Outline',
            'Folder Outline',
            'Level Down',
            'Level Up',
            'Trash',
            'Trash Outline'
          ]
        },
        {
          title: 'Technologies',
          caption: 'Icons can represent common technologies',
          examples: [
            'Barcode',
            'Bluetooth Alternative',
            'Bluetooth',
            'Css3',
            'Database',
            'Fork',
            'Html5',
            'Microchip',
            'Openid',
            'Qrcode',
            'Rss',
            'Rss Square',
            'Server',
            'USB'
          ]
        },
        {
          title: 'Rating',
          caption: 'Icons can be used to represent users attitude towards content',
          examples: [
            'Empty Heart',
            'Empty Star',
            'Frown',
            'Heart',
            'Meh',
            'Smile',
            'Star Half Empty',
            'Star Half',
            'Star',
            'Thumbs Down',
            'Thumbs Outline Down',
            'Thumbs Outline Up',
            'Thumbs Up'
          ]
        },
        {
          title: 'Audio',
          caption: 'Icons can be used to represent common ways to interact with audio',
          examples: [
            'Backward',
            'Closed Captioning',
            'Eject',
            'Fast Backward',
            'Fast Forward',
            'Forward',
            'Music',
            'Mute',
            'Pause Circle',
            'Pause Circle Outline',
            'Pause',
            'Play',
            'Record',
            'Step Backward',
            'Step Forward',
            'Stop Circle',
            'Stop Circle Outline',
            'Stop',
            'Unmute',
            'Video Play',
            'Video Play Outline',
            'Volume Down',
            'Volume Off',
            'Volume Up'
          ]
        },
        {
          title: 'Map',
          caption: 'Icons can be used to represent elements on a map',
          examples: [
            'Bicycle',
            'Building',
            'Building Outline',
            'Bus',
            'Car',
            'Coffee',
            'Compass',
            'Emergency',
            'First Aid',
            'Food',
            'H',
            'Hospital',
            'Hotel',
            'Location Arrow',
            'Map',
            'Map Outline',
            'Map Pin',
            'Map Signs',
            'Marker',
            'Military',
            'Motorcycle',
            'Paw',
            'Ship',
            'Space Shuttle',
            'Spoon',
            'Street View',
            'Subway',
            'Taxi',
            'Train',
            'TV',
            'Tree',
            'University'
          ]
        },
        {
          title: 'Tables',
          caption: 'Icons can be used to represent common actions inside a table',
          examples: [
            'Columns',
            'Sort Alphabet Ascending',
            'Sort Alphabet Descending',
            'Sort Ascending',
            'Sort Content Ascending',
            'Sort Content Descending',
            'Sort Descending',
            'Sort',
            'Sort Numeric Ascending',
            'Sort Numeric Descending',
            'Table'
          ]
        },
        {
          title: 'Text Editor',
          caption: 'Icons can represent common actions when editing text',
          examples: [
            'Align Center',
            'Align Justify',
            'Align Left',
            'Align Right',
            'Attach',
            'Bold',
            'Copy',
            'Cut',
            'Font',
            'Header',
            'Indent',
            'Italic',
            'Linkify',
            'List',
            'Ordered List',
            'Outdent',
            'Paragraph',
            'Paste',
            'Save',
            'Strikethrough',
            'Subscript',
            'Superscript',
            'Text Cursor',
            'Text Height',
            'Text Width',
            'Underline',
            'Unlinkify',
            'Unordered List'
          ]
        },
        {
          title: 'Currency',
          caption: 'Icons can represent units of currency',
          examples: [
            'Bitcoin',
            'Dollar',
            'Euro',
            'Lira',
            'Pound',
            'Ruble',
            'Rupee',
            'Shekel',
            'Won',
            'Yen'
          ]
        },
        {
          title: 'Payment Options',
          caption: 'Icons can represent common forms of payment',
          examples: [
            'American Express',
            'Credit Card Alternative',
            'Diners Club',
            'Discover',
            'Google Wallet',
            'Japan Credit Bureau',
            'Mastercard',
            'Paypal Card',
            'Paypal',
            'Stripe',
            'Visa'
          ]
        },
        {
          title: 'Accessibility',
          caption: 'Icons can represent accessibility standards',
          examples: [
            'Wheelchair',
            'American Sign Language (ASL) Interpreting',
            'Assistive Listening Systems',
            'Audio Description',
            'Blind',
            'Braille',
            'Deafness',
            'Low Vision',
            'Sign Language',
            'Universal Access',
            'Volume Control Phone'
          ]
        },
        {
          title: 'Brands',
          caption: 'Icons can represent logos to common brands',
          examples: [
            '500px',
            'Adn',
            'Amazon',
            'Android',
            'Angellist',
            'Apple',
            'Bandcamp',
            'Behance',
            'Behance Square',
            'Bitbucket',
            'Bitbucket Square',
            'Black Tie',
            'Buysellads',
            'Chrome',
            'Codepen',
            'Codiepie',
            'Connectdevelop',
            'Contao',
            'Dashcube',
            'Delicious',
            'Deviantart',
            'Digg',
            'Dribble',
            'Dropbox',
            'Drupal',
            'Eercast',
            'Empire',
            'Envira Gallery',
            'Etsy',
            'Expeditedssl',
            'Facebook F',
            'Facebook',
            'Facebook Square',
            'Firefox',
            'First Order',
            'Flickr',
            'Font Awesome',
            'Fonticons',
            'Fort Awesome',
            'Forumbee',
            'Foursquare',
            'Free Code Camp',
            'Gg Circle',
            'Gg',
            'Git',
            'Git Square',
            'Github Alternate',
            'Github',
            'Github Square',
            'Gitlab',
            'Gittip',
            'Glide G',
            'Glide',
            'Google',
            'Google Plus Circle',
            'Google Plus',
            'Google Plus Square',
            'Grav',
            'Hacker News',
            'Houzz',
            'IMDB',
            'Instagram',
            'Internet Explorer',
            'Ioxhost',
            'Joomla',
            'Jsfiddle',
            'Lastfm',
            'Lastfm Square',
            'Leanpub',
            'Linkedin',
            'Linkedin Square',
            'Linode',
            'Linux',
            'Maxcdn',
            'Meanpath',
            'Medium',
            'Meetup',
            'Microsoft Edge',
            'Mixcloud',
            'Modx',
            'Odnoklassniki',
            'Odnoklassniki Square',
            'Opencart',
            'Opera',
            'Optinmonster',
            'Pagelines',
            'Pied Piper Alternate',
            'Pied Piper Hat',
            'Pied Piper',
            'Pinterest',
            'Pinterest Square',
            'Pocket',
            'Product Hunt',
            'Qq',
            'Quora',
            'Ravelry',
            'Rebel',
            'Reddit Alien',
            'Reddit',
            'Reddit Square',
            'Renren',
            'Safari',
            'Scribd',
            'Sellsy',
            'Shirtsinbulk',
            'Simplybuilt',
            'Skyatlas',
            'Skype',
            'Slack',
            'Slideshare',
            'Snapchat Ghost',
            'Snapchat',
            'Snapchat Square',
            'Soundcloud',
            'Spotify',
            'Stack Exchange',
            'Stack Overflow',
            'Steam',
            'Steam Square',
            'Stumbleupon Circle',
            'Stumbleupon',
            'Superpowers',
            'Telegram',
            'Tencent Weibo',
            'Themeisle',
            'Trello',
            'Tripadvisor',
            'Tumblr',
            'Tumblr Square',
            'Twitch',
            'Twitter',
            'Twitter Square',
            'Viacoin',
            'Viadeo',
            'Viadeo Square',
            'Vimeo',
            'Vimeo Square',
            'Vine',
            'Vk',
            'Wechat',
            'Weibo',
            'Whatsapp',
            'Wikipedia',
            'Windows',
            'Wordpress',
            'Wpbeginner',
            'Wpexplorer',
            'Wpforms',
            'Xing',
            'Xing Square',
            'Y Combinator',
            'Yahoo',
            'Yelp',
            'Yoast',
            'Youtube',
            'Youtube Play',
            'Youtube Square'
          ]
        }
      ],
      wikiContent: {
        title: 'Icon',
        caption: 'An icon is a glyph used to represent something else',
        sections: [
          {
            title: 'Icon Set',
            subSections: [
              {
                title: 'Web Content',
                caption: 'Icons can represent types of content found on websites',
                examples: [
                  {
                    note: [
                      'Icons serve a very similar function to text in a page. In Semantic icons receive a special tag <i> which allow for an abbreviated markup when sitting along-side text.',
                      'Semantic includes a complete port of Font Awesome 4.7.0 designed by Dave Gandy for its standard icon set.'
                    ],
                    code:
`<div>
  <sui-icon value="add to calendar"></sui-icon>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'States',
            subSections: [
              {
                title: 'Disabled',
                caption: 'An icon can show that it is disabled',
                examples: [
                  {
                    code:
`<div>
  <sui-icon disabled value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Loading',
                caption: 'An icon can be used as a simple loader',
                examples: [
                  {
                    code:
`<div>
  <sui-icon loading value="spinner"></sui-icon>
  <sui-icon loading value="notched circle"></sui-icon>
  <sui-icon loading value="asterisk"></sui-icon>
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Variations',
            subSections: [
              {
                title: 'Fitted',
                caption: 'An icon can be fitted, without any space to the left or right of it.',
                examples: [
                  {
                    code:
`<div>
  Tight spacing
  <sui-icon fitted value="help"></sui-icon>
  Tight spacing
</div>`
                  }
                ]
              },
              {
                title: 'Size',
                caption: 'An icon can vary in size',
                examples: [
                  {
                    code:
`<div>
  <sui-icon mini value="home"></sui-icon>
  <sui-icon tiny value="home"></sui-icon>
  <sui-icon small value="home"></sui-icon>
  <sui-icon value="home"></sui-icon>
  <sui-icon large value="home"></sui-icon>
  <sui-icon big value="home"></sui-icon>
  <sui-icon huge value="home"></sui-icon>
  <sui-icon massive value="home"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Link',
                caption: 'An icon can be formatted as a link',
                examples: [
                  {
                    code:
`<div>
  <sui-icon link value="close"></sui-icon>
  <sui-icon link value="gelp"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Flipped',
                caption: 'An icon can be flipped',
                examples: [
                  {
                    code:
`<div>
  <sui-icon horizontally-flipped value="cloud"></sui-icon>
  <sui-icon vertically-flipped value="cloud"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Rotated',
                caption: 'An icon can be Rotated',
                examples: [
                  {
                    code:
`<div>
  <sui-icon rotated value="cloud"></sui-icon>
  <sui-icon counter-rotated value="cloud"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Circular',
                caption: 'An icon can be formatted to appear circular',
                examples: [
                  {
                    code:
`<div>
  <sui-icon circular value="users"></sui-icon>
  <sui-icon teal circular value="users"></sui-icon>
  <sui-icon inverted circular value="users"></sui-icon>
  <sui-icon inverted teal circular value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Bordered',
                caption: 'An icon can be formatted to appear bordered',
                examples: [
                  {
                    code:
`<div>
  <sui-icon bordered value="users"></sui-icon>
  <sui-icon teal bordered value="users"></sui-icon>
  <sui-icon inverted bordered value="users"></sui-icon>
  <sui-icon inverted teal bordered value="users"></sui-icon>
</div>`
                  }
                ]
              },
              {
                title: 'Colored',
                caption: 'An icon can be formatted with different colors',
                examples: [
                  {
                    code:
`<div>
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
</div>`
                  }
                ]
              },
              {
                title: 'Inverted',
                caption: 'An icon can have its colors inverted for contrast',
                examples: [
                  {
                    inverted: true,
                    code:
`<div>
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
</div>`
                  }
                ]
              }
            ]
          },
          {
            title: 'Groups',
            subSections: [
              {
                title: 'Icons',
                caption: 'Several icons can be used together as a group',
                examples: [
                  {
                    code:
`<div>
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
</div>`
                  }
                ]
              },
              {
                title: 'Corner Icon',
                caption: 'A group of icons can display a smaller corner icon',
                examples: [
                  {
                    code:
`<div>
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
</div>`
                  },
                  {
                    code:
`<div>
  <sui-header h2>
    <sui-icons large>
      <sui-icon value="twitter" />
      <sui-icon inverted corner value="add" />
    </sui-icons>
    Add on Twitter
  </sui-header>
</div>`
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.styled {
  opacity: 0.8;
  text-align: center;
  color: transparent;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-transition: color 0.3s ease, opacity 0.3s ease;
  -moz-transition: color 0.3s ease, opacity 0.3s ease;
  -o-transition: color 0.3s ease, opacity 0.3s ease;
  -ms-transition: color 0.3s ease, opacity 0.3s ease;
  transition: color 0.3s ease, opacity 0.3s ease;
}
.styled:hover {
  opacity: 1;
  color: #444444;
}
.styled .icon {
  opacity: 1;
  height: 1em;
  color: #333333;
  display: block;
  margin: 0em auto 0.25em;
  font-size: 2em;
  -webkit-transition: color 0.6s ease, transform 0.2s ease;
  -moz-transition: color 0.6s ease, transform 0.2s ease;
  -o-transition: color 0.6s ease, transform 0.2s ease;
  -ms-transition: color 0.6s ease, transform 0.2s ease;
  transition: color 0.6s ease, transform 0.2s ease;
}
.styled .icon:hover {
    color: #000000;
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -o-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
}
</style>
