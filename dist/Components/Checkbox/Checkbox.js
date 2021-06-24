var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _Icon=_interopRequireDefault(require("../Icon/Icon"));var _Ripple=_interopRequireDefault(require("../Ripple/Ripple"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Checkbox=_interopRequireDefault(require("./Checkbox.styles"));var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/Checkbox/Checkbox.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Checkbox=function(_Component){(0,_inherits2.default)(Checkbox,_Component);var _super=_createSuper(Checkbox);function Checkbox(){(0,_classCallCheck2.default)(this,Checkbox);return _super.apply(this,arguments);}(0,_createClass2.default)(Checkbox,[{key:"_getRippleColor",value:function _getRippleColor(){var _this$props=this.props,rippleColor=_this$props.rippleColor,rippleMatchesCheckbox=_this$props.rippleMatchesCheckbox,error=_this$props.error,theme=_this$props.theme;var checkboxColor=this._getCheckBoxColor();var rippleColorApplied=rippleColor;if(rippleMatchesCheckbox)rippleColorApplied=checkboxColor;if(error)rippleColorApplied=theme.error.main;return rippleColorApplied;}},{key:"_getCheckBoxColor",value:function _getCheckBoxColor(){var _this$props2=this.props,disabled=_this$props2.disabled,checkboxColor=_this$props2.checkboxColor,theme=_this$props2.theme,error=_this$props2.error;var checkboxColorApplied=checkboxColor?checkboxColor:theme.primary.main;if(error)checkboxColorApplied=theme.error.main;if(disabled)checkboxColorApplied='rgba(0,0,0,.5)';return checkboxColorApplied;}},{key:"_renderLabel",value:function _renderLabel(){var _this$props3=this.props,label=_this$props3.label,labelStyle=_this$props3.labelStyle,onPress=_this$props3.onPress;if(!label)return null;return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:_Checkbox.default.labelContainer,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:9}},_react.default.createElement(_reactNative.Text,{style:[_Checkbox.default.label,labelStyle],__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:11}},label)));}},{key:"_renderIconContainer",value:function _renderIconContainer(){var _this$props4=this.props,disabled=_this$props4.disabled,onPress=_this$props4.onPress,checkboxStyle=_this$props4.checkboxStyle,size=_this$props4.size;var rippleColor=this._getRippleColor();var rippleSize=1.5*size;return _react.default.createElement(_Ripple.default,{onPress:onPress,disabled:disabled,style:[_Checkbox.default.checkBoxRipple,checkboxStyle,{width:rippleSize,height:rippleSize,padding:rippleSize/6}],rippleCentered:true,rippleColor:rippleColor,rippleContainerBorderRadius:rippleSize/2,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:7}},this._renderIcon());}},{key:"_renderIcon",value:function _renderIcon(){var _this$props5=this.props,icon=_this$props5.icon,size=_this$props5.size,checkedIcon=_this$props5.checkedIcon,unCheckedColor=_this$props5.unCheckedColor,indeterminate=_this$props5.indeterminate,checked=_this$props5.checked,ios=_this$props5.ios,theme=_this$props5.theme,error=_this$props5.error;var checkboxColor=this._getCheckBoxColor();if(icon&&icon.props&&icon.props.name&&!checked){return _react.default.cloneElement(icon,{size:icon.props.size?icon.props.size:size,color:checkboxColor});}else if(checkedIcon&&checkedIcon.props&&checkedIcon.props.name&&checked){return _react.default.cloneElement(checkedIcon,{size:icon.props.size?icon.props.size:size,color:checkboxColor});}var iconName=indeterminate?'indeterminate-check-box':checkedIcon;var opacity=1;if(ios&&!indeterminate&&checked)iconName='done';if(!checked)iconName=icon;if(!checked&&ios)opacity=0;var unCheckedColorApplied=unCheckedColor;if(error)unCheckedColorApplied=theme.error.main;return _react.default.createElement(_Icon.default,{name:iconName,size:size,color:checked?checkboxColor:unCheckedColorApplied,style:{opacity:opacity},__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:7}});}},{key:"render",value:function render(){var _this$props6=this.props,style=_this$props6.style,labelPos=_this$props6.labelPos,testID=_this$props6.testID;return _react.default.createElement(_reactNative.View,{style:[_Checkbox.default.container,style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:168,columnNumber:7}},labelPos==='left'?this._renderLabel():null,this._renderIconContainer(),labelPos==='right'?this._renderLabel():null);}}]);return Checkbox;}(_react.Component);(0,_defineProperty2.default)(Checkbox,"propTypes",{checked:_propTypes.default.bool,disabled:_propTypes.default.bool,onPress:_propTypes.default.func,rippleColor:_propTypes.default.string,checkboxColor:_propTypes.default.string,unCheckedColor:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),checkboxStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,rippleMatchesCheckbox:_propTypes.default.bool,indeterminate:_propTypes.default.bool,label:_propTypes.default.string,labelStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),labelPos:_propTypes.default.string,icon:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),size:_propTypes.default.number,checkedIcon:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),ios:_propTypes.default.bool,error:_propTypes.default.bool,testID:_propTypes.default.string});(0,_defineProperty2.default)(Checkbox,"defaultProps",{unCheckedColor:'rgba(0,0,0,.5)',rippleColor:'rgba(0,0,0,.8)',icon:'check-box-outline-blank',size:24,checkedIcon:'check-box',labelPos:'right'});var _default=(0,_withTheme.default)(Checkbox);exports.default=_default;