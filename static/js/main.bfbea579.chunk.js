(this["webpackJsonpgoit-react-hw-02-phonebook-02"]=this["webpackJsonpgoit-react-hw-02-phonebook-02"]||[]).push([[0],{11:function(e,t,n){e.exports={item:"ContactListItem_item__1npan",button:"ContactListItem_button__3EXJi"}},12:function(e,t,n){e.exports={label:"Filter_label__23XmH",input:"Filter_input__3K0YO"}},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(13),c=n.n(r),i=(n(19),n(14)),o=n(4),s=n(5),u=n(8),l=n(7),m=n(6),b=n(9),d=n(3),j=n.n(d),p=n(0),h={name:"",number:""},f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(b.a)({},h),e.onHandleSubmit=function(t){t.preventDefault(),e.props.addNewContact(Object(b.a)({},e.state)),e.setState(Object(b.a)({},h))},e.onHandleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.onHandleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Phone",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),C=n(1),O=n.n(C),v=n(11),g=n.n(v),x=function(e){var t=e.name,n=e.number,a=e.removeItem,r=e.id;return Object(p.jsxs)("li",{className:g.a.item,children:[Object(p.jsx)("span",{children:t})," : ",Object(p.jsx)("span",{children:n}),Object(p.jsx)("button",{className:g.a.button,onClick:function(){a(r)},children:"Delete"})]})},_=x;x.prototype={name:O.a.string.isRequired,number:O.a.string.isRequired,removeItem:O.a.func.isRequired,id:O.a.string.isRequired};var y=function(e){var t=e.contacts,n=e.removeContact;return Object(p.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(p.jsx)(_,{id:t,name:a,number:r,removeItem:n},t)}))})},N=y;y.prototype={contacts:O.a.arrayOf(O.a.shape({id:O.a.string.isRequired,name:O.a.string.isRequired,number:O.a.string.isRequired})),removeContact:O.a.func.isRequired};var q=n(25),F=n(12),w=n.n(F),R=function(e){var t=e.onChange,n=e.value;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:w.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:w.a.input,type:"text",value:n,onChange:function(e){t(e.target.value)}})]})})},S=R;R.prototype={onChange:O.a.func.isRequired,value:O.a.string.isRequired};var A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){var n=t.name,a=t.number,r={id:Object(q.a)(),name:n,number:a};e.state.contacts.find((function(e){return e.name.toUpperCase()===n.toUpperCase()}))&&alert("".concat(n,"is already in contacts")),e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(i.a)(t),[r])}}))},e.filterContacts=function(){return e.state.contacts.filter((function(t){return t.name.toUpperCase().includes(e.state.filter.toUpperCase())}))},e.onChangeFilter=function(t){e.setState({filter:t})},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{addNewContact:this.addNewContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(S,{value:this.state.filter,onChange:this.onChangeFilter}),Object(p.jsx)(N,{contacts:this.filterContacts(),removeContact:this.removeContact})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={form:"ContactForm_form__2IUqW",label:"ContactForm_label__3cSwc",input:"ContactForm_input__2u7Lv",button:"ContactForm_button__1xr6L"}}},[[23,1,2]]]);
//# sourceMappingURL=main.bfbea579.chunk.js.map