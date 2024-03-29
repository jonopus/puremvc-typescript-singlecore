/*
 PureMVC TypeScript by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * A <code>Proxy</code> subclass used by <code>ModelTest</code> testCase.
 *
 * @extends puremvc.Proxy Proxy
 * 
 * @constructor
 */
var ModelTestProxy = function(){ this.initialize() }
__extends( ModelTestProxy, extract("puremvc.Proxy") );

/**
 * @constructs
 */
ModelTestProxy.prototype.initialize = function()
{
	extract("puremvc.Proxy").call( this, ModelTestProxy.NAME, '' );
}

/**
 * @override.
 */
ModelTestProxy.prototype.onRegister = function()
{
	this.setData( ModelTestProxy.ON_REGISTER_CALLED );
},

/**
 * @override.
 */
ModelTestProxy.prototype.onRemove = function()
{
	this.setData( ModelTestProxy.ON_REMOVE_CALLED );
}

/**
 * @type {String}
 * @constant
 */
ModelTestProxy.NAME = 'ModelTestProxy';


/**
 * @type {String}
 * @constant
 */
ModelTestProxy.ON_REGISTER_CALLED = 'onRegister Called';


/**
 * @type {String}
 * @constant
 */
ModelTestProxy.ON_REMOVE_CALLED = 'onRemove Called';