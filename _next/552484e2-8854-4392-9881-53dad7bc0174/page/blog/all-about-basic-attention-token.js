module.exports=__NEXT_REGISTER_PAGE("/blog/all-about-basic-attention-token",function(){var e=webpackJsonp([10],{20:function(e,t,a){e.exports=a(36)},34:function(e,t,a){"use strict";var n=a(12);var l=a.n(n);var r=a(0);var s=a.n(r);t["a"]=function(e){var t=e.src,a=e.width,n=void 0===a?"100%":a,r=e.height,o=e.alt,i=e.title;return s.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 container"},s.a.createElement("img",{src:t,width:n,height:r,alt:o,className:"jsx-1221164359 jsx-1221164359"}),i?s.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 title"},i):null,s.a.createElement(l.a,{styleId:"1221164359",css:".container.jsx-1221164359{text-align:center;max-width:100%;margin:50px 0;}img.jsx-1221164359{max-width:100%;}.title.jsx-1221164359{color:#888;font-size:13px;line-height:17px;padding:5px 0;}.title.jsx-1221164359 div.jsx-1221164359{margin:0;}"}))}},35:function(e,t,a){"use strict";var n=a(12);var l=a.n(n);var r=a(0);var s=a.n(r);var o=a(20);var i=a.n(o);var c=a(37);var u=a.n(c);var h=i()(new(a(20).SameLoopPromise)(function(e,t){var n=29;try{var l=a(n);return e(l)}catch(e){}a.e(0).then(function(n){try{var l=a(29);l.__webpackChunkName="react_syntax_highlighter_5e0c44cc80beffdff473f2e6ef5cb15c";e(l)}catch(e){t(e)}}.bind(null,a)).catch(a.oe)}),{loading:function e(){return s.a.createElement("div",null)}});var m={padding:8,paddingBottom:20,fontSize:"100%",borderRadius:5,backgroundColor:"#eeeeee",lineHeight:1.1};t["a"]=function(e){var t=e.language,a=e.children;return s.a.createElement("div",{className:"jsx-1371294351 jsx-1371294351 code"},s.a.createElement(h,{language:t,style:u.a,customStyle:m},a.trim()),s.a.createElement(l.a,{styleId:"1371294351",css:".code.jsx-1371294351{margin:15px 0;}"}))}},36:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.SameLoopPromise=void 0;var n=a(58);var l=k(n);var r=a(17);var s=k(r);var o=a(6);var i=k(o);var c=a(4);var u=k(c);var h=a(5);var m=k(h);var d=a(7);var p=k(d);var f=a(8);var y=k(f);var v=a(40);var E=k(v);t.default=j;t.registerChunk=x;t.flushChunks=A;var b=a(0);var g=k(b);var w=a(27);function k(e){return e&&e.__esModule?e:{default:e}}var B=new E.default;function j(e,t){var a=void 0;var n=void 0;if(e instanceof T){a=e;n=t||{}}else{if(!e.modules||!e.render){var l="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(l)}if(t){var r="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(r)}n=e}return function(e){(0,y.default)(t,e);function t(){var e;(0,u.default)(this,t);for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];var s=(0,p.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(l)));s.LoadingComponent=n.loading?n.loading:function(){return g.default.createElement("p",null,"loading...")};s.ssr=false!==n.ssr||n.ssr;s.state={AsyncComponent:null,asyncElement:null};s.isServer="undefined"===typeof window;s.loadBundleAgain=null;s.loadingBundle=false;s.ssr&&s.load();return s}(0,m.default)(t,[{key:"load",value:function e(){a?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var n=this;a.then(function(e){var a=e.default||e;var l=(0,w.getDisplayName)(a);l&&(t.displayName="DynamicComponent for "+l);if(n.mounted)n.setState({AsyncComponent:a});else{n.isServer&&x(e.__webpackChunkName);n.state.AsyncComponent=a}})}},{key:"loadBundle",value:function e(a){var l=this;this.loadBundleAgain=null;this.loadingBundle=true;var r=n.modules(a);var o=(0,s.default)(r);var i=o.length;var c={};var u=function e(){if(l.loadBundleAgain){l.loadBundle(l.loadBundleAgain);return}l.loadingBundle=false;t.displayName="DynamicBundle";var r=n.render(a,c);l.mounted?l.setState({asyncElement:r}):l.state.asyncElement=r};var h=function e(t){var a=r[t];a.then(function(e){var a=e.default||e;l.isServer&&x(e.__webpackChunkName);c[t]=a;i--;0===i&&u()})};o.forEach(h)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(a)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"render",value:function e(){var t=this.state,a=t.AsyncComponent,n=t.asyncElement;var l=this.LoadingComponent;if(n)return n;if(a)return g.default.createElement(a,this.props);return g.default.createElement(l,this.props)}}]);return t}(g.default.Component)}function x(e){B.add(e)}function A(){var e=(0,l.default)(B);B.clear();return e}var T=t.SameLoopPromise=function(){(0,m.default)(e,null,[{key:"resolve",value:function t(a){var n=new e(function(e){return e(a)});return n}}]);function e(t){(0,u.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,m.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(a,n){var l=this;this.runIfNeeded();var r=new e;var s=function e(){n?r.setResult(n(l.error)):r.setError(l.error)};var o=function e(){r.setResult(a(l.result))};if(this.gotResult){o();return r}if(this.gotError){s();return r}this.onResultCallbacks.push(o);this.onErrorCallbacks.push(s);return r}},{key:"catch",value:function t(a){var n=this;this.runIfNeeded();var l=new e;var r=function e(){l.setResult(a(n.error))};var s=function e(){l.setResult(n.result)};if(this.gotResult){s();return l}if(this.gotError){r();return l}this.onErrorCallbacks.push(r);this.onResultCallbacks.push(s);return l}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}()},37:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default={hljs:{display:"block",background:"white",padding:"0.5em",color:"#333333",overflowX:"auto"},"hljs-comment":{color:"#969896"},"hljs-meta":{color:"#969896"},"hljs-string":{color:"#df5000"},"hljs-variable":{color:"#df5000"},"hljs-template-variable":{color:"#df5000"},"hljs-strong":{color:"#df5000"},"hljs-emphasis":{color:"#df5000"},"hljs-quote":{color:"#df5000"},"hljs-keyword":{color:"#a71d5d"},"hljs-selector-tag":{color:"#a71d5d"},"hljs-type":{color:"#a71d5d"},"hljs-literal":{color:"#0086b3"},"hljs-symbol":{color:"#0086b3"},"hljs-bullet":{color:"#0086b3"},"hljs-attribute":{color:"#0086b3"},"hljs-section":{color:"#63a35c"},"hljs-name":{color:"#63a35c"},"hljs-tag":{color:"#333333"},"hljs-title":{color:"#795da3"},"hljs-attr":{color:"#795da3"},"hljs-selector-id":{color:"#795da3"},"hljs-selector-class":{color:"#795da3"},"hljs-selector-attr":{color:"#795da3"},"hljs-selector-pseudo":{color:"#795da3"},"hljs-addition":{color:"#55a532",backgroundColor:"#eaffea"},"hljs-deletion":{color:"#bd2c00",backgroundColor:"#ffecec"},"hljs-link":{textDecoration:"underline"}}},436:function(e,t,a){e.exports=a(437)},437:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(12);var l=a.n(n);var r=a(0);var s=a.n(r);var o=a(32);var i=a.n(o);var c=a(33);var u=a(34);var h=a(35);t["default"]=Object(c["b"])({title:"All about Basic Attention Token (BAT)",description:"BAT is a pretty interesting privacy focused online ad-tech trying to compete with Google and others",slug:"all-about-basic-attention-token",date:"June 19, 2017",lastUpdated:""})(i()(c["a"],function(e){return s.a.createElement("div",{className:"_markdown_"},s.a.createElement(e.h2,null,"Table of Contents"),s.a.createElement(e.ul,null,s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#user-tracking-and-online-privacy"},"User Tracking and Online Privacy")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#adblockers"},"AdBlockers")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#adblocker-dectectors"},"AdBlocker Dectectors")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#brave-browser-and-brave-payments"},"Brave Browser and Brave Payments")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#basic-attention-token-bat"},"Basic Attention Token (BAT)")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#how-bat-works"},"How BAT Works")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#the-technology"},"The Technology")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#the-currency-and-funding"},"The Currency (And Funding)")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#challenges"},"Challenges"),s.a.createElement(e.ul,null,s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#browser-share"},"Browser Share")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#mobile-apps"},"Mobile APPS")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#closed-platforms"},"Closed Platforms")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#bitcoin-market-instability"},"Bitcoin Market Instability")))),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#implementation-and-execution"},"Implementation and Execution")),s.a.createElement(e.li,null,s.a.createElement(e.a,{href:"#finally"},"Finally"))),s.a.createElement(e.h1,null,"Pandas for Nested JSON"),s.a.createElement(e.blockquote,null,s.a.createElement(e.p,null,"Use Pandas to create and process nested JSON data.")),s.a.createElement(e.p,null,s.a.createElement(h["a"],{language:"python"},"\nimport pandas as pd\nimport numpy as np\nimport copy\n\n# -----------------------------------------------------------------\n# 1. Create a simple JSON\n# -----------------------------------------------------------------\n\n# define a list\nthis_list = []\n\n# define a dictionary (dictionary keys will be used as column names)\ndict_item1 = {\n    'file_type': 'fake_type_of_file1',\n    'file_name': 'fake_name_of_file1.pdf',\n}\ndict_item2 = {\n    'file_type': 'fake_type_of_file2',\n    'file_name': 'fake_name_of_file2.pdf',\n}\n\n# append dictionary entry to the list\nthis_list.append(copy.deepcopy(dict_item1))\nthis_list.append(copy.deepcopy(dict_item2))\n\n# convert list to data frame\ndf = pd.DataFrame(this_list, columns=['file_type', 'file_name'])\n\nnum_of_rows = len(df['file_type'])\nprint('=====================')\nprint('Number of rows: ', num_of_rows)\nprint('Data frame: ')\nprint(df)\nprint('=====================')\nprint('Now we have created a simple data frame.')\nprint('')\n\n# convert data frame to Json\njson_lvl_one = df.to_json(orient='index')\n\nprint(\"Now we have created a simple JSON: \")\nprint(json_lvl_one)\n# It will be used as the inner most JSON.\nprint('')\n")),s.a.createElement(e.p,null,s.a.createElement(u["a"],{src:"https://user-images.githubusercontent.com/50838/28487049-1f6156ac-6ea7-11e7-99cc-0ee227c40ba1.png",width:400})),s.a.createElement(e.p,null,s.a.createElement(e.strong,null,"TL;DR;")," ",s.a.createElement("br",null)),s.a.createElement(e.p,null,"其实我也应该花时间做多语言切换的功能。毕竟我是中国人。 You might CODE not have heard about BAT yet, but it's a pretty interesting privacy focused online ad-tech trying to compete with Google and others."),s.a.createElement(e.p,null,"BAT is a part of the ",s.a.createElement(e.a,{href:"https://brave.com/"},"Brave")," browser eco-system and it's co-founded by ",s.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Brendan_Eich"},"Brendan Eich")," who is the creator of Mozilla and JavaScript."),s.a.createElement(e.p,null,"Interestingly, they just raised ",s.a.createElement(e.strong,null,"36 million USD")," in funding, and it's not venture backed."),s.a.createElement(e.hr,null),s.a.createElement(e.p,null,"Before we begin, we need to make sure everyone is on the same page. So, I'll layout the ground work for BAT in the first few sections."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-1115725701 jsx-1115725701"},s.a.createElement("div",{id:"user-tracking-and-online-privacy",className:"jsx-1115725701 jsx-1115725701"}," "),s.a.createElement(l.a,{styleId:"1115725701",css:".user-tracking-and-online-privacy.jsx-1115725701{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"User Tracking and Online Privacy"),s.a.createElement(e.p,null,"This is not a new topic anymore. Generally, user tracking is not a bad thing, especially for logged-in users."),s.a.createElement(e.p,null,"But an issue arises when some parties try to track user activities across multiple websites. This is extensively used in online advertising and is often called re-targeting."),s.a.createElement(e.p,null,"For an example, Google knows everything you search for on the internet. Then, when you visit ",s.a.createElement(e.a,{href:"http://techcruch.com/"},"techcruch.com")," you will starting to see ads based on your search history."),s.a.createElement(e.p,null,"This is pretty scary since this works across Google, Twitter, Facebook and almost all over the internet. So, now a set of third parties know what you are doing on the internet without your consent."),s.a.createElement(e.p,null,"That's crazy."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-2373361155 jsx-2373361155"},s.a.createElement("div",{id:"adblockers",className:"jsx-2373361155 jsx-2373361155"}," "),s.a.createElement(l.a,{styleId:"2373361155",css:".adblockers.jsx-2373361155{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"AdBlockers"),s.a.createElement(e.p,null,"This is where ",s.a.createElement(e.a,{href:"https://www.ublock.org/"},"AdBlockers")," comes into the game. They are usually browser extensions which detect those trackers and block them. So those third parties won't be able to track you across the internet anymore. Also AdBlockers usually block most of the display ads in websites."),s.a.createElement(e.p,null,"They are pretty popular and completely legal to use."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-4261447030 jsx-4261447030"},s.a.createElement("div",{id:"adblocker-dectectors",className:"jsx-4261447030 jsx-4261447030"}," "),s.a.createElement(l.a,{styleId:"4261447030",css:".adblocker-dectectors.jsx-4261447030{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"AdBlocker Dectectors"),s.a.createElement(e.p,null,"Even though AdBlockers are great for end users, they will directly affect the revenue generation of websites (publishers) you visit. Because ads are a very good revenue stream for them."),s.a.createElement(e.p,null,"So, some websites are using ",s.a.createElement(e.a,{href:"http://www.detectadblock.com/"},"AdBlocker Detectors")," which detect AdBlockers and warn users to stop using them. Only a few set of publishers do this right now, but if everyone starts using adblockers, they might have to use them."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-1751142828 jsx-1751142828"},s.a.createElement("div",{id:"brave-browser-and-brave-payments",className:"jsx-1751142828 jsx-1751142828"}," "),s.a.createElement(l.a,{styleId:"1751142828",css:".brave-browser-and-brave-payments.jsx-1751142828{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"Brave Browser and Brave Payments"),s.a.createElement(e.p,null,s.a.createElement(e.a,{href:"https://brave.com/"},"Brave")," is a Chromium(the open source version of Google Chrome) based web browser which comes with a built in AdBlocker. It is co-founded by ",s.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Brendan_Eich"},"Brendan Eich"),", who is the father of both Mozilla and JavaScript."),s.a.createElement(e.p,null,"Brave does more than adblocking. It's trying to solve the revenue problem publishers face when users are using AdBlockers. So, publishers don't have to use Adblocker Dectectors."),s.a.createElement(e.p,null,s.a.createElement(u["a"],{src:"https://user-images.githubusercontent.com/50838/28487051-1f6438c2-6ea7-11e7-9027-ab22633590b6.png",title:"A screenshot of Brave Payments inside the Brave browser."})),s.a.createElement(e.p,null,"Brave does this via ",s.a.createElement(e.a,{href:"https://www.brave.com/Payments_FAQ.html"},"Brave Payments"),". Here's how it works:"),s.a.createElement(e.ul,null,s.a.createElement(e.li,null,"As a user I can decide the budget I am willing to share with websites I visit"),s.a.createElement(e.li,null,"Let's say I allocated $5 per month"),s.a.createElement(e.li,null,"Now Brave keeps a ledger of all the websites I visit and time I spend on them"),s.a.createElement(e.li,null,"At the end of the month, Brave will share my $5 with above sites based on proportion of time I spend on them"),s.a.createElement(e.li,null,"In this process, Brave doesn't send my data to a central server and everything happens inside my browser"),s.a.createElement(e.li,null,"Publishers (websites) get paid at the end of the month but they don't know anything about me and other users"),s.a.createElement(e.li,null,"So, there's no privacy issue")),s.a.createElement(e.p,null,"This is a pretty good concept. But in order to make this practical across the web, Brave has to do a lot and it's tough. I will talk more about this in a later section."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-744310665 jsx-744310665"},s.a.createElement("div",{id:"basic-attention-token-bat",className:"jsx-744310665 jsx-744310665"}," "),s.a.createElement(l.a,{styleId:"744310665",css:".basic-attention-token-bat.jsx-744310665{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"Basic Attention Token (BAT)"),s.a.createElement(e.p,null,"Finally, now we can talk about Basic Attention Token. (BAT)"),s.a.createElement(e.p,null,"Advertising is not a bad thing. That's the way we get to know about products we care about. So, it's an essential part of the web. But it should be done in a proper way without compromising user privacy."),s.a.createElement(e.p,null,"Brave Payments already introduced a new monetizing strategy for publishers. BAT is the way it introduces advertisers into the picture and extends Brave Payments."),s.a.createElement(e.p,null,"With BAT, users, publishers and advertisers directly connect with each other in a open marketplace. There are no middlemen. User privacy is the number one priority."),s.a.createElement(e.p,null,"So, BAT creates a healthy, open and efficient relationship between all these parties."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-3859726893 jsx-3859726893"},s.a.createElement("div",{id:"how-bat-works",className:"jsx-3859726893 jsx-3859726893"}," "),s.a.createElement(l.a,{styleId:"3859726893",css:".how-bat-works.jsx-3859726893{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"How BAT Works"),s.a.createElement(e.p,null,"Let's have a look at it."),s.a.createElement(e.p,null,"This is a marketplace. Here we have four main stackholders."),s.a.createElement(e.ol,null,s.a.createElement(e.li,null,"Users - end users like you and me"),s.a.createElement(e.li,null,"Publishers - content creating websites like TechCrunch and Facebook."),s.a.createElement(e.li,null,"Advertisers - those who pay for the ads"),s.a.createElement(e.li,null,"Brave - the Brave system which does all the transactions")),s.a.createElement(e.p,null,"Here's how this works:"),s.a.createElement(e.ul,null,s.a.createElement(e.li,null,"Advertisers pay money to display ads"),s.a.createElement(e.li,null,"Publishers have places to display ads in their websites"),s.a.createElement(e.li,null,"Brave browser knows about the user and it picks relevant ads to display inside publishers' websites."),s.a.createElement(e.li,null,"Brave picks ads totally based on the user data on the browser and it won't send anything to a central server")),s.a.createElement(e.p,null,"Then, based on how users view ads along with the content in publishers' websites, Brave will distribute the advertisers' payments between following parties:"),s.a.createElement(e.ul,null,s.a.createElement(e.li,null,"Users - for viewing ads and the content"),s.a.createElement(e.li,null,"Brave - to do the transaction and cover other costs"),s.a.createElement(e.li,null,"Publisher - for displaying ads along with the website content")),s.a.createElement(e.p,null,"So, it's an open system and everything is clear. Most importantly, user privacy will be protected while serving relevant ads to the user."),s.a.createElement(e.p,null,"Interestingly with BAT, users will get paid too. That's a very important factor. Users are a part of the content creation process. So, they should also be in the revenue equation. It is also an incentive for users to not block these ads."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-2593549220 jsx-2593549220"},s.a.createElement("div",{id:"the-technology",className:"jsx-2593549220 jsx-2593549220"}," "),s.a.createElement(l.a,{styleId:"2593549220",css:".the-technology.jsx-2593549220{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"The Technology"),s.a.createElement(e.p,null,"First of all, I'm not trying to deep dive into the underline technology. This is just an overview."),s.a.createElement(e.blockquote,null,s.a.createElement(e.p,null,"But if you need more information, you can refer to the ",s.a.createElement(e.a,{href:"https://basicattentiontoken.org/BasicAttentionTokenWhitePaper-4.pdf"},"BAT whitepaper"),".")),s.a.createElement(e.p,null,"BAT is based on the blockchain technology ",s.a.createElement(e.a,{href:"https://www.ethereum.org/"},"Ethereum"),". Ethereum is something like ",s.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Bitcoin"},"Bitcoin")," but it allows developers to write code and execute them in distributed fashion without a central authority."),s.a.createElement(e.p,null,"So, it's a very good software system to implement anonymous, self serving financial transactions. Just like Bitcoin, Ethereum also has monitory value. It's also just as big as Bitcoin and has over ",s.a.createElement(e.a,{href:"https://coinmarketcap.com/currencies/"},"30 billion USD market valuation"),"."),s.a.createElement(e.p,null,s.a.createElement(u["a"],{src:"https://user-images.githubusercontent.com/50838/28487050-1f61e478-6ea7-11e7-8626-838d2f0395bf.png",title:"A list of market caps of top cryptocurrencies as of June 19, 2017."})),s.a.createElement(e.p,null,"In BAT, all the ad transactions are based on this Ethereum platform. In order to execute such a transaction we need to pay an amount. This is a reason why Brave charges an amount from the ad revenue."),s.a.createElement(e.p,null,"All of these codes will be open sourced and anyone can inspect them and contribute back. In addition to that, all these transactions will be done in public but anonymously. That's why we consider BAT an open platform."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-124002185 jsx-124002185"},s.a.createElement("div",{id:"the-currency-and-funding",className:"jsx-124002185 jsx-124002185"}," "),s.a.createElement(l.a,{styleId:"124002185",css:".the-currency-and-funding.jsx-124002185{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"The Currency (And Funding)"),s.a.createElement(e.p,null,"Interestingly, BAT has it's own currency. It's also known as ",s.a.createElement(e.a,{href:"https://coinmarketcap.com/assets/basic-attention-token/"},"BAT"),"."),s.a.createElement(e.blockquote,null,s.a.createElement(e.p,null,"Technically, there's more to this. But to make things simple, let's call BAT's currency as Batcoin.")),s.a.createElement(e.p,null,"There's a public pool of 1 billion Batcoins available for trading right now. Brave foundation sold all of these Batcoins in the open market for around ",s.a.createElement(e.a,{href:"https://steemit.com/cryptocurrency/@rooby/how-bat-earn-36-million-in-a-dozen-seconds"},"36 million USD")," on the 31st of May. And this happened in just 30 seconds."),s.a.createElement(e.p,null,"As of writing this post, it's market valuation was around 195 million USD. So, it's doing pretty well."),s.a.createElement(e.p,null,s.a.createElement(u["a"],{src:"https://user-images.githubusercontent.com/50838/28487048-1f603b96-6ea7-11e7-9f20-5ada10fb6e7d.png",title:"A list of market caps of top tokens as of June 19, 2017."})),s.a.createElement(e.p,null,"Now you can buy Batcoins from a cryptocurrency exchange like ",s.a.createElement(e.a,{href:"https://liqui.io/#/exchange/BAT_BTC"},"Liqui")," right away. This will be the currency for all the transactions in BAT."),s.a.createElement(e.p,null,"Interestingly, because of Batcoins, BAT funded itself without any venture backing. So, that's a pretty good thing. Additionally, it seems like the general public has good faith in this technology."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-2527226156 jsx-2527226156"},s.a.createElement("div",{id:"challenges",className:"jsx-2527226156 jsx-2527226156"}," "),s.a.createElement(l.a,{styleId:"2527226156",css:".challenges.jsx-2527226156{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"Challenges"),s.a.createElement(e.p,null,"The goal of BAT is a massive one. So, they'll have to solve a lot of problems and there will be many challenges. Here are a set of challenges BAT might have to tackle sooner or later."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-547467774 jsx-547467774"},s.a.createElement("div",{id:"browser-share",className:"jsx-547467774 jsx-547467774"}," "),s.a.createElement(l.a,{styleId:"547467774",css:".browser-share.jsx-547467774{position:relative;display:none;}"}))),s.a.createElement(e.h3,null,"Browser Share"),s.a.createElement(e.p,null,"We know Chrome, IE, Firefox and Safari hold almost the entire browser marketplace. Existing AdBlockers are pretty good too. So, it'll be very tough to beat these browsers (along with AdBlockers), even in the long run."),s.a.createElement(e.p,null,"The only solution I can see is to build a Brave extension for each of the browsers. So, they'll have Brave capabilities."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-4009841749 jsx-4009841749"},s.a.createElement("div",{id:"mobile-apps",className:"jsx-4009841749 jsx-4009841749"}," "),s.a.createElement(l.a,{styleId:"4009841749",css:".mobile-apps.jsx-4009841749{position:relative;display:none;}"}))),s.a.createElement(e.h3,null,"Mobile APPS"),s.a.createElement(e.p,null,"It's no secret that we tend to use mobile apps for most things in our daily routine. But the browser is rarely on that list. Even if it was there, it might be launched inside Facebook or Twitter app."),s.a.createElement(e.p,null,"In the BAT whitepaper, they haven't mentioned how they bring BAT into a mobile app eco-space. That's something I'm curious to know about."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-1751558849 jsx-1751558849"},s.a.createElement("div",{id:"closed-platforms",className:"jsx-1751558849 jsx-1751558849"}," "),s.a.createElement(l.a,{styleId:"1751558849",css:".closed-platforms.jsx-1751558849{position:relative;display:none;}"}))),s.a.createElement(e.h3,null,"Closed Platforms"),s.a.createElement(e.p,null,"It's no secret that Google and Facebook hold a vast majority of the global ad revenue. And most of the popular platforms like twitter, snapchat, whatsapp and others have their own ad system, or they rely on Google."),s.a.createElement(e.p,null,"Converting these platforms to use BAT will be hard from both technical and business point of view."),s.a.createElement(e.p,null,"Most importantly, these are places where end users are. So, without these platforms, it's harder for BAT to succeed."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-249818184 jsx-249818184"},s.a.createElement("div",{id:"bitcoin-market-instability",className:"jsx-249818184 jsx-249818184"}," "),s.a.createElement(l.a,{styleId:"249818184",css:".bitcoin-market-instability.jsx-249818184{position:relative;display:none;}"}))),s.a.createElement(e.h3,null,"Bitcoin Market Instability"),s.a.createElement(e.p,null,"Batcoin market is new. Not only Batcoin, the whole cryptocurrency market is new and experimental. So, things might go wrong."),s.a.createElement(e.p,null,"There might be a software bug in Ethereum which will directly affect Batcoin; There might be some government regulations; Just like this there are many other possibilities for market instability."),s.a.createElement(e.p,null,"So, if there's a such an instability, the price of Batcoin might drop or fluctuate rapidly."),s.a.createElement(e.p,null,"If there's a rapid fluctuation in the currency, advertisers have to deal with that rather than just focus on their ad campaign. That'll be an obstacle to deal with."),s.a.createElement(e.p,null,"Also, middlemen might come into the equation and things won't be as simple as they seem now."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-3959337067 jsx-3959337067"},s.a.createElement("div",{id:"implementation-and-execution",className:"jsx-3959337067 jsx-3959337067"}," "),s.a.createElement(l.a,{styleId:"3959337067",css:".implementation-and-execution.jsx-3959337067{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"Implementation and Execution"),s.a.createElement(e.p,null,"Currently, Brave browser and the Brave Payments are the only implementation we've seen. There's a public ",s.a.createElement(e.a,{href:"https://basicattentiontoken.org/bat-roadmap-1-0.html"},"roadmap ")," for BAT but we have not seen anything yet."),s.a.createElement(e.p,null,"They are going against a solid ad-tech solution, so the implementation of BAT should be solid and easy to use for all parties."),s.a.createElement(e.p,null,s.a.createElement("span",{className:"jsx-2039868423 jsx-2039868423"},s.a.createElement("div",{id:"finally",className:"jsx-2039868423 jsx-2039868423"}," "),s.a.createElement(l.a,{styleId:"2039868423",css:".finally.jsx-2039868423{position:relative;display:none;}"}))),s.a.createElement(e.h2,null,"Finally"),s.a.createElement(e.p,null,"As I mentioned before, BAT is a pretty interesting solution to a burning problem. But they have to face a lot of challenges. And this will be a long journey."),s.a.createElement(e.p,null,"Anyway, it's too early to predict anything about BAT at this moment. But we need to give some time and see how it works in the real world."),s.a.createElement(e.p,null,"We are a part of this eco-system and we should help them to make BAT a success. As a baby step, download the ",s.a.createElement(e.a,{href:"https://brave.com/"},"Brave browser")," today and start using it."))}))}},[436]);return{page:e.default}});