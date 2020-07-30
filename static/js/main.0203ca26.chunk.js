(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{107:function(e,a,t){e.exports=t(130)},112:function(e,a,t){},123:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(112),t(78)),i=t(79),s=t.n(i),m=t(80),u=t.n(m),d=(t(123),t(46)),p=t(47),E=t(60),g=t(59),h=t(94),f=t(176),b=t(178),v=t(132),y=t(84),k=t.n(y),x=t(81),j=t.n(x),w=t(82),O=t.n(w),C=t(83),S=t.n(C),N=Object(h.a)(f.a)({background:"linear-gradient(45deg, #87bdc7 30%, #CAC486 90%)",position:"fixed"}),B=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{boxshadow:3},r.a.createElement(b.a,null,r.a.createElement(v.a,{edge:"start",color:"#255D69","aria-label":"github",href:"https://github.com/emmalu",target:"_blank"},r.a.createElement(j.a,null)),r.a.createElement(v.a,{color:"#255D69","aria-label":"linkedin",href:"https://linkedin.com/in/elpaz",target:"_blank"},r.a.createElement(O.a,null)),r.a.createElement(v.a,{color:"#255D69","aria-label":"phont/text",tel:"4045421123",target:"_blank"},r.a.createElement(S.a,null)),r.a.createElement(v.a,{color:"#255D69","aria-label":"email",href:"mailto:emma.lu.paz@gmail.com?Subject=Portfolio",target:"_blank"},r.a.createElement(k.a,null)))))}}]),t}(n.Component),P=t(34),A=t(61),L=t(179),T=t(181),I=t(183),D=t(184),M=t(185),_=t(182),z=t(180),R=t(29),W=Object(L.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},highlight:{color:e.palette.primary.main}}}));function G(e){var a=e.data,t=W();return r.a.createElement(z.a,{container:!0,direction:"row",spacing:2,maxWidth:90},a.map((function(e,a){return r.a.createElement(z.a,{item:!0,xs:12,sm:4},r.a.createElement(T.a,{key:a},r.a.createElement(_.a,{href:e.link,target:"_blank"},r.a.createElement(I.a,{title:e.project,subheader:"Released: "+e.deployed}),r.a.createElement(D.a,{component:"img",width:"20px",image:e.image,title:e.project}),r.a.createElement(M.a,null,r.a.createElement(R.a,{variant:"subtitle2",gutterBottom:!0},e.desc),r.a.createElement(R.a,{className:t.highlight,variant:"caption",gutterBottom:!0},r.a.createElement("em",null,e.details))))))})))}var J=t(193),F=t(186),H=t(187),q=t(189),Q=t(191),V=t(192),K=t(188),U=t(190),X=t(86),Y=t.n(X),Z=t(85),$=t.n(Z),ee=t(96),ae=Object(L.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function te(e){var a=e.data,t=ae();return r.a.createElement(F.a,{align:"alternate"},a.map((function(e){return r.a.createElement(H.a,null,r.a.createElement(K.a,null,r.a.createElement(R.a,{variant:"body2",color:e.end?"textSecondary":"textPrimary"},e.end?e.start+"- "+e.end:"Since "+e.start)),r.a.createElement(q.a,null,r.a.createElement(U.a,null,e.end?r.a.createElement($.a,null):r.a.createElement(Y.a,{color:"primary"})),r.a.createElement(Q.a,null)),r.a.createElement(V.a,null,r.a.createElement(ee.a,{elevation:3,className:t.paper},r.a.createElement(R.a,{variant:"h6",component:"h1"},e.role),r.a.createElement(R.a,null,r.a.createElement(J.a,{component:"button",variant:"body2",onClick:function(){window.open(e.link,"_blank")}},e.org)))))})))}var ne=Object(L.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},media:{height:"150px",backgroundColor:"#000",textAlign:"center",padding:"5 5"}}}));function re(e){var a=e.data,t=ne();return r.a.createElement(z.a,{container:!0,direction:"row",spacing:2,maxWidth:90},a.map((function(e,a){return r.a.createElement(z.a,{item:!0,xs:12,sm:6},r.a.createElement(T.a,{key:a},r.a.createElement(_.a,{href:e.link,target:"_blank"},r.a.createElement(I.a,{title:e.degree,subheader:" Class of "+e.year+" @ "+e.school}),r.a.createElement(D.a,{component:"img",image:e.logo,title:e.degree,className:t.media}),r.a.createElement(M.a,null,r.a.createElement(R.a,{variant:"subtitle2",gutterBottom:!0},e.project),r.a.createElement(R.a,{variant:"caption",gutterBottom:!0},r.a.createElement("em",null,"Advisor: "+e.advisor))))))})))}var le=t(210),ce=t(195),oe=t(194),ie=t(209),se=t(198),me=t(196),ue=t(197),de=t(90),pe=t.n(de),Ee=t(88),ge=t.n(Ee),he=t(70),fe=t.n(he),be=t(91),ve=t.n(be),ye=t(89),ke=t.n(ye),xe=t(87),je=t.n(xe),we=Object(L.a)((function(e){return{root:{flexGrow:1,alignItems:"flext-start"},heading:{fontSize:e.typography.pxToRem(15),flexShrink:0},secondaryHeading:{display:"block",fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},details:{display:"inline-flex",padding:"5px 5px"}}}));function Oe(e){var a=e.data,t=we(),n=r.a.useState(!1),l=Object(P.a)(n,2),c=l[0],o=l[1],i=function(e){return function(a,t){o(!!t&&e)}},s=a.filter((function(e){return"award"===e.type})),m=a.filter((function(e){return"certification"===e.type})),u=a.filter((function(e){return"skill"===e.type})),d=a.filter((function(e){return"language"===e.type})),p=a.filter((function(e){return"soft"===e.type}));return r.a.createElement("div",{container:!0,className:t.root},r.a.createElement(le.a,{expanded:"certsPanel"===c,onChange:i("certsPanel")},r.a.createElement(oe.a,{expandIcon:r.a.createElement(fe.a,null),"aria-controls":"certsPanel-content",id:"certsPanel-header"},r.a.createElement(R.a,{className:t.heading},"Certifications & Awards")),r.a.createElement(ce.a,{class:t.details},r.a.createElement(me.a,null,r.a.createElement(ue.a,null,m.map((function(e){return r.a.createElement(ie.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(je.a,null),r.a.createElement(se.a,null,e.start),r.a.createElement("strong",null,e.org)," - ",e.name)}))),r.a.createElement(ue.a,null,s.map((function(e){return r.a.createElement(ie.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(ge.a,null),r.a.createElement(se.a,null,e.start),r.a.createElement("a",{className:t.secondaryHeading,href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null,e.org))," ",e.name)})))))),r.a.createElement(le.a,{expanded:"langsPanel"===c,onChange:i("langsPanel")},r.a.createElement(oe.a,{expandIcon:r.a.createElement(fe.a,null),"aria-controls":"langsPanel-content",id:"langsPanel-header"},r.a.createElement(R.a,{className:t.heading},"Languages, Skills & Other Talents")),r.a.createElement(ce.a,{class:t.details},r.a.createElement(me.a,null,r.a.createElement(ue.a,null,d.map((function(e){return r.a.createElement(ie.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(ke.a,null),r.a.createElement(se.a,null,e.desc),e.name)}))),r.a.createElement(ue.a,null,u.map((function(e){return r.a.createElement(ie.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(pe.a,null),r.a.createElement(se.a,null,e.desc),e.name)}))),r.a.createElement(ue.a,null,p.map((function(e){return r.a.createElement(ie.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(ve.a,null),r.a.createElement(se.a,null,e.name))})))))))}var Ce=t(199),Se=t(126),Ne=[{sheet:1,sheetType:"projects"},{sheet:2,sheetType:"work"},{sheet:3,sheetType:"school"},{sheet:4,sheetType:"skills"}],Be=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={data:[],headers:[],isLoaded:!1},n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.state.isLoaded||this.parseData(this.props.type)}},{key:"parseData",value:function(e){var a=this,t=Ne.filter((function(a){return a.sheetType===e})),n={sheetId:"1IKTZx9tPOYuiqXn_LvucuFRbJqAr3umBMn5VEfLeoFc",sheetNumber:t[0].sheet,returnAllResults:!0};Se(n,(function(e){var n=t[0].headers;a.setState({data:e,headers:n}),a.setState({isLoaded:!0})}))}},{key:"renderLoader",value:function(e){return r.a.createElement(Ce.a,{color:"primary"})}},{key:"renderSkills",value:function(e){var a=this.state.data;return r.a.createElement(ee.a,null,a.map((function(e,a){return r.a.createElement(T.a,{key:a},e.role," ",e.org,r.a.createElement("br",null),e.deployed)})))}},{key:"render",value:function(){var e=this.props,a=this.state.isLoaded,t=this.renderLoader();if(a)switch(e.type){case"projects":t=r.a.createElement(G,{data:this.state.data});break;case"work":t=r.a.createElement(te,{data:this.state.data});break;case"school":t=r.a.createElement(re,{data:this.state.data});break;case"skills":t=r.a.createElement(Oe,{data:this.state.data})}return r.a.createElement(z.a,null,t)}}]),t}(n.Component),Pe=t(208),Ae=t(200),Le=t(206);function Te(e){var a=e.children,t=e.value,n=e.index,l=Object(A.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"tabpanel-".concat(n),"aria-labelledby":"tab-".concat(n)},l),t===n&&r.a.createElement(Le.a,{p:3},r.a.createElement(R.a,null,a)))}function Ie(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}var De=Object(L.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{backgroundColor:"#ebebeb"}}}));function Me(){var e=De(),a=r.a.useState(0),t=Object(P.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(Pe.a,{variant:"fullWidth",value:n,indicatorColor:"primary",onChange:function(e,a){l(a)},"aria-label":"Portfolio tabs",centered:!0},r.a.createElement(Ae.a,Object.assign({label:"Portfolio"},Ie(0))),r.a.createElement(Ae.a,Object.assign({label:"Experience"},Ie(1))),r.a.createElement(Ae.a,Object.assign({label:"Education"},Ie(2))),r.a.createElement(Ae.a,Object.assign({label:"Extra Goodies"},Ie(3)))),r.a.createElement(Te,{className:e.tabs,value:n,index:0},r.a.createElement(Be,{type:"projects"})),r.a.createElement(Te,{className:e.tabs,value:n,index:1},r.a.createElement(Be,{type:"work"})),r.a.createElement(Te,{className:e.tabs,value:n,index:2},r.a.createElement(Be,{type:"school"})),r.a.createElement(Te,{className:e.tabs,value:n,index:3},r.a.createElement(Be,{type:"skills"})))}var _e=t(4),ze=t(204),Re=t(207),We=t(201),Ge=t(202),Je=t(203),Fe=t(93),He=t.n(Fe),qe=t(92),Qe=t.n(qe),Ve=Object(_e.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(A.a)(e,["children","classes","onClose"]);return r.a.createElement(We.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(R.a,{variant:"h6"},a),n?r.a.createElement(v.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(Qe.a,null)):null)})),Ke=Object(_e.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Ge.a),Ue=Object(_e.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Je.a);function Xe(){var e=r.a.useState(!1),a=Object(P.a)(e,2),t=a[0],n=a[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(ze.a,{variant:"outlined",onClick:function(){n(!0)}},r.a.createElement(He.a,null)),r.a.createElement(Re.a,{onClose:l,"aria-labelledby":"customized-dialog-title",open:t},r.a.createElement(Ve,{id:"customized-dialog-title",onClose:l},"What's in here?"),r.a.createElement(Ke,{dividers:!0},r.a.createElement(R.a,{gutterBottom:!0},"The ",r.a.createElement("strong",null,"map-centric applications")," in this portfolio showcase some of my best public-facing work\u2014projects in which I've taken the Lead Developer role (writing >= 90% code)."),r.a.createElement(R.a,{gutterBottom:!0},"While ",r.a.createElement("strong",null,"each project applies a variety of content, layouts and features"),", most applications are:",r.a.createElement("ul",null,r.a.createElement("li",null,"mobile-ready & device agnostic"),r.a.createElement("li",null,"built using tools like Esri's REST/JavaScript APIs"),r.a.createElement("li",null,"written with responsive libraries (i.e. Materialize & Bootstrap)"))),r.a.createElement(R.a,{gutterBottom:!0},"Of course, ",r.a.createElement("em",null,"good looks aren't everything"),". The UIs you see are complemented by efficient server-side ",r.a.createElement("strong",null,"PHP & Python"),"/client-side ",r.a.createElement("strong",null,"JavaScript")," to process data in ",r.a.createElement("strong",null,"MS SQL & MySQL")," databases, as well as ",r.a.createElement("strong",null,"REST & SOAP web services"),"."),r.a.createElement("hr",null),r.a.createElement(R.a,{gutterBottom:!0},"Lastly, in efforts to pursue new skills and learn new tooling, this portfolio is written using the ",r.a.createElement("strong",null,"React")," framework. Enjoy!")),r.a.createElement(Ue,null,r.a.createElement(ze.a,{autoFocus:!0,onClick:l,color:"primary"},"Close"))))}var Ye=t(205),Ze=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(4),backgroundColor:"#87bdc7"},white:{backgroundColor:"white"},scrollLink:{color:"#fff"}}})),$e=function(){o.animateScroll.scrollToBottom({duration:2e4,delay:100,smooth:!0})};var ea=function(){var e=Ze();return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(z.a,{container:!0},r.a.createElement(z.a,{container:!0,item:!0,xs:12,sm:6},r.a.createElement(Ye.a,{className:e.white},r.a.createElement("img",{src:u.a,className:"App-cover",alt:"ep-cover"}))),r.a.createElement(z.a,{container:!0,item:!0,xs:12,sm:6,justify:"space-evenly",alignItems:"center",className:"App-contours"},r.a.createElement(ee.a,{className:e.paper},r.a.createElement(R.a,{variant:"h3",gutterBottom:!0},"MapMazeLu"),r.a.createElement(R.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement("code",null,"GIS Professional \u2022 Full-Stack Developer \u2022 Map Enthusiast")),r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement(R.a,{variant:"body1",gutterBottom:!0},"B I E N V E N I D O S",r.a.createElement("br",null),"& thanks for visiting! ",r.a.createElement("br",null),r.a.createElement(Xe,null),r.a.createElement(J.a,{className:e.scrollLink,href:"#",to:"scrollDiv",onClick:$e},"Please, have a look around...")))))),r.a.createElement("hr",null),r.a.createElement(z.a,{container:!0,item:!0,xs:12,alignContent:"center"},r.a.createElement(Me,{id:"scrollDiv"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ea,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t.p+"static/media/logo.6e251a6f.svg"},80:function(e,a,t){e.exports=t.p+"static/media/ep.6016a94f.JPG"}},[[107,1,2]]]);
//# sourceMappingURL=main.0203ca26.chunk.js.map