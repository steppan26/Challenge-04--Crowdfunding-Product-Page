(this.webpackJsonpchallenge04=this.webpackJsonpchallenge04||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),s=n(7),i=n.n(s),r=(n(13),n(8)),c=n(2),o=n(3),d=n(5),u=n(4),m=(n(14),n(15),n(0)),h=function(){return Object(m.jsxs)("div",{className:"menuWrapper",id:"menuIcon",children:[Object(m.jsx)("a",{href:"http://localhost:3000/",target:"_self",className:"push",children:"About"}),Object(m.jsx)("a",{href:"http://localhost:3000/",target:"_self",children:"Discover"}),Object(m.jsx)("a",{href:"http://localhost:3000/",target:"_self",children:"Get Started"})]})},p=n.p+"static/media/logo.e6f12bc6.svg",g=n.p+"static/media/icon-hamburger.f8a9f0cf.svg",b=n.p+"static/media/icon-close-menu.32169d31.svg",j=(n(17),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).menuClicked=function(){var t=e.state.isMenuOpen,n=document.getElementById("menuIcon"),a=document.getElementById("navBar");!0===t?(console.log("closed"),n.style.display="none",a.style.backgroundColor="transparent",e.setState({isMenuOpen:!1})):(console.log("open"),n.style.display="flex",a.style.backgroundColor="linear-gradient(to bottom, rgba(0, 0, 0, 0.89)0% 40%, hsla(0,0,0,0))",e.setState({isMenuOpen:!0}))},e.state={isMenuOpen:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=g;return e=!0===this.state.isMenuOpen?b:g,Object(m.jsxs)("nav",{id:"navBar",children:[Object(m.jsx)("img",{src:p,alt:"crowdfund logo",className:"logo"}),Object(m.jsx)("img",{src:e,id:"MenuIcon",alt:"menu icon",className:"menuIcon",onClick:this.menuClicked}),Object(m.jsx)(h,{})]})}}]),n}(a.Component)),k=(n(18),n.p+"static/media/logo-mastercraft.dca2a831.svg"),y=(n(19),function(e){var t=" btn "+e.className;parseInt(e.linkId)&&(t=" btn linkID"+String(e.linkId)+" "+e.className);return Object(m.jsx)("h4",{className:t,style:{backgroundColor:"".concat(e.bgColor),color:"".concat(e.textColor),fontSize:"".concat(e.fontSize),display:"".concat(e.display)},children:e.children})}),f=(n(20),function(e){return Object(m.jsxs)("div",{id:"bookmarkBtn",onClick:e.onClick,children:[Object(m.jsx)(y,{className:"btnBookmark",bgColor:"whitesmoke",textColor:"#2F2F2F",fontSize:"1.1em",children:"Bookmark"}),Object(m.jsx)("svg",{width:"56",height:"56",xmlns:"http://www.w3.org/2000/svg",className:"bookmarkLogo",children:Object(m.jsxs)("g",{id:"bookmarkBtnColor",fill:"none",fillRule:"evenodd",children:[Object(m.jsx)("circle",{fill:"#2F2F2F",cx:"28",cy:"28",r:"28"}),Object(m.jsx)("path",{fill:"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})]})}),v=function(){return Object(m.jsxs)("div",{className:"landingCard card",children:[Object(m.jsx)("img",{src:k,alt:"mastercraft logo",className:"masterclassLogo"}),Object(m.jsx)("h2",{children:"Mastercraft Bamboo Monitor Riser"}),Object(m.jsx)("p",{children:"A beautiful handcrafted monitor stand to reduce neck and eye strain."}),Object(m.jsxs)("div",{className:"btnsSection",children:[Object(m.jsx)(y,{className:"btnCta",bgColor:"var(--clr-primary-cyan)",textColor:"white",fontSize:"1em",linkId:"1",children:"Back this project"}),Object(m.jsx)(f,{})]})]})},x=(n(21),function(e){var t="$"+l(e.dollarsBacked),n="$"+l(e.projectTargetValue),a=l(e.totalBackers);function l(e){return(Math.round(100*e)/100).toLocaleString()}return Object(m.jsxs)("div",{className:"card DataInfoCardWrapper",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:t}),Object(m.jsxs)("p",{children:["of ",n," backed"]})]}),Object(m.jsx)("hr",{className:"divider"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:a}),Object(m.jsx)("p",{children:"total backers"})]}),Object(m.jsx)("hr",{className:"divider"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:e.daysLeft}),Object(m.jsx)("p",{children:"days left"})]}),Object(m.jsx)("div",{id:"projectProgressBar",children:Object(m.jsx)("div",{id:"progressBar",style:{width:"".concat(e.progressBarFill,"%")}})})]})}),O=(n(22),n(23),function(e){return Object(m.jsxs)("label",{className:"radio",style:{display:e.display},children:[Object(m.jsx)("input",{type:"radio",name:e.name,onChange:e.onChange,disabled:e.disabled}),Object(m.jsx)("span",{className:"radio_control"})]})}),B=(n(24),function(e){return Object(m.jsxs)("div",{className:"lowerSection",style:{display:e.ExtensionDisplay},children:[Object(m.jsx)("p",{children:"Enter your pledge"}),Object(m.jsxs)("div",{className:"inputs",children:[Object(m.jsxs)("span",{className:"pledgeInputBox",children:["$ ",Object(m.jsx)("label",{htmlFor:"pledgeInput",children:Object(m.jsx)("input",{type:"text",name:"pledgeInput",id:"pledgeInput",autoFocus:!0})})]}),Object(m.jsx)(y,{className:"btnPledge",display:"inline",bgColor:"var(--clr-primary-cyan)",textColor:"white",fontSize:"0.85em",linkID:"0",children:"Continue"})]})]})}),S=function(e){var t="",n=" left",a="",l=e.btnText,s="var(--clr-primary-cyan)",i="100%",r=!1,c="pledgeSection "+e.className;(e.backersValueSize<=0?(t="",n=""):(t=e.backersValue,n=" left"),0===e.pledgeValue)?a="":a="Pledge $"+parseInt(e.pledgeValue)+" or more";return 0===e.backersValue?(l="Out of Stock",s="var(--clr-dark-gray)",i="50%",r=!0):(s="var(--clr-primary-cyan)",r=!1),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:c,style:{opacity:i},children:[Object(m.jsxs)("div",{className:"pledgeSectionHeader",style:{headerOrder:"".concat(e.order)},children:[Object(m.jsx)(O,{name:"pledgeRadio",display:e.radioDisplay,onChange:e.onChange,disabled:r}),Object(m.jsx)("h2",{onClick:e.headerClicked,children:e.title}),Object(m.jsx)("h3",{children:a})]}),Object(m.jsx)("p",{className:"pledgeText",style:{textOrder:"".concat(e.order)},children:e.text}),Object(m.jsxs)("div",{className:"valueWrapper",style:{priceOrder:"".concat(e.order)},children:[Object(m.jsx)("h4",{className:"pledgeValue",style:{fontSize:e.valueSize},children:t}),Object(m.jsxs)("h5",{children:[" ",n]})]}),Object(m.jsx)(y,{className:"btnPledge",display:e.btnDisplay,bgColor:s,textColor:"white",fontSize:"1em",linkId:e.linkId,children:l}),Object(m.jsx)("hr",{className:"pledgeDivider"}),Object(m.jsx)(B,{ExtensionDisplay:e.extensionDisplay})]})})},E=(n(25),function(e){return Object(m.jsxs)("div",{className:"card aboutProject",id:"aboutProject",children:[Object(m.jsx)("h1",{children:"About this project"}),Object(m.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing the monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(m.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."}),Object(m.jsx)(S,{className:"pledgeSection",title:"Bamboo Stand",pledgeValue:e.pledgeValues[1],text:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",backersValue:e.pledgesRemaining[0],radioDisplay:"none",btnText:"Select Reward",linkId:"2"}),Object(m.jsx)(S,{className:"pledgeSection",title:"Black Edition Stand",pledgeValue:e.pledgeValues[2],text:"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",backersValue:e.pledgesRemaining[1],radioDisplay:"none",btnText:"Select Reward",linkId:"3"}),Object(m.jsx)(S,{className:"pledgeSection",title:"Mahogany Special Edition",pledgeValue:e.pledgeValues[3],text:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",backersValue:e.pledgesRemaining[2],radioDisplay:"none",btnText:"Select Reward",linkId:"4"})]})}),C=(n(26),n.p+"static/media/icon-close-modal.732388df.svg"),I=function(e){return Object(m.jsxs)("div",{className:"modalContainer",id:"modal",children:[Object(m.jsx)("hr",{className:"modalBackground"}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"modalHeader",children:[Object(m.jsx)("h1",{children:"Back this project"}),Object(m.jsx)("img",{src:C,alt:"close modal button",onClick:e.handleToUpdate})]}),Object(m.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Rise out in the world?"}),Object(m.jsx)(S,{className:"modalPledge",title:"Pledge with no reward",pledgeValue:e.pledgeValues[0],text:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates.via email.",backersValue:"",backersValueSize:"0",btnDisplay:"none",radioDisplay:"inline",btnText:"Continue",onChange:e.activeSection,headerOrder:"0",textOrder:"2",priceOrder:"1",headerClicked:e.headerClicked,valueSize:"1.25em"}),Object(m.jsx)(S,{className:"modalPledge",title:"Bamboo Stand",pledgeValue:e.pledgeValues[1],text:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",backersValue:e.pledgesRemaining[0],backersValueSize:"1.5em",btnDisplay:"none",radioDisplay:"inline",btnText:"Continue",onChange:e.activeSection,headerOrder:"0",textOrder:"2",priceOrder:"1",headerClicked:e.headerClicked,valueSize:"1.25em"}),Object(m.jsx)(S,{className:"modalPledge",title:"Black Edition Stand",pledgeValue:e.pledgeValues[2],text:"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",backersValue:e.pledgesRemaining[1],backersValueSize:"1.5em",btnDisplay:"none",radioDisplay:"inline",btnText:"Continue",onChange:e.activeSection,headerOrder:"0",textOrder:"2",priceOrder:"1",headerClicked:e.headerClicked,valueSize:"1.25em"}),Object(m.jsx)(S,{className:"modalPledge",title:"Mahogany Special Edition",pledgeValue:e.pledgeValues[3],text:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",backersValue:e.pledgesRemaining[2],backersValueSize:"1.5em",btnDisplay:"none",radioDisplay:"inline",btnText:"Continue",onChange:e.activeSection,headerOrder:"0",textOrder:"2",priceOrder:"1",headerClicked:e.headerClicked,valueSize:"1.25em"})]})]})},N=(n(27),n.p+"static/media/icon-check.bdee5269.svg"),V=function(){return Object(m.jsxs)("div",{className:"cardWrapper",id:"pledgeConfirmation",children:[Object(m.jsx)("hr",{className:"modalBackground"}),Object(m.jsxs)("div",{className:"card modalPledgeReceived",children:[Object(m.jsx)("img",{src:N,alt:"checkmark icon"}),Object(m.jsx)("h3",{children:"Thanks for your support!"}),Object(m.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),Object(m.jsx)(y,{className:"btnPledgeConfirmed",display:"inline",bgColor:"var(--clr-primary-cyan)",textColor:"white",fontSize:"1em",children:"Got it!"})]})]})},w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).openModal=function(){document.getElementById("modal").style.display="flex",e.setState({modalIsOpen:!0})},e.closeModal=function(){document.getElementById("modal").style.display="none",e.setState({modalIsOpen:!1})},e.state={dollarsBacked:89914,totalBackers:5007,daysLeft:56,projectTargetValue:1e5,modalIsOpen:!1,linkedBtnsArray:[],pledgeValues:[0,25,75,200],pledgesRemaining:[101,64,0],bookmarkIsOn:!1,progressBarFill:0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setProgressBar(),this.createStateLinkBtnsArrayAndEventListener(),this.createPledgeSubmitBtns(),this.createPledgeConfirmationBtn(),this.setBookmarkClickEvent()}},{key:"setProgressBar",value:function(){var e=100*Number(this.state.dollarsBacked/this.state.projectTargetValue);e>=100&&(e=100),this.setState({progressBarFill:e})}},{key:"createStateLinkBtnsArrayAndEventListener",value:function(){var e=this,t=Array.from(document.getElementsByClassName("btn")),n=[];t.forEach((function(a){for(var l=1;l<t.length+1;l++)a.classList.contains("linkID"+l)&&(a.addEventListener("click",(function(t){return e.pledgeBtnEvent(t)})),n.push(a))})),this.setState({linkedBtnsArray:n})}},{key:"pledgeBtnEvent",value:function(e){var t=this.getLinkId(e)-1;t>=1?this.state.pledgesRemaining[t-1]>0&&this.buttonClicked(e):this.buttonClicked(e)}},{key:"createPledgeSubmitBtns",value:function(){var e=this,t=Array.from(document.getElementById("modal").getElementsByClassName("btn")),n=[];t.forEach((function(a){for(var l=1;l<t.length+1;l++)a.classList.contains("linkID"+l)&&(a.addEventListener("click",(function(t){e.buttonClicked(t)})),n.push(a))})),this.setState({linkedBtnsArray:n})}},{key:"createPledgeConfirmationBtn",value:function(){document.getElementsByClassName("btnPledgeConfirmed")[0].addEventListener("click",(function(){document.getElementById("pledgeConfirmation").style.display="none"}))}},{key:"setBookmarkClickEvent",value:function(){var e=this,t=document.getElementById("bookmarkBtn");t.removeEventListener("click",(function(t){return e.pledgeBtnEvent(t)})),t.addEventListener("click",(function(){e.state.bookmarkIsOn?(document.getElementById("bookmarkBtnColor").children[0].style.fill="#2F2F2F",document.getElementById("bookmarkBtnColor").parentElement.previousSibling.innerHTML="Bookmark",document.getElementById("bookmarkBtnColor").parentElement.previousSibling.style.color="#2F2F2F"):(document.getElementById("bookmarkBtnColor").children[0].style.fill="var(--clr-secondary-cyan)",document.getElementById("bookmarkBtnColor").parentElement.previousSibling.innerHTML="Bookmarked",document.getElementById("bookmarkBtnColor").parentElement.previousSibling.style.color="var(--clr-secondary-cyan)");var t=!e.state.bookmarkIsOn;e.setState({bookmarkIsOn:t})}))}},{key:"buttonClicked",value:function(e){var t=this.getLinkId(e),n=document.getElementById("modal").getElementsByClassName("pledgeSection")[t-1].children[0].children[0].children[0];n.checked=!0,this.openModal(),this.sectionSelected(n)}},{key:"sectionSelected",value:function(e){this.hideAllExtensions(),this.showSelectedExtensionSection(e),this.scrollToElement(e)}},{key:"hideAllExtensions",value:function(){Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection")).forEach((function(e){e.children[5].style.display="none",e.children[4].style.display="none",e.classList.remove("pledgeSectionSelected")}))}},{key:"showSelectedExtensionSection",value:function(e){var t=e.parentElement.parentElement.parentElement;t.children[4].style.display="flex",t.children[5].style.display="flex",t.classList.add("pledgeSectionSelected"),this.activateInputs(t)}},{key:"activateInputs",value:function(e){var t=this;Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection")).forEach((function(e){e.getElementsByClassName("btn")[1].removeEventListener("click",t.btnEventListner)})),e.getElementsByClassName("btn")[1].addEventListener("click",(function(e){t.btnEventListner(e,t.getPledgeValuesArray())}))}},{key:"btnEventListner",value:function(e,t){var n=e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value,a=0;Array.from(document.getElementById("modal").getElementsByClassName("pledgeSection")).forEach((function(e,t){e.classList.contains("pledgeSectionSelected")&&(a=t)}));var l=t[a];if(parseInt(n))if(n>=l){this.sumbitPledge(n),e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value="";var s=this.state.pledgesRemaining,i=a-1,r=s[i]-1;s[i]=r,this.setState({pledgesRemaining:s})}else e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value="";else e.target.parentElement.getElementsByClassName("pledgeInputBox")[0].children[0].children[0].value=""}},{key:"sumbitPledge",value:function(e){document.getElementById("pledgeConfirmation").style.display="flex",this.closeModal();var t=this.state.dollarsBacked+parseInt(e);this.setState({dollarsBacked:t});var n=this.state.totalBackers+1;this.setState({totalBackers:n}),this.setProgressBar()}},{key:"getPledgeValuesArray",value:function(){return this.state.pledgeValues}},{key:"getLinkId",value:function(e){var t=Array.from(document.getElementsByClassName("btn")),n=0,a=0;t.forEach((function(e){for(var n=0;n<t.length+1;n++)e.classList.contains("linkID"+String(n+1))&&a++}));for(var l=1;l<a+1;l++)e.target.classList.contains("linkID"+l)&&(n=l);return n}},{key:"scrollToElement",value:function(e){var t=e.parentElement.offsetTop-75;window.scrollTo({top:"".concat(t),left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{id:"App",className:"defaultTheme",children:[Object(m.jsx)(j,{}),Object(m.jsxs)("article",{className:"articleWrapper",children:[Object(m.jsx)(v,{}),Object(m.jsx)(x,Object(r.a)({},this.state)),Object(m.jsx)(E,{pledgeValues:this.state.pledgeValues,pledgesRemaining:this.state.pledgesRemaining}),Object(m.jsx)(I,{show:this.state.modalIsOpen,handleToUpdate:this.closeModal,activeSection:function(t){t.target.checked?e.sectionSelected(t.target):e.hideAllExtensions()},pledgeValues:this.state.pledgeValues,pledgesRemaining:this.state.pledgesRemaining,headerClicked:function(t){t.target.parentElement.children[0].children[0].checked=!t.target.parentElement.children[0].children[0].checked,t.target.parentElement.children[0].children[0].checked?e.sectionSelected(t.target.parentElement.children[0].children[0]):e.hideAllExtensions()}}),Object(m.jsx)(V,{})]})]})}}]),n}(a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),L()}],[[28,1,2]]]);
//# sourceMappingURL=main.5942d071.chunk.js.map