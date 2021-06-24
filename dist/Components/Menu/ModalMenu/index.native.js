var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _ModalMenuNative=_interopRequireDefault(require("./ModalMenu.native.styles"));var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/Menu/ModalMenu/index.native.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Modal=function(_Component){(0,_inherits2.default)(Modal,_Component);var _super=_createSuper(Modal);function Modal(){(0,_classCallCheck2.default)(this,Modal);return _super.apply(this,arguments);}(0,_createClass2.default)(Modal,[{key:"render",value:function render(){var _this$props=this.props,onRequestClose=_this$props.onRequestClose,onShow=_this$props.onShow,onBackdropPress=_this$props.onBackdropPress,containerStyle=_this$props.containerStyle,children=_this$props.children,NativeModalProps=_this$props.NativeModalProps,visible=_this$props.visible;var deviceWidth=_reactNative.Dimensions.get('window').width;var deviceHeight=_reactNative.Dimensions.get('window').height;return _react.default.createElement(_reactNative.Modal,(0,_extends2.default)({animationType:'none',transparent:true,visible:visible,onRequestClose:onRequestClose,onShow:onShow},NativeModalProps,{__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:7}}),_react.default.createElement(_reactNative.View,{style:[_ModalMenuNative.default.container,containerStyle],__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:9}},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onBackdropPress,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:11}},_react.default.createElement(_reactNative.Animated.View,{style:{width:deviceWidth,height:deviceHeight,position:'absolute',padding:24},__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:13}})),children));}}]);return Modal;}(_react.Component);(0,_defineProperty2.default)(Modal,"propTypes",{buttons:_propTypes.default.element,visible:_propTypes.default.bool,onRequestClose:_propTypes.default.func,onShow:_propTypes.default.func,onBackdropPress:_propTypes.default.func,containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),NativeModalProps:_propTypes.default.object,children:_propTypes.default.node});(0,_defineProperty2.default)(Modal,"defaultProps",{visible:false});var _default=(0,_withTheme.default)(Modal);exports.default=_default;