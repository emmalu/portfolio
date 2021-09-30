(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{102:function(e,a,t){e.exports=t(122)},107:function(e,a,t){},118:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=(t(107),t(72)),o=(t(41),t(73)),i=t.n(o),m=t(74),d=t.n(m),u=(t(118),t(42)),p=t(43),b=t(53),E=t(52),f=t(93),g=t(164),h=t(167),x=t(166),v=t(124),y=t(78),k=t.n(y),N=t(75),w=t.n(N),j=t(76),O=t.n(j),C=t(77),P=t.n(C),S=Object(f.a)(g.a)({background:"linear-gradient(45deg, #87bdc7 30%, #CAC486 90%)",position:"fixed"}),I=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{boxshadow:3},l.a.createElement(x.a,null,l.a.createElement(h.a,{justify:"space-between",alignItems:"center",container:!0,spacing:1},l.a.createElement(h.a,{item:!0},l.a.createElement(v.a,{edge:"start","aria-label":"github",href:"https://github.com/emmalu",target:"_blank"},l.a.createElement(w.a,null)),l.a.createElement(v.a,{"aria-label":"linkedin",href:"https://linkedin.com/in/elpaz",target:"_blank"},l.a.createElement(O.a,null)),l.a.createElement(v.a,{"aria-label":"phont/text",tel:"4045421123",target:"_blank"},l.a.createElement(P.a,null)),l.a.createElement(v.a,{"aria-label":"email",href:"mailto:mapmazelu@icloud.com?Subject=Portfolio",target:"_blank"},l.a.createElement(k.a,null))),l.a.createElement(h.a,{item:!0},l.a.createElement("h1",{className:"cursor-pointer text-2xl",onClick:function(){return window.scrollTo(0,0)}},"MapMazeLu"))))))}}]),t}(n.Component),T=t(29),L=t(54),D=t(168),M=t(61),z=t.n(M),_=t(79),A=t(80),W=t.n(A);function R(e){var a=e.data;return l.a.createElement("div",{className:"grid md:grid-cols-3 md:gap-4 place-items-center"},a.map((function(e,a){return l.a.createElement("div",{className:"flip-box px-2 py-2 shadow-lg mb-4",key:a},l.a.createElement("div",{className:"flip-box-inner"},l.a.createElement("div",{className:"flip-box-front bg-white"},l.a.createElement("h2",{className:"text-ep-blue-dark text-lg lg:hidden pt-3"},e.project),l.a.createElement("img",{className:"object-contain object-top content-center",src:e.image,alt:e.project+" cover"})),l.a.createElement("div",{className:"flip-box-back bg-white text-ep-blue-dark"},l.a.createElement("div",{className:"pt-3 px-3"},l.a.createElement("h2",{className:"font-semibold text-lg"},e.desc),l.a.createElement("h6",{className:"text-sm py-3"},"Released in "+e.deployed),l.a.createElement("button",{className:"bg-ep-yellow hover:bg-ep-blue-light text-gray-700 font-bold py-2 px-4 rounded-full inline-flex items-center"},l.a.createElement("a",{"aria-label":"open ".concat(e.project),href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(W.a,null)," Open"))))))})))}var B=t(169),G=t(187),J=t(171),F=t(173),H=t(174),Q=t(170),V=t(172),$=t(81),q=t.n($),K=t(62),U=t.n(K),X=t(95),Y=Object(D.a)((function(e){return{paper:{padding:"6px 16px",contentAlign:"middle",textAlign:"center"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function Z(e){var a=e.data,t=Y();return l.a.createElement(B.a,{align:"alternate"},a.map((function(e,a){return l.a.createElement(G.a,{key:a},l.a.createElement(Q.a,null,l.a.createElement("div",{className:e.end?"text-ep-blue-dark text-opacity-75 pt-2":"text-ep-blue-dark pt-2"},e.start?e.end?e.start+"- "+e.end:"Since "+e.start:"Class of "+e.end)),l.a.createElement(J.a,null,l.a.createElement(V.a,null,e.start?e.end?l.a.createElement(U.a,null):l.a.createElement(U.a,{className:"text-ep-blue-dark"}):l.a.createElement(q.a,null)),l.a.createElement(F.a,null)),l.a.createElement(H.a,null,l.a.createElement(X.a,{elevation:3,className:t.paper},l.a.createElement("h6",{className:"text-lg font-extrabold"},e.role),l.a.createElement("a",{className:"text-sm italic text-ep-blue-dark hover:text-ep-yellow",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.org))))})))}var ee=t(85),ae=t.n(ee),te=t(84),ne=t.n(te),le=t(82),re=t.n(le),ce=t(83),se=t.n(ce);function oe(e){var a=e.data;return l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"grid-flow-row-dense"},a.map((function(e,a){return l.a.createElement("div",{className:"rounded overflow-hidden shadow-lg bg-white my-3",key:a},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement("span",{className:"font-bold text-xl mb-2"},e.name,": "),l.a.createElement("span",{className:"text-gray-700 text-base"},e.reason," "),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-lg px-3 py-1 text-base font-semibold text-gray-700 mx-2 my-2"},"Read"===e.type?l.a.createElement(re.a,null):"Play"===e.type?l.a.createElement(se.a,null):"Web"===e.type?l.a.createElement(ne.a,null):l.a.createElement(ae.a,null),"Read"===e.type||"Web"===e.type?" Read / View":"Play"===e.type?"Explore / Play":"Listen / Watch")))}))))}var ie=t(184),me=t(176),de=t(175),ue=t(89),pe=t.n(ue),be=t(87),Ee=t.n(be),fe=t(63),ge=t.n(fe),he=t(90),xe=t.n(he),ve=t(88),ye=t.n(ve),ke=t(86),Ne=t.n(ke);function we(e){var a=e.data,t=l.a.useState(!1),n=Object(T.a)(t,2),r=n[0],c=n[1],s=function(e){return function(a,t){c(!!t&&e)}},o=a.filter((function(e){return"award"===e.type})),i=a.filter((function(e){return"certification"===e.type})),m=a.filter((function(e){return"skill"===e.type})),d=a.filter((function(e){return"language"===e.type})),u=a.filter((function(e){return"soft"===e.type}));return l.a.createElement("div",null,l.a.createElement(ie.a,{expanded:"certsPanel"===r,onChange:s("certsPanel")},l.a.createElement(de.a,{expandIcon:l.a.createElement(ge.a,null),"aria-controls":"certsPanel-content",id:"certsPanel-header"},l.a.createElement("h6",null,"Awards & Certifications")),l.a.createElement(me.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr"},i.map((function(e){return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left"},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement(Ne.a,null),l.a.createElement("span",{className:"font-bold text-xl mb-2 align-middle"},e.start),l.a.createElement("p",{className:"text-ep-blue-dark text-base"},e.name)),l.a.createElement("div",{className:"px-6 pt-1 pb-2"},l.a.createElement("span",{className:"inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.org))))}))),l.a.createElement("div",{className:"grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr"},o.map((function(e){return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left"},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement(Ee.a,null),l.a.createElement("span",{className:"font-bold text-xl mb-2 align-middle"},e.start),l.a.createElement("p",{className:"text-ep-blue-dark text-base"},e.name)),l.a.createElement("div",{className:"px-6 pt-1 pb-2"},l.a.createElement("span",{className:"inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.org))))})))))),l.a.createElement(ie.a,{expanded:"langsPanel"===r,onChange:s("langsPanel")},l.a.createElement(de.a,{expandIcon:l.a.createElement(ge.a,null),"aria-controls":"langsPanel-content",id:"langsPanel-header"},l.a.createElement("h6",null,"Languages, Software & Other Talents")),l.a.createElement(me.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr"},d.map((function(e){return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left"},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement(ye.a,null),l.a.createElement("div",{className:"font-bold text-sm mb-2"},e.name),l.a.createElement("p",{className:"text-ep-blue-dark text-sm"},e.desc)))}))),l.a.createElement("div",{className:"grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr"},m.map((function(e){return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left"},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement(pe.a,null),l.a.createElement("div",{className:"font-bold text-sm mb-2"},e.name),l.a.createElement("p",{className:"text-ep-blue-dark text-sm"},e.desc)))}))),l.a.createElement("div",{className:"grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr"},u.map((function(e){return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left"},l.a.createElement("div",{className:"px-4 py-3"},l.a.createElement(xe.a,null),l.a.createElement("div",{className:"font-bold text-sm mb-2"},e.name),l.a.createElement("p",{className:"text-ep-blue-dark text-base"},e.desc)))})))))))}var je=t(177),Oe=[{sheet:1,sheetType:"projects"},{sheet:2,sheetType:"work"},{sheet:6,sheetType:"extras"},{sheet:4,sheetType:"skills"}],Ce=function(e){Object(b.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:[],page:[],headers:[],isLoaded:!1},n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){if(!this.state.isLoaded){var e=this.props.type,a=Oe.filter((function(a){return a.sheetType===e}))[0];this.getData(a.sheet-1)}}},{key:"getData",value:function(){var e=Object(_.a)(z.a.mark((function e(a){var t=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://la-paix.herokuapp.com/portfolio?sheet=".concat(String(a))).then((function(e){if(e.ok)return e.json()})).then((function(e){t.setState({page:e}),t.parseData()}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"parseData",value:function(){var e=this.state.page.sheetData;console.log(e),this.setState({data:e.rows,headers:e.columns}),this.setState({isLoaded:!0})}},{key:"renderLoader",value:function(e){return l.a.createElement("div",{className:"flex items-center justify-center h-5"},l.a.createElement("svg",{className:"animate-spin h-5 w-5 mr-3 text-center",viewBox:"0 0 24 24"},l.a.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})))}},{key:"renderSkills",value:function(e){var a=this.state.data;return l.a.createElement(X.a,null,a.map((function(e,a){return l.a.createElement(je.a,{key:a},e.role," ",e.org,l.a.createElement("br",null),e.deployed)})))}},{key:"render",value:function(){var e=this.props,a=this.state.isLoaded,t=this.renderLoader();if(a)switch(e.type){case"projects":t=l.a.createElement(R,{data:this.state.data});break;case"work":t=l.a.createElement(Z,{data:this.state.data});break;case"extras":t=l.a.createElement(oe,{data:this.state.data});break;case"skills":t=l.a.createElement(we,{data:this.state.data})}else t=l.a.createElement("h5",{className:"content-center font-semibold"},"Doh! I'm currently working on updating my portfolio. Please check back soon... ");return l.a.createElement("div",null,t)}}]),t}(n.Component),Pe=t(183),Se=t(178),Ie=t(181);function Te(e){var a=e.children,t=e.value,n=e.index,r=Object(L.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"tabpanel-".concat(n),"aria-labelledby":"tab-".concat(n)},r),t===n&&l.a.createElement(Ie.a,{p:3},l.a.createElement("div",null,a)))}function Le(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}var De=Object(D.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{backgroundColor:"#ebebeb"}}}));function Me(){var e=De(),a=l.a.useState(0),t=Object(T.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(Pe.a,{variant:"fullWidth",value:n,indicatorColor:"primary",onChange:function(e,a){r(a)},"aria-label":"Portfolio tabs",TabIndicatorProps:{style:{background:"#CAC486",height:"1vh",top:"35px"}},centered:!0},l.a.createElement(Se.a,Object.assign({color:"#000",label:"Portfolio"},Le(0))),l.a.createElement(Se.a,Object.assign({label:"Experience"},Le(1))),l.a.createElement(Se.a,Object.assign({label:"Tid Bytes"},Le(2)))),l.a.createElement(Te,{className:e.tabs,value:n,index:0},l.a.createElement("div",{className:"flex items-start bg-ep-blue-dark text-white sm:text-sm font-bold px-4 py-3 mb-3",role:"alert"},l.a.createElement("span",null,l.a.createElement("span",{className:"text-ep-yellow"},"I love what I do!")," From creating beautiful maps to meaningful data visualizations, I'm moved by the magic of technical programming, cool drone footage and creative graphics design.")),l.a.createElement(Ce,{type:"projects"})),l.a.createElement(Te,{className:e.tabs,value:n,index:1},l.a.createElement(Ce,{type:"skills"}),l.a.createElement("br",null),l.a.createElement(Ce,{type:"work"})),l.a.createElement(Te,{className:e.tabs,value:n,index:2},l.a.createElement("div",{className:"flex items-start bg-ep-blue-dark text-white sm:text-sm font-bold px-4 py-3 mb-3",role:"alert"},l.a.createElement("span",null,"In case you're interested: here is ",l.a.createElement("em",{className:"text-ep-yellow"},"some")," of my most favorite, ",l.a.createElement("span",{className:"text-ep-yellow"},"inspiring content")," on the web.")),l.a.createElement(Ce,{type:"extras"})))}var ze=t(4),_e=t(182),Ae=t(185),We=t(179),Re=t(180),Be=t(92),Ge=t.n(Be),Je=t(91),Fe=t.n(Je),He=Object(ze.a)((function(e){return{root:{margin:0,padding:e.spacing(2)}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,r=Object(L.a)(e,["children","classes","onClose"]);return l.a.createElement(Ae.a,Object.assign({disableTypography:!0,className:t.root},r),l.a.createElement("div",{className:"flex justify-between align-middle items-center"},l.a.createElement("h6",{className:"text-lg inline-flex"},a),n?l.a.createElement("button",{className:"hover:bg-ep-gray font-bold text-ep-blue-dark py-2 px-2 inline-flex items-center rounded-full","aria-label":"close",onClick:n},l.a.createElement(Fe.a,null)):null))})),Qe=Object(ze.a)((function(e){return{root:{padding:e.spacing(2)}}}))(We.a),Ve=Object(ze.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Re.a);function $e(){var e=l.a.useState(!1),a=Object(T.a)(e,2),t=a[0],n=a[1],r=function(){n(!1)};return l.a.createElement("div",null,l.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 font-bold text-ep-blue-dark py-2 px-2 rounded-full inline-flex items-center animate-pulse",onClick:function(){n(!0)}},l.a.createElement(Ge.a,null)),l.a.createElement(_e.a,{onClose:r,"aria-labelledby":"customized-dialog-title",open:t},l.a.createElement(He,{id:"customized-dialog-title",onClose:r},"What's in here?"),l.a.createElement(Qe,{dividers:!0},l.a.createElement("div",{className:"text-sm mb-3"},"The ",l.a.createElement("span",{className:"font-extrabold text-ep-blue-dark"},"map-centric applications")," in this portfolio showcase some of my work\u2014projects in which I've taken the Lead Developer role (writing >= 90% code)."),l.a.createElement("div",{className:"text-sm mb-3"},"While ",l.a.createElement("span",{className:"font-extrabold text-ep-blue-dark"},"each project applies its own layout, content & and features"),", most applications are:",l.a.createElement("ul",{className:"list-disc pl-4"},l.a.createElement("li",null,"mobile-ready & device agnostic"),l.a.createElement("li",null,"built using tools like Esri's REST/JavaScript APIs"),l.a.createElement("li",null,"written with responsive libraries (i.e. Materialize & Bootstrap)"),l.a.createElement("li",null,"supported by server-side PHP & Python scripting to process data in ",l.a.createElement("span",{className:"font-extrabold text-ep-blue-dark"},"MS SQL & MySQL")," databases, as well as ",l.a.createElement("span",{className:"font-extrabold text-ep-blue-dark"},"REST & SOAP web services")))),l.a.createElement("div",{className:"text-sm my-3"},"Lastly, in efforts to pursue new skills and learn new tooling, this portfolio is written using the ",l.a.createElement("span",{className:"font-extrabold text-ep-blue-dark"},"React")," framework. Enjoy!")),l.a.createElement(Ve,null,l.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex items-center rounded-md",onClick:r},"Close"))))}var qe=function(){return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement("div",{className:"app-content flex flex-wrap align-middle items-center"},l.a.createElement("div",{className:"w-full sm:w-1/2 max-h-screen"},l.a.createElement("img",{src:d.a,className:"bg-white rounded-full object-contain object-top content-center h-100",alt:"ep-cover"})),l.a.createElement("div",{className:"w-full sm:w-1/2 app-contours py-20 lg:py-32 max-h-screen content-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"font-semibold text-4xl text-ep-blue-dark"},"MapMazeLu"),l.a.createElement("div",{className:"text-sm"},l.a.createElement("div",{className:"hidden md:block lg:block"},l.a.createElement("code",null,"GIS Professional \u2022 Full-Stack Developer \u2022 Map Enthusiast")),l.a.createElement("div",{className:"block md:hidden lg:hidden"},l.a.createElement("p",null,l.a.createElement("code",null,"GIS Professional")),l.a.createElement("p",null,l.a.createElement("code",null,"Full-Stack Developer")),l.a.createElement("p",null,l.a.createElement("code",null,"Map Enthusiast")))),l.a.createElement("div",null,l.a.createElement("img",{src:i.a,className:"object-contain h-48 w-full",alt:"logo"})),l.a.createElement("div",{className:"mb-2"},l.a.createElement("span",{className:"block uppercase tracking-widest"},"Bienvenidos"),"& thanks for visiting!"),l.a.createElement($e,null),"Please,\xa0",l.a.createElement("span",{className:"cursor-pointer underline",href:"#",onClick:function(){s.scroller.scrollTo("scrollDiv",{duration:500,smooth:"easeInExpo",offset:-80})}},"have a look"),"\xa0around..."))),l.a.createElement("div",{className:"bg-ep-yellow sm:h-6 md:h-8 lg:h-10 opacity-75"}),l.a.createElement("div",{className:"items-center",id:"scrollDiv"},l.a.createElement(Me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t.p+"static/media/logo.6e251a6f.svg"},74:function(e,a,t){e.exports=t.p+"static/media/ep.6016a94f.JPG"}},[[102,1,2]]]);
//# sourceMappingURL=main.c1937d5a.chunk.js.map