var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _=require("../..");var _Ripple=_interopRequireDefault(require("../Ripple/Ripple"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Card/Card.js";var Card=function(_Component){(0,_inherits2.default)(Card,_Component);function Card(){(0,_classCallCheck2.default)(this,Card);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Card).apply(this,arguments));}(0,_createClass2.default)(Card,[{key:"_renderRipple",value:function _renderRipple(){var _this$props=this.props,children=_this$props.children,onPress=_this$props.onPress,rippleProps=_this$props.rippleProps;return _react.default.createElement(_Ripple.default,(0,_extends2.default)({Press:onPress},rippleProps,{__source:{fileName:_jsxFileName,lineNumber:28}}),children);}},{key:"render",value:function render(){var _this$props2=this.props,style=_this$props2.style,outlined=_this$props2.outlined,radius=_this$props2.radius,onPress=_this$props2.onPress,shadow=_this$props2.shadow,children=_this$props2.children,testID=_this$props2.testID;return _react.default.createElement(_.Paper,{shadow:shadow,radius:radius,style:[style,{borderWidth:outlined?_reactNative.StyleSheet.hairlineWidth:0,borderBottomColor:'rgba(0,0,0,.4)',maxWidth:500}],testID:testID,__source:{fileName:_jsxFileName,lineNumber:46}},onPress?this._renderRipple():children);}}]);return Card;}(_react.Component);(0,_defineProperty2.default)(Card,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),outlined:_propTypes.default.bool,shadow:_propTypes.default.number,radius:_propTypes.default.number,onPress:_propTypes.default.func,rippleProps:_propTypes.default.object,testID:_propTypes.default.string});(0,_defineProperty2.default)(Card,"defaultProps",{radius:4,shadow:1});var _default=(0,_withTheme.default)(Card);exports.default=_default;