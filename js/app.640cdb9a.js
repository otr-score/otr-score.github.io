(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"034f":function(t,e,n){"use strict";var a=n("fc22"),i=n.n(a);i.a},1:function(t,e,n){t.exports=n("56d7")},"1dea":function(t,e,n){"use strict";var a=n("3ddc"),i=n.n(a);i.a},2:function(t,e){},2099:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#trstable table.v-table tbody td:first-child,#trstable table.v-table tbody td:not(:first-child),#trstable table.v-table tbody th:first-child,#trstable table.v-table tbody th:not(:first-child),#trstable table.v-table thead td:first-child,#trstable table.v-table thead td:not(:first-child),#trstable table.v-table thead th:first-child,#trstable table.v-table thead th:not(:first-child){padding:0 8px}.sticky,.sticky:focus,.sticky:hover{position:-webkit-sticky;position:sticky;bottom:20px}",""])},3:function(t,e){},"3ddc":function(t,e,n){var a=n("2099");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("0790872e",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=(n("d1e7"),n("d4b8"),n("bb71")),r=(n("da64"),n("8e29"));a["a"].use(i["a"],{iconfont:"md",lang:{locales:{de:r["a"]},current:"de"}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:"",color:"blue lighten-1",dark:""}},[n("router-view",{attrs:{name:"navigation"}}),n("v-toolbar-title",{staticClass:"headline"},[t._v("\n      Trauma-Reha-Score\n    ")]),n("v-spacer"),n("router-view",{attrs:{name:"context"}})],1),n("v-content",[n("UpdateApp"),n("router-view")],1),n("v-footer",{attrs:{height:"auto",dark:""}},[n("v-card",{staticClass:"blue darken-4 white--text text-xs-right flex",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"pa-3"},[n("p",{staticClass:"mb-1"},[t._v("\n          AK Traumarehabilitation Sektion Rehabilitation -\n          Physikalische Therapie der DGOU\n        ")]),n("p",{staticClass:"ma-0"},[t._v("\n          © Mathis Rosenhauer, Valentin Rosenhauer, Jörg Schmidt\n        ")])])],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{staticClass:"snack",attrs:{timeout:t.timeout,bottom:"",left:"",color:"info"},model:{value:t.snackWithButtons,callback:function(e){t.snackWithButtons=e},expression:"snackWithButtons"}},[t._v("\n  "+t._s(t.snackWithBtnText)+"\n  "),n("v-spacer"),n("v-btn",{attrs:{light:"",flat:"",outline:""},nativeOn:{click:function(e){return t.refreshApp(e)}}},[t._v("\n    "+t._s(t.snackBtnText)+"\n  ")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.snackWithButtons=!1}}},[n("v-icon",[t._v("close")])],1)],1)},c=[],u={data:function(){return{refreshing:!1,registration:null,snackBtnText:"",snackWithBtnText:"",snackWithButtons:!1,timeout:0}},created:function(){var t=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",function(){t.refreshing||(t.refreshing=!0,window.location.reload())})},methods:{showRefreshUI:function(t){this.registration=t.detail,this.snackBtnText="Aktualisieren",this.snackWithBtnText="Eine neuere Version von TRS ist verfügbar!",this.snackWithButtons=!0},refreshApp:function(){this.snackWithButtons=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}}},d=u,f=(n("755d"),n("2877")),p=n("6544"),v=n.n(p),h=n("8336"),m=n("132d"),b=n("2db4"),g=n("9910"),_=Object(f["a"])(d,l,c,!1,null,"1ac8f6d4",null),x=_.exports;v()(_,{VBtn:h["a"],VIcon:m["a"],VSnackbar:b["a"],VSpacer:g["a"]});var y={name:"App",components:{UpdateApp:x}},w=y,k=(n("034f"),n("7496")),D=n("b0af"),A=n("99d9"),V=n("549c"),C=n("553a"),O=n("71d9"),S=n("2a7f"),T=Object(f["a"])(w,o,s,!1,null,null,null),j=T.exports;v()(T,{VApp:k["a"],VCard:D["a"],VCardText:A["b"],VContent:V["a"],VFooter:C["a"],VSpacer:g["a"],VToolbar:O["a"],VToolbarTitle:S["b"]});var $=n("2f62"),E=n("bfa9"),F=n("768b"),B=(n("ffc1"),n("cebc")),N=(n("456d"),n("ac6a"),n("8615"),n("75fc")),L={frb:{component:"frb",group:"medical",label:"Frühreha-Barthel-Index",options:["100 bis 96","95 bis 85","84 bis 75","74 bis 55","54 bis 30","29 bis -325"]},md:{component:"md",group:"medical",label:"Medizinische Therapie/Diagnostikbedarf",multiple:!1,options:["Nicht notwendig","Basisdiagnostik notwendig","Zusätzlich schneller Zugang zu anderen Fachdisziplinen u. / o. Großgerätediagnostik notwendig  / iv-Therapie notwendig,  isolierpflichtiger Patient","Akutmedizinische Behandlung ist notwendig"]},st:{component:"st",group:"medical",label:"Schmerztherapie",multiple:!1,options:["Es liegen keine Schmerzen vor","Es liegen mit WHO Stufe 1-3 gut behandelbare Schmerzen vor","Komplexe aufwändig zu behandelnde Schmerzsituation","Minimalinvasive Schmerztherapie notwendig (Ganglienblockade, Nervenblockade, Katheter Anlage, wirbelsäulennahe Infiltrationen)"]},wm:{component:"wm",group:"medical",label:"Wundmanagement",multiple:!1,options:["Nicht notwendig","Notwendig, ein Bereich","Notwendig, zwei Bereiche","Notwendig, drei und mehr  Bereiche"]},vh:{component:"vh",group:"medical",label:"Versorgung/ Anpassung von aufwändigen Hilfsmitteln",multiple:!1,options:["Nicht notwendig","Notwendig, eine Funktionseinheiten","Notwendig, zwei und mehr Funktionseinheiten"]},ptt:{component:"ptt",group:"medical",label:"Psycho-Trauma-Therapie",multiple:!1,options:["Nicht notwendig","Psycho-Therapie notwendig","Psycho-Trauma-Therapie notwendig"]},ta:{component:"ta",group:"medical",label:"Therapeutischer Aufwand: Physio-, Ergo- und Sporttherapie…",multiple:!1,options:["Es liegt keine zu rehabilitierende Körperregion vor","Es liegt eine zu rehabilitierende Körperregion vor","Es liegen mehrere zu rehabilitierende Körperregion vor. Die Rehabilitation kann überwiegend in Form von Gruppentherapien erfolgen","Aufgrund der Ausprägung der Funktioinsdefizite und / oder der Anzahl der Verletzungen besteht ein hoher Einzeltherapiebedarf"]}},M={medical:{name:"Trauma Reha Kriterien",components:{frb:[{crit:"D",score:0},{crit:"D",score:5},{crit:"D",score:10},{crit:"C1",score:5},{crit:"C2",score:15},{crit:"AB",score:50}],md:[{crit:"D",score:0},{crit:"D",score:5},{crit:"C1",score:5},{crit:"AB",score:50}],st:[{crit:"D",score:0},{crit:"D",score:10},{crit:"C1",score:5},{crit:"C2",score:15}],wm:[{crit:"D",score:0},{crit:"D",score:10},{crit:"C1",score:5},{crit:"C2",score:15}],vh:[{crit:"D",score:0},{crit:"C1",score:5},{crit:"C2",score:15}],ta:[{crit:"D",score:0},{crit:"D",score:5},{crit:"D",score:10},{crit:"C1",score:5}],ptt:[{crit:"D",score:0},{crit:"D",score:5},{crit:"C1",score:5}]},footnotes:[]}},P=Object.assign.apply(Object,[{}].concat(Object(N["a"])(Object.values(M).map(function(t){return t.components})))),I=Object.keys(P);function z(){var t=this;this.a={lab:"",diagnosis:"",date:"",dateofbirth:"",dateofaccident:"",phase:""},I.forEach(function(e){L[e].multiple?t.a[e]=[]:t.a[e]=0})}function K(t){var e=new z;return e.a=Object(B["a"])({},t.a),e}function W(t,e){var n=!0,a={crit:null,key:null},i={C1:35,C2:35,AB:30},r={C1:2,C2:1,AB:0};I.forEach(function(t){var i=e[t],o=P[t][i].crit;"D"!==o&&((!a.crit||r[a.crit]<r[o])&&(a.crit=o,a.key=t),n=!1)});var o=P[t],s=o[e[t]].score;return n||a.key!==t||(s+=i[a.crit]),s}function J(t){var e="";return Object.entries(M).forEach(function(n){var a=Object(F["a"])(n,2),i=a[0],r=a[1];t in r.components&&(e=i)}),e}function R(t){var e=0;return I.forEach(function(n){Object.prototype.hasOwnProperty.call(t.a,n)?e+=W(n,t.a):t.a[n]=0}),100-e}a["a"].use($["a"]);var U=new E["a"]({storage:window.localStorage}),G=new $["a"].Store({state:{list:[],lastVisited:0,pagination:{descending:!1,page:1,rowsPerPage:-1,sortBy:"",totalItems:0}},mutations:{push:function(t,e){t.list.push(e)},set:function(t,e){a["a"].set(t.list,e.index,e.obj)},removeElement:function(t,e){t.list.splice(e,1)},cloneElement:function(t,e){t.list.splice(e+1,0,K(t.list[e]))},clear:function(t){t.list=[]},visit:function(t,e){t.lastVisited=e},updatePagination:function(t,e){t.pagination=e}},plugins:[U.plugin],strict:!1}),H=(n("7f7f"),n("c5f6"),n("ee1d"),n("8c4f")),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{id:"trstable",headers:t.computedHeaders,items:t.rows,"no-data-text":"Keine Einträge","disable-initial-sort":!0,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",{class:{"blue lighten-5":e.item.selected},on:{click:function(n){return t.$router.push({name:"detail",params:{id:e.item.id}})}}},[t.$vuetify.breakpoint.xs?t._e():n("td",{staticClass:"text-xs-right"},[t._v("\n          "+t._s((t.pagination.page-1)*t.pagination.rowsPerPage+e.index+1)+"\n        ")]),n("td",[e.item.selected?n("span",{attrs:{id:"selected"}}):t._e(),t._v("\n          "+t._s(e.item.label||"Nr. "+(e.item.id+1))+"\n        ")]),t.$vuetify.breakpoint.mdAndDown?t._e():n("td",[t._v("\n          "+t._s(t.formatDate(e.item.dateofbirth))+"\n        ")]),t.$vuetify.breakpoint.smAndDown?t._e():n("td",[t._v("\n          "+t._s(e.item.diag1)+"\n        ")]),t.$vuetify.breakpoint.mdAndDown?t._e():n("td",[t._v("\n          "+t._s(e.item.diag2)+"\n        ")]),t.$vuetify.breakpoint.lgAndDown?t._e():n("td",[t._v("\n          "+t._s(e.item.diag3)+"\n        ")]),t.$vuetify.breakpoint.mdAndDown?t._e():n("td",[t._v("\n          "+t._s(t.formatDate(e.item.date))+"\n        ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n          "+t._s(e.item.score)+"\n        ")]),t.$vuetify.breakpoint.xs?t._e():n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){return n.stopPropagation(),t.cloneGoTo(e.item.id)}}},[t._v("\n            file_copy\n          ")])],1),n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){return n.stopPropagation(),t.removeElement(e.item.id)}}},[t._v("\n            clear\n          ")])],1)])]}}])}),n("v-btn",{staticClass:"white--text elevation-5 mt-3 toplevel sticky",attrs:{round:"",color:"pink",to:"/detail/"+t.length}},[n("v-icon",[t._v("add")]),n("span",{staticClass:"ml-1"},[t._v("Neuer Eintrag")])],1)],1)},Z=[],X=(n("28a5"),n("340b")),q={data:function(){return{headers:[{text:"Zeile",value:"id",sortable:!1,hide:"xs"},{text:"Kennung",value:"label"},{text:"Geburtsdatum",value:"dateofbirth",hide:"mdAndDown"},{text:"Diagnose 1",value:"diag1",hide:"smAndDown"},{text:"Diagnose 2",value:"diag2",hide:"mdAndDown"},{text:"Diagnose 3",value:"diag3",hide:"lgAndDown"},{text:"Datum",value:"date",hide:"mdAndDown"},{text:"Score",value:"score"},{text:"Duplizieren",value:"id",hide:"xs",sortable:!1},{text:"Entfernen",value:"id",sortable:!1}]}},methods:Object(B["a"])({},Object($["b"])(["removeElement"]),{cloneGoTo:function(t){this.$store.commit("cloneElement",t),this.$router.push({name:"cloned",params:{id:t+1,cloned:!0}})},parseDate:function(t){var e=t.split("."),n=Object(F["a"])(e,3),a=n[0],i=n[1],r=n[2];return a&&i&&r?new Date(r,i-1,a):null},formatDate:function(t){return t?Object(X["format"])(t,"DD.MM.YYYY"):null}}),computed:Object(B["a"])({computedHeaders:function(){var t=this;return this.headers.filter(function(e){return!e.hide||!t.$vuetify.breakpoint[e.hide]})}},Object($["c"])({lastVisited:"lastVisited"}),{length:function(){return this.$store.state.list.length},rows:function(){var t=this,e=[];return this.$store.state.list.forEach(function(n,a){var i={};i.id=a,i.label=n.a.lab,i.dateofbirth=t.parseDate(n.a.dateofbirth);var r=n.a.diagnosis.split("\n"),o=Object(F["a"])(r,3);i.diag1=o[0],i.diag2=o[1],i.diag3=o[2],i.date=t.parseDate(n.a.date),i.score=R(n),i.selected=a===t.lastVisited,e.push(i)}),e},pagination:{get:function(){return this.$store.state.pagination},set:function(t){this.$store.commit("updatePagination",t)}}})},Q=q,tt=(n("1dea"),n("a523")),et=n("8fea"),nt=Object(f["a"])(Q,Y,Z,!1,null,null,null),at=nt.exports;v()(nt,{VBtn:h["a"],VContainer:tt["a"],VDataTable:et["a"],VIcon:m["a"]});var it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-form",[n("GeneralInformation",{attrs:{id:t.id,cloned:t.cloned}}),n("DisplayScore",{attrs:{id:t.id}}),n("ClinicalTabs",{attrs:{id:t.id}})],1)],1)],1)},rt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},t._l(t.areas,function(e,a){return n("span",{key:a},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ClinicalArea",{attrs:{selects:e.selects,scoreArea:t.scoreAreas[a],value:t.trs.a,color:t.color},on:{input:function(e){return t.assign(e)}}})],1)],1)],1)}),0)},st=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.selects,function(e){return n("v-layout",{key:e[0].component,attrs:{row:"",wrap:""}},t._l(e,function(e){return n("v-flex",{key:e.component,attrs:{xs12:"",sm12:"",md6:""}},[n("v-select",{attrs:{value:t.value?t.value[e.component]:null,items:e.items,label:e.label,multiple:e.multiple,color:t.color,dense:""},on:{input:function(n){return t.$emit("input",{key:e.component,value:n})}}})],1)}),1)}),t._l(t.scoreArea.footnotes,function(e,a){return n("v-layout",{key:a,attrs:{row:""}},[n("v-flex",{staticClass:"caption",attrs:{xs12:""}},[t._v(t._s(e)+" ")])],1)})],2)},ct=[],ut={data:function(){return{}},props:{selects:Array,scoreArea:Object,value:Object,color:String}},dt=ut,ft=n("0e8f"),pt=n("a722"),vt=n("b56d"),ht=Object(f["a"])(dt,lt,ct,!1,null,null,null),mt=ht.exports;v()(ht,{VFlex:ft["a"],VLayout:pt["a"],VSelect:vt["a"]});var bt={computed:{trs:{get:function(){var t=this.id;if(t>=this.$store.state.list.length){var e=new z;this.$store.commit("push",e),t=this.$store.state.list.length-1}return this.$store.commit("visit",t),this.$store.state.list[t]},set:function(t){this.$store.commit("set",{index:this.id,obj:t})}},patientAge:function(){if(this.trs.a.dateofbirth){var t=this.trs.a.dateofbirth.split("."),e=Object(F["a"])(t,3),n=e[0],a=e[1],i=e[2];if(n&&a&&i&&4===i.length){var r=new Date(i,a-1,n-1,12,0);return Object(X["differenceInYears"])(new Date,r)}}return null}}};function gt(t,e){var n=[];while(t.length)n.push(t.splice(0,e));return n}function _t(t){var e=[];return t.forEach(function(t){var n={};Object.assign(n,t),n.items=[],n.options.forEach(function(t,e){n.items.push({text:t,value:e})}),e.push(n)}),e}var xt=_t(Object.values(L)),yt=["indigo darken-1","cyan darken-1","orange darken-1"],wt={data:function(){return{active:0,scoreAreas:M,areas:{medical:{selects:gt(xt.filter(function(t){return"medical"===t.group}),2)}}}},computed:{color:function(){return yt[this.active]}},mixins:[bt],props:{id:Number},methods:{assign:function(t){var e=K(this.trs);e.a[t.key]=t.value,this.trs=e}},components:{ClinicalArea:mt}},kt=wt,Dt=Object(f["a"])(kt,ot,st,!1,null,null,null),At=Dt.exports;v()(Dt,{VCard:D["a"],VCardText:A["b"],VLayout:pt["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{xs12:"",column:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-alert",{attrs:{dismissible:"",outline:"",type:"info"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n        Der Eintrag wurde Dupliziert. Bitte ändern Sie die Kennung.\n      ")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{ref:"label",attrs:{label:"Kennung",value:t.trs.a.lab},on:{input:function(e){return t.assign("lab",e)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",value:t.trs.a.date,label:"Datum","prepend-icon":"event"},on:{input:function(e){return t.dateInputHelper("date",e)}},slot:"activator"}),n("v-date-picker",{attrs:{value:t.parseDate(t.trs.a.date),"no-title":"",locale:"de-de","first-day-of-week":"1"},on:{input:function(e){t.assignClose("date",t.formatDate(e))}}})],1)],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:t.trs.a.dateofaccident,label:"Unfalltag","prepend-icon":"event",hint:"Format TT.MM.JJJJ"},on:{input:function(e){return t.dateInputHelper("dateofaccident",e)}}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-select",{attrs:{value:t.trs.a.phase,items:t.phaseOptions,label:"Klinisch Reha"},on:{input:function(e){return t.assign("phase",e)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:t.trs.a.dateofbirth,label:"Geburtsdatum","prepend-icon":"event",hint:"Format TT.MM.JJJJ"},on:{input:function(e){return t.dateInputHelper("dateofbirth",e)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:t.patientAge,label:"Alter","prepend-icon":"none",readonly:""}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{label:"Diagnose(n)",value:t.trs.a.diagnosis,hint:"Eine Zeile pro Diagnose"},on:{input:function(e){return t.assign("diagnosis",e)}}})],1)],1)],1)],1)],1)},Ct=[],Ot=(n("f576"),n("4917"),{data:function(){return{alert:this.cloned,menu:!1,phaseSelected:null,phaseOptions:["Phase A","Phase B","Phase C","Phase D","Phase E","Phase F"]}},mixins:[bt],props:{id:Number,cloned:{type:Boolean,default:!1}},methods:{save:function(t){this.$refs.menu.save(t)},assign:function(t,e){var n=K(this.trs);n.a[t]=e,this.trs=n},assignClose:function(t,e){this.menu=!1,this.assign(t,e)},dateInputHelper:function(t,e){(e.match(/^\d\d$/)||e.match(/^\d\d\.\d\d$/))&&(e+="."),this.assign(t,e)},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(F["a"])(e,3),a=n[0],i=n[1],r=n[2];return"".concat(r,".").concat(i,".").concat(a)},parseDate:function(t){if(!t)return null;var e=t.split("."),n=Object(F["a"])(e,3),a=n[0],i=n[1],r=n[2];return"".concat(r,"-").concat(i.padStart(2,"0"),"-").concat(a.padStart(2,"0"))}},mounted:function(){this.cloned&&this.$refs.label.focus()}}),St=Ot,Tt=n("0798"),jt=n("2e4b"),$t=n("e449"),Et=n("2677"),Ft=n("a844"),Bt=Object(f["a"])(St,Vt,Ct,!1,null,null,null),Nt=Bt.exports;v()(Bt,{VAlert:Tt["a"],VCard:D["a"],VCardText:A["b"],VDatePicker:jt["a"],VFlex:ft["a"],VLayout:pt["a"],VMenu:$t["a"],VSelect:vt["a"],VTextField:Et["a"],VTextarea:Ft["a"]});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("div",{staticClass:"v-table__overflow"},[n("table",{staticClass:"v-table v-datatable theme--light"},[n("tbody",[t._l(t.scoreAreas,function(e,a){return n("DisplayArea",{key:a,attrs:{values:t.trs.a,area:e,areaKey:a}})}),n("tr",[t.$vuetify.breakpoint.smAndDown?t._e():n("td",{attrs:{colspan:"10"}}),n("td",{staticClass:"text-xs-right font-weight-bold"},[t._v("Score:")]),n("td",{staticClass:"text-xs-right font-weight-bold"},[t._v(t._s(t.score))]),n("td")])],2)])])])},Mt=[],Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"font-weight-bold text-xs-right"},[t._v("\n    "+t._s(t.displayArea.name)+"\n  ")]),t.$vuetify.breakpoint.smAndDown?t._e():[10-t.displayArea.cols.length>0?n("td",{staticClass:"font-weight-bold",attrs:{colspan:10-t.displayArea.cols.length}}):t._e(),t._l(t.displayArea.cols,function(e){return n("td",{key:e.key,staticClass:"text-xs-right"},[t.displayArea.cols.length>1?n("span",[t._v("\n        "+t._s(e.key)+": "+t._s(e.score)+"\n      ")]):t._e()])})],n("td",{staticClass:"text-xs-right"},[t._v(t._s(t.displayArea.scoreSum))]),n("td")],2)},It=[],zt={data:function(){return{scoreAreas:M}},computed:{displayArea:function(){var t=this,e={name:this.area.name,cols:[],scoreSum:0},n=Object.keys(this.area.components);return n.forEach(function(n){var a=W(n,t.values);e.cols.push({key:n,score:a}),e.scoreSum+=a}),e}},props:{values:Object,area:Object,areaKey:String}},Kt=zt,Wt=Object(f["a"])(Kt,Pt,It,!1,null,null,null),Jt=Wt.exports,Rt={data:function(){return{scoreAreas:M}},computed:{score:function(){return R(this.trs)}},mixins:[bt],props:{id:Number,print:{type:Boolean,default:!1}},methods:{},components:{DisplayArea:Jt}},Ut=Rt,Gt=Object(f["a"])(Ut,Lt,Mt,!1,null,null,null),Ht=Gt.exports;v()(Gt,{VLayout:pt["a"]});var Yt={data:function(){return{}},props:{id:Number,cloned:{type:Boolean,default:!1}},components:{GeneralInformation:Nt,ClinicalTabs:At,DisplayScore:Ht}},Zt=Yt,Xt=n("4bd4"),qt=Object(f["a"])(Zt,it,rt,!1,null,null,null),Qt=qt.exports;v()(qt,{VContainer:tt["a"],VForm:Xt["a"]});var te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{to:"/",icon:""}},[t.icon?n("v-icon",[t._v(t._s(t.icon))]):t._e()],1)},ee=[],ne={data:function(){return{}},props:{icon:String}},ae=ne,ie=Object(f["a"])(ae,te,ee,!1,null,null,null),re=ie.exports;v()(ie,{VBtn:h["a"],VIcon:m["a"]});var oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-title",[n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",[t._v("more_vert")])],1)]}}])},[n("v-list",[n("v-list-tile",{on:{click:t.newList}},[n("v-list-tile-title",[t._v("Neu")])],1),n("ChooseFile",{attrs:{tag:"openFile"},on:{input:function(e){return t.readFile(e)}}},[t._v("\n        Öffnen\n      ")]),n("ChooseFile",{attrs:{tag:"importFile"},on:{input:function(e){return t.readFile(e)}}},[t._v("\n        Importieren\n      ")]),n("v-list-tile",{on:{click:t.saveFile}},[n("v-list-tile-title",[t._v("Speichern")])],1),n("v-list-tile",{on:{click:t.exportXLSX}},[n("v-list-tile-title",[t._v("Als Excel speichern")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.newListDialog,callback:function(e){t.newListDialog=e},expression:"newListDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Neue Liste")])]),n("v-card-text",[t._v("\n        Wollen Sie die bestehende Liste tatsächlich löschen?\n      ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.newListDialog=!1}}},[t._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.clearList}},[t._v("Ja")])],1)],1)],1)],1)},se=[],le=(n("34ef"),n("21a6")),ce=(n("a481"),n("1146")),ue=n.n(ce);function de(t){return t.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function fe(t){return t.replace(/^([A-Z])/,"$$$1")}function pe(t){return fe(de(t))}function ve(t,e,n,a,i){var r,o=ue.a.utils.encode_cell({c:e,r:n}),s=[];Array.isArray(i)?(s.push(0),i.forEach(function(t){r=ue.a.utils.encode_cell({c:parseInt(t,10)+1,r:I.indexOf(a)+1}),s.push(pe(r))})):(r=ue.a.utils.encode_cell({c:parseInt(i,10)+1,r:I.indexOf(a)+1}),s.push(pe(r))),t[o]={f:s.join("+"),t:"n"}}function he(t){var e=/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/,n=t.match(e);return n?new Date(n[3],n[2]-1,n[1]).toISOString():null}var me=function(t){var e=[],n=[],a=["Kennung","Klinisch Reha","Datum","Geburtsdatum","Alter","Unfalltag","Score"].concat(I);e.push(["Score Komponenten"]),I.forEach(function(t){e.push([t].concat(P[t]))}),e.push([]),Array.prototype.push.apply(a,["Diagnose 1","Diagnose 2","Diagnose 3","Diagnose 4","Diagnose 5"]),e.push(n),e.push(a);var i,r,o,s=a.length-1,l=ue.a.utils.aoa_to_sheet(e),c=Object.keys(P).length+4;t.forEach(function(t){i=0;var e=ue.a.utils.encode_cell({c:i,r:c});l[e]={v:t.a.lab,t:"s"},i+=1,e=ue.a.utils.encode_cell({c:i,r:c}),l[e]={v:t.a.phase,t:"s"},i+=1,t.a.date&&(e=ue.a.utils.encode_cell({c:i,r:c}),l[e]={v:he(t.a.date),t:"d"}),i+=1,t.a.dateofbirth&&(e=ue.a.utils.encode_cell({c:i,r:c}),l[e]={v:he(t.a.dateofbirth),t:"d"}),i+=1,o=e,t.a.dateofbirth&&(e=ue.a.utils.encode_cell({c:i,r:c}),l[e]={f:"DATEDIF(".concat(o,',TODAY(),"y")'),t:"n"}),i+=1,t.a.dateofaccident&&(e=ue.a.utils.encode_cell({c:i,r:c}),l[e]={v:he(t.a.dateofaccident),t:"d"}),r=i+1,i+=2,I.forEach(function(e){ve(l,i,c,e,t.a[e]),i+=1}),e=ue.a.utils.encode_cell({c:i,r:c});var n=i;t.a.diagnosis&&t.a.diagnosis.split("\n").forEach(function(t){e=ue.a.utils.encode_cell({c:n,r:c}),l[e]={v:t,t:"s"},s=Math.max(s,n),n+=1});var a=ue.a.utils.encode_range({s:{c:r+1,r:c},e:{c:i-1,r:c}});e=ue.a.utils.encode_cell({c:r,r:c}),l[e]={f:"100 - SUM(".concat(a,")"),t:"n"},c+=1}),l["!ref"]=ue.a.utils.encode_range({s:{c:0,r:0},e:{c:s,r:c}});var u=ue.a.utils.book_new();ue.a.utils.book_append_sheet(u,l,"OTRS");var d={bookType:"xlsx",bookSST:!1,type:"binary",cellDates:!0};return ue.a.write(u,d)},be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{on:{click:t.openFileDialog}},[n("v-list-tile-title",[t._t("default")],2),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.showFileDialog,callback:function(e){t.showFileDialog=e},expression:"showFileDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("\n          Datei "),n("span",{staticClass:"text-lowercase"},[t._t("default")],2)])]),n("v-card-text",[n("v-text-field",{attrs:{label:"Wählen Sie eine Datei...","prepend-icon":"storage"},on:{click:t.pickFile},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),n("input",{ref:"fileinput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.selectFile}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.showFileDialog=!1}}},[t._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.chooseFile}},[t._t("default")],2)],1)],1)],1)],1)},ge=[],_e={data:function(){return{file:null,fileName:"",showFileDialog:!1}},methods:{openFileDialog:function(){var t=this;setTimeout(function(){t.showFileDialog=!0})},pickFile:function(){this.$refs.fileinput.click()},selectFile:function(t){var e=t.target.files;if(e){this.fileName=e[0].name;var n=Object(F["a"])(e,1);this.file=n[0]}},chooseFile:function(){this.showFileDialog=!1,this.$emit("input",{file:this.file,tag:this.tag})}},props:{tag:String}},xe=_e,ye=n("12b2"),we=n("169a"),ke=n("ba95"),De=n("5d23"),Ae=Object(f["a"])(xe,be,ge,!1,null,null,null),Ve=Ae.exports;function Ce(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),a=0;a<t.length;a+=1)n[a]=255&t.charCodeAt(a);return e}function Oe(t){var e=new z,n={st:[0,0,0,1,2],md:[0,0,1,2],wm:[0,1,2,3],vh:[0,1,2],or:[0,1,2],mo:[0,0,0,1,2,2,3,3],ak:[0,0,1,3,3,3,3,3],be:[]};return e.a.lab=t.a.lab,e.a.diagnosis=t.a.diagnosis,e.a.date=t.a.date,e.a.dateofbirth=t.a.dateofbirth,e.a.dateofaccident=t.a.dateofaccident,e.a.phase=t.a.phase,I.forEach(function(n){if(n in t.a)if(Array.isArray(t.a[n])){var a=[];t.a[n].forEach(function(t){a.push(parseInt(t,10))}),e.a[n]=a}else L[n].multiple?e.a[n]=[]:e.a[n]=parseInt(t.a[n],10)}),"ms"in t&&Object.keys(n).forEach(function(a){if("ak"===a)e.a.ak=n[a][t.ms.length],2===t.ms.length&&(t.ms[0].ge>2||t.ms[1].ge>2)&&(e.a.ak=2);else if("be"===a){var i=t.ms.filter(function(t){return t.region>4&&2===t.be});if(2===i.length)e.a.be=3;else if(1===i.length){e.a.be=1;var r=t.ms.filter(function(t){return t.region<=4&&2===t.be});r.length>0&&(e.a.be=2)}}else e.a[a]=n[a][t.a[a]]}),e}v()(Ae,{VBtn:h["a"],VCard:D["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:ye["a"],VDialog:we["a"],VListTile:ke["a"],VListTileTitle:De["b"],VSpacer:g["a"],VTextField:Et["a"]});var Se={data:function(){return{file:null,fileName:"",openFileDialog:!1,newListDialog:!1}},computed:{dateString:function(){return Object(X["format"])(new Date,"YYYYMMDDHHmm")}},methods:{readFile:function(t){var e=this;if(t.file){var n=new FileReader;n.addEventListener("loadend",function(){var t=JSON.parse(n.result);t.forEach(function(t){e.$store.commit("push",Oe(t))})}),"openFile"===t.tag&&this.$store.commit("clear"),n.readAsText(t.file),this.$router.push({name:"list"})}},saveFile:function(){var t=new Blob([JSON.stringify(this.$store.state.list,null,2)],{type:"application/json"});Object(le["saveAs"])(t,"trs_".concat(this.dateString,".json"))},newList:function(){this.$store.state.list.length>0&&(this.newListDialog=!0)},clearList:function(){this.$store.commit("clear"),this.newListDialog=!1,this.$router.push({name:"list"})},exportXLSX:function(){var t=me(this.$store.state.list);Object(le["saveAs"])(new Blob([Ce(t)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),"trs_".concat(this.dateString,".xlsx"))}},components:{ChooseFile:Ve}},Te=Se,je=n("8860"),$e=Object(f["a"])(Te,oe,se,!1,null,null,null),Ee=$e.exports;v()($e,{VBtn:h["a"],VCard:D["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:ye["a"],VDialog:we["a"],VIcon:m["a"],VList:je["a"],VListTile:ke["a"],VListTileTitle:De["b"],VMenu:$t["a"],VSpacer:g["a"],VToolbarTitle:S["b"]});var Fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-title",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",lazy:"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",[t._v("print")])],1)]}}]),model:{value:t.printDialog,callback:function(e){t.printDialog=e},expression:"printDialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.printDialog=!1}}},[n("v-icon",[t._v("close")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){return t.print()}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("print")]),t._v("\n            Drucken\n          ")],1)],1)],1),n("div",{ref:"printArea"},[n("v-container",{attrs:{"grid-list-lg":""}},[n("h3",[t._v("Trauma-Reha-Score ")]),n("h1",[t._v(t._s(t.trs.a.lab))]),t.trs.a.date?n("p",[t._v("Datum: "+t._s(t.trs.a.date))]):t._e(),t.trs.a.dateofbirth?n("div",[n("p",[t._v("Geburtsdatum: "+t._s(t.trs.a.dateofbirth))]),n("p",[t._v("Alter: "+t._s(t.patientAge)+" Jahre")])]):t._e(),t.trs.a.dateofaccident?n("p",[t._v("Unfalltag: "+t._s(t.trs.a.dateofaccident))]):t._e(),t.trs.a.diagnosis?n("p",[t._v("Diagnose(n): "+t._s(t.trs.a.diagnosis))]):t._e(),n("DisplayScore",{attrs:{id:t.id,print:""}}),t._l(t.legend,function(e,a){return n("div",{key:a},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"offset-xs4":"",xs8:"","mt-5":""}},[n("h3",[t._v(t._s(t.scoreAreas[a].name))])])],1),t._l(e,function(e,a){return n("v-layout",{key:"a"+a,attrs:{row:""}},[n("v-flex",{staticClass:"font-weight-bold",attrs:{xs4:""}},[t._v("\n                "+t._s(e.label)+"\n              ")]),n("v-flex",{attrs:{xs8:""}},[Array.isArray(e.selected)?n("div",t._l(e.selected,function(e,a){return n("div",{key:a},[t._v("\n                    "+t._s(e)),n("br")])}),0):n("div",{domProps:{innerHTML:t._s(e.selected)}})])],1)}),t._l(t.scoreAreas[a].footnotes,function(e,a){return n("v-layout",{key:"b"+a,attrs:{row:""}},[n("v-flex",{staticClass:"caption",attrs:{xs12:""}},[t._v(t._s(e)+" ")])],1)})],2)})],2)],1)],1)],1)],1)},Be=[],Ne=(n("5df3"),n("1c4c"),n("3748"));function Le(t,e,n){if(e in L){var a;a=Array.isArray(n)?n.map(function(t){return L[e].options[t]}):L[e].options[n],"ua"===e&&(Array.isArray(n)&&0===n.length||0===n)&&(a="Selbstständig");var i=J(e);t[i].push({label:"".concat(L[e].label," (").concat(e.toUpperCase(),")"),selected:a})}}var Me={data:function(){return{printDialog:!1,scoreAreas:M}},computed:{legend:function(){var t={};return Object.keys(M).forEach(function(e){t[e]=[]}),Object.entries(this.trs.a).forEach(function(e){var n=Object(F["a"])(e,2),a=n[0],i=n[1];Le(t,a,i)}),t}},mixins:[bt],props:{id:Number},methods:{print:function(){var t=document.getElementsByTagName("style");this.d.print(this.$refs.printArea,Array.from(t,function(t){return t.innerHTML}))}},mounted:function(){this.d=new Ne["Printd"]},components:{DisplayScore:Ht}},Pe=Me,Ie=(n("9485"),Object(f["a"])(Pe,Fe,Be,!1,null,null,null)),ze=Ie.exports;function Ke(t){var e=parseInt(t,10);return Number.isNaN(e)?0:e}function We(t){return{id:Ke(t.params.id),cloned:!1}}function Je(t){return{id:Ke(t.params.id),cloned:!0}}v()(Ie,{VBtn:h["a"],VCard:D["a"],VContainer:tt["a"],VDialog:we["a"],VFlex:ft["a"],VIcon:m["a"],VLayout:pt["a"],VSpacer:g["a"],VToolbar:O["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]}),a["a"].use(H["a"]);var Re=new H["a"]({base:"",routes:[{path:"/",name:"list",components:{default:at,context:Ee},props:{default:null}},{path:"/detail/:id",name:"detail",components:{default:Qt,navigation:re,context:ze},props:{default:We,context:We,navigation:{icon:"arrow_back"}}},{path:"/cloned/:id",name:"cloned",components:{default:Qt,navigation:re,context:ze},props:{default:Je,context:Je,navigation:{icon:"arrow_back"}}}],scrollBehavior:function(t){return"list"===t.name?{selector:"#selected",offset:{x:0,y:100}}:{x:0,y:0}}}),Ue=n("9483");Object(Ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(t){setInterval(function(){t.update()},36e5)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,a["a"].config.performance=!0,new a["a"]({store:G,router:Re,render:function(t){return t(j)}}).$mount("#app")},"5b6d":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".snack[data-v-1ac8f6d4] .v-snack__content{padding-right:16px}",""])},"5d32":function(t,e,n){var a=n("d88d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("255d1ca0",a,!0,{sourceMap:!1,shadowMode:!1})},"755d":function(t,e,n){"use strict";var a=n("b25f"),i=n.n(a);i.a},9485:function(t,e,n){"use strict";var a=n("5d32"),i=n.n(a);i.a},b25f:function(t,e,n){var a=n("5b6d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("64bd8282",a,!0,{sourceMap:!1,shadowMode:!1})},d88d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"@media print{body{width:800px!important;font-family:sans-serif}}",""])},f66b:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}.toplevel{z-index:1}",""])},fc22:function(t,e,n){var a=n("f66b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("3a2e7f46",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.640cdb9a.js.map