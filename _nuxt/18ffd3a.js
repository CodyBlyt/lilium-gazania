(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,4],{230:function(e,t,n){"use strict";(function(e){n(30);t.a={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:"",email_2:"sales@theliliumofficial.com.sg",email_3:"james@limousinetransport.com",new:""}},methods:{send:function(){var t=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),0!=this.send_brochure&&(this.new="Yes",1!=this.send_brochure&&(this.new="No")),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:e.env.EMAIL_USER,Password:e.env.EMAIL_API,To:e.env.EMAIL_USER,From:this.email,Subject:"The Lilium & The Gazania - New Appointment Submission ["+this.name+"]",Body:"<h3>Dear Dave, </h3><h4>Below are the details for the New Appointment Submission, do check it out: </h4><h4>Enquiry: "+this.enquiry+"</h4><h4>Name: "+this.name+"</h4><h4>Mobile: "+this.mobile+"</h4><h4>Email: "+this.email+"</h4><h4> Message: "+this.message+"</h4><h4>Appointment: "+this.isAppointment+"</h4><h4>Send Brochure: "+this.new+"</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>"}).then((function(){Email.send({Host:"smtp.gmail.com",Username:e.env.EMAIL_USER,Password:e.env.EMAIL_API,To:t.email,From:t.email_2,Subject:"The Lilium & The Gazania - Receipt Acknowledgement",Body:"<h3>Dear "+t.name+'<h3><h4>Thank you for your interest in The Lilium & The Gazania. You will be posted on all latest updates for the new upcoming condominium.</h4><h4>If you have left an inquiry, our staff will be in touch with you as soon as we can. </h4><h4>If you would like to view the show flat and get direct developer price with discounts, you need to Book an Appointment here before coming down. </h4><h4>Please check back our website for The Lilium & The Gazania as updates are uploaded regulary: <a href="https://theliliumofficial.com.sg/"> <b>theliliumofficial.com.sg</b></a></h4><h4>Should you have any queries, simply call us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a></h4><h4>Have a nice day ahead!</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>'}),t.success=!0,t.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}}}).call(this,n(165))},231:function(e,t,n){"use strict";n.r(t);var r=n(230).a,o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.send_brochure=n.concat([null])):l>-1&&(e.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else e.send_brochure=o}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},["mobile"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},["isAppointment"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,"1");r.checked?l<0&&(e.policyIsAgree=n.concat(["1"])):l>-1&&(e.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else e.policyIsAgree=o}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},232:function(e,t,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("3284173e",content,!0,{sourceMap:!1})},233:function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},234:function(e,t,n){"use strict";n(232)},235:function(e,t,n){var r=n(39)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},236:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[r("img",{staticClass:"w-full",attrs:{src:n(233),alt:"Book An Appointment"}}),e._v(" "),r("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),r("p",[e._v("OR")]),e._v(" "),r("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),r("p",[e._v("Strictly no spam policy.")])])}],o={components:{FormBookAppoinment:n(231).default}},l=(n(234),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),r,!1,null,"2a89c52a",null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(231).default})},357:function(e,t,n){"use strict";var r=n(4),o=n(41),l=n(358),c=n(167),d=n(5),m=1..toFixed,v=Math.floor,h=function(e,t,n){return 0===t?n:t%2==1?h(e,t-1,n*e):h(e*e,t/2,n)},f=function(data,e,t){for(var n=-1,r=t;++n<6;)r+=e*data[n],data[n]=r%1e7,r=v(r/1e7)},y=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=v(n/e),n=n%e*1e7},_=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=String(data[e]);s=""===s?t:s+c.call("0",7-t.length)+t}return s};r({target:"Number",proto:!0,forced:m&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){m.call({})}))},{toFixed:function(e){var t,n,r,d,m=l(this),v=o(e),data=[0,0,0,0,0,0],x="",C="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return String(m);if(m<0&&(x="-",m=-m),m>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(m*h(2,69,1))-69)<0?m*h(2,-t,1):m/h(2,t,1),n*=4503599627370496,(t=52-t)>0){for(f(data,0,n),r=v;r>=7;)f(data,1e7,0),r-=7;for(f(data,h(10,r,1),0),r=t-1;r>=23;)y(data,1<<23),r-=23;y(data,1<<r),f(data,1,1),y(data,2),C=_(data)}else f(data,0,n),f(data,1<<-t,0),C=_(data)+c.call("0",v);return C=v>0?x+((d=C.length)<=v?"0."+c.call("0",v-d)+C:C.slice(0,d-v)+"."+C.slice(d-v)):x+C}})},358:function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},372:function(e,t,n){"use strict";n.r(t);n(121),n(357);var r={data:function(){return{age:"",age1:"",income:"",income1:"",carLoan:"",carLoan1:"",creditCard:"",creditCard1:"",averageWeightedAge:"",maxLoanTenure:"",TDSR:"",discountFactor:"",maxLoanAmount:"",maxPropertyValue:""}},computed:{compoundProperty:function(){return[this.age,this.age1,this.income,this.income1,this.carLoan,this.carLoan1,this.creditCard,this.creditCard1].join()}},watch:{compoundProperty:function(){if(this.age>0&&this.income>0||this.age1>0&&this.income1>0){var e=!isNaN(this.age)&&this.age>0?this.age:0,t=!isNaN(this.age1)&&this.age1>0?this.age1:0,n=!isNaN(this.income)&&this.income>0?this.income:0,r=!isNaN(this.income1)&&this.income1>0?this.income1:0,o=!isNaN(this.carLoan)&&this.carLoan>0?this.carLoan:0,l=!isNaN(this.carLoan1)&&this.carLoan1>0?this.carLoan1:0,c=!isNaN(this.creditCard)&&this.creditCard>0?this.creditCard:0,d=!isNaN(this.creditCard1)&&this.creditCard1>0?this.creditCard1:0;this.averageWeightedAge=this.calAverageWeightedAge(e,n,t,r);var m=this.calTDSR(n,r,o,l,c,d);this.TDSR=m.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),this.discountFactor=this.calDiscountFactor();var v=this.calMaxLoanAmount(m,this.discountFactor).toFixed(2);this.maxLoanAmount=parseFloat(v).toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}),this.maxPropertyValue=this.calMaxPropertyValue(v).toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2})}}},methods:{reset:function(){this.age="",this.age1="",this.income="",this.income1="",this.carLoan="",this.carLoan1="",this.creditCard="",this.creditCard1=""},calAverageWeightedAge:function(e,t,n,r){return(parseFloat(e)*parseFloat(t)+parseFloat(n)*parseFloat(r))/(parseFloat(t)+parseFloat(r))},calInterestRate:function(){return 3.5/1200},calMaxLoanTenure:function(){var e=65-this.averageWeightedAge;e>30&&(e=30),this.maxLoanTenure=e},calTotalRepaymentPeriod:function(){return 12*this.maxLoanTenure},calTDSR:function(e,t,n,r,o,l){return.6*(parseFloat(e)+parseFloat(t))-(parseFloat(n)+parseFloat(o)+parseFloat(r)+parseFloat(l))},calDiscountFactor:function(){var e=this.calInterestRate();this.calMaxLoanTenure();var t=this.calTotalRepaymentPeriod(),n=Math.pow(1+e,t);return(n-1)/(e*n)},calMaxLoanAmount:function(e,t){return e*t},calMaxPropertyValue:function(e){return e/.75}}},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("section",[n("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[n("div",{staticClass:"overflow-hidden bg-gray-200 rounded-lg select-none"},[e._m(1),e._v(" "),n("div",{staticClass:"\n            grid grid-cols-1\n            gap-4\n            px-2\n            pt-5\n            sm:px-5 sm:grid-cols-2 sm:gap-6\n          "},[n("div",{staticClass:"pt-4"},[n("div",{staticClass:"\n                absolute\n                z-10\n                p-2\n                ml-4\n                -mt-5\n                bg-white\n                border border-gray-300\n              "},[e._v("\n              Main Applicant\n            ")]),e._v(" "),n("div",{staticClass:"\n                px-2\n                pt-10\n                pb-2\n                space-y-6\n                border border-gray-300\n                sm:px-5 sm:pb-5\n              "},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"space-y-4"},[n("p",{staticClass:"font-bold underline"},[e._v("Age & Income")]),e._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Age*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"\n                            block\n                            w-full\n                            mt-1\n                            border-gray-300\n                            rounded-md\n                            shadow-sm\n                            focus:border-indigo-300\n                            focus:ring\n                            focus:ring-indigo-200\n                            focus:ring-opacity-50\n                          ",attrs:{type:"number"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[e._v("Eg: 35")])])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Monthly Fixed Income*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.income,expression:"income"}],staticClass:"\n                            block\n                            w-full\n                            mt-1\n                            border-gray-300\n                            rounded-md\n                            shadow-sm\n                            focus:border-indigo-300\n                            focus:ring\n                            focus:ring-indigo-200\n                            focus:ring-opacity-50\n                          ",attrs:{type:"number"},domProps:{value:e.income},on:{input:function(t){t.target.composing||(e.income=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[e._v("Eg: 5800")])])])])])])])]),e._v(" "),n("div",{staticClass:"pt-4"},[n("div",{staticClass:"\n                absolute\n                z-10\n                p-2\n                ml-4\n                -mt-5\n                bg-white\n                border border-gray-300\n              "},[e._v("\n              Joint Applicant (if any)\n            ")]),e._v(" "),n("div",{staticClass:"\n                px-2\n                pt-10\n                pb-2\n                space-y-6\n                border border-gray-300\n                sm:px-5 sm:pb-5\n              "},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"space-y-4"},[n("p",{staticClass:"font-bold underline"},[e._v("Age & Income")]),e._v(" "),n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Age*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.age1,expression:"age1"}],staticClass:"\n                            block\n                            w-full\n                            mt-1\n                            border-gray-300\n                            rounded-md\n                            shadow-sm\n                            focus:border-indigo-300\n                            focus:ring\n                            focus:ring-indigo-200\n                            focus:ring-opacity-50\n                          ",attrs:{type:"number"},domProps:{value:e.age1},on:{input:function(t){t.target.composing||(e.age1=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[e._v("Eg: 35")])])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Monthly Fixed Income*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.income1,expression:"income1"}],staticClass:"\n                            block\n                            w-full\n                            mt-1\n                            border-gray-300\n                            rounded-md\n                            shadow-sm\n                            focus:border-indigo-300\n                            focus:ring\n                            focus:ring-indigo-200\n                            focus:ring-opacity-50\n                          ",attrs:{type:"number"},domProps:{value:e.income1},on:{input:function(t){t.target.composing||(e.income1=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[e._v("Eg: 5800")])])])])])])])]),e._v(" "),n("div",{staticClass:"pt-4 sm:col-span-2"},[n("div",{staticClass:"\n                absolute\n                z-10\n                p-2\n                ml-4\n                -mt-5\n                bg-white\n                border border-gray-300\n              "},[e._v("\n              Monthly Debt Obligations\n            ")]),e._v(" "),n("div",{staticClass:"\n                px-2\n                pt-10\n                pb-2\n                space-y-6\n                border border-gray-300\n                sm:px-5 sm:pb-5\n              "},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Car Loan")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.carLoan,expression:"carLoan"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"number"},domProps:{value:e.carLoan},on:{input:function(t){t.target.composing||(e.carLoan=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Credit Cards")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.creditCard,expression:"creditCard"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"number"},domProps:{value:e.creditCard},on:{input:function(t){t.target.composing||(e.creditCard=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])])])])])]),e._v(" "),n("div",[n("button",{staticClass:"\n                px-3\n                py-1\n                text-white\n                transition\n                bg-gray-700\n                rounded\n                hover:bg-gray-900\n              ",on:{click:e.reset}},[e._v("\n              Reset\n            ")])])]),e._v(" "),n("div",{staticClass:"p-2 sm:p-5"},[n("h4",{staticClass:"text-xl font-medium mb-4"},[e._v("Financial Analysis")]),e._v(" "),n("div",{staticClass:"pt-4"},[n("div",{staticClass:"\n                absolute\n                z-10\n                p-2\n                ml-4\n                -mt-5\n                bg-white\n                border border-gray-300\n              "},[e._v("\n              Affordability\n            ")]),e._v(" "),n("div",{staticClass:"\n                px-2\n                pt-10\n                pb-2\n                space-y-6\n                border border-gray-300\n                sm:px-5 sm:pb-5\n              "},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"space-y-4"},[n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("60% TDSR Limit")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.TDSR,expression:"TDSR"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.TDSR},on:{input:function(t){t.target.composing||(e.TDSR=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Max Loan Tenure (Years)")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLoanTenure,expression:"maxLoanTenure"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.maxLoanTenure},on:{input:function(t){t.target.composing||(e.maxLoanTenure=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Maximum Loan Amount*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLoanAmount,expression:"maxLoanAmount"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.maxLoanAmount},on:{input:function(t){t.target.composing||(e.maxLoanAmount=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])]),e._v(" "),n("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-6"},[n("div",[e._v("Maximum Property Value#")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPropertyValue,expression:"maxPropertyValue"}],staticClass:"\n                          block\n                          w-full\n                          mt-1\n                          border-gray-300\n                          rounded-md\n                          shadow-sm\n                          focus:border-indigo-300\n                          focus:ring\n                          focus:ring-indigo-200\n                          focus:ring-opacity-50\n                        ",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.maxPropertyValue},on:{input:function(t){t.target.composing||(e.maxPropertyValue=t.target.value)}}}),e._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"})])])]),e._v(" "),e._m(2)])])])])]),e._v(" "),n("section",{staticClass:"py-6"},[n("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/financing/rental-yield-calculator"}},[e._v("\n          Continue To Rental Yield Calculator\n          "),n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),n("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Maximum Loan Eligibility Calculator (TDSR)\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2 space-y-2 text-white bg-gray-500 sm:p-5"},[n("h3",{staticClass:"text-xl font-semibold sm:text-2xl"},[e._v("\n            Affordability Calculator\n          ")]),e._v(" "),n("p",[e._v("\n            Find out the maximum amount you can loan and what you can afford\n            to buy. Affordability Calculator is based on private residential\n            property.\n          ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"space-y-4 text-sm text-gray-700"},[n("p",[e._v("\n                    *Max Loan Amount can be increased using other legal\n                    funding techniques if required. Contact us for more\n                    information.\n                  ")]),e._v(" "),n("p",[e._v("\n                    *Max Loan Amount is based on assumption that you currently\n                    do not have any other existing housing loan.\n                  ")]),e._v(" "),n("p",[e._v("\n                    #Max Property Value increase according to your Max Loan\n                    Amount. Can also be increased if you have additional cash\n                    on hand.\n                  ")]),e._v(" "),n("p",[e._v("\n                    ^The results provided by this calculator assume the\n                    accuracy of the users inputs and are based on\n                    corresponding rules and regulations as set out by the\n                    Monetary Authority of Singapore (MAS). The results are\n                    provided as a general basis for information and does not\n                    constitute an approval from any bank or financial\n                    institution. Results as indicative and for illustrative\n                    purposes. Any person acting upon or in reliance of this\n                    information does so entirely at their own risk. No\n                    warranty whatsoever is given and no liability is accepted\n                    by us behind this calculator for any loss arising directly\n                    or indirectly as a result of any action or omission made\n                    in reliance of any information presented herein at any\n                    time.\n                  ")])])}],!1,null,"2f96e1c6",null);t.default=component.exports;installComponents(component,{BookAppointment:n(236).default})}}]);