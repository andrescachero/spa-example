/*
 * spa.NAME.js
 * NAME module for SPA
*/

/*jslint         browser: true, continue : true,
  devel  : true, indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white  : true
*/
/*global $, spa */

spa.NAME = (function () {
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var 
	  configMap = {},
		stateMap = { $container : null },
		jqueryMap = {},
		setJqueryMap, initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	//------------------- BEGIN UTILITY METHODS ------------------
	//-------------------- END UTILITY METHODS -------------------

	//--------------------- BEGIN DOM METHODS --------------------
	// Begin DOM method /setJqueyMap/
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = { $container : $container };
	};
	// End DOM method /setJqueryMap/
	//---------------------- END DOM METHODS ---------------------

	//------------------- BEGIN EVENT HANDLERS -------------------
	//-------------------- END EVENT HANDLERS --------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	// Begin Public method /initModule/
		initModule =	function ( $container ) {
		};
	// End Public method /initModule/
	return { initModule : initModule };
	//------------------- END PUBLIC METHODS ---------------------
}());