"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{8871:function(e,t,a){a.d(t,{X:function(){return n}});var n={name:{label:"Name",name:"name",placeholder:"input name",required:!0,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},email:{label:"Email",name:"email",placeholder:"input email",required:!0,type:"text",pattern:"([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})",title:"Please enter correct email"},password:{label:"Password",name:"password",placeholder:"input password",required:!0,type:"text",title:"Please enter correct email"}}},9328:function(e,t,a){a.d(t,{Z:function(){return c}});var n="TextField_block__9MYxb",r="TextField_label__vkJH3",l="TextField_input__Co8UC",i=a(5984),o=a(2791),u=a(184),s=function(e){var t=e.label,a=e.name,s=e.value,c=e.placeholder,d=e.required,m=e.type,p=e.pattern,h=e.title,f=e.onChange,x=(0,o.useMemo)((function(){return(0,i.x0)()}),[]);return(0,u.jsx)("div",{className:n,children:t&&(0,u.jsxs)("label",{htmlFor:x,className:r,children:[t,":",(0,u.jsx)("input",{className:l,type:m,name:a,pattern:p,title:h,required:d,value:s,id:x,placeholder:c,onChange:f})]})})},c=s;s.defaultProps={type:"text",required:!1}},477:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(1413),r=a(8152),l=a(2791),i=a(9328),o=a(8871),u="RegisterForm_registerButton__81cdR",s=a(184),c=function(e){var t=e.onSubmit,a=(0,l.useState)(""),c=(0,r.Z)(a,2),d=c[0],m=c[1],p=(0,l.useState)(""),h=(0,r.Z)(p,2),f=h[0],x=h[1],v=(0,l.useState)(""),b=(0,r.Z)(v,2),_=b[0],g=b[1],Z=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":m(n);break;case"email":x(n);break;case"password":g(n);break;default:return}},w=function(){m(""),x(""),g("")};return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:d,email:f,password:_}),w()},children:[(0,s.jsx)(i.Z,(0,n.Z)({value:d,onChange:Z},o.X.name)),(0,s.jsx)(i.Z,(0,n.Z)({value:f,onChange:Z},o.X.email)),(0,s.jsx)(i.Z,(0,n.Z)({value:_,onChange:Z},o.X.password)),(0,s.jsx)("button",{type:"submit",className:u,children:"Register user"})]})},d=a(9434),m=a(8724),p=a(6871),h=a(1291),f=function(){var e=(0,d.I0)();return(0,h.Z)()?(0,s.jsx)(p.Fg,{to:"/contacts"}):(0,s.jsx)("div",{children:(0,s.jsx)(c,{onSubmit:function(t){e((0,m.IU)(t))}})})}},5984:function(e,t,a){a.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=477.26fa1a1d.chunk.js.map