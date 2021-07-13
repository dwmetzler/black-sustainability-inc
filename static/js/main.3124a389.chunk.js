(this["webpackJsonpblack-sustainability"]=this["webpackJsonpblack-sustainability"]||[]).push([[0],{95:function(e,t,a){"use strict";a.r(t);var r,n=a(120),i=a(0),o=a(42),s=a.n(o),c=a(56),l=a(122),d=a(64),b=a(25);!function(e){e.FETCH_CURRENT_PROJECTS_DID_SUCCEED="todo/FETCH_CURRENT_PROJECT_DID_SUCCEED"}(r||(r={}));new function e(){Object(b.a)(this,e),this.fetchCurrentProjectsDidSucceed=function(e){return{type:r.FETCH_CURRENT_PROJECTS_DID_SUCCEED,projects:e}}};var h,m=function e(t,a,r,n,i,o){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];Object(b.a)(this,e),this.key=void 0,this.title=void 0,this.focusArea=void 0,this.location=void 0,this.about=void 0,this.imageUrl=void 0,this.goals=void 0,this.key=t,this.title=a,this.focusArea=r,this.location=n,this.about=i,this.imageUrl=o,this.goals=s},u=function e(t,a){Object(b.a)(this,e),this.summary=void 0,this.description=void 0,this.summary=t,this.description=a},g=new m("1","Nia OT Foods Limited","Sustainable Agriculture and Global Community","Ghana","Theophilus Owusu is developing a regenerative moringa agroforestry project.\n\nMoringa is the main crop on his property, while vetiva, citronella, plantain and lemongrass serve as cover crops and provide soil + water conservation. These crops also provide food and medicine to be used in essential oil production and local roofing.","https://static.wixstatic.com/media/af8b67_60006b87ad324631bc0fad57a942856b~mv2.png/v1/fill/w_916,h_516,al_c,q_90,usm_0.66_1.00_0.01/Screen%20Shot%202020-09-14%20at%206_12_59%20PM.webp",[new u("Produce food sustainably","Increase food availability to curb undernourishment and increase food security in the community"),new u("Provide decent livelihoods","Provide employment opportunities and contribute to community development"),new u("Improve biodiversity","Expanding to grow other fruits, vegetables, herbs, spices (and also do beekeeping)"),new u("Give back","5% of the annual profit will be used to help education, healthcare, sanitation and afforestation")]),j=new m("2","The Granny Nanny Maroons","Global Community","Jamaica","We are a traditional Jamaican Maroon performing arts ensemble, which consists of community-based artists, musicians, drummers, storytellers, craftspeople and herbal healers from the Windward Maroon capital and UNESCO World Heritage Site of Moore Town and the larger Rio Grande Valley.\n\nWe are finishing the Granny Nanny Maroon Culture Yawd, a mixed-use space for Live Cultural Edutainment; Arts & Craft Creation & Merchandising; Education & Skills Training Workshops; Jerk Pit & Herbal Center; and an Information Clearinghouse.","https://static.wixstatic.com/media/af8b67_eaaefac8095149468c03e56ed10d3b60~mv2.jpg/v1/fill/w_593,h_703,al_c,q_85/MAROON.webp",[new u("Preserve Maroon Culture","Make space for edutainment, arts & merchandising, workshops, and an herbal center"),new u("Create community","Benefit the wider Maroon community of visual, literary and performing artists of Portland Parish, Jamaica"),new u("Share cultural arts","Provide a space to share our cultural arts with the wider world and welcome visitors from all walks of life")]),p=Object.freeze({currentProjects:[g,j]}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_CURRENT_PROJECTS_DID_SUCCEED:return console.log("Fetched current projects: ",t.projects),Object(d.a)(Object(d.a)({},e),{},{currentProjects:t.projects||[]});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return f(e,t)},w=a(34),O=a.n(w),v=a(124),y=a(117),C=a(112),_=a(113),S=a(116),k=a(110),T=a(111),E=a(115),I=a(118),P=a(108),A=a.p+"static/media/Logo Placeholder.5c43cb3c.png",z=a(123),D=a(2);!function(e){e[e.JOIN=0]="JOIN",e[e.DONATE=1]="DONATE"}(h||(h={}));var N=function(e){var t=e.type,a=e.label;return Object(D.jsx)(z.a,{_hover:{opacity:.5},onClick:function(){return function(e){switch(e){case h.JOIN:return window.open("https://form.jotform.com/203615928402049","_blank"),!0;case h.DONATE:return window.open("https://www.blacksustainabilitysummit.com/join-our-network"),!0}}(t)},children:a})},R=function(){return Object(D.jsxs)(P.a,{boxShadow:"lg",height:"4rem",alignItems:"center",width:"100%",position:"fixed",top:0,left:0,zIndex:9999,justify:"space-between",bgColor:"white",paddingX:"2rem",paddingY:"0.125rem",children:[Object(D.jsxs)(v.a,{alignItems:"center",children:[Object(D.jsx)(k.a,{boxSize:"3rem",src:A}),Object(D.jsx)(T.a,{}),Object(D.jsxs)(C.a,{textStyle:"pageTitle",paddingBottom:".3rem",children:[Object(D.jsx)("span",{style:{color:"black"},children:"Black"}),"Sustainability",Object(D.jsx)("span",{style:{color:"black",fontSize:"1rem"},children:" Inc."})]})]}),Object(D.jsxs)(v.a,{children:[Object(D.jsx)(N,{type:h.JOIN,label:"Join"}),Object(D.jsx)(N,{type:h.DONATE,label:"Donate"})]})]})},B=a(121),J=function(e){return Object(D.jsxs)(S.a,{textAlign:"left",children:[Object(D.jsx)(C.a,{textAlign:"left",fontSize:"1.5rem",children:e.label}),Object(D.jsx)(_.a,{children:e.text})]})},F=function(e){var t=e.projects;return 0==t.length?Object(D.jsx)(_.a,{children:"No current projects"}):Object(D.jsxs)(B.e,{align:"center",variant:"enclosed",children:[Object(D.jsx)(B.b,{children:t.map((function(e,t){return Object(D.jsx)(B.a,{zIndex:1,color:"#cceecc",fontSize:"1.5rem",fontWeight:"600",_selected:{position:"relative",boxShadow:"lg",bgColor:"white",color:"black"},children:e.title})}))}),Object(D.jsx)(B.d,{boxShadow:"lg",zIndex:2,position:"relative",children:t.map((function(e,t){return Object(D.jsxs)(B.c,{bgColor:"white",children:[Object(D.jsxs)(P.a,{justify:"center",marginTop:"2rem",children:[Object(D.jsx)(k.a,{objectPosition:"center",objectFit:"cover",boxSize:"20rem",src:e.imageUrl}),Object(D.jsxs)(v.b,{alignItems:"flex-start",justify:"center",maxWidth:"50%",marginLeft:"1rem",spacing:"1rem",children:[Object(D.jsx)(J,{label:"Focus Area",text:e.focusArea}),Object(D.jsx)(J,{label:"Location",text:e.location}),Object(D.jsx)(J,{label:"About",text:e.about})]})]}),Object(D.jsx)(C.a,{color:"brand.black",marginY:"2rem",children:"Goals"}),Object(D.jsxs)(E.a,{templateColumns:"repeat(".concat(e.goals.length+2,", 1fr)"),gap:10,children:[Object(D.jsx)(T.a,{}),e.goals.map((function(e,t){return Object(D.jsxs)(v.b,{spacing:"1rem",bgColor:"white",color:"brand.black",padding:3,borderRadius:"1rem",border:"solid 0.5px rgba(0,0,0,0.05)",boxShadow:"lg",paddingY:"2rem",children:[Object(D.jsx)(P.a,{justify:"center",alignItems:"center",borderRadius:"50%",border:"2px solid",borderColor:"brand.green",fontSize:"2rem",width:"3.5rem",height:"3.5rem",children:Object(D.jsx)(C.a,{color:"brand.green",children:t+1})}),Object(D.jsx)(C.a,{fontWeight:"500",fontSize:"1.5rem",children:e.summary}),Object(D.jsx)(_.a,{children:e.description})]})}))]}),Object(D.jsx)(v.a,{justify:"center",marginTop:"2rem",marginBottom:"1rem",children:Object(D.jsx)(N,{type:h.DONATE,label:"Donate now to help us complete this project"})})]})}))})]})},U=a.p+"static/media/focusAreas.5c3c3a95.svg",W=function(e){return Object(D.jsxs)(v.b,{bgColor:"white",paddingY:"2rem",borderRadius:"1rem",boxShadow:"lg",children:[Object(D.jsx)(y.a,{size:"2xl",name:e.name,src:e.imageUrl}),Object(D.jsx)(C.a,{fontSize:"1.5rem",fontWeight:400,paddingX:"3rem",children:e.name}),Object(D.jsx)(C.a,{fontSize:"1.1rem",fontWeight:600,children:e.title}),Object(D.jsx)(_.a,{paddingX:"2rem",whiteSpace:"pre-line",children:e.bio})]})},M=function(e){var t=e.currentProjects;return Object(D.jsxs)(S.a,{bgColor:"brand.green",children:[Object(D.jsx)(R,{}),Object(D.jsxs)(S.a,{marginTop:"4rem",children:[Object(D.jsx)(v.a,{justify:"flex-start",width:"100%",height:"30rem",backgroundImage:"https://giveme-5.org/wp-content/uploads/2019/03/sustainable_agriculture_fyouture.jpg",backgroundPosition:"left",backgroundSize:"cover",children:Object(D.jsx)(_.a,{width:"50%",fontSize:"2rem",fontWeight:"200",color:"white",marginLeft:"10rem",marginTop:"-5rem",bgColor:"rgba(0,0,0,0.2)",boxShadow:"lg",backdropFilter:"blur(10px)",padding:"1rem",paddingX:"2rem",borderRadius:"1rem",children:"Promoting sustainable development and providing interdisciplinary educational resources for people of Afrikan descent"})}),Object(D.jsxs)(v.a,{boxShadow:"lg",bgColor:"white",justify:"center",alignItems:"center",children:[Object(D.jsx)(k.a,{height:"40rem",boxSize:"40rem",src:U,margin:"5rem 8rem"}),Object(D.jsxs)(v.b,{maxWidth:"30%",spacing:"1rem",alignItems:"flex-start",children:[Object(D.jsx)(C.a,{fontSize:"2rem",color:"brand.green",textAlign:"left",children:"We are building the largest Black & Green network of sustainability professionals, entrepreneurs, & enthusiasts."}),Object(D.jsx)(_.a,{fontSize:"1.5rem",textAlign:"left",children:"Join us on our mission to connect and equip people of Afrikan descent with resources and development opportunities in sustainability fields."}),Object(D.jsx)(T.a,{}),Object(D.jsx)(N,{type:h.JOIN,label:"Join our network now"})]})]}),Object(D.jsxs)(v.b,{marginTop:"2rem",spacing:6,children:[Object(D.jsx)(C.a,{color:"#fcfffc",children:"Current Projects"}),Object(D.jsx)(F,{projects:t})]}),Object(D.jsxs)(v.b,{marginTop:"2rem",zIndex:2,boxShadow:"lg",children:[Object(D.jsx)(C.a,{color:"white",marginBottom:"1rem",children:"Our Team"}),Object(D.jsxs)(E.a,{templateColumns:"repeat(3, 1fr)",gap:12,paddingX:"4rem",children:[Object(D.jsx)(W,{imageUrl:"https://static.wixstatic.com/media/af8b67_265cf0f10be040b3a6697b6823648da5~mv2.jpg/v1/crop/x_0,y_600,w_2400,h_2400/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/Raina(17of20).webp",name:"Afia Raina Turner-Greenlea",title:"Co-Founder & Chair",bio:"Raina's roots are as solid as Georgia's red clay. She is a wife & mother with a passion for creating & supporting healthy, sustainable communities by applying indigenous wisdom & exchanging best practices to (re)develop/support sustainable communities without causing irreversible damage to the planet.\n\nShe has 9 years of experience with culturally-relevant education & project management, 5 years organizing & hosting Black Sustainability Network and Summit and is the former Director of Entrepreneurship and Community Engagement for the Center for Civic Innovation."}),Object(D.jsx)(W,{imageUrl:"https://static.wixstatic.com/media/af8b67_f6b8997556d34b6e81ccba8c1afea216~mv2.jpg/v1/crop/x_0,y_53,w_427,h_427/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/IMG_1129_edited.webp",name:"Yeamah Brewer",title:"Co-Founder & Vice Chair",bio:"Based in the Twin Cities, Yeamah joined our team as a volunteer after learning of our annual summit. She leads strategic planning and organizational development.\n\nOften behind the scenes, Yeamah also serves as Vice-Chair of our annual global Summit (2018-Present) and leads our social media engagement & member recruitment on Clubhouse."}),Object(D.jsx)(W,{imageUrl:"https://static.wixstatic.com/media/af8b67_8618963a95bd4c3893d846e3b3472b01~mv2.jpeg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/charles.webp",name:"Charles Greenlea",title:"Agriculture Chair",bio:"Charles is a multigenerational resident of Atlanta and the descendant of a long line of growers, educators, entrepreneurs, and organizers. In 2019, he founded ECO-PARADIGM, LLC to help balance ecology and economics for Atlanta's communities of color.\n\nBrother Charles joined Black Sustainability, Inc. in 2016 as an attendee of our inaugural summit. He works to identify potential speakers and presenters within the field of sustainable agriculture. He has moderated sessions, led outreach and continues to be active in our Sustainable Agriculture efforts."})]})]}),Object(D.jsxs)(v.b,{bgColor:"brand.green",color:"white",paddingY:"3rem",children:[Object(D.jsx)(C.a,{children:"B.O.O.S."}),Object(D.jsx)(_.a,{children:"(Black owned and operated supporters)"}),Object(D.jsxs)(E.a,{width:"100%",bgColor:"white",templateColumns:"repeat(5, 1fr)",gap:6,boxShadow:"lg",children:[Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"}),Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"}),Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"}),Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"}),Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"}),Object(D.jsx)(S.a,{width:"5rem",height:"5rem",bgColor:"brand.black"})]})]}),Object(D.jsxs)(v.a,{paddingY:"1rem",paddingBottom:"3rem",justify:"center",spacing:"10rem",alignItems:"center",bgColor:"brand.black",color:"#ccc",fontSize:"0.9rem",children:[Object(D.jsx)(_.a,{children:"\xa9 2021 Black Sustainability, Inc."}),Object(D.jsx)(I.a,{href:"mailto:blacksustainabilitysummit@gmail.com",children:"blacksustainabilitysummit@gmail.com"})]})]})]})},G={reducer:x,sagaInitializer:function(){var e=O.a.mark(t);return{saga:t};function t(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}},Page:Object(c.b)((function(e){return{currentProjects:e.home.currentProjects}}),null)(M)},H=a(119),L=Object(H.a)({colors:{brand:{green:"#009845",red:"#CE0E2D",yellow:"#FFC629",black:"#000000"}},components:{Button:{variants:{solid:{color:"brand.black",bgColor:"brand.yellow"}}},Heading:{baseStyle:{textAlign:"center",fontVariationSettings:"wdth 600"}}},fonts:{heading:"Oswald",body:"Noto Sans HK"},textStyles:{pageTitle:{color:"brand.green",textTransform:"uppercase",fontWeight:"700",fontSize:"2rem"}}}),Y=(a(93),a(94),function(){return Object(D.jsx)(l.a,{theme:L,children:Object(D.jsx)(G.Page,{})})}),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),i(e),o(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(31),V=a(79),K=(a(68),a(6)),$=Object(X.b)(Object(K.a)({},"home",G.reducer)),Q=O.a.mark(Z);function Z(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Example saga reached");case 1:case"end":return e.stop()}}),Q)}var ee=Object(V.a)(),te=Object(X.d)($,Object(X.a)(ee));ee.run(Z),s.a.render(Object(D.jsx)(i.StrictMode,{children:Object(D.jsxs)(c.a,{store:te,children:[Object(D.jsx)(n.a,{}),Object(D.jsx)(Y,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[95,1,2]]]);
//# sourceMappingURL=main.3124a389.chunk.js.map