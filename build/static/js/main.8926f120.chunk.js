(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(20),s=n.n(a),i=(n(52),n(53),n(54),n(31)),o=n(10),l=n(32),j=(n(55),n(79),l.a.initializeApp({apiKey:"AIzaSyC9R36nmNBEux_qCR3v2fjOWKhEXe7zkhk",authDomain:"ulr-shortener-e0b28.firebaseapp.com",projectId:"ulr-shortener-e0b28",storageBucket:"ulr-shortener-e0b28.appspot.com",messagingSenderId:"446250266446",appId:"1:446250266446:web:cf9ef8623cfa749d6bb81f",measurementId:"G-SK9847WQV2"})),d={urlDetails:j.firestore().collection("urlDetails"),createdAt:l.a.firestore.FieldValue.serverTimestamp},u=n(8);function h(){var e=Object(o.f)().id,t=void 0===e?null:e;return Object(c.useEffect)((function(){t&&d.urlDetails.where("shortUrl","==","http://localhost:3000/".concat(t)).onSnapshot((function(e){e.docs.map((function(e){return window.location.href=e.data().longUrl}))}))}),[t]),Object(u.jsx)("div",{style:{display:"grid",placeItems:"center"},children:"Redirecting..."})}var b=n(36),p=n.n(b),O=n(42),x=n(21),f=n(82),m=n(83),v=n(84),g=n(87),y=n(85),w=n(86),S=n(37),C=n(38),I=n(43),k=n(44),R=n.n(k);function U(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(x.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(x.a)(l,2),h=j[0],b=j[1],k=Object(c.useState)(!1),U=Object(x.a)(k,2),D=U[0],L=U[1],N=Object(c.useState)(!1),F=Object(x.a)(N,2),E=F[0],T=F[1];function A(){return(A=Object(O.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(!0),c="http://localhost:3000/".concat(R.a.generate()),e.next=5,d.urlDetails.add({longUrl:n,shortUrl:c});case 5:o(c),b(!0),r(""),L(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return D?Object(u.jsx)("div",{style:{display:"grid",placeItems:"center"},children:Object(u.jsx)(f.a,{animation:"grow"})}):Object(u.jsxs)(m.a,{className:"pt-4",children:[Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:"URL Shortener"}),Object(u.jsx)("div",{className:"mt-5",children:Object(u.jsx)("em",{children:"This URL Shortener is a tool that creates a short, unique URL that will redirect to the specific website of your choosing using Firebase & React"})})]}),Object(u.jsx)(g.a,{children:Object(u.jsx)(g.a.Group,{children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:"flex-grow-1",children:Object(u.jsx)(g.a.Control,{type:"text",onChange:function(e){return r(e.target.value)},value:n,placeholder:"Enter URL to shorten...",required:!0})}),Object(u.jsx)("div",{children:Object(u.jsx)(y.a,{type:"submit",variant:"outline-secondary",onClick:function(e){return A.apply(this,arguments)},children:"Convert"})})]})})})]}),h&&Object(u.jsx)(m.a,{children:Object(u.jsxs)(w.a,{variant:"secondary",className:"d-flex justify-content-between",children:[Object(u.jsx)(w.a.Link,{href:i,children:Object(u.jsx)("div",{className:"pt-1",children:i})}),Object(u.jsx)(I.CopyToClipboard,{text:i,onCopy:function(){return T(!0)},children:E?Object(u.jsx)(y.a,{variant:"outline-secondary",children:Object(u.jsx)(S.a,{icon:C.b})}):Object(u.jsx)(y.a,{variant:"outline-secondary",children:Object(u.jsx)(S.a,{icon:C.a})})})]})})]})}function D(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:U}),Object(u.jsx)(o.a,{exact:!0,path:"/:id",component:h})]})})}var L=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(D,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),N()}},[[78,1,2]]]);
//# sourceMappingURL=main.8926f120.chunk.js.map