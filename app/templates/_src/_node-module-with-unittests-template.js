/**
 * @copyright Copyright (c) 2015, All Rights Reserved.
 * @licence [Apache-2.0]{http://www.apache.org/licenses/LICENSE-2.0}
 * @author <%= generatorUserName %> <<%= generatorUserEmail %>>
 *
 * @file Entry Point to <%= generatorModuleName %>
 *       Replace it with your own code.
 */

exports = module.exports = <%= generatorModuleClass %>;

// Bring in dummy.js
var Dummy = require('./dummy.js');

/**
 * Constructs a new empty <%= generatorModuleClass %> object.
 *
 * @constructor
 */
function <%= generatorModuleClass %>() {
  this.dummyClass = new Dummy();
}

/**
 * Simple function.
 *
 * @returns {string} returns what sayHello() returns from Dummy.js.
 */
<%= generatorModuleClass %>.prototype.hello = function() {
  return this.dummyClass.sayhello();
};
