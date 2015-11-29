/**
 * @copyright Copyright (c) 2015, ProjectAgama, All Rights Reserved.
 * @author <%= generatorUserName %> <<%= generatorUserEmail %>>
 *
 * @file <%= generatorModuleClass %> Unit Test
 */

/*jshint expr: true*/
var <%= generatorModuleClass %> = require('../../src/<%= generatorModuleNameWithDashes %>');

var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;

chai.use(sinonChai);
chai.config.includeStack = true;
chai.config.truncateThreshold = 0;

describe('<%= generatorModuleNameWithDashes %>.js Unit Test', function() {

  it('<%= generatorModuleClass %> should say hello', function(){
    var testClass = new <%= generatorModuleClass %>();
    expect(testClass.hello()).eql('Hello!');
  });
});
