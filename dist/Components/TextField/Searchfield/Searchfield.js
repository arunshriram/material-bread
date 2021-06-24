var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _IconButton=_interopRequireDefault(require("../../IconButton/IconButton"));var _Searchfield=_interopRequireDefault(require("./Searchfield.styles"));var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/TextField/Searchfield/Searchfield.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Searchfield=function(_Component){(0,_inherits2.default)(Searchfield,_Component);var _super=_createSuper(Searchfield);function Searchfield(){(0,_classCallCheck2.default)(this,Searchfield);return _super.apply(this,arguments);}(0,_createClass2.default)(Searchfield,[{key:"render",value:function render(){var _this$props=this.props,color=_this$props.color,searchIconProps=_this$props.searchIconProps,closeIconProps=_this$props.closeIconProps,inputProps=_this$props.inputProps,inputRef=_this$props.inputRef,onBlur=_this$props.onBlur,onChangeText=_this$props.onChangeText,onCloseIcon=_this$props.onCloseIcon,onFocus=_this$props.onFocus,placeholder=_this$props.placeholder,style=_this$props.style,textStyle=_this$props.textStyle,value=_this$props.value;return _react.default.createElement(_reactNative.View,{style:[_Searchfield.default.container,{backgroundColor:color?color:'rgba(255,255,255,.15)'},style],__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:7}},_react.default.createElement(_IconButton.default,(0,_extends2.default)({name:'search',size:20,color:'white'},searchIconProps,{__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:9}})),_react.default.createElement(_reactNative.TextInput,(0,_extends2.default)({ref:inputRef,style:[_Searchfield.default.searchInput,textStyle],placeholder:placeholder?placeholder:'Search',value:value,onChangeText:onChangeText,placeholderTextColor:'rgba(255,255,255,.57)',onFocus:onFocus,onBlur:onBlur},inputProps,{__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:9}})),_react.default.createElement(_IconButton.default,(0,_extends2.default)({name:'close',size:20,style:{opacity:!value||value&&value.length<1?0:1},onPress:onCloseIcon,color:'white'},closeIconProps,{__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:9}})));}}]);return Searchfield;}(_react.Component);(0,_defineProperty2.default)(Searchfield,"propTypes",{color:_propTypes.default.string,inputRef:_propTypes.default.func,onBlur:_propTypes.default.func,onChangeText:_propTypes.default.func,onCloseIcon:_propTypes.default.func,onFocus:_propTypes.default.func,placeholder:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),textStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),value:_propTypes.default.string,searchIconProps:_propTypes.default.object,closeIconProps:_propTypes.default.object,inputProps:_propTypes.default.object});var _default=(0,_withTheme.default)(Searchfield);exports.default=_default;