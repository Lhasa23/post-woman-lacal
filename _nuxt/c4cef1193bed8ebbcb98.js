(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{329:function(e,t,o){var content=o(883);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("3612f200",content,!0,{sourceMap:!1})},882:function(e,t,o){"use strict";var n=o(329);o.n(n).a},883:function(e,t,o){(t=o(46)(!1)).push([e.i,"ul[data-v-7946fb44]{flex-direction:column}ul[data-v-7946fb44],ul li[data-v-7946fb44]{display:flex}ul li[data-v-7946fb44]{margin-left:32px;border-left:1px solid var(--brd-color)}",""]),e.exports=t},915:function(e,t,o){"use strict";o.r(t);o(242);var n=o(238),r={props:{folder:Object,collectionIndex:Number,folderIndex:Number},components:{request:function(){return o.e(22).then(o.bind(null,924))}},data:function(){return{showChildren:!1}},methods:{syncCollections:function(){null!==n.a.currentUser&&n.a.currentSettings[0].value&&n.a.writeCollections(JSON.parse(JSON.stringify(this.$store.state.postwoman.collections)))},toggleShowChildren:function(){this.showChildren=!this.showChildren},selectRequest:function(e){this.$store.commit("postwoman/selectRequest",{request:e})},removeFolder:function(){confirm("Are you sure you want to remove this folder?")&&(this.$store.commit("postwoman/removeFolder",{collectionIndex:this.collectionIndex,folderIndex:this.folderIndex}),this.syncCollections())},editFolder:function(){this.$emit("edit-folder")}}},l=(o(882),o(42)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"flex-wrap"},[o("div",[o("button",{staticClass:"icon",on:{click:e.toggleShowChildren}},[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.showChildren,expression:"!showChildren"}],staticClass:"material-icons"},[e._v("arrow_right")]),e._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}],staticClass:"material-icons"},[e._v("arrow_drop_down")]),e._v(" "),o("i",{staticClass:"material-icons"},[e._v("folder_open")]),e._v(" "),o("span",[e._v(e._s(e.folder.name))])])]),e._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.editFolder}},[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.removeFolder}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])])])])],2)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}]},[o("ul",[e._l(e.folder.requests,(function(t,n){return o("li",{key:n},[o("request",{attrs:{request:t,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"request-index":n},on:{"edit-request":function(o){return e.$emit("edit-request",{request:t,collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,requestIndex:n})}}})],1)})),e._v(" "),0===e.folder.requests.length?o("li",[o("label",[e._v(e._s(e.$t("folder_empty")))])]):e._e()],2)])])}),[],!1,null,"7946fb44",null);t.default=component.exports}}]);