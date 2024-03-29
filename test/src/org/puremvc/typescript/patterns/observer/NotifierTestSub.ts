/*
 PureMVC TypeScript by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * @classDescription
 * A <code>Notifier</code> utility subclass used by <code>NotifierTest</code>.
 * 
 * @extends puremvc.Notifier Notifier
 * 
 * @constructor
 */
var NotifierTestSub = function()
{
	extract("puremvc.Notifier").call(this);
}
__extends( NotifierTestSub, extract("puremvc.Notifier") );

/**
 * A method to test if <code>Facade</code> instance of the object has
 * well been declared during its construction.
 *
 * @return {Boolean}
 * 		<code>Facade</code> instance of the object has well been declared
 * 		during its construction.
 */
NotifierTestSub.prototype.hasFacade = function()
{
	var Facade = extract("puremvc.Facade");
	return this.facade instanceof Facade;
}