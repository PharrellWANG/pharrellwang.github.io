module.exports=__NEXT_REGISTER_PAGE("/blog/understanding-bidirectional-optical-flow",function(){var e=webpackJsonp([4],{215:function(e,t,n){"use strict";var a=n(12);var r=n.n(a);var l=n(0);var o=n.n(l);var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,n,a){n&&e(t.prototype,n);a&&e(t,a);return t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function e(t){var n=t.onClick,a=t.children;return o.a.createElement("button",{onClick:n,className:"jsx-1559016005 jsx-1559016005"},a,o.a.createElement(r.a,{styleId:"1559016005",css:"button.jsx-1559016005{background-color:#d84315;border-radius:3px;border:2px solid #fff;color:#fff;padding:5px 20px;font-size:16px;cursor:pointer;}button.jsx-1559016005:hover{opacity:0.7;}"}))};var m=function(e){u(t,e);function t(){var e;var n,a,r;s(this,t);for(var l=arguments.length,o=Array(l),i=0;i<l;i++)o[i]=arguments[i];return r=(n=(a=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a),a.state={givenAnswer:null,showAll:false},n),c(a,r)}i(t,[{key:"reset",value:function e(){this.setState({showAll:false,givenAnswer:null,currentAnswer:null})}},{key:"showAll",value:function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({showAll:t})}},{key:"setAnswer",value:function e(t){this.setState({currentAnswer:t})}},{key:"submitAnswer",value:function e(){var t=this.state.currentAnswer;if(!t){alert("Select an answer.");return}this.setState({givenAnswer:t,currentAnswer:null})}},{key:"renderQuestions",value:function e(){var t=this;var n=this.props.answers;return o.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 answer-box"},o.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 answers"},n.map(function(e){return o.a.createElement("div",{key:e,className:"jsx-1559016005 jsx-966195656 answer"},o.a.createElement("input",{type:"radio",name:"answer",value:e,onChange:function n(){return t.setAnswer(e)},className:"jsx-1559016005 jsx-966195656"}),o.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 text"},e),o.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 clearfix"}))})),o.a.createElement(d,{onClick:function e(){return t.submitAnswer()}},"Submit"),o.a.createElement(r.a,{styleId:"966195656",css:".answer.jsx-966195656{position:relative;}.answer.jsx-966195656 input.jsx-966195656{position:absolute;left:0;top:5px;}.answer.jsx-966195656 .text.jsx-966195656{padding-top:5px;margin-left:25px;}.clearfix.jsx-966195656{clear:both;}.answer-box.jsx-966195656{margin:15px 0 0 0;}.answers.jsx-966195656{margin:0 0 10px 0;}"}))}},{key:"renderResult",value:function e(){var t=this;var n=this.props.correctAnswer;var a=this.state.givenAnswer;var l=n===a;return o.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 result-box"},l?o.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 correct"},"Yes. You are correct :)"):o.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 wrong"},"Unfortunately, you missed this :("),o.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 correct-answer"},o.a.createElement("h4",{className:"jsx-1559016005 jsx-1892480073"},"Correct Answer"),o.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073"},n)),o.a.createElement("div",{onClick:function e(){return t.reset()},className:"jsx-1559016005 jsx-1892480073 reset"},"( Click here to reset )"),o.a.createElement(r.a,{styleId:"1892480073",css:".result-box.jsx-1892480073{margin:15px 0 0 0;}h4.jsx-1892480073{margin:10px 0 0 0;padding:0;font-size:18px;font-weight:600;}.reset.jsx-1892480073{cursor:pointer;font-size:12px;}.correct-answer.jsx-1892480073{margin:0 0 10px 0;}"}))}},{key:"renderDetails",value:function e(){var t=this.state.givenAnswer;return t?this.renderResult():this.renderQuestions()}},{key:"showClickToAnswer",value:function e(){var t=this;return o.a.createElement("div",{onClick:function e(){return t.showAll()},className:"jsx-1559016005 jsx-2418575141"},"( Click here to answer )",o.a.createElement(r.a,{styleId:"2418575141",css:"div.jsx-2418575141{cursor:pointer;font-size:12px;}"}))}},{key:"render",value:function e(){var t=this.props.question;var n=this.state.showAll;return o.a.createElement("div",{className:"jsx-1559016005 jsx-1581755478 question-box"},o.a.createElement("div",{className:"jsx-1559016005 jsx-1581755478 question"},"Q: ",t),n?this.renderDetails():this.showClickToAnswer(),o.a.createElement(r.a,{styleId:"1581755478",css:".question-box.jsx-1581755478{background-color:#3f51b5;padding:15px 15px;color:#fff;}.question.jsx-1581755478{font-size:0.9rem;font-weight:400;}"}))}}]);return t}(o.a.Component);t["a"]=m},23:function(e,t,n){e.exports=n(39)},38:function(e,t,n){"use strict";var a=n(12);var r=n.n(a);var l=n(0);var o=n.n(l);var i=n(23);var s=n.n(i);var c=n(40);var u=n.n(c);var d=s()(new(n(23).SameLoopPromise)(function(e,t){var a=29;try{var r=n(a);return e(r)}catch(e){}n.e(0).then(function(a){try{var r=n(29);r.__webpackChunkName="react_syntax_highlighter_5e0c44cc80beffdff473f2e6ef5cb15c";e(r)}catch(e){t(e)}}.bind(null,n)).catch(n.oe)}),{loading:function e(){return o.a.createElement("div",null)}});var m={padding:8,fontSize:"100%",borderRadius:5,backgroundColor:"#eeeeee"};t["a"]=function(e){var t=e.language,n=e.children;return o.a.createElement("div",{className:"jsx-124958280 jsx-124958280 code"},o.a.createElement(d,{language:t,style:u.a,customStyle:m},n.trim()),o.a.createElement(r.a,{styleId:"124958280",css:".code.jsx-124958280{margin:30px 0;}"}))}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.SameLoopPromise=void 0;var a=n(74);var r=x(a);var l=n(16);var o=x(l);var i=n(6);var s=x(i);var c=n(4);var u=x(c);var d=n(5);var m=x(d);var h=n(7);var f=x(h);var p=n(8);var v=x(p);var b=n(43);var E=x(b);t.default=k;t.registerChunk=C;t.flushChunks=O;var g=n(0);var w=x(g);var y=n(27);function x(e){return e&&e.__esModule?e:{default:e}}var j=new E.default;function k(e,t){var n=void 0;var a=void 0;if(e instanceof B){n=e;a=t||{}}else{if(!e.modules||!e.render){var r="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(r)}if(t){var l="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(l)}a=e}return function(e){(0,v.default)(t,e);function t(){var e;(0,u.default)(this,t);for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];var o=(0,f.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(r)));o.LoadingComponent=a.loading?a.loading:function(){return w.default.createElement("p",null,"loading...")};o.ssr=false!==a.ssr||a.ssr;o.state={AsyncComponent:null,asyncElement:null};o.isServer="undefined"===typeof window;o.loadBundleAgain=null;o.loadingBundle=false;o.ssr&&o.load();return o}(0,m.default)(t,[{key:"load",value:function e(){n?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var a=this;n.then(function(e){var n=e.default||e;var r=(0,y.getDisplayName)(n);r&&(t.displayName="DynamicComponent for "+r);if(a.mounted)a.setState({AsyncComponent:n});else{a.isServer&&C(e.__webpackChunkName);a.state.AsyncComponent=n}})}},{key:"loadBundle",value:function e(n){var r=this;this.loadBundleAgain=null;this.loadingBundle=true;var l=a.modules(n);var i=(0,o.default)(l);var s=i.length;var c={};var u=function e(){if(r.loadBundleAgain){r.loadBundle(r.loadBundleAgain);return}r.loadingBundle=false;t.displayName="DynamicBundle";var l=a.render(n,c);r.mounted?r.setState({asyncElement:l}):r.state.asyncElement=l};var d=function e(t){var n=l[t];n.then(function(e){var n=e.default||e;r.isServer&&C(e.__webpackChunkName);c[t]=n;s--;0===s&&u()})};i.forEach(d)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(n)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"render",value:function e(){var t=this.state,n=t.AsyncComponent,a=t.asyncElement;var r=this.LoadingComponent;if(a)return a;if(n)return w.default.createElement(n,this.props);return w.default.createElement(r,this.props)}}]);return t}(w.default.Component)}function C(e){j.add(e)}function O(){var e=(0,r.default)(j);j.clear();return e}var B=t.SameLoopPromise=function(){(0,m.default)(e,null,[{key:"resolve",value:function t(n){var a=new e(function(e){return e(n)});return a}}]);function e(t){(0,u.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,m.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(n,a){var r=this;this.runIfNeeded();var l=new e;var o=function e(){a?l.setResult(a(r.error)):l.setError(r.error)};var i=function e(){l.setResult(n(r.result))};if(this.gotResult){i();return l}if(this.gotError){o();return l}this.onResultCallbacks.push(i);this.onErrorCallbacks.push(o);return l}},{key:"catch",value:function t(n){var a=this;this.runIfNeeded();var r=new e;var l=function e(){r.setResult(n(a.error))};var o=function e(){r.setResult(a.result)};if(this.gotResult){o();return r}if(this.gotError){l();return r}this.onErrorCallbacks.push(l);this.onResultCallbacks.push(o);return r}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}()},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default={hljs:{display:"block",background:"white",padding:"0.5em",color:"#333333",overflowX:"auto"},"hljs-comment":{color:"#969896"},"hljs-meta":{color:"#969896"},"hljs-string":{color:"#df5000"},"hljs-variable":{color:"#df5000"},"hljs-template-variable":{color:"#df5000"},"hljs-strong":{color:"#df5000"},"hljs-emphasis":{color:"#df5000"},"hljs-quote":{color:"#df5000"},"hljs-keyword":{color:"#a71d5d"},"hljs-selector-tag":{color:"#a71d5d"},"hljs-type":{color:"#a71d5d"},"hljs-literal":{color:"#0086b3"},"hljs-symbol":{color:"#0086b3"},"hljs-bullet":{color:"#0086b3"},"hljs-attribute":{color:"#0086b3"},"hljs-section":{color:"#63a35c"},"hljs-name":{color:"#63a35c"},"hljs-tag":{color:"#333333"},"hljs-title":{color:"#795da3"},"hljs-attr":{color:"#795da3"},"hljs-selector-id":{color:"#795da3"},"hljs-selector-class":{color:"#795da3"},"hljs-selector-attr":{color:"#795da3"},"hljs-selector-pseudo":{color:"#795da3"},"hljs-addition":{color:"#55a532",backgroundColor:"#eaffea"},"hljs-deletion":{color:"#bd2c00",backgroundColor:"#ffecec"},"hljs-link":{textDecoration:"underline"}}},459:function(e,t,n){e.exports=n(460)},460:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var r=n.n(a);var l=n(50);var o=n.n(l);var i=n(51);var s=n(38);var c=n(215);t["default"]=Object(i["b"])({title:"Understanding Bidirectional Optical Flow",description:"An attempt to explain Bidirectional Optical Flow in VVC.",slug:"understanding-bidirectional-optical-flow",date:"June 30, 2019"})(o()(i["a"],function(e){return r.a.createElement("div",{className:"_markdown_"},r.a.createElement(e.p,null,"This post attempts to explain the Bidirectional Optical Flow (BIO or BDOF), which is a newly introduced technique in VVC compared with HEVC."),r.a.createElement(e.blockquote,null,r.a.createElement(e.p,null,"Name explained: BIO is a method for improving B-slice prediction, B-slice in HEVC can utilize intrapicture prediction, interpicture uniprediction and interpicture biprediction, hence ",r.a.createElement(e.strong,null,"Bidirectional"),"; BIO is inspired by the optical flow concept in computer vision, hence ",r.a.createElement(e.strong,null,"optical flow"),".",r.a.createElement("br",null),r.a.createElement("small",null,"(It is a nice name)"))),r.a.createElement(e.hr,null),r.a.createElement(e.p,null,r.a.createElement(c["a"],{question:"Is this post talking about Video Compression or Computer Vision?",answers:["Video Compression","Computer Vision"],correctAnswer:"Video Compression"})),r.a.createElement(e.h2,null,"Origin"),r.a.createElement(e.p,null,'When reading the JVET proposals, such as JVET-K0255, it tells "BIO is proposed in VCEG-AZ07". But if you turn to that document, it does not contain any words about BIO. In fact, BIO has been found in JCTVC-C204, Oct 2010, by Elena Alshina and Alex Alshin, both from Samsung. I think that is the true debut.'),r.a.createElement(e.h2,null,"Motivation"),r.a.createElement(e.p,null,"The intrapicture biprediction method generates predictive samples for the current coding block by a weighted combination of two previously coded blocks, one from a past reference frame, the other from a future reference frame. It is argued that after this procedure uncompensated motion in some tiny parts of the block may still exists. Those tiny parts could be smaller than the smallest partition size, hence it is desirable to have pixel-wise motion compensation. Moreover, if pixel-wise motion compensation can be achieved without additional partitioning and additional motion vector coding, it will allow the usage of larger partition sizes, which could help to increase the coding efficiency."),r.a.createElement(e.h2,null,"Assumptions"),r.a.createElement(e.p,null,"BIO is based on a set of safe assumptions [3]:"),r.a.createElement(e.ol,null,r.a.createElement(e.li,null,'Assume that object move with locally constant speed, thus the so called "steady motion" model can be used.'),r.a.createElement(e.li,null,"Assume that luminance of moving objects does not change, thus the well known optical flow partial deferential equation (PDE) is valid."),r.a.createElement(e.li,null,"Assume that only fine motion is not compensated by standard block based prediction.")),r.a.createElement(e.h2,null,"Main Idea"),r.a.createElement(e.p,null,"To summarize the BIO, interpolated samples from two reference blocks are first filtered using n-tap gradient filter; after that BIO gradient values, as well as block based horizontal and vertical motion offsets are generated; then the generated gradients and motion offsets are combined together to calculate a ",r.a.createElement(e.strong,null,"BIO Offset")," value, codenamed ",r.a.createElement(e.code,null,"bdofOffset"),"in BIO algorithm description from JVET-L1001, which is the VVC draft corresponding to ",r.a.createElement(e.em,null,"VTM4.0"),".",r.a.createElement(e.br,null),r.a.createElement(e.strong,null,"BIO Offset")," distinguishes normal ",r.a.createElement(e.strong,null,"interpicture biprediction")," with ",r.a.createElement(e.strong,null,"BIO prediction")," in B-slices, below code block shows a comparision of the calculation for predicted samples:"),r.a.createElement(e.p,null,r.a.createElement(s["a"],{language:"shell"},"\nFor normal interpicture biprediction:\nsample[x][y] = clip3(0, 2^bitDepth - 1, (predSampleL0[x+1][y+1] + offset4 + predSampleL1[x+1][y+1])>>shit4)\n\nFor BIO prediction:\nsample[x][y] = clip3(0, 2^bitDepth - 1, (predSampleL0[x+1][y+1] + offset4 + predSampleL1[x+1][y+1] + bdofOffset)>>shit4)\n\n")),r.a.createElement(e.p,null,"Clearly the only difference is the part where ",r.a.createElement(e.code,null,"bdofOffset")," has been added to the sum of reference samples."),r.a.createElement(e.h2,null,"Evolution"),r.a.createElement(e.p,null,"During the development of VVC, BIO prediction process has been simplified and improved several times, as well as made to be implementation friendly. [5] proposes simplified gradient calculation, adaptive BIO granularity and applying BIO to chroma components. In [6], a two-stage early termination method is used to conditionally disable the BIO operations depending on the similarity between the two prediction signals. Simpler gradient filter has been combined with the two stage early termination, forming the so called ",r.a.createElement(e.em,null,"combined BIO method")," in [7]. [8] suggests to apply bit depth constraints, disable BIO for small CUs, apply one fixed filter for gradient calculation and reduce the required MC samples to alleviate the overhead. [9] assumes optical flow is either in horizontal or vertical direction to reduce number of multiplications and additions during the BIO calculation process. [10] proposed two methods to further reduce the BIO complexity, one is bit-width control, the other is utilizing bilinear filters to interpolate prediction samples. [11] proposes two methods to make the existing design of BIO more implementation friendly."),r.a.createElement(e.h2,null,"Prediction Process"),r.a.createElement(e.p,null,"Section 8.4.6.4 in [4] presents the BIO prediction process in pseudo code, its clear and easy to read, especially when combined with VTM4.0 codebase. Here I introduce two add-on explanations for the time being."),r.a.createElement(e.ol,null,r.a.createElement(e.li,null,"The function named ",r.a.createElement(e.code,null,"calcBIOPar_SSE")," is for calculating important intermediate variables which will be used to generate motion offsets of the current subblock."),r.a.createElement(e.li,null,"The function named ",r.a.createElement(e.code,null,"addBIOAvgCore")," is for calculating the BIO Offset which will be used to calculate the final BIO predicted values.")),r.a.createElement(e.h2,null,"Patent"),r.a.createElement(e.p,null,"BIO is now a patent hold by Qualcomm [12]."),r.a.createElement(e.hr,null),r.a.createElement(e.p,null,r.a.createElement(e.strong,null,"References")),r.a.createElement(e.p,null,"[1] JVET-K0255"),r.a.createElement(e.p,null,"[2] VCEG-AZ07"),r.a.createElement(e.p,null,"[3] JCTVC-C204"),r.a.createElement(e.p,null,"[4] JVET-L1001"),r.a.createElement(e.p,null,"[5] JVET-K0255"),r.a.createElement(e.p,null,"[6] JVET-J0015"),r.a.createElement(e.p,null,"[7] JVET-K0485"),r.a.createElement(e.p,null,"[8] JVET-L0099"),r.a.createElement(e.p,null,"[9] JVET-L0123"),r.a.createElement(e.p,null,"[10] JVET-L0256"),r.a.createElement(e.p,null,"[11] JVET-L0591"),r.a.createElement(e.p,null,"[12] Xiang Li JC, Wei-Jung Chien, Marta Karczewicz, BI-DIRECTIONAL OPTICAL FLOW FOR VIDEO CODING. US patent US 2017/0094305 A1. Sep. 27, 2016."))}))}},[459]);return{page:e.default}});