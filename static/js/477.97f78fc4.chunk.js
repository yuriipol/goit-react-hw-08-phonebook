"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{8871:function(e,a,t){t.d(a,{X:function(){return r}});var r={name:{label:"Name",name:"name",placeholder:"input name",required:!0,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},email:{label:"Email",name:"email",placeholder:"input email",required:!0,type:"text",pattern:"([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})",title:"Please enter correct email"},password:{label:"Password",name:"password",placeholder:"input password",required:!0,type:"text",title:"Please enter correct email"}}},9328:function(e,a,t){t.d(a,{Z:function(){return c}});var r="TextField_block__9MYxb",n="TextField_label__vkJH3",l="TextField_input__Co8UC",s=t(5984),i=t(2791),u=t(184),o=function(e){var a=e.label,t=e.name,o=e.value,c=e.placeholder,d=e.required,m=e.type,p=e.pattern,h=e.title,f=e.onChange,x=(0,i.useMemo)((function(){return(0,s.x0)()}),[]);return(0,u.jsx)("div",{className:r,children:a&&(0,u.jsxs)("label",{htmlFor:x,className:n,children:[a,":",(0,u.jsx)("input",{className:l,type:m,name:t,pattern:p,title:h,required:d,value:o,id:x,placeholder:c,onChange:f})]})})},c=o;o.defaultProps={type:"text",required:!1}},477:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var r=t(1413),n=t(8152),l=t(2791),s=t(9328),i=t(8871),u="RegisterForm_registerButton__81cdR",o=t(184),c=function(e){var a=e.onSubmit,t=(0,l.useState)(""),c=(0,n.Z)(t,2),d=c[0],m=c[1],p=(0,l.useState)(""),h=(0,n.Z)(p,2),f=h[0],x=h[1],b=(0,l.useState)(""),_=(0,n.Z)(b,2),v=_[0],Z=_[1],g=function(e){var a=e.currentTarget,t=a.name,r=a.value;switch(t){case"name":m(r);break;case"email":x(r);break;case"password":Z(r);break;default:return}},w=function(){m(""),x(""),Z("")};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({name:d,email:f,password:v}),w()},children:[(0,o.jsx)(s.Z,(0,r.Z)({value:d,onChange:g},i.X.name)),(0,o.jsx)(s.Z,(0,r.Z)({value:f,onChange:g},i.X.email)),(0,o.jsx)(s.Z,(0,r.Z)({value:v,onChange:g},i.X.password)),(0,o.jsx)("button",{type:"submit",className:u,children:"Register user"})]})},d=t(9434),m=t(5667),p=function(){var e=(0,d.I0)();return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Register page"}),(0,o.jsx)(c,{onSubmit:function(a){e((0,m.I)(a))}})]})}}}]);
//# sourceMappingURL=477.97f78fc4.chunk.js.map