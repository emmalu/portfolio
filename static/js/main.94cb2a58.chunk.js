(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,a,t){e.exports=t(131)},113:function(e,a,t){},124:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(113),t(69)),i=t(79),s=t.n(i),m=t(80),u=t.n(m),d=(t(124),t(32)),p=t(33),E=t(38),g=t(37),f=t(95),h=t(177),b=t(180),v=t(179),y=t(133),k=t(84),w=t.n(k),x=t(81),j=t.n(x),O=t(82),C=t.n(O),S=t(83),N=t.n(S),L=t(30),B=Object(f.a)(h.a)({background:"linear-gradient(45deg, #87bdc7 30%, #CAC486 90%)",position:"fixed"}),P=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,{boxshadow:3},r.a.createElement(v.a,null,r.a.createElement(b.a,{justify:"space-between",alignItems:"center",container:!0,spacing:24},r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{edge:"start",color:"#255D69","aria-label":"github",href:"https://github.com/emmalu",target:"_blank"},r.a.createElement(j.a,null)),r.a.createElement(y.a,{color:"#255D69","aria-label":"linkedin",href:"https://linkedin.com/in/elpaz",target:"_blank"},r.a.createElement(C.a,null)),r.a.createElement(y.a,{color:"#255D69","aria-label":"phont/text",tel:"4045421123",target:"_blank"},r.a.createElement(N.a,null)),r.a.createElement(y.a,{color:"#255D69","aria-label":"email",href:"mailto:emma.lu.paz@gmail.com?Subject=Portfolio",target:"_blank"},r.a.createElement(w.a,null))),r.a.createElement(b.a,{item:!0},r.a.createElement(L.a,{style:{cursor:"pointer"},variant:"h6",onClick:function(){return window.scrollTo(0,0)}},"MapMazeLu"))))))}}]),t}(n.Component),I=t(25),M=t(62),T=t(182),A=t(181),D=t(85),z=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).mapRef=r.a.createRef(),n.state={isLoaded:!1},n}return Object(p.a)(t,[{key:"renderLoader",value:function(){return r.a.createElement(A.a,{color:"primary"})}},{key:"componentDidMount",value:function(){var e=this;Object(D.loadModules)(["esri/Map","esri/views/MapView","esri/layers/CSVLayer","esri/widgets/Home"],{css:!0}).then((function(a){var t=Object(I.a)(a,4),n=t[0],r=t[1],l=t[2],c=t[3];e.setState({isLoaded:!0});var o=new n({basemap:"gray-vector"});e.view=new r({container:e.mapRef.current,map:o,center:[-79.75,32.75],zoom:3});var i=new l({url:"https://raw.githubusercontent.com/emmalu/data/master/EP.csv",copyright:"MapMazeLu",popupTemplate:{title:"Where I.. {Status}",content:[{type:"fields",fieldInfos:[{fieldName:"Description",label:"Significance"},{fieldName:"Link",label:"Check it out"}]}]}});i.renderer={type:"simple",symbol:{type:"simple-marker",size:6,color:"#87bdc7",outline:{width:.5,color:"#255D69"}}},o.add(i);var s=new c({view:e.view});e.view.ui.add(s,"top-left")}))}},{key:"componentWillUnmount",value:function(){this.view&&(this.view.container=null)}},{key:"render",value:function(){var e=this.state.isLoaded,a=this.renderLoader();return e&&(a=r.a.createElement("div",{className:"webmap",ref:this.mapRef})),a}}]),t}(r.a.Component),R=t(183),W=t(185),_=t(186),J=t(187),G=t(184),H=Object(T.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},highlight:{color:e.palette.primary.main}}}));function F(e){var a=e.data,t=H();return r.a.createElement(b.a,{container:!0,direction:"row",spacing:2,maxWidth:90},a.map((function(e,a){return r.a.createElement(b.a,{item:!0,xs:12,sm:4},r.a.createElement(R.a,{key:a},r.a.createElement(G.a,{href:e.link,target:"_blank"},r.a.createElement(W.a,{title:e.project,subheader:"Released: "+e.deployed}),r.a.createElement(_.a,{component:"img",width:"20px",image:e.image,title:e.project}),r.a.createElement(J.a,null,r.a.createElement(L.a,{variant:"subtitle2",gutterBottom:!0},e.desc),r.a.createElement(L.a,{className:t.highlight,variant:"caption",gutterBottom:!0},r.a.createElement("em",null,e.details))))))})))}var V=t(195),q=t(188),Q=t(189),U=t(191),K=t(193),X=t(194),Y=t(190),Z=t(192),$=t(87),ee=t.n($),ae=t(86),te=t.n(ae),ne=t(97),re=Object(T.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));function le(e){var a=e.data,t=re();return r.a.createElement(q.a,{align:"alternate"},a.map((function(e){return r.a.createElement(Q.a,null,r.a.createElement(Y.a,null,r.a.createElement(L.a,{variant:"body2",color:e.end?"textSecondary":"textPrimary"},e.end?e.start+"- "+e.end:"Since "+e.start)),r.a.createElement(U.a,null,r.a.createElement(Z.a,null,e.end?r.a.createElement(te.a,null):r.a.createElement(ee.a,{color:"primary"})),r.a.createElement(K.a,null)),r.a.createElement(X.a,null,r.a.createElement(ne.a,{elevation:3,className:t.paper},r.a.createElement(L.a,{variant:"h6",component:"h1"},e.role),r.a.createElement(L.a,null,r.a.createElement(V.a,{component:"button",variant:"body2",onClick:function(){window.open(e.link,"_blank")}},e.org)))))})))}var ce=Object(T.a)((function(e){return{paper:{padding:"6px 16px",textAlign:"center"},media:{height:"150px",backgroundColor:"#000",textAlign:"center",padding:"5 5"}}}));function oe(e){var a=e.data,t=ce();return r.a.createElement(b.a,{container:!0,direction:"row",spacing:2,maxWidth:90},a.map((function(e,a){return r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(R.a,{key:a},r.a.createElement(G.a,{href:e.link,target:"_blank"},r.a.createElement(W.a,{title:e.degree,subheader:" Class of "+e.year+" @ "+e.school}),r.a.createElement(_.a,{component:"img",image:e.logo,title:e.degree,className:t.media}),r.a.createElement(J.a,null,r.a.createElement(L.a,{variant:"subtitle2",gutterBottom:!0},e.project),r.a.createElement(L.a,{variant:"caption",gutterBottom:!0},r.a.createElement("em",null,"Advisor: "+e.advisor))))))})))}var ie=t(211),se=t(197),me=t(196),ue=t(210),de=t(200),pe=t(198),Ee=t(199),ge=t(91),fe=t.n(ge),he=t(88),be=t.n(he),ve=t(71),ye=t.n(ve),ke=t(92),we=t.n(ke),xe=t(90),je=t.n(xe),Oe=t(89),Ce=t.n(Oe),Se=Object(T.a)((function(e){return{root:{flexGrow:1,alignItems:"flext-start"},heading:{fontSize:e.typography.pxToRem(15),flexShrink:0},secondaryHeading:{display:"block",fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},detailsItem:{margin:"0 5px"},details:{display:"inline-flex",padding:"5px 5px"}}}));function Ne(e){var a=e.data,t=Se(),n=r.a.useState(!1),l=Object(I.a)(n,2),c=l[0],o=l[1],i=function(e){return function(a,t){o(!!t&&e)}},s=a.filter((function(e){return"award"===e.type})),m=a.filter((function(e){return"certification"===e.type})),u=a.filter((function(e){return"skill"===e.type})),d=a.filter((function(e){return"language"===e.type})),p=a.filter((function(e){return"soft"===e.type}));return r.a.createElement("div",{container:!0,className:t.root},r.a.createElement(ie.a,{expanded:"certsPanel"===c,onChange:i("certsPanel")},r.a.createElement(me.a,{expandIcon:r.a.createElement(ye.a,null),"aria-controls":"certsPanel-content",id:"certsPanel-header"},r.a.createElement(L.a,{className:t.heading},"Awards & Certifications")),r.a.createElement(se.a,{class:t.details},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null,s.map((function(e){return r.a.createElement(ue.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(be.a,null),r.a.createElement(de.a,null,e.start),r.a.createElement("a",{className:t.secondaryHeading,href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null,e.org))," ",e.name)}))),r.a.createElement(Ee.a,null,m.map((function(e){return r.a.createElement(ue.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(Ce.a,null),r.a.createElement(de.a,null,e.start),r.a.createElement("strong",null,e.org)," - ",e.name)})))))),r.a.createElement(ie.a,{expanded:"langsPanel"===c,onChange:i("langsPanel")},r.a.createElement(me.a,{expandIcon:r.a.createElement(ye.a,null),"aria-controls":"langsPanel-content",id:"langsPanel-header"},r.a.createElement(L.a,{className:t.heading},"Languages, Software Skills & Other Talents")),r.a.createElement(se.a,{class:t.details},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null,d.map((function(e){return r.a.createElement(ue.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(je.a,null),r.a.createElement(de.a,null,e.name),e.desc)}))),r.a.createElement(Ee.a,null,u.map((function(e){return r.a.createElement(ue.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(fe.a,null),r.a.createElement(de.a,null,e.name),e.desc)}))),r.a.createElement(Ee.a,null,p.map((function(e){return r.a.createElement(ue.a,{icon:!1,severity:"info",gutterBottom:!0},r.a.createElement(we.a,null),r.a.createElement(de.a,null,e.name))})))))))}var Le=t(127),Be=[{sheet:1,sheetType:"projects"},{sheet:2,sheetType:"work"},{sheet:3,sheetType:"school"},{sheet:4,sheetType:"skills"}],Pe=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={data:[],headers:[],isLoaded:!1},n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.state.isLoaded||this.parseData(this.props.type)}},{key:"parseData",value:function(e){var a=this,t=Be.filter((function(a){return a.sheetType===e})),n={sheetId:"1IKTZx9tPOYuiqXn_LvucuFRbJqAr3umBMn5VEfLeoFc",sheetNumber:t[0].sheet,returnAllResults:!0};Le(n,(function(e){var n=t[0].headers;a.setState({data:e,headers:n}),a.setState({isLoaded:!0})}))}},{key:"renderLoader",value:function(e){return r.a.createElement(A.a,{color:"primary"})}},{key:"renderSkills",value:function(e){var a=this.state.data;return r.a.createElement(ne.a,null,a.map((function(e,a){return r.a.createElement(R.a,{key:a},e.role," ",e.org,r.a.createElement("br",null),e.deployed)})))}},{key:"render",value:function(){var e=this.props,a=this.state.isLoaded,t=this.renderLoader();if(a)switch(e.type){case"projects":t=r.a.createElement(F,{data:this.state.data});break;case"work":t=r.a.createElement(le,{data:this.state.data});break;case"school":t=r.a.createElement(oe,{data:this.state.data});break;case"skills":t=r.a.createElement(Ne,{data:this.state.data})}return r.a.createElement(b.a,null,t)}}]),t}(n.Component),Ie=t(209),Me=t(201),Te=t(207);function Ae(e){var a=e.children,t=e.value,n=e.index,l=Object(M.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"tabpanel-".concat(n),"aria-labelledby":"tab-".concat(n)},l),t===n&&r.a.createElement(Te.a,{p:3},r.a.createElement(L.a,null,a)))}function De(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}var ze=Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{backgroundColor:"#ebebeb"}}}));function Re(){var e=ze(),a=r.a.useState(0),t=Object(I.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(Ie.a,{variant:"fullWidth",value:n,indicatorColor:"primary",onChange:function(e,a){l(a)},"aria-label":"Portfolio tabs",centered:!0},r.a.createElement(Me.a,Object.assign({label:"Portfolio"},De(0))),r.a.createElement(Me.a,Object.assign({label:"Experience"},De(1))),r.a.createElement(Me.a,Object.assign({label:"Map History"},De(2)))),r.a.createElement(Ae,{className:e.tabs,value:n,index:0},r.a.createElement(Pe,{type:"projects"})),r.a.createElement(Ae,{className:e.tabs,value:n,index:1},r.a.createElement(Pe,{type:"work"}),r.a.createElement("br",null),r.a.createElement(Pe,{type:"skills"}),r.a.createElement("br",null),r.a.createElement(Pe,{type:"school"})),r.a.createElement(Ae,{className:e.tabs,value:n,index:2},r.a.createElement(z,null)))}var We=t(4),_e=t(205),Je=t(208),Ge=t(202),He=t(203),Fe=t(204),Ve=t(94),qe=t.n(Ve),Qe=t(93),Ue=t.n(Qe),Ke=Object(We.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(M.a)(e,["children","classes","onClose"]);return r.a.createElement(Ge.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(L.a,{variant:"h6"},a),n?r.a.createElement(y.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(Ue.a,null)):null)})),Xe=Object(We.a)((function(e){return{root:{padding:e.spacing(2)}}}))(He.a),Ye=Object(We.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Fe.a);function Ze(){var e=r.a.useState(!1),a=Object(I.a)(e,2),t=a[0],n=a[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(_e.a,{variant:"outlined",onClick:function(){n(!0)}},r.a.createElement(qe.a,null)),r.a.createElement(Je.a,{onClose:l,"aria-labelledby":"customized-dialog-title",open:t},r.a.createElement(Ke,{id:"customized-dialog-title",onClose:l},"What's in here?"),r.a.createElement(Xe,{dividers:!0},r.a.createElement(L.a,{gutterBottom:!0},"The ",r.a.createElement("strong",null,"map-centric applications")," in this portfolio showcase some of my best public-facing work\u2014projects in which I've taken the Lead Developer role (writing >= 90% code)."),r.a.createElement(L.a,{gutterBottom:!0},"While ",r.a.createElement("strong",null,"each project applies a variety of content, layouts and features"),", most applications are:",r.a.createElement("ul",null,r.a.createElement("li",null,"mobile-ready & device agnostic"),r.a.createElement("li",null,"built using tools like Esri's REST/JavaScript APIs"),r.a.createElement("li",null,"written with responsive libraries (i.e. Materialize & Bootstrap)"))),r.a.createElement(L.a,{gutterBottom:!0},"Of course, ",r.a.createElement("em",null,"good looks aren't everything"),". The UIs you see are complemented by efficient server-side ",r.a.createElement("strong",null,"PHP & Python"),"/client-side ",r.a.createElement("strong",null,"JavaScript")," to process data in ",r.a.createElement("strong",null,"MS SQL & MySQL")," databases, as well as ",r.a.createElement("strong",null,"REST & SOAP web services"),"."),r.a.createElement("hr",null),r.a.createElement(L.a,{gutterBottom:!0},"Lastly, in efforts to pursue new skills and learn new tooling, this portfolio is written using the ",r.a.createElement("strong",null,"React")," framework. Enjoy!")),r.a.createElement(Ye,null,r.a.createElement(_e.a,{autoFocus:!0,onClick:l,color:"primary"},"Close"))))}var $e=t(206),ea=Object(T.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(4),backgroundColor:"#87bdc7"},white:{backgroundColor:"white"},scrollLink:{color:"#fff",cursor:"pointer"}}}));var aa=function(){var e=ea();return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{container:!0,item:!0,xs:12,sm:6},r.a.createElement($e.a,{className:e.white},r.a.createElement("img",{src:u.a,className:"App-cover",alt:"ep-cover"}))),r.a.createElement(b.a,{container:!0,item:!0,xs:12,sm:6,justify:"space-evenly",alignItems:"center",className:"App-contours"},r.a.createElement(ne.a,{className:e.paper},r.a.createElement(L.a,{variant:"h3",gutterBottom:!0},"MapMazeLu"),r.a.createElement(L.a,{variant:"subtitle1",gutterBottom:!0},r.a.createElement("code",null,"GIS Professional \u2022 Full-Stack Developer \u2022 Map Enthusiast")),r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement(L.a,{variant:"body1",gutterBottom:!0},"B I E N V E N I D O S",r.a.createElement("br",null),"& thanks for visiting! ",r.a.createElement("br",null),r.a.createElement(Ze,null),r.a.createElement(o.Link,{className:e.scrollLink,onClick:function(){o.scroller.scrollTo("scrollDiv",{duration:3e3,smooth:"easeInExpo",offset:-80})}},"Please, have a look around...")))))),r.a.createElement("hr",null),r.a.createElement(b.a,{container:!0,item:!0,xs:12,alignContent:"center",id:"scrollDiv"},r.a.createElement(Re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t.p+"static/media/logo.6e251a6f.svg"},80:function(e,a,t){e.exports=t.p+"static/media/ep.6016a94f.JPG"}},[[108,1,2]]]);
//# sourceMappingURL=main.94cb2a58.chunk.js.map