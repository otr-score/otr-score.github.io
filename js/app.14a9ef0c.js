(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},1161:function(e,t,n){"use strict";var a=n("2dbe"),i=n.n(a);i.a},"1dea":function(e,t,n){"use strict";var a=n("3ddc"),i=n.n(a);i.a},2:function(e,t){},2007:function(e,t,n){"use strict";var a=n("f198"),i=n.n(a);i.a},"206d":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}",""])},2099:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-btn{text-transform:none}",""])},"2dbe":function(e,t,n){var a=n("206d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("1442afe0",a,!0,{sourceMap:!1,shadowMode:!1})},3:function(e,t){},"3ddc":function(e,t,n){var a=n("2099");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("0790872e",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=(n("d1e7"),n("d4b8"),n("bb71")),r=(n("da64"),n("8e29"));a["a"].use(i["a"],{iconfont:"md",lang:{locales:{de:r["a"]},current:"de"}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{color:"blue lighten-1",dark:""}},[n("v-toolbar-title",{staticClass:"headline"},[e._v("\n      Trauma-Reha-Score\n    ")]),n("v-spacer"),n("FileMenu")],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{height:"auto",dark:""}},[n("v-card",{staticClass:"blue darken-4 white--text text-xs-right flex",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"pa-3"},[n("p",{staticClass:"mb-1"},[e._v("\n          AK Traumarehabilitation Sektion Rehabilitation -\n          Physikalische Therapie der DGOU\n        ")]),n("p",{staticClass:"ma-0"},[e._v("\n          © Mathis Rosenhauer, Valentin Rosenhauer, Jörg Schmidt\n        ")])])],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar-title",[n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{icon:""}},a),[n("v-icon",[e._v("more_vert")])],1)]}}])},[n("v-list",[n("v-list-tile",{on:{click:e.newList}},[n("v-list-tile-title",[e._v("Neu")])],1),n("ChooseFile",{attrs:{tag:"openFile"},on:{input:function(t){return e.readFile(t)}}},[e._v("\n        Öffnen\n      ")]),n("ChooseFile",{attrs:{tag:"importFile"},on:{input:function(t){return e.readFile(t)}}},[e._v("\n        Importieren\n      ")]),n("v-list-tile",{on:{click:e.saveFile}},[n("v-list-tile-title",[e._v("Speichern")])],1),n("v-list-tile",{on:{click:e.exportXLSX}},[n("v-list-tile-title",[e._v("Als Excel speichern")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.newListDialog,callback:function(t){e.newListDialog=t},expression:"newListDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Neue Liste")])]),n("v-card-text",[e._v("\n        Wollen Sie die bestehende Liste tatsächlich löschen?\n      ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.newListDialog=!1}}},[e._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.clearList}},[e._v("Ja")])],1)],1)],1)],1)},c=[],u=(n("456d"),n("ac6a"),n("34ef"),n("21a6")),d=n("340b"),f=n("768b"),p=(n("ffc1"),n("cebc")),h=(n("8615"),n("75fc")),v={ak:{component:"ak",group:"medical",label:"Anzahl der zu rehabiltierenden Körperregionen*",multiple:!1,options:["Es liegt eine zu rehabilitierende Körperregion vor","Es liegen zwei zu rehabilitierende Körperregionen vor. Die aktive Beweglichkeit liegt in einer oder in beiden Regionen über dem hälftigen normalen Bewegungsumfang**","Es liegen drei zu rehabilitierende Körperregionen vor. Die aktive Beweglichkeit liegt in allen Regionen über dem hälftigen normalen Bewegungsumfang**","Es liegen zwei oder mehr zu rehabilitierende Körperregionen vor bzw. die aktive Beweglichkeit liegt in zwei Regionen unter dem hälftigen normalen Bewegungsumfang**"]},st:{component:"st",group:"medical",label:"Schmerztherapie",multiple:!1,options:["Keine oder mit WHO Stufe 1-3 gut behandelbare Schmerzen","Komplexe, aufwändig zu behandelnde Schmerzsituation","Minimalinvasive Schmerztherapie notwendig (Ganglienblockade, Nervenblockade, Katheter Anlage, wirbelsäulennahe Infiltrationen)"]},md:{component:"md",group:"medical",label:"Medizinische Therapie/Diagnostikbedarf",multiple:!1,options:["Nicht notwendig","Spezielle Verlaufsuntersuchungen (Herzecho, Duplex Gefäße, LZ-RR, LZ-EKG, Lungenfunktionsprüfung etc.) notwendig","Schneller Zugang zu anderen Fachdisziplinen u. / o. Großgerätediagnostik notwendig  / iv-Therapie notwendig,  isolierpflichtiger Patient"]},wm:{component:"wm",group:"medical",label:"Wundmanagement***",multiple:!1,options:["Nicht notwendig","Notwendig, ein Bereich","Notwendig, zwei Bereiche","Notwendig, drei und mehr Bereiche"]},vh:{component:"vh",group:"medical",label:"Versorgung/ Anpassung von aufwändigen Hilfsmitteln z.B Exoprothesen***",multiple:!1,options:["Nicht notwendig","Eine Funktionseinheit","Zwei und mehr Funktionseinheiten"]},ps:{component:"ps",group:"medical",label:"Psychotherapie",multiple:!1,options:["Nicht notwendig","Psycho-Therapie notwendig","Psycho-Trauma-Therapie notwendig"]},fi:{component:"fi",group:"medical",label:"Frühreha-Index",multiple:!0,options:["Intensivmedizinisch überwachungspflichtiger Zustand","Absaugpflichtiges Tracheostoma","Intermittierende Beatmung","Beaufsichtigungspflichtige Orientierungsstörung (Verwirrtheit)","Beaufsichtigungspflichtige Verhaltensstörung (mit Eigen- und / oder Fremdgefährdung)","Schwere Verständigungsstörung","Beaufsichtigungspflichtige Schluckstörung"]},bi:{component:"bi",group:"medical",label:"Barthel-Index",options:["100 - 85","84 - 75","74 - 55","54 - 30","29 - 0"]}},m={medical:{name:"TRS",components:{ak:[10,15,20,25],st:[0,15,20],md:[0,5,15],wm:[0,5,15,20],vh:[0,15,20],ps:[0,5,15]},footnotes:["*Regionen: Kopf/HWS, Thorax/BWS, Abdomen/LWS/Becken, rechte Bein, linke Bein","**Es wird an den oberen Extremitäten Schulter/Oberarm, Ellenbogen/Unterarm und Handgelenk/Hand als eine Gelenkregion zusammengefasst. An den unteren Extremitäten werden Hüftgelenk/Oberschenkel, Kniegelenk/Unterschenkel und Sprunggelenke/Fuß als eine Gelenkregion gewertet. Es wird nur die Leitverletzung beurteilt bezogen auf die Bewegungsamplitude in der Sagitalebene. Bei Arthrodesen bzw. Ankylosen als Leitverletzung entscheidet der Lokalbefund bzw. der Funktionszustand der anschließenden Gelenke darüber, wie dieses Gelenkregion zu werten ist. Bei therapieintensivem Lokalbefund und/ oder Funktionszustand der anschließenden Gelenke, wird diese Region gewertet wie eine Leitverletzung mit Einschränkung der Beweglichkeit unter dem hälftigen normalen Bewegungsumfang. Anderenfalls wird diese Region entsprechend einer Leitverletzung mit einer aktiven Beweglichkeit über dem hälftigen normalen Bewegungsumfang  gewertet.","***Nach Amputationen steht in der Region entwerder das WM oder die VH im Vordergrund. Es wird deshalb nur WM oder VH gewertet"]},rehaindex:{name:"Frühreha-Index",components:{fi:[50,50,50,50,50,25,50]},footnotes:[]},barthelindex:{name:"Barthel-Index",components:{bi:[5,10,20,25,100]},footnotes:[]}},g=Object.assign.apply(Object,[{}].concat(Object(h["a"])(Object.values(m).map(function(e){return e.components})))),b=Object.keys(g);function _(){var e=this;this.a={lab:"",diagnosis:"",date:"",dateofbirth:"",dateofaccident:"",phase:""},b.forEach(function(t){v[t].multiple?e.a[t]=[]:e.a[t]=0})}function w(e){var t=new _;return t.a=Object(p["a"])({},e.a),t}function x(e,t){var n=g[e];if(Array.isArray(t)){var a=function(e,t){return e+n[t]};return t.reduce(a,0)}return n[t]}function k(e){var t="";return Object.entries(m).forEach(function(n){var a=Object(f["a"])(n,2),i=a[0],r=a[1];e in r.components&&(t=i)}),t}function y(e){var t=function(t,n){return t+x(n,e.a[n])};return 100-b.reduce(t,0)}n("28a5"),n("4917"),n("a481");var D=n("1146"),A=n.n(D);function V(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function S(e){return e.replace(/^([A-Z])/,"$$$1")}function O(e){return S(V(e))}function $(e,t,n,a,i){var r,o=A.a.utils.encode_cell({c:t,r:n}),s=[];Array.isArray(i)?(s.push(0),i.forEach(function(e){r=A.a.utils.encode_cell({c:parseInt(e,10)+1,r:b.indexOf(a)+1}),s.push(O(r))})):(r=A.a.utils.encode_cell({c:parseInt(i,10)+1,r:b.indexOf(a)+1}),s.push(O(r))),e[o]={f:s.join("+"),t:"n"}}function j(e){var t=/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/,n=e.match(t);return n?new Date(n[3],n[2]-1,n[1]).toISOString():null}var C=function(e){var t=[],n=[],a=["Kennung","Klinisch Reha","Datum","Geburtsdatum","Alter","Unfalltag","Score"].concat(b);t.push(["Score Komponenten"]),b.forEach(function(e){t.push([e].concat(g[e]))}),t.push([]),Array.prototype.push.apply(a,["Diagnose 1","Diagnose 2","Diagnose 3","Diagnose 4","Diagnose 5"]),t.push(n),t.push(a);var i,r,o,s=a.length-1,l=A.a.utils.aoa_to_sheet(t),c=Object.keys(g).length+4;e.forEach(function(e){i=0;var t=A.a.utils.encode_cell({c:i,r:c});l[t]={v:e.a.lab,t:"s"},i+=1,t=A.a.utils.encode_cell({c:i,r:c}),l[t]={v:e.a.phase,t:"s"},i+=1,e.a.date&&(t=A.a.utils.encode_cell({c:i,r:c}),l[t]={v:j(e.a.date),t:"d"}),i+=1,e.a.dateofbirth&&(t=A.a.utils.encode_cell({c:i,r:c}),l[t]={v:j(e.a.dateofbirth),t:"d"}),i+=1,o=t,e.a.dateofbirth&&(t=A.a.utils.encode_cell({c:i,r:c}),l[t]={f:"DATEDIF(".concat(o,',TODAY(),"y")'),t:"n"}),i+=1,e.a.dateofaccident&&(t=A.a.utils.encode_cell({c:i,r:c}),l[t]={v:j(e.a.dateofaccident),t:"d"}),r=i+1,i+=2,b.forEach(function(t){$(l,i,c,t,e.a[t]),i+=1}),t=A.a.utils.encode_cell({c:i,r:c});var n=i;e.a.diagnosis&&e.a.diagnosis.split("\n").forEach(function(e){t=A.a.utils.encode_cell({c:n,r:c}),l[t]={v:e,t:"s"},s=Math.max(s,n),n+=1});var a=A.a.utils.encode_range({s:{c:r+1,r:c},e:{c:i-1,r:c}});t=A.a.utils.encode_cell({c:r,r:c}),l[t]={f:"100 - SUM(".concat(a,")"),t:"n"},c+=1}),l["!ref"]=A.a.utils.encode_range({s:{c:0,r:0},e:{c:s,r:c}});var u=A.a.utils.book_new();A.a.utils.book_append_sheet(u,l,"OTRS");var d={bookType:"xlsx",bookSST:!1,type:"binary",cellDates:!0};return A.a.write(u,d)},E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-tile",{on:{click:e.openFileDialog}},[n("v-list-tile-title",[e._t("default")],2),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.showFileDialog,callback:function(t){e.showFileDialog=t},expression:"showFileDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("\n          Datei "),n("span",{staticClass:"text-lowercase"},[e._t("default")],2)])]),n("v-card-text",[n("v-text-field",{attrs:{label:"Wählen Sie eine Datei...","prepend-icon":"storage"},on:{click:e.pickFile},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),n("input",{ref:"fileinput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.selectFile}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.showFileDialog=!1}}},[e._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.chooseFile}},[e._t("default")],2)],1)],1)],1)],1)},T=[],F=(n("7f7f"),{data:function(){return{file:null,fileName:"",showFileDialog:!1}},methods:{openFileDialog:function(){var e=this;setTimeout(function(){e.showFileDialog=!0})},pickFile:function(){this.$refs.fileinput.click()},selectFile:function(e){var t=e.target.files;if(t){this.fileName=t[0].name;var n=Object(f["a"])(t,1);this.file=n[0]}},chooseFile:function(){this.showFileDialog=!1,this.$emit("input",{file:this.file,tag:this.tag})}},props:{tag:String}}),B=F,z=n("2877"),L=n("6544"),N=n.n(L),M=n("8336"),P=n("b0af"),I=n("99d9"),K=n("12b2"),R=n("169a"),G=n("ba95"),H=n("5d23"),J=n("9910"),Y=n("2677"),Z=Object(z["a"])(B,E,T,!1,null,null,null),U=Z.exports;function W(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a+=1)n[a]=255&e.charCodeAt(a);return t}function X(e){var t=new _,n={st:[0,0,0,1,2],md:[0,0,1,2],wm:[0,1,2,3],vh:[0,1,2],or:[0,1,2],mo:[0,0,0,1,2,2,3,3],ak:[0,0,1,3,3,3,3,3],be:[]};return t.a.lab=e.a.lab,t.a.diagnosis=e.a.diagnosis,t.a.date=e.a.date,t.a.dateofbirth=e.a.dateofbirth,t.a.dateofaccident=e.a.dateofaccident,t.a.phase=e.a.phase,b.forEach(function(n){if(n in e.a)if(Array.isArray(e.a[n])){var a=[];e.a[n].forEach(function(e){a.push(parseInt(e,10))}),t.a[n]=a}else v[n].multiple?t.a[n]=[]:t.a[n]=parseInt(e.a[n],10)}),"ms"in e&&Object.keys(n).forEach(function(a){if("ak"===a)t.a.ak=n[a][e.ms.length],2===e.ms.length&&(e.ms[0].ge>2||e.ms[1].ge>2)&&(t.a.ak=2);else if("be"===a){var i=e.ms.filter(function(e){return e.region>4&&2===e.be});if(2===i.length)t.a.be=3;else if(1===i.length){t.a.be=1;var r=e.ms.filter(function(e){return e.region<=4&&2===e.be});r.length>0&&(t.a.be=2)}}else t.a[a]=n[a][e.a[a]]}),t}N()(Z,{VBtn:M["a"],VCard:P["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:K["a"],VDialog:R["a"],VListTile:G["a"],VListTileTitle:H["b"],VSpacer:J["a"],VTextField:Y["a"]});var q={data:function(){return{file:null,fileName:"",openFileDialog:!1,newListDialog:!1}},computed:{dateString:function(){return Object(d["format"])(new Date,"YYYYMMDDHHmm")}},methods:{readFile:function(e){var t=this;if(e.file){var n=new FileReader;n.addEventListener("loadend",function(){var e=JSON.parse(n.result);e.forEach(function(e){t.$store.commit("push",X(e))})}),"openFile"===e.tag&&this.$store.commit("clear"),n.readAsText(e.file),this.$router.push({name:"list"})}},saveFile:function(){var e=new Blob([JSON.stringify(this.$store.state.list,null,2)],{type:"application/json"});Object(u["saveAs"])(e,"trs_".concat(this.dateString,".json"))},newList:function(){this.$store.state.list.length>0&&(this.newListDialog=!0)},clearList:function(){this.$store.commit("clear"),this.newListDialog=!1,this.$router.push({name:"list"})},exportXLSX:function(){var e=C(this.$store.state.list);Object(u["saveAs"])(new Blob([W(e)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),"trs_".concat(this.dateString,".xlsx"))}},components:{ChooseFile:U}},Q=q,ee=n("132d"),te=n("8860"),ne=n("e449"),ae=n("2a7f"),ie=Object(z["a"])(Q,l,c,!1,null,null,null),re=ie.exports;N()(ie,{VBtn:M["a"],VCard:P["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:K["a"],VDialog:R["a"],VIcon:ee["a"],VList:te["a"],VListTile:G["a"],VListTileTitle:H["b"],VMenu:ne["a"],VSpacer:J["a"],VToolbarTitle:ae["b"]});var oe={name:"App",components:{FileMenu:re}},se=oe,le=n("7496"),ce=n("549c"),ue=n("553a"),de=n("71d9"),fe=Object(z["a"])(se,o,s,!1,null,null,null),pe=fe.exports;N()(fe,{VApp:le["a"],VCard:P["a"],VCardText:I["b"],VContent:ce["a"],VFooter:ue["a"],VSpacer:J["a"],VToolbar:de["a"],VToolbarTitle:ae["b"]});var he=n("2f62"),ve=n("bfa9");a["a"].use(he["a"]);var me=new ve["a"]({storage:window.localStorage}),ge=new he["a"].Store({state:{list:[],lastVisited:0,pagination:{descending:!1,page:1,rowsPerPage:-1,sortBy:"",totalItems:0}},mutations:{push:function(e,t){e.list.push(t)},set:function(e,t){a["a"].set(e.list,t.index,t.obj)},removeElement:function(e,t){e.list.splice(t,1)},cloneElement:function(e,t){e.list.splice(t+1,0,w(e.list[t]))},clear:function(e){e.list=[]},visit:function(e,t){e.lastVisited=t},updatePagination:function(e,t){e.pagination=t}},plugins:[me.plugin],strict:!1}),be=(n("c5f6"),n("ee1d"),n("8c4f")),_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.computedHeaders,items:e.rows,"no-data-text":"Keine Einträge","disable-initial-sort":!0,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",{class:{"blue lighten-5":t.item.selected}},[e.$vuetify.breakpoint.xs?e._e():n("td",{staticClass:"text-xs-right",on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s((e.pagination.page-1)*e.pagination.rowsPerPage+t.index+1)+"\n        ")]),n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[t.item.selected?n("span",{attrs:{id:"selected"}}):e._e(),e._v("\n          "+e._s(t.item.label||"Nr. "+t.item.id)+"\n        ")]),e.$vuetify.breakpoint.mdAndDown?e._e():n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(e.formatDate(t.item.dateofbirth))+"\n        ")]),e.$vuetify.breakpoint.smAndDown?e._e():n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(t.item.diag1)+"\n        ")]),e.$vuetify.breakpoint.mdAndDown?e._e():n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(t.item.diag2)+"\n        ")]),e.$vuetify.breakpoint.lgAndDown?e._e():n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(t.item.diag3)+"\n        ")]),e.$vuetify.breakpoint.mdAndDown?e._e():n("td",{on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(e.formatDate(t.item.date))+"\n        ")]),e.$vuetify.breakpoint.xs?e._e():n("td",{staticClass:"text-xs-right",on:{click:function(n){return e.$router.push({name:"detail",params:{id:t.item.id}})}}},[e._v("\n          "+e._s(t.item.score)+"\n        ")]),e.$vuetify.breakpoint.xs?e._e():n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){return e.cloneGoTo(t.item.id)}}},[e._v("\n            file_copy\n          ")])],1),n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){return e.removeElement(t.item.id)}}},[e._v("\n            clear\n          ")])],1)])]}}])}),n("v-btn",{staticClass:"white--text my-3",attrs:{color:"blue",to:"/detail/"+e.length}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("add_circle")]),n("span",[e._v("Neuer Eintrag")])],1)],1)},we=[],xe={data:function(){return{headers:[{text:"Zeile",value:"id",sortable:!1,hide:"xs"},{text:"Kennung",value:"label"},{text:"Geburtsdatum",value:"dateofbirth",hide:"mdAndDown"},{text:"Diagnose 1",value:"diag1",hide:"smAndDown"},{text:"Diagnose 2",value:"diag2",hide:"mdAndDown"},{text:"Diagnose 3",value:"diag3",hide:"lgAndDown"},{text:"Datum",value:"date",hide:"mdAndDown"},{text:"Score",value:"score",hide:"xs"},{text:"Duplizieren",value:"id",sortable:!1,hide:"xs"},{text:"Entfernen",value:"id",sortable:!1}]}},methods:Object(p["a"])({},Object(he["b"])(["removeElement"]),{cloneGoTo:function(e){this.$store.commit("cloneElement",e),this.$router.push({name:"cloned",params:{id:e+1,cloned:!0}})},parseDate:function(e){var t=e.split("."),n=Object(f["a"])(t,3),a=n[0],i=n[1],r=n[2];return a&&i&&r?new Date(r,i-1,a):null},formatDate:function(e){return e?Object(d["format"])(e,"DD.MM.YYYY"):null}}),computed:Object(p["a"])({computedHeaders:function(){var e=this;return this.headers.filter(function(t){return!t.hide||!e.$vuetify.breakpoint[t.hide]})}},Object(he["c"])({lastVisited:"lastVisited"}),{length:function(){return this.$store.state.list.length},rows:function(){var e=this,t=[];return this.$store.state.list.forEach(function(n,a){var i={};i.id=a,i.label=n.a.lab,i.dateofbirth=e.parseDate(n.a.dateofbirth);var r=n.a.diagnosis.split("\n"),o=Object(f["a"])(r,3);i.diag1=o[0],i.diag2=o[1],i.diag3=o[2],i.date=e.parseDate(n.a.date),i.score=y(n),i.selected=a===e.lastVisited,t.push(i)}),t},pagination:{get:function(){return this.$store.state.pagination},set:function(e){this.$store.commit("updatePagination",e)}}})},ke=xe,ye=(n("1dea"),n("a523")),De=n("8fea"),Ae=Object(z["a"])(ke,_e,we,!1,null,null,null),Ve=Ae.exports;N()(Ae,{VBtn:M["a"],VContainer:ye["a"],VDataTable:De["a"],VIcon:ee["a"]});var Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-btn",{staticClass:"toplevel",attrs:{color:"red",fixed:"",dark:"",right:"",round:"",to:"/"}},[n("v-icon",{staticClass:"pr-1"},[e._v("arrow_back")]),e._v("\n      Zurück\n    ")],1),n("v-form",[n("GeneralInformation",{attrs:{id:e.id,cloned:e.cloned}}),n("DisplayScore",{attrs:{id:e.id}}),n("PrintPreview",{attrs:{id:e.id}}),n("ClinicalTabs",{attrs:{id:e.id}})],1)],1)],1)},Oe=[],$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},e._l(e.areas,function(t,a){return n("span",{key:a},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ClinicalArea",{attrs:{selects:t.selects,scoreArea:e.scoreAreas[a],value:e.trs.a,color:e.color},on:{input:function(t){return e.assign(t)}}})],1)],1)],1)}),0)},je=[],Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.selects,function(t){return n("v-layout",{key:t[0].component,attrs:{row:"",wrap:""}},e._l(t,function(t){return n("v-flex",{key:t.component,attrs:{xs12:"",sm12:"",md6:""}},[n("v-select",{attrs:{value:e.value?e.value[t.component]:null,items:t.items,label:t.label,multiple:t.multiple,color:e.color,dense:""},on:{input:function(n){return e.$emit("input",{key:t.component,value:n})}}})],1)}),1)}),e._l(e.scoreArea.footnotes,function(t,a){return n("v-layout",{key:a,attrs:{row:""}},[n("v-flex",{staticClass:"caption",attrs:{xs12:""}},[e._v(e._s(t)+" ")])],1)})],2)},Ee=[],Te={data:function(){return{}},props:{selects:Array,scoreArea:Object,value:Object,color:String}},Fe=Te,Be=n("0e8f"),ze=n("a722"),Le=n("b56d"),Ne=Object(z["a"])(Fe,Ce,Ee,!1,null,null,null),Me=Ne.exports;N()(Ne,{VFlex:Be["a"],VLayout:ze["a"],VSelect:Le["a"]});var Pe={computed:{trs:{get:function(){var e=this.id;if(e>=this.$store.state.list.length){var t=new _;this.$store.commit("push",t),e=this.$store.state.list.length-1}return this.$store.commit("visit",e),this.$store.state.list[e]},set:function(e){this.$store.commit("set",{index:this.id,obj:e})}},patientAge:function(){if(this.trs.a.dateofbirth){var e=this.trs.a.dateofbirth.split("."),t=Object(f["a"])(e,3),n=t[0],a=t[1],i=t[2];if(n&&a&&i&&4===i.length){var r=new Date(i,a-1,n-1,12,0);return Object(d["differenceInYears"])(new Date,r)}}return null}}};function Ie(e,t){var n=[];while(e.length)n.push(e.splice(0,t));return n}function Ke(e){var t=[];return e.forEach(function(e){var n={};Object.assign(n,e),n.items=[],n.options.forEach(function(e,t){n.items.push({text:e,value:t})}),t.push(n)}),t}var Re=Ke(Object.values(v)),Ge=["indigo darken-1","cyan darken-1","orange darken-1"],He={data:function(){return{active:0,scoreAreas:m,areas:{medical:{selects:Ie(Re.filter(function(e){return"medical"===e.group}),2)}}}},computed:{color:function(){return Ge[this.active]}},mixins:[Pe],props:{id:Number},methods:{assign:function(e){var t=w(this.trs);t.a[e.key]=e.value,this.trs=t}},components:{ClinicalArea:Me}},Je=He,Ye=(n("1161"),Object(z["a"])(Je,$e,je,!1,null,null,null)),Ze=Ye.exports;N()(Ye,{VCard:P["a"],VCardText:I["b"],VLayout:ze["a"]});var Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{xs12:"",column:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-alert",{attrs:{dismissible:"",outline:"",type:"info"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("\n        Der Eintrag wurde Dupliziert. Bitte ändern Sie die Kennung.\n      ")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{ref:"label",attrs:{label:"Kennung",value:e.trs.a.lab},on:{input:function(t){return e.assign("lab",t)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",value:e.trs.a.date,label:"Datum","prepend-icon":"event"},on:{input:function(t){return e.dateInputHelper("date",t)}},slot:"activator"}),n("v-date-picker",{attrs:{value:e.parseDate(e.trs.a.date),"no-title":"",locale:"de-de","first-day-of-week":"1"},on:{input:function(t){e.assignClose("date",e.formatDate(t))}}})],1)],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:e.trs.a.dateofaccident,label:"Unfalltag","prepend-icon":"event",hint:"Format TT.MM.JJJJ"},on:{input:function(t){return e.dateInputHelper("dateofaccident",t)}}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-select",{attrs:{value:e.trs.a.phase,items:e.phaseOptions,label:"Klinisch Reha"},on:{input:function(t){return e.assign("phase",t)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:e.trs.a.dateofbirth,label:"Geburtsdatum","prepend-icon":"event",hint:"Format TT.MM.JJJJ"},on:{input:function(t){return e.dateInputHelper("dateofbirth",t)}}})],1),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-text-field",{attrs:{value:e.patientAge,label:"Alter","prepend-icon":"none",readonly:""}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{label:"Diagnose(n)",value:e.trs.a.diagnosis,hint:"Eine Zeile pro Diagnose"},on:{input:function(t){return e.assign("diagnosis",t)}}})],1)],1)],1)],1)],1)},We=[],Xe=(n("f576"),{data:function(){return{alert:this.cloned,menu:!1,phaseSelected:null,phaseOptions:["Phase A","Phase B","Phase C","Phase D","Phase E","Phase F"]}},mixins:[Pe],props:{id:Number,cloned:{type:Boolean,default:!1}},methods:{save:function(e){this.$refs.menu.save(e)},assign:function(e,t){var n=w(this.trs);n.a[e]=t,this.trs=n},assignClose:function(e,t){this.menu=!1,this.assign(e,t)},dateInputHelper:function(e,t){(t.match(/^\d\d$/)||t.match(/^\d\d\.\d\d$/))&&(t+="."),this.assign(e,t)},formatDate:function(e){if(!e)return null;var t=e.split("-"),n=Object(f["a"])(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,".").concat(i,".").concat(a)},parseDate:function(e){if(!e)return null;var t=e.split("."),n=Object(f["a"])(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,"-").concat(i.padStart(2,"0"),"-").concat(a.padStart(2,"0"))}},mounted:function(){this.cloned&&this.$refs.label.focus()}}),qe=Xe,Qe=n("0798"),et=n("2e4b"),tt=n("a844"),nt=Object(z["a"])(qe,Ue,We,!1,null,null,null),at=nt.exports;N()(nt,{VAlert:Qe["a"],VCard:P["a"],VCardText:I["b"],VDatePicker:et["a"],VFlex:Be["a"],VLayout:ze["a"],VMenu:ne["a"],VSelect:Le["a"],VTextField:Y["a"],VTextarea:tt["a"]});var it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("div",{staticClass:"v-table__overflow"},[n("table",{staticClass:"v-table v-datatable theme--light"},[n("thead",[n("tr",[n("th"),e.$vuetify.breakpoint.smAndDown?e._e():n("th",{attrs:{colspan:"10"}}),n("th",[e._v("Score")]),n("th")])]),n("tbody",[e._l(e.scoreAreas,function(t,a){return n("DisplayArea",{key:a,attrs:{values:e.trs.a,area:t,areaKey:a}})}),n("tr",[e.$vuetify.breakpoint.smAndDown?e._e():n("td",{attrs:{colspan:"10"}}),n("td",{staticClass:"text-xs-right font-weight-bold"},[e._v("Score:")]),n("td",{staticClass:"text-xs-right font-weight-bold"},[e._v(e._s(e.score))]),n("td")])],2)])])])},rt=[],ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",{staticClass:"font-weight-bold text-xs-right"},[e._v("\n    "+e._s(e.displayArea.name)+"\n  ")]),e.$vuetify.breakpoint.smAndDown?e._e():[10-e.displayArea.cols.length>0?n("td",{staticClass:"font-weight-bold",attrs:{colspan:10-e.displayArea.cols.length}}):e._e(),e._l(e.displayArea.cols,function(t){return n("td",{key:t.key,staticClass:"text-xs-right"},[e.displayArea.cols.length>1?n("span",[e._v("\n        "+e._s(t.key)+": "+e._s(t.score)+"\n      ")]):e._e()])})],n("td",{staticClass:"text-xs-right"},[e._v(e._s(e.displayArea.scoreSum))]),n("td")],2)},st=[],lt={data:function(){return{scoreAreas:m}},computed:{displayArea:function(){var e=this,t={name:this.area.name,cols:[],scoreSum:0},n=Object.keys(this.area.components);return n.forEach(function(n){var a=x(n,e.values[n]);t.cols.push({key:n,score:a}),t.scoreSum+=a}),t}},props:{values:Object,area:Object,areaKey:String}},ct=lt,ut=Object(z["a"])(ct,ot,st,!1,null,null,null),dt=ut.exports,ft={data:function(){return{scoreAreas:m}},computed:{score:function(){return y(this.trs)}},mixins:[Pe],props:{id:Number,print:{type:Boolean,default:!1}},methods:{},components:{DisplayArea:dt}},pt=ft,ht=Object(z["a"])(pt,it,rt,!1,null,null,null),vt=ht.exports;N()(ht,{VLayout:ze["a"]});var mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"text-xs-center",attrs:{column:"","mb-3":""}},[n("v-flex",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",lazy:"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"primary","mb-3":"",dark:""},slot:"activator"},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("print")]),n("span",[e._v("Druckvorschau")])],1),n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("close")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){return e.print()}}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("print")]),e._v("\n            Drucken\n          ")],1)],1)],1),n("div",{ref:"printArea"},[n("v-container",{attrs:{"grid-list-lg":""}},[n("h3",[e._v("Trauma-Reha-Score ")]),n("h1",[e._v(e._s(e.trs.a.lab))]),e.trs.a.date?n("p",[e._v("Datum: "+e._s(e.trs.a.date))]):e._e(),e.trs.a.dateofbirth?n("div",[n("p",[e._v("Geburtsdatum: "+e._s(e.trs.a.dateofbirth))]),n("p",[e._v("Alter: "+e._s(e.patientAge)+" Jahre")])]):e._e(),e.trs.a.dateofaccident?n("p",[e._v("Unfalltag: "+e._s(e.trs.a.dateofaccident))]):e._e(),e.trs.a.diagnosis?n("p",[e._v("Diagnose(n): "+e._s(e.trs.a.diagnosis))]):e._e(),n("DisplayScore",{attrs:{id:e.id,print:""}}),e._l(e.legend,function(t,a){return n("div",{key:a},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"offset-xs4":"",xs8:"","mt-5":""}},[n("h3",[e._v(e._s(e.scoreAreas[a].name))])])],1),e._l(t,function(t,a){return n("v-layout",{key:"a"+a,attrs:{row:""}},[n("v-flex",{staticClass:"font-weight-bold",attrs:{xs4:""}},[e._v("\n                "+e._s(t.label)+"\n              ")]),n("v-flex",{attrs:{xs8:""}},[Array.isArray(t.selected)?n("div",e._l(t.selected,function(t,a){return n("div",{key:a},[e._v("\n                    "+e._s(t)),n("br")])}),0):n("div",{domProps:{innerHTML:e._s(t.selected)}})])],1)}),e._l(e.scoreAreas[a].footnotes,function(t,a){return n("v-layout",{key:"b"+a,attrs:{row:""}},[n("v-flex",{staticClass:"caption",attrs:{xs12:""}},[e._v(e._s(t)+" ")])],1)})],2)})],2)],1)],1)],1)],1)],1)},gt=[],bt=n("3748");function _t(e,t,n){if(t in v){var a;a=Array.isArray(n)?n.map(function(e){return v[t].options[e]}):v[t].options[n],"ua"===t&&(Array.isArray(n)&&0===n.length||0===n)&&(a="Selbstständig");var i=k(t);e[i].push({label:"".concat(v[t].label," (").concat(t.toUpperCase(),")"),selected:a})}}var wt={data:function(){return{dialog:!1,scoreAreas:m}},computed:{legend:function(){var e={};return Object.keys(m).forEach(function(t){e[t]=[]}),Object.entries(this.trs.a).forEach(function(t){var n=Object(f["a"])(t,2),a=n[0],i=n[1];_t(e,a,i)}),e}},mixins:[Pe],props:{id:Number},methods:{print:function(){var e=this;this.d.print(this.$refs.printArea,"",function(t,n,a,i){var r=[].slice.call(document.getElementsByTagName("style"));r.forEach(function(e){return n.head.appendChild(e.cloneNode(!0))}),i(t),e.dialog=!1})}},mounted:function(){this.d=new bt["Printd"]},components:{DisplayScore:vt}},xt=wt,kt=(n("9485"),Object(z["a"])(xt,mt,gt,!1,null,null,null)),yt=kt.exports;N()(kt,{VBtn:M["a"],VCard:P["a"],VContainer:ye["a"],VDialog:R["a"],VFlex:Be["a"],VIcon:ee["a"],VLayout:ze["a"],VSpacer:J["a"],VToolbar:de["a"],VToolbarItems:ae["a"]});var Dt={data:function(){return{}},props:{id:Number,cloned:{type:Boolean,default:!1}},components:{GeneralInformation:at,ClinicalTabs:Ze,DisplayScore:vt,PrintPreview:yt}},At=Dt,Vt=(n("2007"),n("4bd4")),St=Object(z["a"])(At,Se,Oe,!1,null,null,null),Ot=St.exports;function $t(e){var t=parseInt(e,10);return Number.isNaN(t)?0:t}function jt(e){return{id:$t(e.params.id),cloned:!1}}function Ct(e){return{id:$t(e.params.id),cloned:!0}}N()(St,{VBtn:M["a"],VContainer:ye["a"],VForm:Vt["a"],VIcon:ee["a"]}),a["a"].use(be["a"]);var Et=new be["a"]({base:"",routes:[{path:"/",name:"list",component:Ve},{path:"/detail/:id",name:"detail",component:Ot,props:jt},{path:"/cloned/:id",name:"cloned",component:Ot,props:Ct}],scrollBehavior:function(e){return"list"===e.name?{selector:"#selected"}:{x:0,y:0}}}),Tt=n("9483");Object(Tt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,a["a"].config.performance=!0,new a["a"]({store:ge,router:Et,render:function(e){return e(pe)}}).$mount("#app")},"5d32":function(e,t,n){var a=n("d88d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("255d1ca0",a,!0,{sourceMap:!1,shadowMode:!1})},"86d5":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".toplevel{z-index:1}",""])},9485:function(e,t,n){"use strict";var a=n("5d32"),i=n.n(a);i.a},d88d:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"@media print{body{width:800px!important;font-family:sans-serif}}",""])},f198:function(e,t,n){var a=n("86d5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("18cd5f0e",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.14a9ef0c.js.map