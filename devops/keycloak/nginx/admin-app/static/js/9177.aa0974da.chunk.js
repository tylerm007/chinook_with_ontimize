"use strict";(self.webpackChunkreact_admin_upgrade=self.webpackChunkreact_admin_upgrade||[]).push([[9177],{39177:function(n,e,r){r.r(e),r.d(e,{ApiAdminHome:function(){return v.wk},ApiGenerateField:function(){return v.ko},ApiShow:function(){return v.Gv},ApiURL:function(){return v.TO},ApiUserPasswordTab:function(){return Z},CustomTab:function(){return _},CustomerLabel:function(){return P},DBConnection:function(){return v.WG},EmployeeLabel:function(){return C},MyComp:function(){return b},SampleColumnField:function(){return y},UserPasswordField:function(){return S},UserPasswordTab:function(){return j}});var t=r(1288),s=r(38302),i=r(28437),a=r(35614),o=r(25748),c=r(80184),d=r(29439),u=r(72791),l=r(26513),p=r(50228),h=r(59911),m=r(81898),g=r(78424),x=r(39361),w=r(15296),f=r(47609),j=function(){var n=(0,w.QZ)(),e=(0,f.d)(),r=(0,o.j)(),i=((0,g.x)(),(0,u.useState)("")),a=(0,d.Z)(i,2),j=a[0],Z=a[1],v=(0,u.useState)(""),b=(0,d.Z)(v,2),y=b[0],C=b[1],P=(0,u.useState)(""),S=(0,d.Z)(P,2),_=S[0],N=S[1];return(0,c.jsx)(p.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(s.Z,{variant:"body2",component:"p",children:(0,c.jsx)("b",{children:"Change the user password"})})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(h.Z,{id:"outlined-password-input",label:"New Password",type:"password",onChange:function(n){var e=n.target.value;Z(e),N(e===y&&e.length>5?"primary":""),console.log(e,y)}})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(h.Z,{id:"outlined-password-input",label:"Repeat Password",type:"password",onChange:function(n){var e=n.target.value;C(e),N(j===e&&j.length>5?"primary":""),console.log(j,e)}})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(l.Z,{variant:"contained",color:_,onClick:function(){if(console.log(y),j===y)if(j.length<6)e("Password too short",{type:"warning"});else{var t={password:j};(0,x.t)("".concat(n.api_root,"/Users/").concat(r.id,"/change_password"),{method:"POST",body:JSON.stringify(t)}).then((function(){return e("Password Changed!")})).catch((function(){return e("Error Changing Password",{type:"warning"})}))}else e("Passwords don't match",{type:"warning"})},children:"Submit"})})]})})},Z=function(){var n=(0,w.QZ)(),e=(0,f.d)(),r=(0,o.j)(),i=((0,g.x)(),(0,u.useState)("")),a=(0,d.Z)(i,2),j=(a[0],a[1]),Z=(0,u.useState)(""),v=(0,d.Z)(Z,2),b=v[0],y=v[1],C=(0,u.useState)(""),P=(0,d.Z)(C,2),S=P[0],_=P[1],N=(0,u.useState)(""),T=(0,d.Z)(N,2),k=T[0],F=T[1];return(0,c.jsx)(p.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(s.Z,{variant:"body2",component:"p",children:(0,c.jsx)("b",{children:"Current user password"})})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(h.Z,{id:"outlined-password-input",label:"Current Password",type:"password",onChange:function(n){var e=n.target.value;j(e),F(e===S&&e.length>5?"primary":"")}})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(s.Z,{variant:"body2",component:"p",children:(0,c.jsx)("b",{children:"New user password"})})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(h.Z,{id:"outlined-password-input",label:"New Password",type:"password",onChange:function(n){var e=n.target.value;y(e),F(e===S&&e.length>5?"primary":"")}})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(h.Z,{id:"outlined-password-input",label:"Repeat Password",type:"password",onChange:function(n){var e=n.target.value;_(e),F(b===e&&b.length>5?"primary":"")}})}),(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(l.Z,{variant:"contained",color:k,onClick:function(){if(console.log(S),b===S)if(b.length<1)e("Password too short",{type:"warning"});else{var t={password:b};(0,x.t)("".concat(n.api_root,"/Users/").concat(r.id,"/change_password"),{method:"POST",body:JSON.stringify(t)}).then((function(){return e("Password Changed!")})).catch((function(){return e("Error Changing Password",{type:"warning"})}))}else e("Passwords don't match",{type:"warning"})},children:"Submit"})})]})})},v=r(27895),b=function(n){return(0,c.jsx)("div",{children:"HMMMM"})},y=function(n){var e=n.attribute;return(0,c.jsx)(i.n,{source:e.name,style:{color:"red"}},e.name)},C=function(n){var e,r,t=n.instance;return(0,c.jsxs)("div",{children:[" ",null===(e=t.attributes)||void 0===e?void 0:e.FirstName," ",null===(r=t.attributes)||void 0===r?void 0:r.LastName]})},P=function(n){var e,r,t=n.instance;return(0,c.jsxs)("div",{children:[" ",(0,c.jsx)("b",{children:null===(e=t.attributes)||void 0===e?void 0:e.CompanyName})," ",(0,c.jsx)("i",{children:null===(r=t.attributes)||void 0===r?void 0:r.ContactName})]})},S=function(n){return"list"===n.mode?(0,c.jsx)("span",{}):"edit"===n.mode?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Z,{item:!0,xs:12,spacing:4,margin:5,children:(0,c.jsx)(s.Z,{variant:"h6",component:"h6",children:"Change Password"})}),(0,c.jsxs)(t.Z,{item:!0,xs:4,spacing:4,margin:5,children:[(0,c.jsx)(a.W,{source:"_password"})," "]}),(0,c.jsxs)(t.Z,{item:!0,xs:4,spacing:4,margin:5,children:[(0,c.jsx)(a.W,{source:"_password"})," "]}),(0,c.jsx)(t.Z,{item:!0,xs:4,spacing:4,margin:5})]}):(0,c.jsx)(c.Fragment,{})},_=function(n){(0,o.j)();return(0,c.jsx)("div",{children:"Some Text"})}}}]);
//# sourceMappingURL=9177.aa0974da.chunk.js.map