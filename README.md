# Node-Module-With-Unittests generator

> Yeoman generator for a generic node module with unittests - lets you quickly set up a project with unittests, coverage reports, browserified and minimized versions of the module.

## Quick Installation

Install `yo`, `grunt-cli`, `bower` and `generator-node-module-with-unittests`:
```
npm install -g grunt-cli yo bower generator-node-module-with-unittests
```

## Usage

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo node-module-with-unittests`:
```
yo node-module-with-unittests
```

For an in-depth explanation of what this generator creates, refer to the HOW_TO_GUIDE.md file once you generate your app/module.

## Variables the generator uses ##

* **generatorModuleName:** Module Name. The generator will try to generate a proper name with dashes from this name.
* **generatorModuleClass:** (Generated but can be changed) Module class name derived from module name. It is the main exported class from your main file.
* **generatorModuleNameWithDashes:** (Generated but can be changed) Derived name from module name, used as your module's name in package.json, and when creating your entry javascript file under src directory.
* **generatorModuleDescription:** Module Description. Goes into package.json of your project.
* **generatorUserEmail:** Your email. Goes into package.json file and all the copyright notices in your source files.
* **generatorUserName:** Your name. Goes into package.json file and all the copyright notices in your source files.
* **generatorUserGithubName:** Your github account name. Goes into package.json file.
* **generatorModuleWebsite:** The website for your module. You may want to register this thru a domain registrar.

## Questions that the generator asks ##

* **'What is your module's name ?':** sets 'generatorModuleName'
* **'What is your module's dasherized name ? Will use this as the main module name':** sets 'generatorModuleNameWithDashes'
* **'What is your module's main exported class ?':** sets 'generatorModuleClass'.
* **'What is your module's description ?':** sets 'generatorModuleDescription'.
* **'What is your email ?':** sets 'generatorUserEmail'.
* **'What is your name ?':** sets 'generatorUserName'.
* **'What is your github username ?':** sets 'generatorUserGithubName'.
* **'What is your module's own website ?':** sets 'generatorModuleWebsite'.

# Bugs, Requests and Support #

For bug reports, feature requests and general questions, please feel free to email baris@onehundredyearsofcode.com
