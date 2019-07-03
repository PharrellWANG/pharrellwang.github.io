module.exports=__NEXT_REGISTER_PAGE("/blog/understanding-bidirectional-optical-flow",function(){var e=webpackJsonp([4],{216:function(e,t,a){"use strict";var n=a(12);var r=a.n(n);var o=a(0);var i=a.n(o);var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a);n&&e(t,n);return t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function e(t){var a=t.onClick,n=t.children;return i.a.createElement("button",{onClick:a,className:"jsx-1559016005 jsx-1559016005"},n,i.a.createElement(r.a,{styleId:"1559016005",css:"button.jsx-1559016005{background-color:#d84315;border-radius:3px;border:2px solid #fff;color:#fff;padding:5px 20px;font-size:16px;cursor:pointer;}button.jsx-1559016005:hover{opacity:0.7;}"}))};var p=function(e){u(t,e);function t(){var e;var a,n,r;s(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=(a=(n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n),n.state={givenAnswer:null,showAll:false},a),c(n,r)}l(t,[{key:"reset",value:function e(){this.setState({showAll:false,givenAnswer:null,currentAnswer:null})}},{key:"showAll",value:function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({showAll:t})}},{key:"setAnswer",value:function e(t){this.setState({currentAnswer:t})}},{key:"submitAnswer",value:function e(){var t=this.state.currentAnswer;if(!t){alert("Select an answer.");return}this.setState({givenAnswer:t,currentAnswer:null})}},{key:"renderQuestions",value:function e(){var t=this;var a=this.props.answers;return i.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 answer-box"},i.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 answers"},a.map(function(e){return i.a.createElement("div",{key:e,className:"jsx-1559016005 jsx-966195656 answer"},i.a.createElement("input",{type:"radio",name:"answer",value:e,onChange:function a(){return t.setAnswer(e)},className:"jsx-1559016005 jsx-966195656"}),i.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 text"},e),i.a.createElement("div",{className:"jsx-1559016005 jsx-966195656 clearfix"}))})),i.a.createElement(d,{onClick:function e(){return t.submitAnswer()}},"Submit"),i.a.createElement(r.a,{styleId:"966195656",css:".answer.jsx-966195656{position:relative;}.answer.jsx-966195656 input.jsx-966195656{position:absolute;left:0;top:5px;}.answer.jsx-966195656 .text.jsx-966195656{padding-top:5px;margin-left:25px;}.clearfix.jsx-966195656{clear:both;}.answer-box.jsx-966195656{margin:15px 0 0 0;}.answers.jsx-966195656{margin:0 0 10px 0;}"}))}},{key:"renderResult",value:function e(){var t=this;var a=this.props.correctAnswer;var n=this.state.givenAnswer;var o=a===n;return i.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 result-box"},o?i.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 correct"},"Yes. You are correct :)"):i.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 wrong"},"Unfortunately, you missed this :("),i.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073 correct-answer"},i.a.createElement("h4",{className:"jsx-1559016005 jsx-1892480073"},"Correct Answer"),i.a.createElement("div",{className:"jsx-1559016005 jsx-1892480073"},a)),i.a.createElement("div",{onClick:function e(){return t.reset()},className:"jsx-1559016005 jsx-1892480073 reset"},"( Click here to reset )"),i.a.createElement(r.a,{styleId:"1892480073",css:".result-box.jsx-1892480073{margin:15px 0 0 0;}h4.jsx-1892480073{margin:10px 0 0 0;padding:0;font-size:18px;font-weight:600;}.reset.jsx-1892480073{cursor:pointer;font-size:12px;}.correct-answer.jsx-1892480073{margin:0 0 10px 0;}"}))}},{key:"renderDetails",value:function e(){var t=this.state.givenAnswer;return t?this.renderResult():this.renderQuestions()}},{key:"showClickToAnswer",value:function e(){var t=this;return i.a.createElement("div",{onClick:function e(){return t.showAll()},className:"jsx-1559016005 jsx-2418575141"},"( Click here to answer )",i.a.createElement(r.a,{styleId:"2418575141",css:"div.jsx-2418575141{cursor:pointer;font-size:12px;}"}))}},{key:"render",value:function e(){var t=this.props.question;var a=this.state.showAll;return i.a.createElement("div",{className:"jsx-1559016005 jsx-1581755478 question-box"},i.a.createElement("div",{className:"jsx-1559016005 jsx-1581755478 question"},"Q: ",t),a?this.renderDetails():this.showClickToAnswer(),i.a.createElement(r.a,{styleId:"1581755478",css:".question-box.jsx-1581755478{background-color:#3f51b5;padding:15px 15px;color:#fff;}.question.jsx-1581755478{font-size:0.9rem;font-weight:400;}"}))}}]);return t}(i.a.Component);t["a"]=p},23:function(e,t,a){e.exports=a(39)},27:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(75);Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r(n).default}});function r(e){return e&&e.__esModule?e:{default:e}}},30:function(e,t,a){"use strict";var n=a(12);var r=a.n(n);var o=a(0);var i=a.n(o);t["a"]=function(e){var t=e.src,a=e.width,n=void 0===a?"100%":a,o=e.height,l=e.alt,s=e.title;return i.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 container"},i.a.createElement("img",{src:t,width:n,height:o,alt:l,className:"jsx-1221164359 jsx-1221164359"}),s?i.a.createElement("div",{className:"jsx-1221164359 jsx-1221164359 title"},s):null,i.a.createElement(r.a,{styleId:"1221164359",css:".container.jsx-1221164359{text-align:center;max-width:100%;margin:50px 0;}img.jsx-1221164359{max-width:100%;}.title.jsx-1221164359{color:#888;font-size:13px;line-height:17px;padding:5px 0;}.title.jsx-1221164359 div.jsx-1221164359{margin:0;}"}))}},38:function(e,t,a){"use strict";var n=a(12);var r=a.n(n);var o=a(0);var i=a.n(o);var l=a(23);var s=a.n(l);var c=a(40);var u=a.n(c);var d=s()(new(a(23).SameLoopPromise)(function(e,t){var n=31;try{var r=a(n);return e(r)}catch(e){}a.e(0).then(function(n){try{var r=a(31);r.__webpackChunkName="react_syntax_highlighter_5e0c44cc80beffdff473f2e6ef5cb15c";e(r)}catch(e){t(e)}}.bind(null,a)).catch(a.oe)}),{loading:function e(){return i.a.createElement("div",null)}});var p={padding:8,fontSize:"100%",borderRadius:5,backgroundColor:"#eeeeee"};t["a"]=function(e){var t=e.language,a=e.children;return i.a.createElement("div",{className:"jsx-124958280 jsx-124958280 code"},i.a.createElement(d,{language:t,style:u.a,customStyle:p},a.trim()),i.a.createElement(r.a,{styleId:"124958280",css:".code.jsx-124958280{margin:30px 0;}"}))}},39:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.SameLoopPromise=void 0;var n=a(74);var r=w(n);var o=a(17);var i=w(o);var l=a(6);var s=w(l);var c=a(4);var u=w(c);var d=a(5);var p=w(d);var m=a(7);var h=w(m);var f=a(8);var v=w(f);var g=a(43);var E=w(g);t.default=C;t.registerChunk=k;t.flushChunks=B;var y=a(0);var b=w(y);var x=a(28);function w(e){return e&&e.__esModule?e:{default:e}}var j=new E.default;function C(e,t){var a=void 0;var n=void 0;if(e instanceof A){a=e;n=t||{}}else{if(!e.modules||!e.render){var r="`next/dynamic` options should contain `modules` and `render` fields";throw new Error(r)}if(t){var o="Add additional `next/dynamic` options to the first argument containing the `modules` and `render` fields";throw new Error(o)}n=e}return function(e){(0,v.default)(t,e);function t(){var e;(0,u.default)(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=(0,h.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(r)));i.LoadingComponent=n.loading?n.loading:function(){return b.default.createElement("p",null,"loading...")};i.ssr=false!==n.ssr||n.ssr;i.state={AsyncComponent:null,asyncElement:null};i.isServer="undefined"===typeof window;i.loadBundleAgain=null;i.loadingBundle=false;i.ssr&&i.load();return i}(0,p.default)(t,[{key:"load",value:function e(){a?this.loadComponent():this.loadBundle(this.props)}},{key:"loadComponent",value:function e(){var n=this;a.then(function(e){var a=e.default||e;var r=(0,x.getDisplayName)(a);r&&(t.displayName="DynamicComponent for "+r);if(n.mounted)n.setState({AsyncComponent:a});else{n.isServer&&k(e.__webpackChunkName);n.state.AsyncComponent=a}})}},{key:"loadBundle",value:function e(a){var r=this;this.loadBundleAgain=null;this.loadingBundle=true;var o=n.modules(a);var l=(0,i.default)(o);var s=l.length;var c={};var u=function e(){if(r.loadBundleAgain){r.loadBundle(r.loadBundleAgain);return}r.loadingBundle=false;t.displayName="DynamicBundle";var o=n.render(a,c);r.mounted?r.setState({asyncElement:o}):r.state.asyncElement=o};var d=function e(t){var a=o[t];a.then(function(e){var a=e.default||e;r.isServer&&k(e.__webpackChunkName);c[t]=a;s--;0===s&&u()})};l.forEach(d)}},{key:"componentDidMount",value:function e(){this.mounted=true;this.ssr||this.load()}},{key:"componentWillReceiveProps",value:function e(t){if(a)return;this.setState({asyncElement:null});if(this.loadingBundle){this.loadBundleAgain=t;return}this.loadBundle(t)}},{key:"render",value:function e(){var t=this.state,a=t.AsyncComponent,n=t.asyncElement;var r=this.LoadingComponent;if(n)return n;if(a)return b.default.createElement(a,this.props);return b.default.createElement(r,this.props)}}]);return t}(b.default.Component)}function k(e){j.add(e)}function B(){var e=(0,r.default)(j);j.clear();return e}var A=t.SameLoopPromise=function(){(0,p.default)(e,null,[{key:"resolve",value:function t(a){var n=new e(function(e){return e(a)});return n}}]);function e(t){(0,u.default)(this,e);this.onResultCallbacks=[];this.onErrorCallbacks=[];this.cb=t}(0,p.default)(e,[{key:"setResult",value:function e(t){this.gotResult=true;this.result=t;this.onResultCallbacks.forEach(function(e){return e(t)});this.onResultCallbacks=[]}},{key:"setError",value:function e(t){this.gotError=true;this.error=t;this.onErrorCallbacks.forEach(function(e){return e(t)});this.onErrorCallbacks=[]}},{key:"then",value:function t(a,n){var r=this;this.runIfNeeded();var o=new e;var i=function e(){n?o.setResult(n(r.error)):o.setError(r.error)};var l=function e(){o.setResult(a(r.result))};if(this.gotResult){l();return o}if(this.gotError){i();return o}this.onResultCallbacks.push(l);this.onErrorCallbacks.push(i);return o}},{key:"catch",value:function t(a){var n=this;this.runIfNeeded();var r=new e;var o=function e(){r.setResult(a(n.error))};var i=function e(){r.setResult(n.result)};if(this.gotResult){i();return r}if(this.gotError){o();return r}this.onErrorCallbacks.push(o);this.onResultCallbacks.push(i);return r}},{key:"runIfNeeded",value:function e(){var t=this;if(!this.cb)return;if(this.ran)return;this.ran=true;this.cb(function(e){return t.setResult(e)},function(e){return t.setError(e)})}}]);return e}()},40:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default={hljs:{display:"block",background:"white",padding:"0.5em",color:"#333333",overflowX:"auto"},"hljs-comment":{color:"#969896"},"hljs-meta":{color:"#969896"},"hljs-string":{color:"#df5000"},"hljs-variable":{color:"#df5000"},"hljs-template-variable":{color:"#df5000"},"hljs-strong":{color:"#df5000"},"hljs-emphasis":{color:"#df5000"},"hljs-quote":{color:"#df5000"},"hljs-keyword":{color:"#a71d5d"},"hljs-selector-tag":{color:"#a71d5d"},"hljs-type":{color:"#a71d5d"},"hljs-literal":{color:"#0086b3"},"hljs-symbol":{color:"#0086b3"},"hljs-bullet":{color:"#0086b3"},"hljs-attribute":{color:"#0086b3"},"hljs-section":{color:"#63a35c"},"hljs-name":{color:"#63a35c"},"hljs-tag":{color:"#333333"},"hljs-title":{color:"#795da3"},"hljs-attr":{color:"#795da3"},"hljs-selector-id":{color:"#795da3"},"hljs-selector-class":{color:"#795da3"},"hljs-selector-attr":{color:"#795da3"},"hljs-selector-pseudo":{color:"#795da3"},"hljs-addition":{color:"#55a532",backgroundColor:"#eaffea"},"hljs-deletion":{color:"#bd2c00",backgroundColor:"#ffecec"},"hljs-link":{textDecoration:"underline"}}},460:function(e,t,a){e.exports=a(461)},461:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(0);var r=a.n(n);var o=a(50);var i=a.n(o);var l=a(51);var s=a(38);var c=a(216);var u=a(12);var d=a.n(u);var p=a(27);var m=a.n(p);var h=function(e){var t=e.num,a=e.content;return r.a.createElement("div",{className:"jsx-3078571299 jsx-3078571299 indentRow"},r.a.createElement(m.a,{component:"p",gutterBottom:true},"[",t,"]  "),r.a.createElement(m.a,{component:"p",gutterBottom:true},a),r.a.createElement(d.a,{styleId:"3078571299",css:".indentRow.jsx-3078571299{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"}))};var f=a(30);var v=t["default"]=Object(l["b"])({title:"Understanding Bidirectional Optical Flow",description:"An attempt to explain Bidirectional Optical Flow in VVC.",slug:"understanding-bidirectional-optical-flow",date:"June 30, 2019",GATrackID:"UA-111720492-5"})(i()(l["a"],function(e){return r.a.createElement("div",{className:"_markdown_"},r.a.createElement(e.p,null,"The post attempts to explain Bidirectional Optical Flow (BIO or BDOF), which is a newly introduced technique in VVC compared with HEVC."),r.a.createElement(e.blockquote,null,r.a.createElement(e.p,null,"Name explained: BIO is a method for improving B-slice prediction, B-slice in HEVC can utilize intrapicture prediction, interpicture uniprediction and interpicture biprediction, hence ",r.a.createElement(e.strong,null,"Bidirectional"),"; BIO is inspired by the optical flow concept in computer vision, hence ",r.a.createElement(e.strong,null,"optical flow"),".")),r.a.createElement(e.p,null,r.a.createElement(f["a"],{src:"https://raw.githubusercontent.com/nikolausmayer/optical-flow-visualization/master/example/flow.gif",width:400,title:r.a.createElement("a",{href:"https://github.com/PharrellWANG/optical-flow-visualization"},"Animated visualizations for optical flow fields")})),r.a.createElement(e.p,null,r.a.createElement(c["a"],{question:"Is this post talking about Video Compression or Computer Vision?",answers:["Video Compression","Computer Vision"],correctAnswer:"Video Compression"})),r.a.createElement(e.h2,null,"Origin"),r.a.createElement(e.p,null,'When reading the JVET proposals, such as JVET-K0255 [1], it tells "BIO is proposed in VCEG-AZ07" [2]. But if you turn to that document, it does not contain any word about BIO. In fact, BIO has been found in JCTVC-C204, a proposal by Elena Alshina and Alex Alshin, both from Samsung, in Oct 2010. I think that is the true debut.'),r.a.createElement(e.h2,null,"Motivation"),r.a.createElement(e.p,null,"The interpicture biprediction method generates predictive samples for the current coding block by a weighted combination of two previously coded blocks, one from a past reference frame, the other from a future reference frame. It is argued that after this procedure uncompensated motion in some tiny parts of the block may still exists. Those tiny parts could be smaller than the smallest partition size, hence it is desirable to have pixel-wise motion compensation. Moreover, if pixel-wise motion compensation can be achieved without additional partitioning and additional motion vector coding, it will allow the usage of larger partition sizes, which could help to increase the coding efficiency."),r.a.createElement(e.h2,null,"Assumptions"),r.a.createElement(e.p,null,"BIO is based on a set of safe assumptions [3]:"),r.a.createElement(e.ol,null,r.a.createElement(e.li,null,'Assume that object move with locally constant speed, thus the so called "steady motion" model can be used.'),r.a.createElement(e.li,null,"Assume that luminance of moving objects does not change, thus the well known optical flow partial deferential equation (PDE) is valid."),r.a.createElement(e.li,null,"Assume that only fine motion is not compensated by standard block based prediction.")),r.a.createElement(e.h2,null,"Main Idea"),r.a.createElement(e.p,null,"First, interpolated samples from two reference blocks are filtered using n-tap gradient filter; Second, BIO gradient values, as well as block based horizontal and vertical motion offsets are generated; Third, the generated gradients and motion offsets are combined to calculate ",r.a.createElement(e.strong,null,"BIO Offset"),"."),r.a.createElement(e.p,null,r.a.createElement(e.strong,null,"BIO Offset")," distinguishes normal ",r.a.createElement(e.strong,null,"interpicture biprediction")," with ",r.a.createElement(e.strong,null,"BIO prediction")," in B-slices."),r.a.createElement(e.p,null,"In normal interpicture biprediction, the samples are generated by:",r.a.createElement(s["a"],{language:"cpp"},"\nsample[x][y] = clip3(0, 2^bitDepth - 1, \n    (predSampleL0[x+1][y+1] + offset4 + predSampleL1[x+1][y+1])>>shit4)\n")),r.a.createElement(e.p,null,"In BIO prediction, the samples are generated by:",r.a.createElement(s["a"],{language:"cpp"},"\nsample[x][y] = clip3(0, 2^bitDepth - 1, \n    (predSampleL0[x+1][y+1] + offset4 + predSampleL1[x+1][y+1] + bdofOffset)>>shit4)\n")),r.a.createElement(e.p,null,r.a.createElement(e.code,null,"bdofOffset")," represents BIO Offset."),r.a.createElement(e.h2,null,"Evolution"),r.a.createElement(e.p,null,"During the standardization process of VVC, BIO prediction process has been simplified and improved several times. [5] proposes simplified gradient calculation, adaptive BIO granularity and applying BIO to chroma components. In [6], a two-stage early termination method is used to conditionally disable the BIO operations depending on the similarity between the two prediction signals. Simpler gradient filter has been combined with the two stage early termination, forming the so called ",r.a.createElement(e.em,null,"combined BIO method")," in [7]. [8] suggests to apply bit depth constraints, disable BIO for small CUs, apply one fixed filter for gradient calculation and reduce the required MC samples to alleviate the overhead. [9] assumes optical flow is either in horizontal or vertical direction to reduce number of multiplications and additions during the BIO calculation process. [10] proposes two methods to further reduce the BIO complexity, one is bit-width control, the other is utilizing bilinear filters to interpolate prediction samples. [11] proposes two methods to make the existing design of BIO more implementation friendly."),r.a.createElement(e.h2,null,"Prediction Process"),r.a.createElement(e.p,null,"Section 8.4.6.4 in [4] shows the BIO prediction process in pseudo code, its clear and easy to read. Here I provide two brief explanations connecting the pseudo code in [4] and the real code in VTM4.0."),r.a.createElement(e.ol,null,r.a.createElement(e.li,null,"The function named ",r.a.createElement(e.code,null,"calcBIOPar_SSE")," is for calculating important intermediate variables which will be used to generate motion offsets of the current subblock."),r.a.createElement(e.li,null,"The function named ",r.a.createElement(e.code,null,"addBIOAvgCore")," is for calculating the BIO Offset which will be used to calculate the final BIO predicted values.")),r.a.createElement(e.h2,null,"Patent"),r.a.createElement(e.p,null,"BIO is a patent hold by Qualcomm since 2016 [12], although it was first proposed by A. Alshin, E. Alshina and T. Lee from Samsung Electronics [13]."),r.a.createElement(e.hr,null),r.a.createElement(e.p,null,r.a.createElement(e.strong,null,"References")),r.a.createElement(e.p,null,r.a.createElement(h,{num:"1",content:"C.-Y. Chen, C.-Y. Lai, Y.-W. Huang, S.-M. Lei, 'CE9.5.2: BIO with simplified gradient calculation, adaptive BIO granularity, and applying BIO to chroma components', Joint Video Exploration Team (JVET), docs. JVET-K0255, 2018."})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"2",content:"J. Chen, W.-J. Chien, M. Karczewicz, X. Li, H. Liu, A. Said, L. Zhang, X. Zhao, 'Further improvements to HMKTA-1.0', Video Coding Experts Group (VCEG), docs. VCEG-AZ07, 2015."})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"3",content:"E. Alshina, A. Alshin, 'Bi-directional optical flow', Joint Collaborative Team on Video Coding (JCT-VC), docs. JCTVC-C204, 2010."})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"4",content:"B. Bross, J. Chen, S. Liu (editors), 'Versatile Video Coding (Draft 3)', Joint Video Exploration Team (JVET), docs. JVET-L1001, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"5",content:"C.-Y. Chen, C.-Y. Lai, Y.-W. Huang, S.-M. Lei, 'CE9.5.2: BIO with simplified gradient calculation, adaptive BIO granularity, and applying BIO to chroma components', Joint Video Exploration Team (JVET), docs. JVET-K0255, 2018."})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"6",content:"X. Xiu, P. Hanhart, R .Vanam, Y. He, Y. Ye (InterDigital), T. Lu, F. Pu, P. Yin, W. Husak, T. Chen (Dolby), 'Description of SDR, HDR and 360° video coding technology proposal by InterDigital Communications and Dolby Laboratories', Joint Video Exploration Team (JVET), docs. JVET-J0015, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"7",content:"X. Xiu, Y. He, Y. Ye (InterDigital), C.-Y. Chen, C.-Y. Lai, Y.-W. Huang, S.-M. Lei (MediaTek), 'CE9-related: A simplified bi-directional optical flow (BIO) design based on the combination of CE9.5.2 test 1 and CE9.5.3', Joint Video Exploration Team (JVET), docs. JVET-K0485, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"8",content:"C.-Y. Lai, Y.-C. Su, T.-D. Chuang, C.-Y. Chen, Y.-W. Huang, S.-M. Lei (MediaTek), 'CE9-related: BIO simplifications', Joint Video Exploration Team (JVET), docs. JVET-L0099, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"9",content:"J. Li, C. S. Lim (Panasonic), 'CE9-related: Simplification of BIO', Joint Video Exploration Team (JVET), docs. JVET-L0123, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"10",content:"X. Xiu, Y. He, Y. Ye(InterDigital), 'CE9-related: Complexity reduction and bit-width control for bi-directional optical flow (BIO)', Joint Video Exploration Team (JVET), docs. JVET-L0256, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"11",content:"X. Xiu, Y. He, Y. Ye(InterDigital), C.-Y. Lai, Y.-C. Su, T.-D. Chuang, C.-Y. Chen, Y.-W. Huang, S.-M. Lei(MediaTek), 'CE9-related: A simplified design of bi-directional optical flow (BIO)', Joint Video Exploration Team (JVET), docs. JVET-L0591, 2018"})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"12",content:"X. Li, J. Chen, W.J. Chien, M. Karczewicz, BI-Directional Optical Flow for Video Coding. U.S. Patent US 2017/0094305 A1, Sep. 27, 2016."})),r.a.createElement(e.p,null,r.a.createElement(h,{num:"13",content:"A. Alshin, E. Alshina and T. Lee, 'Bi-directional optical flow for improving motion compensation,' 28th Picture Coding Symposium, Nagoya, 2010, pp. 422-425. doi: 10.1109/PCS.2010.5702525"})))}))},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.styles=void 0;var n=a(2);var r=E(n);var o=a(10);var i=E(o);var l=a(3);var s=E(l);var c=a(0);var u=E(c);var d=a(1);var p=E(d);var m=a(11);var h=E(m);var f=a(9);var v=E(f);var g=a(16);function E(e){return e&&e.__esModule?e:{default:e}}var y=t.styles=function e(t){return{root:{display:"block",margin:0},display4:t.typography.display4,display3:t.typography.display3,display2:t.typography.display2,display1:t.typography.display1,headline:t.typography.headline,title:t.typography.title,subheading:t.typography.subheading,body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:2*t.spacing.unit},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main}}};function b(e){var t;var a=e.align,n=e.classes,o=e.className,l=e.component,c=e.color,d=e.gutterBottom,p=e.headlineMapping,m=e.noWrap,f=e.paragraph,v=e.variant,E=(0,s.default)(e,["align","classes","className","component","color","gutterBottom","headlineMapping","noWrap","paragraph","variant"]);var y=(0,h.default)(n.root,n[v],(t={},(0,i.default)(t,n["color"+(0,g.capitalize)(c)],"default"!==c),(0,i.default)(t,n.noWrap,m),(0,i.default)(t,n.gutterBottom,d),(0,i.default)(t,n.paragraph,f),(0,i.default)(t,n["align"+(0,g.capitalize)(a)],"inherit"!==a),t),o);var b=l||(f?"p":p[v])||"span";return u.default.createElement(b,(0,r.default)({className:y},E))}b.propTypes={};b.defaultProps={align:"inherit",color:"default",gutterBottom:false,headlineMapping:{display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3",body2:"aside",body1:"p"},noWrap:false,paragraph:false,variant:"body1"};t.default=(0,v.default)(y,{name:"MuiTypography"})(b)}},[460]);return{page:e.default}});