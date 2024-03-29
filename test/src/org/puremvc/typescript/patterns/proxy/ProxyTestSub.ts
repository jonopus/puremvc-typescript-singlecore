/*
 PureMVC TypeScript by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * @classDescription
 * A <code>Proxy</code> utility subclass used by <code>ProxyTest</code>.
 * 
 * @extends puremvc.Proxy Proxy
 */

/**
 * @constructor
 */
var ProxyTestSub = function()
{
	extract("puremvc.Proxy").call(this);
}
__extends( ProxyTestSub, extract("puremvc.Proxy") );

/**
 * A method to test if <code>Facade</code> instance of the object has
 * well been declared during its construction.
 *
 * @return {Boolean}
 * 		<code>Facade</code> instance of the object has well been declared
 * 		during its construction.
 */
ProxyTestSub.prototype.hasFacade = function()
{
	var Facade = extract("puremvc.Facade");
	return this.facade instanceof Facade;
}