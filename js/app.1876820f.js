(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},1161:function(e,t,n){"use strict";var a=n("2dbe"),i=n.n(a);i.a},"1dea":function(e,t,n){"use strict";var a=n("3ddc"),i=n.n(a);i.a},2:function(e,t){},2007:function(e,t,n){"use strict";var a=n("f198"),i=n.n(a);i.a},"206d":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter,.fade-leave-to{opacity:0}",""])},2099:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-btn{text-transform:none}",""])},"2dbe":function(e,t,n){var a=n("206d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("1442afe0",a,!0,{sourceMap:!1,shadowMode:!1})},3:function(e,t){},"3ddc":function(e,t,n){var a=n("2099");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("0790872e",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=(n("d1e7"),n("d4b8"),n("bb71"));n("da64");a["a"].use(i["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{color:"blue lighten-1",dark:""}},[n("v-toolbar-title",{staticClass:"headline"},[e._v("\n      Trauma-Reha-Score\n    ")]),n("v-spacer"),n("FileMenu")],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{height:"auto",dark:""}},[n("v-card",{staticClass:"blue darken-4 white--text text-xs-right flex",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"pa-3"},[n("p",{staticClass:"mb-1"},[e._v("\n          AK Traumarehabilitation Sektion Rehabilitation -\n          Physikalische Therapie der DGOU\n        ")]),n("p",{staticClass:"ma-0"},[e._v("\n          © Mathis Rosenhauer, Valentin Rosenhauer, Jörg Schmidt\n        ")])])],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-menu",{attrs:{bottom:"",left:""}},[n("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("more_vert")])],1)],1),n("v-list",[n("v-list-tile",{on:{click:e.newList}},[n("v-list-tile-title",[e._v("Neu")])],1),n("v-list-tile",{on:{click:function(t){e.openFileDialog=!0}}},[n("v-list-tile-title",[e._v("\n          Öffnen\n        ")])],1),n("v-list-tile",{on:{click:e.saveFile}},[n("v-list-tile-title",[e._v("Speichern")])],1),n("v-list-tile",{on:{click:e.exportXLSX}},[n("v-list-tile-title",[e._v("Als Excel speichern")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.openFileDialog,callback:function(t){e.openFileDialog=t},expression:"openFileDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Datei öffnen")])]),n("v-card-text",[n("v-text-field",{attrs:{label:"Wählen Sie eine Datei...","prepend-icon":"storage"},on:{click:e.pickFile},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),n("input",{ref:"fileinput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.selectFile}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.openFileDialog=!1}}},[e._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.openFile}},[e._v("Öffnen")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.newListDialog,callback:function(t){e.newListDialog=t},expression:"newListDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Neue Liste")])]),n("v-card-text",[e._v("\n        Wollen Sie die bestehende Liste tatsächlich löschen?\n      ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.newListDialog=!1}}},[e._v("Abbrechen")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.clearList}},[e._v("Ja")])],1)],1)],1)],1)},l=[],c=n("f499"),u=n.n(c),d=n("768b"),f=(n("7f7f"),n("e814")),p=n.n(f),v=n("a745"),h=n.n(v),m=(n("ac6a"),n("cebc")),g=(n("34ef"),n("21a6")),b=n("2d1f"),_=n.n(b),x=n("a4bb"),w=n.n(x),k=n("db0c"),y=n.n(k),S=n("5176"),V=n.n(S),D=n("75fc"),A={st:{component:"st",group:"medical",label:"Schmerztherapie",multiple:!1,options:["Keine oder mit WHO Stufe 1-3 gut behandelbare Schmerzen","Neuropth. Schmerzen bzw. chronische Schmerzstörung mit somatischen und psychischen Faktoren","CRPS, Phantomschmerzen","CRPS, Phantomschmerzen: Invasive Schmerztherapie notwendig"]},md:{component:"md",group:"medical",label:"Medizinische Therapie/Diagnostikbedarf",multiple:!1,options:["Nicht notwendig","Spezielle Verlaufsuntersuchungen (Herzecho, Duplex Gefäße, LZ-RR, LZ-EKG, etc.) / IV-Therapie notwendig","Zusätzlich: Schneller Zugang zu anderen Fachdisziplinen u. / o. Großgerätediagnostik notwendig  / isolierpflichtiger Patient"]},wm:{component:"wm",group:"medical",label:"Wundmanagement",multiple:!1,options:["Nicht notwendig","Notwendig, ein Bereich","Notwendig, zwei Bereiche","Notwendig, drei und mehr Bereiche"]},vh:{component:"vh",group:"medical",label:"Versorgung/ Anpassung von aufwändigen Hilfsmitteln",multiple:!1,options:["Nicht notwendig","Eine Funktionseinheit","Zwei und mehr Funktionseinheiten"]},ps:{component:"ps",group:"medical",label:"Psychotherapie",multiple:!1,options:["Nicht notwendig","Psycho(trauma)-Therapie notwendig:  Grundversorgung (2-3 Sitzungen in 3 Wochen)","Psycho(trauma)-Therapie notwendig:  Therapieschwerpunkt (5-6 Sitzungen in 3 Wochen)"]},or:{component:"or",group:"nursing",label:"Orientierung",multiple:!1,options:["Klar orientiert. Nimmt an den ADL und den Therapien selbstständig teil","Phasenweise desorientiert. ADL und Therapien nur mit enger pflegerischer und therapeutischer Betreuung möglich","Desorientiert. Ständige Begleitperson ist notwendig zur Sicherstellung der ADL und der Therapien"]},ua:{component:"ua",group:"nursing",label:"Unterstützungsbedarf bei ADL",multiple:!0,options:["Benötigt Hilfe beim Waschen","Benötigt Hilfe bei Toilettenbenutzung","Benötigt Hilfe beim Ankleiden","Benötigt Hilfe beim Essen"]},ko:{component:"ko",group:"nursing",label:"Kontinenz",multiple:!1,options:["Kontinent","Harninkontinenz, vom Patienten nicht durch HM kompensiert","Stuhlinkontinenz, vom Patienten nicht durch HM kompensiert","Stuhl- und Harninkontinenz, vom Patienten nicht durch HM kompensiert"]},ak:{component:"ak",group:"therapeutical",label:"Anzahl der zu rehabiltierenden Körperregionen*",multiple:!1,options:["Es liegt eine zu rehabilitierende Körperregion vor","Es liegen zwei zu rehabilitierende Körperregionen vor. Die aktiv Beweglichkeit liegt jeweils über dem hälftigen normalen Bewegungsumfang bei Extremitätenverletzungen**","Es liegen zwei zu rehabilitierende Körperregionen vor. Die aktiv Beweglichkeit liegt in einer oder in beiden Regionen unter dem hälftigen normalen Bewegungsumfang**","Es liegen drei oder mehr zu rehabilitierende Körperregionen vor"]},be:{component:"be",group:"therapeutical",label:"Belastbarkeit der unteren Extremitäten",multiple:!1,options:["Vollbelastung bzw. schmerzadaptierte Vollbelastung","Minimal belastender Gang bzw. entlastender Gang ein Bein, bei voller Belastbarkeit der oberen Extremitäten","Minimal belastender Gang bzw. entlastender Gang ein Bein, bei unzureichender Stützfunktion der oberen Extremitäten","Minimal belastender Gang bzw. entlastender Gang beider Beine"]},mo:{component:"mo",group:"therapeutical",label:"Mobilität",multiple:!1,options:["Volle Mobilität bzw. selbstständig ebene Gehstrecke über 50 m, ggf. mit Hilfsmitteln","Selbstständig ebene Gehstrecke unter 50 m,  ggf. mit Hilfsmitteln bzw. mit Rollstuhl unabhängig für mindestens 50 m","Selbstständig Transfer  Bett /Stuhl bzw. selbstständig halten einer stabilen Sitzposition","Selbstständiger Positionswechsel im Bett bzw. vollständige Immobilität"]}},z={medical:{name:"Ärztlich",defaultScore:null,defaultLabel:"Keine neuropathischen bzw. komplexen Schmerzsyndrome, kein Bedarf an spezieller Diagnostik, kein Wundmanagement, keine Versorgung mit aufwändigen Hilfsmitteln, keine Psychotherapie notwendig.",components:{st:[0,5,10,15],md:[0,5,10],wm:[0,10,15,20],vh:[0,10,15],ps:[0,5,10]},footnotes:[]},nursing:{name:"Pflegerisch",defaultScore:null,defaultLabel:"Der Patient ist orientiert, selbstständig bei seinen ADL, es besteht keine Inkontinenz, die nicht durch Hilfsmittel kompensiert ist.",components:{or:[0,5,10],ua:[5,5,5,5,5],ko:[0,10,10,15]},footnotes:[]},therapeutical:{name:"Therapeutisch",defaultScore:20,defaultLabel:"Es liegt eine zu rehabilitierende Körperregion vor, die (schmerzadaptiert) voll belastbar ist, ebene Gehstrecke selbstständig > 50 m,  ggf. mit Hilfsmitteln.",components:{ak:[20,20,30,30],be:[0,5,10,10],mo:[0,10,15,30]},footnotes:["*Körperregionen: Kopf/HWS, Thorax/BWS, Abdomen/LWS/Becken, rechter Arm, linker Arm, rechtes Bein und linkes Bein","**Es wird an den oberen Extremitäten Schulter/Oberarm, Ellenbogen/Unterarm und Handgelenk/Hand als eine Gelenkregion zusammengefasst. Es wird nur die Leitverletzung gewertet bezogen auf die Bewegungsamplitude in der Sagitalebene.","Es wird an den unteren Extremitäten Hüftgelenk/Oberschenkel, Kniegelenk/Unterschenkel und Sprunggelenke/Fuß als eine Gelenkregion zusammengefasst. Es wird nur die Leitverletzung gewertet bezogen auf die Bewegungsamplitude in der Sagitalebene."]}},E=V.a.apply(Object,[{}].concat(Object(D["a"])(y()(z).map(function(e){return e.components})))),T=w()(E);function C(){var e=this;this.a={lab:"",diagnosis:"",date:"",dateofbirth:"",phase:"",defaults:{medical:!1,nursing:!1,therapeutical:!1}},T.forEach(function(t){e.a[t]=0})}function O(e){var t=new C;return t.a=Object(m["a"])({},e.a),t.a.defaults=Object(m["a"])({},e.a.defaults),t}function j(e,t){var n=0;return h()(t)?t.forEach(function(t){n+=E[e][p()(t,10)]}):n=E[e][p()(t,10)],n}function B(e){var t="";return _()(z).forEach(function(n){var a=Object(d["a"])(n,2),i=a[0],r=a[1];e in r.components&&(t=i)}),t}function $(e){var t=100;return T.forEach(function(n){var a=B(n);!1===e.a.defaults[a]&&(t-=j(n,e.a[n]))}),w()(e.a.defaults).forEach(function(n){if(e.a.defaults[n]){var a=z[n].defaultScore;t-=a}}),t}function L(e,t){if(h()(e)){var n=function(e,n){return e+t[n]};return e.reduce(n,0)}return t[e]}n("28a5"),n("4917"),n("a481");var P=n("1146"),F=n.n(P);function M(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function N(e){return e.replace(/^([A-Z])/,"$$$1")}function K(e){return N(M(e))}function G(e,t,n,a,i){var r,o=F.a.utils.encode_cell({c:t,r:n}),s=[];h()(i)?(s.push(0),i.forEach(function(e){r=F.a.utils.encode_cell({c:p()(e,10)+1,r:T.indexOf(a)+1}),s.push(K(r))})):(r=F.a.utils.encode_cell({c:p()(i,10)+1,r:T.indexOf(a)+1}),s.push(K(r))),e[o]={f:s.join("+"),t:"n"}}function H(e){var t=/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/,n=e.match(t);return new Date(n[3],n[2]-1,n[1]).toISOString()}var I=function(e){var t=[],n=[],a=["Kennung","Klinisch Reha","Datum","Geburtsdatum","Score"].concat(T);t.push(["Score Komponenten"]),T.forEach(function(e){t.push([e].concat(E[e]))}),t.push([]),Array.prototype.push.apply(a,["Standard","Diagnose 1","Diagnose 2","Diagnose 3","Diagnose 4","Diagnose 5"]),t.push(n),t.push(a);var i,r,o=a.length-1,s=F.a.utils.aoa_to_sheet(t),l=w()(E).length+4;e.forEach(function(e){i=0;var t=F.a.utils.encode_cell({c:i,r:l});s[t]={v:e.a.lab,t:"s"},i+=1,t=F.a.utils.encode_cell({c:i,r:l}),s[t]={v:e.a.phase,t:"s"},i+=1,e.a.date&&(t=F.a.utils.encode_cell({c:i,r:l}),s[t]={v:H(e.a.date),t:"d"}),i+=1,e.a.dateofbirth&&(t=F.a.utils.encode_cell({c:i,r:l}),s[t]={v:H(e.a.dateofbirth),t:"d"}),r=i+1,i+=2,T.forEach(function(n){var a=B(n);"therapeutical"===a&&e.a.defaults.therapeutical?(t=F.a.utils.encode_cell({c:i,r:l}),s[t]={v:0,t:"n"}):G(s,i,l,n,e.a[n]),i+=1}),t=F.a.utils.encode_cell({c:i,r:l}),e.a.defaults.therapeutical?s[t]={v:z.therapeutical.defaultScore,t:"n"}:s[t]={v:0,t:"n"},i+=1;var n=i;e.a.diagnosis&&e.a.diagnosis.split("\n").forEach(function(e){t=F.a.utils.encode_cell({c:n,r:l}),s[t]={v:e,t:"s"},o=Math.max(o,n),n+=1});var a=F.a.utils.encode_range({s:{c:r+1,r:l},e:{c:i-1,r:l}});t=F.a.utils.encode_cell({c:r,r:l}),s[t]={f:"100 - SUM(".concat(a,")"),t:"n"},l+=1}),s["!ref"]=F.a.utils.encode_range({s:{c:0,r:0},e:{c:o,r:l}});var c=F.a.utils.book_new();F.a.utils.book_append_sheet(c,s,"OTRS");var u={bookType:"xlsx",bookSST:!1,type:"binary",cellDates:!0};return F.a.write(c,u)};function R(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a+=1)n[a]=255&e.charCodeAt(a);return t}function W(e){var t=new C;return e.a=Object(m["a"])({},t.a,e.a),T.forEach(function(t){if(h()(e.a[t])){var n=[];e.a[t].forEach(function(e){n.push(p()(e,10))}),e.a[t]=n}else e.a[t]=p()(e.a[t],10)}),e}var J={data:function(){return{file:null,fileName:"",openFileDialog:!1,newListDialog:!1}},methods:{pickFile:function(){this.$refs.fileinput.click()},selectFile:function(e){var t=e.target.files;if(t){this.fileName=t[0].name;var n=Object(d["a"])(t,1);this.file=n[0]}},openFile:function(){var e=this;if(this.openFileDialog=!1,this.file){var t=new FileReader;t.addEventListener("loadend",function(){var n=JSON.parse(t.result);n.forEach(function(t){e.$store.commit("push",W(t))})}),this.$store.commit("clear"),t.readAsText(this.file),this.$router.push({name:"list"})}},saveFile:function(){var e=new Blob([u()(this.$store.state.list,null,2)],{type:"application/json"});Object(g["saveAs"])(e,"trs.json")},newList:function(){this.$store.state.list.length>0&&(this.newListDialog=!0)},clearList:function(){this.$store.commit("clear"),this.newListDialog=!1,this.$router.push({name:"list"})},exportXLSX:function(){var e=I(this.$store.state.list);Object(g["saveAs"])(new Blob([R(e)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),"trs.xlsx")}}},Z=J,U=n("2877"),X=n("6544"),q=n.n(X),Q=n("8336"),Y=n("b0af"),ee=n("99d9"),te=n("12b2"),ne=n("169a"),ae=n("132d"),ie=n("8860"),re=n("ba95"),oe=n("5d23"),se=n("e449"),le=n("9910"),ce=n("2677"),ue=n("2a7f"),de=Object(U["a"])(Z,s,l,!1,null,null,null);de.options.__file="FileMenu.vue";var fe=de.exports;q()(de,{VBtn:Q["a"],VCard:Y["a"],VCardActions:ee["a"],VCardText:ee["b"],VCardTitle:te["a"],VDialog:ne["a"],VIcon:ae["a"],VList:ie["a"],VListTile:re["a"],VListTileTitle:oe["b"],VMenu:se["a"],VSpacer:le["a"],VTextField:ce["a"],VToolbarTitle:ue["b"]});var pe={name:"App",components:{FileMenu:fe}},ve=pe,he=n("7496"),me=n("549c"),ge=n("553a"),be=n("71d9"),_e=Object(U["a"])(ve,r,o,!1,null,null,null);_e.options.__file="App.vue";var xe=_e.exports;q()(_e,{VApp:he["a"],VCard:Y["a"],VCardText:ee["b"],VContent:me["a"],VFooter:ge["a"],VSpacer:le["a"],VToolbar:be["a"],VToolbarTitle:ue["b"]});var we=n("2f62"),ke=n("bfa9");a["a"].use(we["a"]);var ye=new ke["a"]({storage:window.localStorage}),Se=new we["a"].Store({state:{list:[],lastVisited:0},mutations:{push:function(e,t){e.list.push(t)},set:function(e,t){a["a"].set(e.list,t.index,t.obj)},removeElement:function(e,t){e.list.splice(t,1)},cloneElement:function(e,t){e.list.splice(t+1,0,O(e.list[t]))},clear:function(e){e.list=[]},visit:function(e,t){e.lastVisited=t}},plugins:[ye.plugin],strict:!1}),Ve=n("bfb3"),De=n.n(Ve),Ae=n("8c4f"),ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.rows,"hide-actions":"","no-data-text":"Keine Einträge","disable-initial-sort":!0},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",{class:{"blue lighten-5":t.item.selected}},[n("td",[t.item.selected?n("span",{attrs:{id:"selected"}}):e._e(),n("v-btn",{attrs:{to:"/detail/"+t.item.id,flat:"",color:"blue"}},[t.item.label?n("span",[e._v("\n              "+e._s(t.item.label)+"\n            ")]):n("span",[e._v("\n              Nr. "+e._s(t.item.id)+"\n            ")])])],1),n("td",[e._v(e._s(t.item.dateofbirth))]),n("td",[e._v(e._s(t.item.diag1))]),n("td",[e._v(e._s(t.item.diag2))]),n("td",[e._v(e._s(t.item.diag3))]),n("td",[e._v(e._s(t.item.date))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.score))]),n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){e.cloneGoTo(t.item.id)}}},[e._v("\n            file_copy\n          ")])],1),n("td",{staticClass:"text-xs-right"},[n("v-icon",{attrs:{small:""},on:{click:function(n){e.removeElement(t.item.id)}}},[e._v("\n            clear\n          ")])],1)])]}}])}),n("v-btn",{staticClass:"white--text my-3",attrs:{color:"blue",to:"/detail/"+e.length}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("add_circle")]),n("span",[e._v("Neuer Eintrag")])],1)],1)},Ee=[],Te={data:function(){return{headers:[{text:"Kennung",value:"label"},{text:"Geburtsdatum",value:"dateofbirth"},{text:"Diagnose 1",value:"diag1"},{text:"Diagnose 2",value:"diag2"},{text:"Diagnose 3",value:"diag3"},{text:"Datum",value:"date"},{text:"Score",value:"score"},{text:"Duplizieren",value:"id",sortable:!1},{text:"Entfernen",value:"id",sortable:!1}]}},methods:Object(m["a"])({},Object(we["b"])(["removeElement"]),{cloneGoTo:function(e){this.$store.commit("cloneElement",e),this.$router.push({name:"cloned",params:{id:e+1,cloned:!0}})}}),computed:Object(m["a"])({},Object(we["c"])({lastVisited:"lastVisited"}),{length:function(){return this.$store.state.list.length},rows:function(){var e=this,t=[];return this.$store.state.list.forEach(function(n,a){var i={};i.id=a,i.label=n.a.lab,i.dateofbirth=n.a.dateofbirth;var r=n.a.diagnosis.split("\n"),o=Object(d["a"])(r,3);i.diag1=o[0],i.diag2=o[1],i.diag3=o[2],i.date=n.a.date,i.score=$(n),i.selected=a===e.lastVisited,t.push(i)}),t}})},Ce=Te,Oe=(n("1dea"),n("a523")),je=n("8fea"),Be=Object(U["a"])(Ce,ze,Ee,!1,null,null,null);Be.options.__file="TrsList.vue";var $e=Be.exports;q()(Be,{VBtn:Q["a"],VContainer:Oe["a"],VDataTable:je["a"],VIcon:ae["a"]});var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-btn",{attrs:{color:"red",fixed:"",dark:"",right:"",round:"",to:"/"}},[n("v-icon",[e._v("keyboard_arrow_left")]),e._v("\n      Zurück\n    ")],1),n("v-form",[n("GeneralInformation",{attrs:{id:e.id,cloned:e.cloned}}),n("DisplayScore",{attrs:{id:e.id}}),n("PrintPreview",{attrs:{id:e.id}}),n("ClinicalTabs",{attrs:{id:e.id}})],1)],1)],1)},Pe=[],Fe=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("v-tabs",{attrs:{"fixed-tabs":"","slider-color":e.color},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._l(e.areas,function(t,a){return n("v-tab",{key:a},[e._v("\n      "+e._s(t.name)+"\n    ")])}),e._l(e.areas,function(t,a){return n("v-tab-item",{key:a,attrs:{lazy:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[null!==e.scoreAreas[a].defaultScore?n("AreaDefault",{attrs:{area:a,value:e.trs.a.defaults[a],color:e.color},on:{input:function(t){e.assignAreaDefault(t,a)}}}):e._e(),n("transition",{attrs:{name:"fade"}},[!0!==e.trs.a.defaults[a]?n("div",[n("ClinicalArea",{attrs:{selects:t.selects,scoreArea:e.scoreAreas[a],value:e.trs.a,color:e.color},on:{input:function(t){e.assign(t)}}})],1):e._e()])],1)],1)],1)})],2)],1)}),Me=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-checkbox",{attrs:{label:e.scoreAreas[e.area].defaultLabel+"  Die Bearbeitung dieses Bereichs ist damit abgeschlossen.",color:e.color},model:{value:e.defaultSelected,callback:function(t){e.defaultSelected=t},expression:"defaultSelected"}})],1)],1)},Ke=[],Ge={data:function(){return{scoreAreas:z}},computed:{defaultSelected:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},props:{area:String,value:Boolean,color:String}},He=Ge,Ie=n("ac7c"),Re=n("0e8f"),We=n("a722"),Je=Object(U["a"])(He,Ne,Ke,!1,null,null,null);Je.options.__file="AreaDefault.vue";var Ze=Je.exports;q()(Je,{VCheckbox:Ie["a"],VFlex:Re["a"],VLayout:We["a"]});var Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.selects,function(t){return n("v-layout",{key:t[0].component,attrs:{row:"",wrap:""}},e._l(t,function(t){return n("v-flex",{key:t.component,attrs:{xs12:"",sm12:"",md6:""}},[n("v-select",{attrs:{value:e.value?e.value[t.component]:null,items:t.items,label:t.label,multiple:t.multiple,color:e.color,dense:""},on:{input:function(n){e.$emit("input",{key:t.component,value:n})}}})],1)}),1)}),e._l(e.scoreArea.footnotes,function(t,a){return n("v-layout",{key:a,attrs:{row:""}},[n("v-flex",{staticClass:"caption",attrs:{xs12:""}},[e._v(e._s(t)+" ")])],1)})],2)},Xe=[],qe={data:function(){return{}},props:{selects:Array,scoreArea:Object,value:Object,color:String}},Qe=qe,Ye=n("b56d"),et=Object(U["a"])(Qe,Ue,Xe,!1,null,null,null);et.options.__file="ClinicalArea.vue";var tt=et.exports;q()(et,{VFlex:Re["a"],VLayout:We["a"],VSelect:Ye["a"]});var nt={computed:{trs:{get:function(){var e=this.id;if(e>=this.$store.state.list.length){var t=new C;this.$store.commit("push",t),e=this.$store.state.list.length-1}return this.$store.commit("visit",e),this.$store.state.list[e]},set:function(e){this.$store.commit("set",{index:this.id,obj:e})}}}};function at(e,t){var n=[];while(e.length)n.push(e.splice(0,t));return n}function it(e){var t=[];return e.forEach(function(e){var n={};V()(n,e),n.items=[],n.options.forEach(function(e,t){n.items.push({text:e,value:t})}),t.push(n)}),t}var rt=it(y()(A)),ot=["indigo darken-1","cyan darken-1","orange darken-1"],st={data:function(){return{active:0,scoreAreas:z,areas:{medical:{name:"Ärztlicher Bereich",selects:at(rt.filter(function(e){return"medical"===e.group}),2)},nursing:{name:"Pflegerischer Bereich",selects:at(rt.filter(function(e){return"nursing"===e.group}),2)},therapeutical:{name:"Therapeutischer Bereich",selects:at(rt.filter(function(e){return"therapeutical"===e.group}),2)}}}},computed:{color:function(){return ot[this.active]}},mixins:[nt],props:{id:Number},methods:{assign:function(e){var t=O(this.trs);t.a[e.key]=e.value,this.trs=t},assignAreaDefault:function(e,t){var n=O(this.trs);n.a.defaults[t]=e,this.trs=n}},components:{AreaDefault:Ze,ClinicalArea:tt}},lt=st,ct=(n("1161"),n("71a3")),ut=n("c671"),dt=n("fe57"),ft=Object(U["a"])(lt,Fe,Me,!1,null,null,null);ft.options.__file="ClinicalTabs.vue";var pt=ft.exports;q()(ft,{VCard:Y["a"],VCardText:ee["b"],VLayout:We["a"],VTab:ct["a"],VTabItem:ut["a"],VTabs:dt["a"]});var vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{xs12:"",column:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-alert",{attrs:{dismissible:"",outline:"",type:"info"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("\n        Der Eintrag wurde Dupliziert. Bitte ändern Sie die Kennung.\n      ")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{ref:"label",attrs:{label:"Kennung",value:e.trs.a.lab},on:{input:function(t){e.assign("lab",t)}}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",value:e.trs.a.date,label:"Datum","prepend-icon":"event",readonly:""},slot:"activator"}),n("v-date-picker",{attrs:{value:e.parseDate(e.trs.a.date),"no-title":"",locale:"de-de","first-day-of-week":"1"},on:{input:function(t){e.assignClose("date",e.formatDate(t))}}})],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-select",{attrs:{value:e.trs.a.phase,items:e.phaseOptions,label:"Klinisch Reha"},on:{input:function(t){e.assign("phase",t)}}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{value:e.trs.a.dateofbirth,label:"Geburtsdatum","prepend-icon":"event",hint:"Format TT.MM.JJJJ"},on:{input:function(t){e.dateInputHelper("dateofbirth",t)}}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{label:"Diagnose(n)",value:e.trs.a.diagnosis,hint:"Eine Zeile pro Diagnose"},on:{input:function(t){e.assign("diagnosis",t)}}})],1)],1)],1)],1)],1)},ht=[],mt=(n("f576"),{data:function(){return{alert:this.cloned,menu:!1,phaseSelected:null,phaseOptions:["Phase A","Phase B","Phase C","Phase D","Phase E","Phase F"]}},mixins:[nt],props:{id:Number,cloned:{type:Boolean,default:!1}},methods:{save:function(e){this.$refs.menu.save(e)},assign:function(e,t){var n=O(this.trs);n.a[e]=t,this.trs=n},assignClose:function(e,t){this.menu=!1,this.assign(e,t)},dateInputHelper:function(e,t){(t.match(/^\d\d$/)||t.match(/^\d\d\.\d\d$/))&&(t+="."),this.assign(e,t)},formatDate:function(e){if(!e)return null;var t=e.split("-"),n=Object(d["a"])(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,".").concat(i,".").concat(a)},parseDate:function(e){if(!e)return null;var t=e.split("."),n=Object(d["a"])(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,"-").concat(i.padStart(2,"0"),"-").concat(a.padStart(2,"0"))}},mounted:function(){this.cloned&&this.$refs.label.focus()}}),gt=mt,bt=n("0798"),_t=n("2e4b"),xt=n("a844"),wt=Object(U["a"])(gt,vt,ht,!1,null,null,null);wt.options.__file="GeneralInformation.vue";var kt=wt.exports;q()(wt,{VAlert:bt["a"],VCard:Y["a"],VCardText:ee["b"],VDatePicker:_t["a"],VFlex:Re["a"],VLayout:We["a"],VMenu:se["a"],VSelect:Ye["a"],VTextField:ce["a"],VTextarea:xt["a"]});var yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("div",{staticClass:"v-table__overflow"},[n("table",{staticClass:"v-table v-datatable theme--light"},[n("thead",[n("tr",[n("th",{attrs:{colspan:"9"}}),n("th",[e._v("Score")]),n("th")])]),n("tbody",[e._l(e.scoreAreas,function(t,a){return n("DisplayArea",{key:a,attrs:{values:e.trs.a,area:t,areaKey:a}})}),n("tr",[n("td",{staticClass:"text-xs-right font-weight-bold",attrs:{colspan:"9"}},[e._v("Score:")]),n("td",{staticClass:"text-xs-right font-weight-bold"},[e._v(e._s(e.score))]),n("td")])],2)])])])},St=[],Vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return!0===e.values.defaults[e.areaKey]?n("tr",[n("td",{staticClass:"font-weight-bold",attrs:{colspan:9}},[e._v("\n    "+e._s(e.area.name)+"\n  ")]),n("td",{staticClass:"text-xs-right"},[e._v("\n    "+e._s(e.scoreAreas[e.areaKey].defaultScore)+"\n  ")]),n("td")]):n("tr",[n("td",{staticClass:"font-weight-bold",attrs:{colspan:8-e.displayArea.cols.length}},[e._v("\n    "+e._s(e.displayArea.name)+"\n  ")]),e._l(e.displayArea.cols,function(t){return n("td",{key:t.key,staticClass:"text-xs-right"},[e._v("\n    "+e._s(t.key)+": "+e._s(t.score)+"\n  ")])}),n("td"),n("td",{staticClass:"text-xs-right"},[e._v(e._s(e.displayArea.scoreSum))]),n("td")],2)},Dt=[],At={data:function(){return{scoreAreas:z}},computed:{displayArea:function(){var e=this,t={name:this.area.name,cols:[],scoreSum:0},n=w()(this.area.components);return n.forEach(function(n){var a=L(e.values[n],e.area.components[n]);t.scoreSum+=a,t.cols.push({key:n,score:a})}),t}},props:{values:Object,area:Object,areaKey:String}},zt=At,Et=Object(U["a"])(zt,Vt,Dt,!1,null,null,null);Et.options.__file="DisplayArea.vue";var Tt=Et.exports,Ct={data:function(){return{scoreAreas:z}},computed:{score:function(){return $(this.trs)}},mixins:[nt],props:{id:Number,print:{type:Boolean,default:!1}},methods:{},components:{DisplayArea:Tt}},Ot=Ct,jt=Object(U["a"])(Ot,yt,St,!1,null,null,null);jt.options.__file="DisplayScore.vue";var Bt=jt.exports;q()(jt,{VLayout:We["a"]});var $t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"text-xs-center",attrs:{column:"","mb-3":""}},[n("v-flex",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",lazy:"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"primary","mb-3":"",dark:""},slot:"activator"},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("print")]),n("span",[e._v("Druckvorschau")])],1),n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("close")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.print()}}},[n("v-icon",{attrs:{left:"",dark:""}},[e._v("print")]),e._v("\n            Drucken\n          ")],1)],1)],1),n("div",{ref:"printArea"},[n("v-container",{attrs:{"grid-list-lg":""}},[n("h3",[e._v("Trauma-Reha-Score ")]),n("h1",[e._v(e._s(e.trs.a.lab))]),e.trs.a.date?n("p",[e._v("Datum: "+e._s(e.trs.a.date))]):e._e(),e.trs.a.dateofbirth?n("p",[e._v("Geburtsdatum: "+e._s(e.trs.a.dateofbirth))]):e._e(),e.trs.a.diagnosis?n("p",[e._v("Diagnose(n): "+e._s(e.trs.a.diagnosis))]):e._e(),n("DisplayScore",{attrs:{id:e.id,print:""}}),e._l(e.legend,function(t,a){return n("div",{key:a},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"offset-xs4":"",xs8:"","mt-5":""}},[n("h3",[e._v(e._s(e.scoreAreas[a].name)+"er Bereich")])])],1),!0===e.trs.a.defaults[a]?n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[e._v("\n                "+e._s(e.scoreAreas[a].defaultLabel)+"\n              ")])],1):e._l(t,function(t,a){return n("v-layout",{key:a,attrs:{row:""}},[n("v-flex",{staticClass:"font-weight-bold",attrs:{xs4:""}},[e._v("\n                "+e._s(t.label)+"\n              ")]),n("v-flex",{attrs:{xs8:""}},[n("span",{domProps:{innerHTML:e._s(t.selected)}})])],1)})],2)})],2)],1)],1)],1)],1)],1)},Lt=[],Pt=n("3748");function Ft(e,t,n){if(t in A){var a;a=h()(n)?n.map(function(e){return A[t].options[e]}).join(". "):A[t].options[n],"ua"===t&&(h()(n)&&0===n.length||0===n)&&(a="Selbstständig");var i=B(t);e[i].push({label:"".concat(A[t].label," (").concat(t.toUpperCase(),")"),selected:a})}}var Mt={data:function(){return{dialog:!1,scoreAreas:z}},computed:{legend:function(){var e={};return w()(z).forEach(function(t){e[t]=[]}),_()(this.trs.a).forEach(function(t){var n=Object(d["a"])(t,2),a=n[0],i=n[1];Ft(e,a,i)}),e}},mixins:[nt],props:{id:Number},methods:{print:function(){var e=this;this.d.print(this.$refs.printArea,"",function(t,n,a,i){var r=[].slice.call(document.getElementsByTagName("style"));r.forEach(function(e){return n.head.appendChild(e.cloneNode(!0))}),i(t),e.dialog=!1})}},mounted:function(){this.d=new Pt["Printd"]},components:{DisplayScore:Bt}},Nt=Mt,Kt=(n("9485"),Object(U["a"])(Nt,$t,Lt,!1,null,null,null));Kt.options.__file="PrintPreview.vue";var Gt=Kt.exports;q()(Kt,{VBtn:Q["a"],VCard:Y["a"],VContainer:Oe["a"],VDialog:ne["a"],VFlex:Re["a"],VIcon:ae["a"],VLayout:We["a"],VSpacer:le["a"],VToolbar:be["a"],VToolbarItems:ue["a"]});var Ht={data:function(){return{}},props:{id:Number,cloned:{type:Boolean,default:!1}},components:{GeneralInformation:kt,ClinicalTabs:pt,DisplayScore:Bt,PrintPreview:Gt}},It=Ht,Rt=(n("2007"),n("4bd4")),Wt=Object(U["a"])(It,Le,Pe,!1,null,null,null);Wt.options.__file="TrsDetail.vue";var Jt=Wt.exports;function Zt(e){var t=p()(e,10);return De()(t)?0:t}function Ut(e){return{id:Zt(e.params.id),cloned:!1}}function Xt(e){return{id:Zt(e.params.id),cloned:!0}}q()(Wt,{VBtn:Q["a"],VContainer:Oe["a"],VForm:Rt["a"],VIcon:ae["a"]}),a["a"].use(Ae["a"]);var qt=new Ae["a"]({base:"",routes:[{path:"/",name:"list",component:$e},{path:"/detail/:id",name:"detail",component:Jt,props:Ut},{path:"/cloned/:id",name:"cloned",component:Jt,props:Xt}],scrollBehavior:function(e){return"list"===e.name?{selector:"#selected"}:{x:0,y:0}}}),Qt=n("9483");Object(Qt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({store:Se,router:qt,render:function(e){return e(xe)}}).$mount("#app")},"5d32":function(e,t,n){var a=n("d88d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("255d1ca0",a,!0,{sourceMap:!1,shadowMode:!1})},"86d5":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-btn{z-index:1}",""])},9485:function(e,t,n){"use strict";var a=n("5d32"),i=n.n(a);i.a},d88d:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"@media print{body{width:800px!important;font-family:sans-serif}}",""])},f198:function(e,t,n){var a=n("86d5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("18cd5f0e",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.1876820f.js.map