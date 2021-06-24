var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/List/List.stories.js";var store=new _storybookState.Store({checkedOne:false,checkedTwo:false,checkedThree:false,checkedFour:false,checkedFive:false,checkedSix:false});var _default=(0,_storiesOf.storiesOf)('Components|List',module).addParameters({jest:['List']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:5}},_react.default.createElement(_Header.default,{title:'Simple text List',__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:7}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:7}},function(state){return _react.default.createElement(_.List,{style:{width:300},__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:11}},_react.default.createElement(_.ListItem,{text:'Attractions',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:21}}),onPress:function onPress(){return store.set({checkedOne:!state.checkedOne});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedOne,onPress:function onPress(){return store.set({checkedOne:!state.checkedOne});},__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:13}}),_react.default.createElement(_.ListItem,{style:{paddingVertical:12},text:'Dining',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:21}}),onPress:function onPress(){return store.set({checkedTwo:!state.checkedTwo});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedTwo,onPress:function onPress(){return store.set({checkedTwo:!state.checkedTwo});},__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:13}}),_react.default.createElement(_.ListItem,{style:{paddingVertical:12},text:'Education',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:21}}),onPress:function onPress(){return store.set({checkedThree:!state.checkedThree});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedThree,onPress:function onPress(){return store.set({checkedThree:!state.checkedThree});},__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:13}}),_react.default.createElement(_.ListItem,{style:{paddingVertical:12},text:'Health',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}}),onPress:function onPress(){return store.set({checkedFour:!state.checkedFour});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedFour,onPress:function onPress(){return store.set({checkedFour:!state.checkedFour});},__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:13}}),_react.default.createElement(_.ListItem,{style:{paddingVertical:12},text:'Family',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:21}}),onPress:function onPress(){return store.set({checkedFive:!state.checkedFive});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedFive,onPress:function onPress(){return store.set({checkedFive:!state.checkedFive});},__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:13}}),_react.default.createElement(_.ListItem,{style:{paddingVertical:12},text:'Office',icon:_react.default.createElement(_.Icon,{name:'insert-chart',size:24,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:21}}),onPress:function onPress(){return store.set({checkedSix:!state.checkedSix});},actionItem:_react.default.createElement(_.Checkbox,{checkboxColor:'rgba(0, 0, 0, 0.54)',checked:state.checkedSix,onPress:function onPress(){return store.set({checkedSix:!state.checkedSix});},__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:17}}),__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:13}}));}));}).add('with subheader',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:5}},_react.default.createElement(_Header.default,{title:'List subheader',__source:{fileName:_jsxFileName,lineNumber:114,columnNumber:7}}),_react.default.createElement(_.List,{subheader:'Favorites',style:{width:300},__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:7}},_react.default.createElement(_.ListItem,{text:'Janet Perkins',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:120,columnNumber:13}}),__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:9}}),_react.default.createElement(_.ListItem,{text:'Mary Perkins',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:132,columnNumber:13}}),__source:{fileName:_jsxFileName,lineNumber:129,columnNumber:9}}),_react.default.createElement(_.ListItem,{text:'Peter Carlsson',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:13}}),__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:9}}),_react.default.createElement(_.ListItem,{text:'Trevor Hansen',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:156,columnNumber:13}}),__source:{fileName:_jsxFileName,lineNumber:153,columnNumber:9}})));});exports.default=_default;