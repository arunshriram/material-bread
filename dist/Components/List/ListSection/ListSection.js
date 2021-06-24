var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Divider=_interopRequireDefault(require("../../Divider/Divider.js"));var _ListSection=_interopRequireDefault(require("./ListSection.styles"));var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/List/ListSection/ListSection.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var ListSection=function(_Component){(0,_inherits2.default)(ListSection,_Component);var _super=_createSuper(ListSection);function ListSection(){(0,_classCallCheck2.default)(this,ListSection);return _super.apply(this,arguments);}(0,_createClass2.default)(ListSection,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,label=_this$props.label,labelStyle=_this$props.labelStyle,topDivider=_this$props.topDivider,bottomDivider=_this$props.bottomDivider,inset=_this$props.inset,style=_this$props.style,contentStyle=_this$props.contentStyle,theme=_this$props.theme;return _react.default.createElement(_reactNative.View,{style:([_ListSection.default.container,{paddingTop:label?8:0}],style),__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:7}},topDivider?_react.default.createElement(_Divider.default,{__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:23}}):null,label?_react.default.createElement(_reactNative.Text,{style:[_ListSection.default.label,labelStyle],__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:18}},label):null,_react.default.createElement(_reactNative.View,{style:[theme.text,_ListSection.default.content,contentStyle],__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:9}},children),bottomDivider?_react.default.createElement(_Divider.default,{style:{width:inset&&_reactNative.Platform.OS=='web'?'calc(100% - 72px)':'100%',marginLeft:inset?72:0,marginTop:0,marginBottom:0},__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:11}}):null);}}]);return ListSection;}(_react.Component);(0,_defineProperty2.default)(ListSection,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),label:_propTypes.default.string,labelStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),topDivider:_propTypes.default.bool,bottomDivider:_propTypes.default.bool,inset:_propTypes.default.bool,contentStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object});var _default=(0,_withTheme.default)(ListSection);exports.default=_default;