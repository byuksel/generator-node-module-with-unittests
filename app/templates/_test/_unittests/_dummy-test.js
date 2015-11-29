/**
 * @copyright Copyright (c) 2015, ProjectAgama, All Rights Reserved.
 * @author <%= generatorUserName %> <<%= generatorUserEmail %>>
 *
 * @file Dummy Unit Test
 */

/*jshint expr: true*/
var Dummy = require('../../src/dummy');

var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;

chai.use(sinonChai);
chai.config.includeStack = true;
chai.config.truncateThreshold = 0;

describe('Dummy.js Unit Test', function() {

  it('Dummy should say hello', function(){
    var testClass = new Dummy();
    expect(testClass.sayhello()).eql('Hello!');
  });
});
