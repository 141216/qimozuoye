webpackJsonp([1],{"9gsU":function(t,s){},Azl8:function(t,s){},MHgV:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a=(e("Q0/0"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var o=e("VU/8")({name:"App"},a,!1,function(t){e("9gsU")},null,null).exports,i=e("/ocq"),r={name:"Loginin",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.axios.post("/loginReginster/login",this.$qs.stringify({username:this.username,password:this.password})).then(function(s){console.log(s.data),console.log(s.data.level),0==s.data.level?t.$router.push("/selectCourse"):1==s.data.level&&(window.location.href="http://47.93.197.5/teacherMobile/demo1.html")},function(t){console.log(t.data.status)})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h2",[t._v("东北师范大学化学学院答题系统")]),t._v(" "),e("form",{staticClass:"form-signin"},[e("h4",{staticClass:"form-signin-heading"},[t._v("请登录")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputStuno"}},[t._v("学号")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputStuno",autocomplete:"username",placeholder:"学号",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",autocomplete:"current-password",placeholder:"密码",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.submit}},[t._v("登录")])])])},staticRenderFns:[]},l=e("VU/8")(r,c,!1,null,null,null).exports,u={name:"choice",data:function(){return{Exercise:[],Chapter:[],Section:[],Answer:[],result:{},showDialog:!1,isDisable:!1}},mounted:function(){this.getChapter(),this.getOpenQues()},methods:{getChapter:function(){var t=this;this.axios.get("ques/student/getChapter").then(function(s){console.log(s.data),t.Chapter=s.data,t.getSession(t.Chapter[0].chapterId)},function(t){console.log(t)})},getSession:function(t){var s=this;console.log(t),this.axios.get("/ques/getSession",{params:{chapterId:t}}).then(function(t){console.log(t.data),s.Section=t.data},function(t){console.log(t)})},getOpenQues:function(){var t=this;this.axios.get("/answer/student/getOpenQues").then(function(s){t.Exercise=s.data},function(t){console.log(t)})},changeSession:function(t){var s=this;this.axios.get("/ques/getSession",{params:{chapterId:t.target.value}}).then(function(t){console.log(t.data),s.Section=t.data},function(t){console.log(t)})},searchQues:function(){var t=this,s=document.querySelector("#searchCha").value,e=document.querySelector("#searchSec").value;this.axios.get("/answer/student/searchOpenQues",{params:{chapterId:s,sessionId:e}}).then(function(s){t.Exercise=s.data},function(t){console.log(t)})},subQues:function(){var t=this,s=this,e=0;this.Exercise.forEach(function(t,n){if(0==t.type)for(var a=document.getElementsByName(t.type+"|"+t.choiceQuesId),o=0;o<a.length;o++)a[o].checked&&(s.$set(s.Answer,n,{type:t.type,quesId:t.choiceQuesId,stuAnswer:a[o].value}),e+=1);else if(1==t.type)for(var i=document.getElementsByName(t.type+"|"+t.judgmentQuesId),r=0;r<i.length;r++)i[r].checked&&(s.$set(s.Answer,n,{type:t.type,quesId:t.judgmentQuesId,stuAnswer:i[r].value}),e+=1)}),console.log(this.Answer),e==this.Exercise.length?!1===this.isDisable?this.axios.post("/answer/student/submitAnswer",this.Answer).then(function(s){console.log(s.data),t.result=s.data,t.showDialog=!0,t.isDisable=!0},function(t){console.log(t)}):this.showDialog=!0:alert("请确认答完所有题目后再进行提交！")},close:function(){this.showDialog=!1}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[!0===t.showDialog?[e("div",{staticClass:"dialog"},[e("div",{staticClass:"mask"}),t._v(" "),e("div",{staticClass:"dialog-content"},[e("h3",{staticClass:"title"},[t._v("答题结果")]),t._v(" "),e("p",{staticClass:"text"},[t._v("正确题目数量："+t._s(t.result.correctCount)+"道")]),t._v(" "),e("p",{staticClass:"text"},[t._v("错误题目数量："+t._s(t.result.errorCount)+"道")]),t._v(" "),e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn",on:{click:t.close}},[t._v("确定")])])])])]:t._e(),t._v(" "),e("div",{attrs:{id:"searchQues"}},[e("span",{staticClass:"help-block"},[t._v("请选择章：")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"searchCha"},on:{change:function(s){t.changeSession(s)}}},t._l(t.Chapter,function(s){return e("option",{domProps:{value:s.chapterId}},[t._v(t._s(s.chapterName))])})),t._v(" "),e("span",{staticClass:"help-block"},[t._v("请选择节：")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"searchSec"}},t._l(t.Section,function(s){return e("option",{domProps:{value:s.sessionId}},[t._v(t._s(s.sessionName))])})),t._v(" "),e("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{margin:"20px 0px"},on:{click:t.searchQues}},[t._v("查询")])]),t._v(" "),e("div",{staticClass:"form-choice"},[t._l(t.Exercise,function(s,n){return e("div",{staticClass:"choiceBlock"},[0==s.type?[e("p",{staticClass:"choiceQuestion"},[e("em",[t._v("选择题："+t._s(s.choiceQuesId)+". ")]),e("span",{domProps:{innerHTML:t._s(s.quesDescription)}},[t._v(t._s(s.quesDescription))])]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.choiceQuesId,value:"A",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("A."),e("span",{domProps:{innerHTML:t._s(s.optionA)}},[t._v(t._s(s.optionA))])]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.choiceQuesId,value:"B",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("B."),e("span",{domProps:{innerHTML:t._s(s.optionB)}},[t._v(t._s(s.optionB))])]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.choiceQuesId,value:"C",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("C."),e("span",{domProps:{innerHTML:t._s(s.optionC)}},[t._v(t._s(s.optionC))])]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.choiceQuesId,value:"D",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("D."),e("span",{domProps:{innerHTML:t._s(s.optionD)}},[t._v(t._s(s.optionD))])])]:1==s.type?[e("p",{staticClass:"choiceQuestion"},[e("em",[t._v("判断题："+t._s(s.judgmentQuesId)+". ")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(s.judgQuesDescription)}},[t._v(t._s(s.judgQuesDescription))])]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.judgmentQuesId,value:"对",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("对")]),t._v(" "),e("label",{staticClass:"option"},[e("input",{staticClass:"radio-hidden",attrs:{type:"radio",name:s.type+"|"+s.judgmentQuesId,value:"错",disabled:t.isDisable}}),e("span",{staticClass:"radio-show"}),t._v("错")])]:t._e()],2)}),t._v(" "),e("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:t.subQues}},[t._v("点击提交")])],2)],2)},staticRenderFns:[]};var p=e("VU/8")(u,d,!1,function(t){e("MHgV")},"data-v-50de26e4",null).exports,h={name:"selectCourse",data:function(){return{courseList:[]}},mounted:function(){this.getCourseList()},methods:{getCourseList:function(){var t=this;this.axios.get("/course/getAllCourse").then(function(s){console.log(s.data),t.courseList=s.data},function(t){console.log(t)})},chooseCourse:function(t){var s=this;console.log(t),this.axios.get("/loginReginster/selectCourse",{params:{courseId:t}}).then(function(t){1==t.data.status&&s.$router.push("/choice")},function(t){console.log(t.data.status)})}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h4",[t._v("请选择课程")]),t._v(" "),t._l(t.courseList,function(s){return e("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:function(e){t.chooseCourse(s.courseId)}}},[t._v(t._s(s.courseName))])})],2)},staticRenderFns:[]};var m=e("VU/8")(h,v,!1,function(t){e("Azl8")},"data-v-58ad7018",null).exports;n.a.use(i.a);var _=new i.a({routes:[{path:"/",name:"Loginin",component:l},{path:"/choice",name:"choice",component:p},{path:"/selectCourse",name:"selectCourse",component:m}]}),g=(e("qb6w"),e("mtWM")),f=e.n(g),C=e("Rf8U"),b=e.n(C),w=e("mw3O"),y=e.n(w);n.a.prototype.$qs=y.a,n.a.use(b.a,f.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},"Q0/0":function(t,s){},qb6w:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6c382831c0fc0a1509f8.js.map