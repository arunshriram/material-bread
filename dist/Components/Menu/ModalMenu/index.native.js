var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _ModalMenuNative=_interopRequireDefault(require("./ModalMenu.native.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Menu/ModalMenu/index.native.js";var Modal=function(_Component){(0,_inherits2.default)(Modal,_Component);function Modal(){(0,_classCallCheck2.default)(this,Modal);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Modal).apply(this,arguments));}(0,_createClass2.default)(Modal,[{key:"render",value:function render(){var _this$props=this.props,onRequestClose=_this$props.onRequestClose,onShow=_this$props.onShow,onBackdropPress=_this$props.onBackdropPress,containerStyle=_this$props.containerStyle,children=_this$props.children,NativeModalProps=_this$props.NativeModalProps,visible=_this$props.visible;var deviceWidth=_reactNative.Dimensions.get('window').width;var deviceHeight=_reactNative.Dimensions.get('window').height;return _react.default.createElement(_reactNative.Modal,(0,_extends2.default)({animationType:'none',transparent:true,visible:visible,onRequestClose:onRequestClose,onShow:onShow},NativeModalProps,{__source:{fileName:_jsxFileName,lineNumber:45}}),_react.default.createElement(_reactNative.View,{style:[_ModalMenuNative.default.container,containerStyle],__source:{fileName:_jsxFileName,lineNumber:52}},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onBackdropPress,__source:{fileName:_jsxFileName,lineNumber:53}},_react.default.createElement(_reactNative.Animated.View,{style:{width:deviceWidth,height:deviceHeight,position:'absolute',padding:24},__source:{fileName:_jsxFileName,lineNumber:54}})),children));}}]);return Modal;}(_react.Component);(0,_defineProperty2.default)(Modal,"propTypes",{buttons:_propTypes.default.element,visible:_propTypes.default.bool,onRequestClose:_propTypes.default.func,onShow:_propTypes.default.func,onBackdropPress:_propTypes.default.func,containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),NativeModalProps:_propTypes.default.object,children:_propTypes.default.node});(0,_defineProperty2.default)(Modal,"defaultProps",{visible:false});var _default=(0,_withTheme.default)(Modal);exports.default=_default;