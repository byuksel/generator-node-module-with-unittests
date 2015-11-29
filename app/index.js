var chalk = require('chalk'),
    generators = require('yeoman-generator'),
    us = require('underscore.string');


exports = module.exports = generators.Base.extend({
  _copyToDest: function(from, to) {
    this.fs.copy(this.templatePath(from), this.destinationPath(to));
  },
  _makeDestDir: function(dir) {
    var newDir = this.destinationPath(dir);
    if (!this.fs.exists(newDir)) {
      this.mkdir(newDir);
    }
  },
  _copyToDestWithTemplate: function (from, to, template) {
    this.fs.copyTpl(
      this.templatePath(from),
      this.destinationPath(to),
      template);
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      name: 'generatorModuleName',
      message: 'What is your module\'s name ?',
      default : this.determineAppname(),
      desc: 'Name of your module. We will create an app with this name in current directory'
    },{
      name: 'generatorModuleDescription',
      message: 'What is your module\'s description ?',
      default : this.determineAppname(),
      desc: 'Description of your module.'
    },{
      name: 'generatorUserEmail',
      message: 'What is your email ?',
      default : this.user.git.email(),
      desc: 'Your email, does into package.json'
    },{
      name: 'generatorUserName',
      message: 'What is your name ?',
      default : this.user.git.name(),
      desc: 'Your name, does into package.json'
    },{
      name: 'generatorUserGithubName',
      message: 'What is your github username ?',
      default : this.user.git.email().split('@')[0],
      desc: 'Your github account name, does into package.json'
    }];

    this.prompt(prompts, function (answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },
  cleanUpAnswers: function() {
    this.answers['generatorModuleClass'] = us.classify(this.answers['generatorModuleName']);
    this.answers['generatorModuleNameWithDashes'] = us(
      this.answers['generatorModuleName']).decapitalize().dasherize().value();
    this.answers['generatorUserName'] = us.titleize(this.answers['generatorUserName']);
  },
  askModuleWebsite: function() {
    var done = this.async();
    var prompts = [{
      name: 'generatorModuleWebsite',
      message: 'What is your module\'s own website ?',
      default : 'http://www.' +
        this.answers['generatorModuleNameWithDashes'] +
        '.com',
      desc: 'Your github account name, does into package.json'
    }];
    this.prompt(prompts, function (answers) {
      var propNames = Object.getOwnPropertyNames(answers);
      for (var i = 0; i < propNames.length; i++) {
        this.answers[propNames[i]] = answers[propNames[i]];
      }
      done();
    }.bind(this));
  },
  tellUserOurTemplate: function(){
    this.log('We will use the values below for templating:');
    this.log(this.answers);
  },
  scaffoldFolders: function(){
    this._makeDestDir('src');
    this._makeDestDir('test');
    this._makeDestDir('test/unittests');
  },
  copyFiles: function(){
    this._copyToDest('._gitignore', '.gitignore');
    this._copyToDest('_Gruntfile.js', 'Gruntfile.js');
    this._copyToDest('_HOW_TO_GUIDE.md', 'HOW_TO_GUIDE.md');
    this._copyToDest('_jsdoc.conf', 'jsdoc.conf');
    this._copyToDestWithTemplate('_package.json', 'package.json', this.answers);
    this._copyToDestWithTemplate('_README.md.template', 'README.md.template', this.answers);
    this._copyToDest('_test/_index.html.template', 'test/index.html.template');
    this._copyToDestWithTemplate('_test/_unittests/_dummy-test.js',
                                 'test/unittests/dummy-test.js',
                                 this.answers);
    this._copyToDestWithTemplate(
      '_test/_unittests/_node-module-with-unittests-template-test.js',
      'test/unittests/'+ this.answers['generatorModuleNameWithDashes'] + '-test.js',
      this.answers);
    this._copyToDestWithTemplate('_src/_dummy.js', 'src/dummy.js', this.answers);
    this._copyToDestWithTemplate('_src/_node-module-with-unittests-template.js',
                                 'src/'+ this.answers['generatorModuleNameWithDashes'] + '.js',
                                 this.answers);
  },
  installingLodash: function() {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log(chalk.yellow('\nEverything is ready! For more information, refer to HOW_TO_GUIDE.md.'));
        console.log(chalk.yellow('You can type "grunt", and run your unittests, get coverage reports, ' +
                                 'get browserified and minimized versions of your module/library.'));
        console.log(chalk.green('\nEnjoy the ride, and have fun coding!'));
      }
    });
  }
});
