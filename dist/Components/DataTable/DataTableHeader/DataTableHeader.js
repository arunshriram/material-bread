var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _IconButton=_interopRequireDefault(require("../../IconButton/IconButton"));var _DataTableHeader=_interopRequireDefault(require("./DataTableHeader.styles"));var _jsxFileName="/Users/arunshriram/Documents/material-bread/src/Components/DataTable/DataTableHeader/DataTableHeader.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var DataTableHeader=function(_Component){(0,_inherits2.default)(DataTableHeader,_Component);var _super=_createSuper(DataTableHeader);function DataTableHeader(){(0,_classCallCheck2.default)(this,DataTableHeader);return _super.apply(this,arguments);}(0,_createClass2.default)(DataTableHeader,[{key:"_renderTitle",value:function _renderTitle(){var _this$props=this.props,title=_this$props.title,leftActions=_this$props.leftActions;if(!title)return null;return _react.default.createElement(_reactNative.Text,{style:[_DataTableHeader.default.title,{marginLeft:leftActions?12:0}],__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:7}},title);}},{key:"_renderActions",value:function _renderActions(actionItems,position){if(!actionItems)return null;return _react.default.createElement(_reactNative.View,{style:_DataTableHeader.default.actions,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:7}},actionItems.map(function(item,index){if(item.name){return _react.default.createElement(_IconButton.default,{key:item.name,name:item.name,size:24,color:'rgba(33, 33, 33, 0.6)',style:{marginRight:index+1===actionItems.length||position==='left'?0:8,marginLeft:index+1===actionItems.length||position==='right'?0:8},onPress:item.onPress,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:15}});}else{return item;}}));}},{key:"_renderContent",value:function _renderContent(){var _this$props2=this.props,rightActions=_this$props2.rightActions,leftActions=_this$props2.leftActions;return _react.default.createElement(_reactNative.View,{style:[_DataTableHeader.default.content,{paddingRight:rightActions?12:16,paddingLeft:leftActions?12:16}],__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:_DataTableHeader.default.left,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:9}},this._renderActions(leftActions,'left'),this._renderTitle()),this._renderActions(rightActions,'right'));}},{key:"render",value:function render(){var _this$props3=this.props,children=_this$props3.children,style=_this$props3.style;return _react.default.createElement(_reactNative.View,{style:[_DataTableHeader.default.dataTableHeader,style],__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:7}},children?children:this._renderContent());}}]);return DataTableHeader;}(_react.Component);(0,_defineProperty2.default)(DataTableHeader,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),rightActions:_propTypes.default.array,leftActions:_propTypes.default.array,title:_propTypes.default.string});(0,_defineProperty2.default)(DataTableHeader,"defaultProps",{borderBottomColor:'rgb(224, 224, 224)'});var _default=(0,_withTheme.default)(DataTableHeader);exports.default=_default;