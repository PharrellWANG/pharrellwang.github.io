module.exports=__NEXT_REGISTER_PAGE("/blog/ssr-and-server-only-modules",function(){var e=webpackJsonp([5],{23:function(e,t,n){e.exports=n(39)},37:function(e,t,n){"use strict";var a=n(12);var l=n.n(a);var r=n(0);var o=n.n(r);t["a"]=function(e){var t=e.src,n=e.width,a=void 0===n?"100%":n,r=e.height,s=e.alt,i=e.title;return o.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 container"},o.a.createElement("img",{src:t,width:a,height:r,alt:s,className:"jsx-1221164359 jsx-1221164359"}),i?o.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 title"},i):null,o.a.createElement(l.a,{styleId:"1221164359",css:".container.jsx-1221164359{text-align:center;max-width:100%;margin:50px 0;}img.jsx-1221164359{max-width:100%;}.title.jsx-1221164359{color:#888;font-size:13px;line-height:17px;padding:5px 0;}.title.jsx-1221164359 div.jsx-1221164359{margin:0;}"}))}},38:function(e,t,n){"use strict";var a=n(12);var l=n.n(a);var r=n(0);var o=n.n(r);var s=n(23);var i=n.n(s);var u=n(40);var c=n.n(u);var d=i()(new(n(23).SameLoopPromise)(function(e,t){var a=29;try{var l=n(a);return e(l)}catch(e){}n.e(0).then(function(a){try{var l=n(29);l.__webpackChunkName="react_syntax_highlighter_5e0c44cc80beffdff473f2e6ef5cb15c";e(l)}catch(e){t(e)}}.bind(null,n)).catch(n.oe)}),{loading:function e(){return o.a.createElement("div",null)}});var h={padding:8,fontSize:"100%",borderRadius:5,backgroundColor:"#eeeeee"};t["a"]=function(e){var t=e.language,n=e.children;return o.a.createElement("div",{className:"jsx-124958280 jsx-124958280 code"},o.a.createElement(d,{language:t,style:c.a,customStyle:h},n.trim()),o.a.createElement(l.a,{styleId:"124958280",css:".code.jsx-124958280{margin:30px 0;}"}))}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.SameLoopPromise=void 0;var a=n(74);var l=k(a);var r=n(16);var o=k(r);var s=n(6);var i=k(s);var u=n(4);var c=k(u);var d=n(5);var h=k(d);var m=n(7);var p=k(m);var f=n(8);var v=k(f);var g=n(43);var b=k(g);t.default=x;t.registerChunk=N;t.flushChunks=C;var E=n(0);var w=k(E);var y=n(27);function k(e){return e&&e.__esModule?e:{default:e}}var j=new b.default;function x(e,t){var n=void 0;var a=void 0;if(e instanceof R){n=e;a=t||{}}else{if(!e.modules||!e.render){var l="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(l)}if(t){var r="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(r)}a=e}return function(e){(0,v.default)(t,e);function t(){var e;(0,c.default)(this,t);for(var n=arguments.length,l=Array(n),r=0;r<n;r++)l[r]=arguments[r];var o=(0,p.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(l)));o.LoadingComponent=a.loading?a.loading:function(){return w.default.createElement("p",null,"loading...")};o.ssr=false!==a.ssr||a.ssr;o.state={AsyncComponent:null,asyncElement:null};o.isServer="undefined"===typeof window;o.loadBundleAgain=null;o.loadingBundle=false;o.ssr&&o.load();return o}(0,h.default)(t,[{key:"load",value:function e(){n?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var a=this;n.then(function(e){var n=e.default||e;var l=(0,y.getDisplayName)(n);l&&(t.displayName="DynamicComponent for "+l);if(a.mounted)a.setState({AsyncComponent:n});else{a.isServer&&N(e.__webpackChunkName);a.state.AsyncComponent=n}})}},{key:"loadBundle",value:function e(n){var l=this;this.loadBundleAgain=null;this.loadingBundle=true;var r=a.modules(n);var s=(0,o.default)(r);var i=s.length;var u={};var c=function e(){if(l.loadBundleAgain){l.loadBundle(l.loadBundleAgain);return}l.loadingBundle=false;t.displayName="DynamicBundle";var r=a.render(n,u);l.mounted?l.setState({asyncElement:r}):l.state.asyncElement=r};var d=function e(t){var n=r[t];n.then(function(e){var n=e.default||e;l.isServer&&N(e.__webpackChunkName);u[t]=n;i--;0===i&&c()})};s.forEach(d)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(n)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"render",value:function e(){var t=this.state,n=t.AsyncComponent,a=t.asyncElement;var l=this.LoadingComponent;if(a)return a;if(n)return w.default.createElement(n,this.props);return w.default.createElement(l,this.props)}}]);return t}(w.default.Component)}function N(e){j.add(e)}function C(){var e=(0,l.default)(j);j.clear();return e}var R=t.SameLoopPromise=function(){(0,h.default)(e,null,[{key:"resolve",value:function t(n){var a=new e(function(e){return e(n)});return a}}]);function e(t){(0,c.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,h.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(n,a){var l=this;this.runIfNeeded();var r=new e;var o=function e(){a?r.setResult(a(l.error)):r.setError(l.error)};var s=function e(){r.setResult(n(l.result))};if(this.gotResult){s();return r}if(this.gotError){o();return r}this.onResultCallbacks.push(s);this.onErrorCallbacks.push(o);return r}},{key:"catch",value:function t(n){var a=this;this.runIfNeeded();var l=new e;var r=function e(){l.setResult(n(a.error))};var o=function e(){l.setResult(a.result)};if(this.gotResult){o();return l}if(this.gotError){r();return l}this.onErrorCallbacks.push(r);this.onResultCallbacks.push(o);return l}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}()},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default={hljs:{display:"block",background:"white",padding:"0.5em",color:"#333333",overflowX:"auto"},"hljs-comment":{color:"#969896"},"hljs-meta":{color:"#969896"},"hljs-string":{color:"#df5000"},"hljs-variable":{color:"#df5000"},"hljs-template-variable":{color:"#df5000"},"hljs-strong":{color:"#df5000"},"hljs-emphasis":{color:"#df5000"},"hljs-quote":{color:"#df5000"},"hljs-keyword":{color:"#a71d5d"},"hljs-selector-tag":{color:"#a71d5d"},"hljs-type":{color:"#a71d5d"},"hljs-literal":{color:"#0086b3"},"hljs-symbol":{color:"#0086b3"},"hljs-bullet":{color:"#0086b3"},"hljs-attribute":{color:"#0086b3"},"hljs-section":{color:"#63a35c"},"hljs-name":{color:"#63a35c"},"hljs-tag":{color:"#333333"},"hljs-title":{color:"#795da3"},"hljs-attr":{color:"#795da3"},"hljs-selector-id":{color:"#795da3"},"hljs-selector-class":{color:"#795da3"},"hljs-selector-attr":{color:"#795da3"},"hljs-selector-pseudo":{color:"#795da3"},"hljs-addition":{color:"#55a532",backgroundColor:"#eaffea"},"hljs-deletion":{color:"#bd2c00",backgroundColor:"#ffecec"},"hljs-link":{textDecoration:"underline"}}},457:function(e,t,n){e.exports=n(458)},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var l=n.n(a);var r=n(50);var o=n.n(r);var s=n(51);var i=n(37);var u=n(38);t["default"]=Object(s["b"])({title:"SSR and Server Only Modules",description:"Using server only modules in a SSR enabled app could make your app slower. You need to use them wisely",image:"https://user-images.githubusercontent.com/50838/28487017-cff25bac-6ea6-11e7-9484-8372467903d2.png",slug:"ssr-and-server-only-modules",date:"June 29, 2017",links:{twitter:"https://twitter.com/arunoda/status/880453551100641281",facebook:"https://www.facebook.com/groups/228321510706889/permalink/632366906969012/"}})(o()(s["a"],function(e){return l.a.createElement("div",{className:"_markdown_"},l.a.createElement(e.p,null,"Recently there was an interesting discussion about ",l.a.createElement(e.a,{href:"https://github.com/zeit/next.js/"},"Next.js"),"'s performance on Twitter."),l.a.createElement(e.p,null,l.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/28487019-cff64fd2-6ea6-11e7-9b59-f7c2d67bed1f.png",width:450,title:"Screenshot of the tweet without the author info."})),l.a.createElement(e.p,null,"Basically, it took about a minute to build the app with ",l.a.createElement(e.code,null,"next build")," and the resulting app's bundle was around 1.2 MB."),l.a.createElement(e.p,null,"Technically, this is impossible for a simple ",l.a.createElement(e.a,{href:"https://abc-nfedfcfmoe.now.sh/"},"hello world")," Next.js app. Here is what a simple hello world app looks like."),l.a.createElement(e.p,null,l.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/28487018-cff49782-6ea6-11e7-8354-724a6ac0e07c.png",title:"A simple Next.js app only contains less than 100 KB of content."})),l.a.createElement(e.p,null,"Apparently, the mentioned app was using a ",l.a.createElement(e.strong,null,"server-only")," module which caused the issue. That module was only meant to run inside the server, but webpack bundled it."),l.a.createElement(e.h2,null,"Who is to blame?"),l.a.createElement(e.p,null,"Actually, this the wrong question. The question should be the following:"),l.a.createElement(e.p,null,l.a.createElement(e.strong,null,"How can we prevent this?")),l.a.createElement(e.p,null,"Before we answer this question, I need to talk a bit more about some basics."),l.a.createElement(e.h3,null,"Webpack and NPM modules"),l.a.createElement(e.p,null,"Usually, most of the NPM modules we use in client side web apps can be used in both server and client environments. Rarely, we may use some of the server only modules in the client side too. For example, we do this for most of the crypto-based modules."),l.a.createElement(e.p,null,"So, webpack always tries to bundle all of the NPM modules as much as it possibly can. It also ",l.a.createElement(e.a,{href:"https://github.com/webpack/node-libs-browser"},"comes")," with a set of NPM modules which implements client side versions of some of the core Node.js modules."),l.a.createElement(e.h3,null,"Server side rendering (SSR)"),l.a.createElement(e.p,null,"SSR is pretty interesting and it runs your client side code in the server. Usually, most of the NPM modules we use could work in both environments."),l.a.createElement(e.p,null,"But sometimes, we need to import some NPM modules only to run inside the server."),l.a.createElement(e.p,null,"For an example, when ",l.a.createElement(e.a,{href:"https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle"},"fetching data")," in a Next.js app we might use a server only module to fetch data."),l.a.createElement(e.p,null,"Have a look at the following code:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],{language:"js"},"\nimport React from 'react'\nimport Link from 'next/link'\n\nexport default class Index extends React.Component {\n  static getInitialProps ({ req }) {\n    if (req) {\n      // Runs only in the server\n      const faker = require('faker')\n      const name = faker.name.findName()\n      return { name }\n    }\n\n    // Runs only in the client\n    return { name: 'Arunoda' }\n  }\n\n  render () {\n    const { name } = this.props\n    return (\n      <div>\n        <h1>Home Page</h1>\n        <p>Welcome, {name}</p>\n        <div>\n          <Link href='/about'><a>About Page</a></Link>\n        </div>\n      </div>\n    )\n  }\n}\n    ")),l.a.createElement(e.p,null,"In the above example, our intention is to use ",l.a.createElement(e.code,null,"faker")," module only in the server."),l.a.createElement(e.p,null,"But webpack includes ",l.a.createElement(e.code,null,"faker")," module in client side as well. So, the app's bundle size increases and it takes more time to build."),l.a.createElement(e.h2,null,"How to identify"),l.a.createElement(e.p,null,"Frankly, there's no simple way to identify this issue. You need to use a webpack analyzer to visualize what's inside your bundle."),l.a.createElement(e.p,null,"Here's a sample Next.js ",l.a.createElement(e.a,{href:"https://github.com/zeit/next.js/tree/master/examples/with-webpack-bundle-analyzer"},"app")," which comes with a ",l.a.createElement(e.a,{href:"https://github.com/th0r/webpack-bundle-analyzer"},"webpack analyzer"),"."),l.a.createElement(e.p,null,"Download the app and run the following command:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],{language:"bash"},"\nnpm run analyze\n  ")),l.a.createElement(e.p,null,"Then it will open a HTML page in the browser and it'll look like this:"),l.a.createElement(e.p,null,l.a.createElement(i["a"],{src:"https://user-images.githubusercontent.com/50838/28487017-cff25bac-6ea6-11e7-9484-8372467903d2.png"})),l.a.createElement(e.p,null,"You can clearly see ",l.a.createElement(e.code,null,"faker")," module is included in the client side bundle of the “index.js” page."),l.a.createElement(e.p,null,"As shown in the above example app, you can configure ",l.a.createElement(e.a,{href:"https://github.com/th0r/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," with your app and see what's included in your client side bundle(s)."),l.a.createElement(e.h2,null,"How to fix it"),l.a.createElement(e.p,null,"After you've identified the issue, it's pretty easy to fix it. There are few ways to do this."),l.a.createElement(e.h3,null,"1. Using Eval"),l.a.createElement(e.p,null,"You can require the module inside ",l.a.createElement(e.code,null,"eval")," as mentioned below:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],{language:"js"},"\nconst faker = eval(\"require('faker')\")\n  ")),l.a.createElement(e.p,null,"Webpack can't statically analyze what's inside eval. So it won't bundle the ",l.a.createElement(e.code,null,"faker")," module."),l.a.createElement(e.h3,null,"2. Using Webpack's Ignore plugin"),l.a.createElement(e.p,null,"Webpack also has a ",l.a.createElement(e.a,{href:"https://webpack.js.org/plugins/ignore-plugin/"},"plugin")," where you can ignore modules. Here's how to use it."),l.a.createElement(e.p,null,"Create a file called ",l.a.createElement(e.code,null,"next.config.js")," in your Next.js app and add the webpack IgnorePlugin."),l.a.createElement(e.p,null,l.a.createElement(u["a"],{language:"js"},"\nmodule.exports = {\n  webpack: function (config) {\n    config.plugins.push(\n      new require('webpack').IgnorePlugin(/faker/)\n    )\n\n    return config\n  }\n}\n  ")),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"If you are using webpack directly, just use the plugin directly.")),l.a.createElement(e.h3,null,'3. Using the "browser" field of the "package.json"'),l.a.createElement(e.p,null,"You can also ask webpack to disable bundling ",l.a.createElement(e.code,null,"faker")," module via adding a config in the main ",l.a.createElement(e.code,null,"package.json")," file.",l.a.createElement("br",null),"Add the following code in to your ",l.a.createElement(e.code,null,"package.json")," file."),l.a.createElement(e.p,null,l.a.createElement(u["a"],{language:"js"},'\n{\n  ...\n  "browser": {\n    "faker": false\n  }\n  ...\n}\n  ')),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"Additionally you can use webpack's ",l.a.createElement(e.a,{href:"https://webpack.js.org/configuration/resolve/#resolve-alias"},l.a.createElement(e.code,null,"resolve.alias"))," to map ",l.a.createElement(e.code,null,"faker")," into an empty module.")),l.a.createElement(e.h2,null,"Lack of tools and awareness"),l.a.createElement(e.p,null,"This is a problem we face not only with ",l.a.createElement(e.a,{href:"https://github.com/zeit/next.js/"},"Next.js"),", but with any SSR enabled app (including ",l.a.createElement(e.a,{href:"https://developers.google.com/web/progressive-web-apps/"},"PWAs"),"). Normally, most of the developers are not aware of this issue."),l.a.createElement(e.p,null,"So we need some better tooling to detect this problem other than manually inspecting the bundle."),l.a.createElement(e.p,null,"It'd be great if we could build a webpack plugin to warn users if webpack sees a server-only module."),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"If you want to contribute to webpack, this would be a great start.")),l.a.createElement(e.p,null,"Until then, all we can do is educate developers with posts like this."))}))}},[457]);return{page:e.default}});