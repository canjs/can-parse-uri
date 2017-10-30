/**
 * @module {function} can-parse-uri can-parse-uri
 * @parent can-js-utilities
 * @collection can-infrastructure
 * @signature `parseURI(url)`
 *
 * Parse a URI into its components.
 *
 * @param {String} url The URL you want to parse.
 *
 * @return {Object} Returns an object with properties for each part of the URL.
 */

module.exports = function(url){
		var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
			// authority = '//' + user + ':' + pass '@' + hostname + ':' port
		return (m ? {
			href     : m[0] || '',
			protocol : m[1] || '',
			authority: m[2] || '',
			host     : m[3] || '',
			hostname : m[4] || '',
			port     : m[5] || '',
			pathname : m[6] || '',
			search   : m[7] || '',
			hash     : m[8] || ''
		} : null);
	};
