var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=require("react");var _reactDom=_interopRequireDefault(require("react-dom"));var _propTypes=_interopRequireDefault(require("prop-types"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Portal=function(_Component){(0,_inherits2.default)(Portal,_Component);var _super=_createSuper(Portal);function Portal(){var _this;(0,_classCallCheck2.default)(this,Portal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{el:null,target:null});return _this;}(0,_createClass2.default)(Portal,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var container=document.createElement('div');if(typeof document=="undefined"){return;}this.setState({el:container,target:document.body},function(){_this2.state.target.appendChild(_this2.state.el);});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.state.target&&this.state.target.removeChild(this.state.el);}},{key:"render",value:function render(){var children=this.props.children;if(this.state.el){return _reactDom.default.createPortal(children,this.state.el);}return null;}}]);return Portal;}(_react.Component);exports.default=Portal;(0,_defineProperty2.default)(Portal,"propTypes",{children:_propTypes.default.node.isRequired,visible:_propTypes.default.bool});