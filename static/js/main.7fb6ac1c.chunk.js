(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/logo.a6bcd0cf.svg"},19:function(e,a,t){e.exports=t.p+"static/media/curfew-poster.f7bed685.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/curfew-logo-red.e695f269.jpg"},40:function(e,a,t){e.exports=t(57)},45:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(35),r=t.n(c),o=(t(45),t(2)),i=t(3),s=t(5),m=t(4),d=t(6),u=t(60),h=t(62),E=t(59),p=(t(47),t(58)),w=t(17),v=t(18),b=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-content"},l.a.createElement(p.a,{to:"https://www.facebook.com/MoonagePics/"},l.a.createElement(w.a,{icon:v.a,size:window.innerWidth>=2880&&window.innerHeight>=1800?"10x":window.innerWidth>=2304&&window.innerHeight>=1440||1920===window.innerWidth&&1200===window.innerHeight?"7x":"5x",color:"white",style:{paddingRight:"2rem"}})),l.a.createElement(p.a,{to:"https://twitter.com/moonagepictures?lang=en"},l.a.createElement(w.a,{icon:v.c,size:window.innerWidth>=2880&&window.innerHeight>=1800?"10x":window.innerWidth>=2304&&window.innerHeight>=1440||1920===window.innerWidth&&1200===window.innerHeight?"7x":"5x",color:"white",style:{paddingRight:"2rem"}})),l.a.createElement(p.a,{to:"https://www.instagram.com/moonagepictures/"},l.a.createElement(w.a,{icon:v.b,size:window.innerWidth>=2880&&window.innerHeight>=1800?"10x":window.innerWidth>=2304&&window.innerHeight>=1440||1920===window.innerWidth&&1200===window.innerHeight?"7x":"5x",color:"white",style:{paddingRight:"2rem"}}))))}}]),a}(n.Component),f=t(13),g=t.n(f),y=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home-wrapper"},l.a.createElement(p.a,{to:"/company"},l.a.createElement("div",{className:"circle red company"},l.a.createElement("h1",{className:"inner-circle"},"Company"))),l.a.createElement("div",{id:"spacer"}),l.a.createElement(p.a,{to:"/news"},l.a.createElement("div",{className:"circle blue news"},l.a.createElement("h1",{className:"inner-circle"},"News"))),l.a.createElement("div",{className:"circle yellow blank-one"}),l.a.createElement("div",{className:"circle green blank-two"}),l.a.createElement("div",{className:"circle white blank-three"}),l.a.createElement("div",{className:"circle pink blank-four"}),l.a.createElement("div",{className:"circle blue blank-six"}),l.a.createElement("div",{className:"circle blue blank-seven"}),l.a.createElement("img",{className:"home-logo",src:g.a,alt:"Moonage logo"}),l.a.createElement(p.a,{to:"/contact"},l.a.createElement("div",{className:"circle green contact"},l.a.createElement("h1",{className:"inner-circle"},"Contact"))),l.a.createElement(p.a,{to:"/daydream"},l.a.createElement("div",{className:"circle yellow daydream"},l.a.createElement("h1",{className:"inner-circle"},"Daydream"))),l.a.createElement(p.a,{to:"/people"},l.a.createElement("div",{className:"circle white people"},l.a.createElement("h1",{className:"inner-circle"},"People"))),l.a.createElement(p.a,{to:"/shows"},l.a.createElement("div",{className:"circle pink shows"},l.a.createElement("h1",{className:"inner-circle"},"Shows")))),l.a.createElement(b,null))}}]),a}(n.Component),N=t(61),B=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={navbarOpen:!1},t.toggleNavbar=function(){t.setState({navbarOpen:!t.state.navbarOpen})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.location.pathname!==this.props.location.pathname&&this.setState({navbarOpen:!1})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main-naivagation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-burger".concat(this.state.navbarOpen?" is-active":""),role:"button",href:"#menu","aria-label":"menu","aria-expanded":"false",onClick:this.toggleNavbar},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{className:"navbar-menu".concat(this.state.navbarOpen?" is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(p.a,{to:"/company",className:"navbar-item company-nav ".concat("/company"===this.props.location.pathname?"company-active":"")},"Company"),l.a.createElement(p.a,{to:"/news",className:"navbar-item news-nav ".concat("/news"===this.props.location.pathname?"news-active":"")},"News"),l.a.createElement(p.a,{to:"/shows",className:"navbar-item shows-nav ".concat("/shows"===this.props.location.pathname?"shows-active":"")},"Shows"),l.a.createElement(p.a,{to:"/people",className:"navbar-item people-nav ".concat("/people"===this.props.location.pathname?"people-active":"")},"People"),l.a.createElement(p.a,{to:"/daydream",className:"navbar-item daydream-nav ".concat("/daydream"===this.props.location.pathname?"daydream-active":"")},"Daydream"),l.a.createElement(p.a,{to:"/contact",className:"navbar-item contact-nav ".concat("/contact"===this.props.location.pathname?"contact-active":"")},"Contact"),l.a.createElement(p.a,{to:"/"},l.a.createElement("img",{src:g.a,className:"navbar-logo navbar-item",alt:"Moonage Pictures Logo"})))))}}]),a}(n.Component),O=Object(N.a)(B),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"News"),l.a.createElement("p",{className:"body-font"},"Links to press releases"))))),l.a.createElement(b,null))}}]),a}(n.Component),k=t(38),j=t.n(k),T=t(39),M=t.n(T),A=t(19),F=t.n(A),D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={galleryModalActive:!1},t.componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered is-multiline"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"Shows"))),l.a.createElement("div",{className:"columns is-centered is-multiline"},l.a.createElement("div",{className:"column is-one-third"},l.a.createElement("figure",{className:"image is-16by9"},l.a.createElement("img",{src:M.a,alt:"Curfew logo"})))),l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column has-text-centered is-narrow is-two-thirds"},l.a.createElement("button",{className:"gallery-button",onClick:function(){return e.setState({galleryModalActive:!0})}},"Gallery"))),l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-narrow is-half"},l.a.createElement(j.a,{url:"https://www.youtube.com/watch?v=hr3EBylHfIQ&t=2s",width:"100%"}))),l.a.createElement("div",{className:"modal ".concat(this.state.galleryModalActive?"is-active":"")},l.a.createElement("div",{className:"modal-background",onClick:function(){return e.setState({galleryModalActive:!1})}}),l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-third"},l.a.createElement("p",{className:"image is-2by3"},l.a.createElement("img",{src:F.a,alt:""}))),l.a.createElement("div",{className:"column is-one-third"},l.a.createElement("p",{className:"image is-2by3"},l.a.createElement("img",{src:F.a,alt:""}))),l.a.createElement("div",{className:"column is-one-third"},l.a.createElement("p",{className:"image is-2by3"},l.a.createElement("img",{src:F.a,alt:""}))))),l.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:function(){return e.setState({galleryModalActive:!1})}})))),l.a.createElement(b,null))}}]),a}(n.Component),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"Company"),l.a.createElement("p",{className:"body-font"},"Moonage Pictures was founded in March 2018 by former BBC Drama Commissioner Matthew Read, Will Gould (Co-MD Tiger Aspect) and Frith Tiplady (Co-MD Tiger Aspect Drama). Together they are award-winning programme-makers, each with a proven track record in delivering distinctive, returnable series to both domestic and international audiences. They offer a combination of editorial and production skills, as well as fully understanding the needs of both programme sellers and buyers. They have produced, between them, dramas including"," ",l.a.createElement("em",null,"Peaky Blinders"),", ",l.a.createElement("em",null,"Ripper Street"),","," ",l.a.createElement("em",null,"Fortitude"),",",l.a.createElement("em",null,"Marvellous")," and"," ",l.a.createElement("em",null,"The Good Karma Hospital"),"."," "),l.a.createElement("p",{className:"body-font"},"At Moonage Pictures they are focused on creating, original, unconventional, inventive programming. Their first production is ",l.a.createElement("em",null,"Curfew"),", an eight-part series created and written by Matthew that will be launching on Sky One in February 2019."))))),l.a.createElement(b,null))}}]),a}(n.Component),W=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered is-multiline"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"People"),l.a.createElement("h2",{className:"people-name"},"Frith Tiplady"),l.a.createElement("h3",{className:"sub-title"},"Founder and Executive Producer"),l.a.createElement("p",{className:"body-font"},"Prior to forming Moonage Pictures with Matthew and Will, Frith was the co-MD of Tiger Aspect Drama having joined the company as Head of Production in 2006. Her list of credits has included BAFTA winning ",l.a.createElement("em",null,"Peaky Blinders")," (BBC Two), ",l.a.createElement("em",null,"Fortitude")," (SKY Atlantic) and ",l.a.createElement("em",null,"Ripper Street")," (BBC One). Other programmes include ",l.a.createElement("em",null,"The A Word")," (BBC/Sundance), ",l.a.createElement("em",null,"My Mad Fat Diary")," (E4), ",l.a.createElement("em",null,"Robin Hood")," (BBC One/BBC America), ",l.a.createElement("em",null,"Secret Diary of a Call Girl")," (ITV2/Showtime), ",l.a.createElement("em",null,"The Deep")," (BBC One), ",l.a.createElement("em",null,"Blood & Oil")," (BBC Two), ",l.a.createElement("em",null,"The Boys are Back")," (feature film) and the BAFTA winning single films; ",l.a.createElement("em",null,"Marvellous")," (BBC Two) and ",l.a.createElement("em",null,"White Girl")," (BBC Two). Previously, Frith worked as a freelance line producer on such shows as ",l.a.createElement("em",null,"Clocking Off")," (BBC One), ",l.a.createElement("em",null,"Sparkhouse")," (BBC One), ",l.a.createElement("em",null,"Burn it")," (BBC Three), ",l.a.createElement("em",null,"Flesh & Blood")," (BBC Two) and ",l.a.createElement("em",null,"Brookside")," (Channel 4).")),l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h2",{className:"people-name"},"Will Gould"),l.a.createElement("h3",{className:"sub-title"},"Founder and Executive Producer"),l.a.createElement("p",{className:"body-font"},"Prior to forming Moonage Pictures with Matthew and Will, Frith was the co-MD of Tiger Aspect Drama having joined the company as Head of Production in 2006. Her list of credits has included BAFTA winning ",l.a.createElement("em",null,"Peaky Blinders")," (BBC Two), ",l.a.createElement("em",null,"Fortitude")," (SKY Atlantic) and ",l.a.createElement("em",null,"Ripper Street")," (BBC One). Other programmes include ",l.a.createElement("em",null,"The A Word")," (BBC/Sundance), ",l.a.createElement("em",null,"My Mad Fat Diary")," (E4), ",l.a.createElement("em",null,"Robin Hood")," (BBC One/BBC America), ",l.a.createElement("em",null,"Secret Diary of a Call Girl")," (ITV2/Showtime), ",l.a.createElement("em",null,"The Deep")," (BBC One), ",l.a.createElement("em",null,"Blood & Oil")," (BBC Two), ",l.a.createElement("em",null,"The Boys are Back")," (feature film) and the BAFTA winning single films; ",l.a.createElement("em",null,"Marvellous")," (BBC Two) and ",l.a.createElement("em",null,"White Girl")," (BBC Two). Previously, Frith worked as a freelance line producer on such shows as ",l.a.createElement("em",null,"Clocking Off")," (BBC One), ",l.a.createElement("em",null,"Sparkhouse")," (BBC One), ",l.a.createElement("em",null,"Burn it")," (BBC Three), ",l.a.createElement("em",null,"Flesh & Blood")," (BBC Two) and ",l.a.createElement("em",null,"Brookside")," (Channel 4)."))))),l.a.createElement(b,null))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"Daydream"),l.a.createElement("p",{className:"body-font"},"Daydreams in here"))))),l.a.createElement(b,null))}}]),a}(n.Component),P=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).componentDidMount=function(){return window.scrollTo(0,0)},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-two-thirds-desktop "},l.a.createElement("h1",{className:"title is-1 section-header"},"Contact"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-third-desktop"},l.a.createElement("h3",{className:"sub-title"},"Address"),l.a.createElement("p",{className:"body-font"},"Moonage Pictures ",l.a.createElement("br",null),"3rd Floor ",l.a.createElement("br",null),"181 Wardour St",l.a.createElement("br",null)," London ",l.a.createElement("br",null),"W1F 8WZ")),l.a.createElement("div",{className:"column is-one-third-desktop"},l.a.createElement("h3",{className:"sub-title"},"Telephone"),l.a.createElement("p",{className:"body-font"},l.a.createElement("a",{href:"tel:+4420 8127 5574",style:{color:"white",borderBottom:"1px solid white"}},"020 8127 5574"))),l.a.createElement("div",{className:"column is-one-third-desktop"},l.a.createElement("h3",{className:"sub-title"},"Email"),l.a.createElement("p",{className:"body-font"},l.a.createElement("a",{href:"mailto:office@moonagepictures.com",style:{color:"white",borderBottom:"1px solid white"}},"office@moonagepictures.com")))),l.a.createElement("p",{className:"body-font"},"We are sorry, at the moment we are unable to accept any unsolicited scripts and submissions."))))),l.a.createElement(b,null))}}]),a}(n.Component),H=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:"/landing-page"},l.a.createElement(n.Fragment,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:y}),l.a.createElement(E.a,{path:"/company",component:S}),l.a.createElement(E.a,{path:"/news",component:C}),l.a.createElement(E.a,{path:"/shows",component:D}),l.a.createElement(E.a,{path:"/people",component:W}),l.a.createElement(E.a,{path:"/daydream",component:x}),l.a.createElement(E.a,{path:"/contact",component:P}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.7fb6ac1c.chunk.js.map