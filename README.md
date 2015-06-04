# angular-modular-seed
Modular seed for angular. Used as a basis for [generator-mod-angular](https://github.com/johannesjo/generator-mod-angular).

** !!! This is currently not up to date. If you're interested in a modular seed, just run [generator-mod-angular](https://github.com/johannesjo/generator-mod-angular) once and use the output !!!**


# getting started
1. If done already install node, gulp, bower and cordova
2. Just create a copy of the project and adjust the basic files to your liking

**Run**:
* ```gulp``` for development
* ```gulp build``` for standard web-build
* ```cordova platform add [plattform]``` to get started with hybrid-app development
* ```gulp emulate``` for using an emulator for development
* ```gulp build && gulp buildCordova``` for building the hybrid-app


# idea behind this project
There are quite a lot of seeds and generators out there but non so far which satisfies my needs. What I want to achieve in a number of bullet points is:
* a truly modular generator
* uses sass and lib-sass
* provides an easy way to compile your web-app to a hybrid app without assuming any frameworks, while offering an easy integration for the most common ones
* gives you a head start for a modular css and JavaScript project structure

# file-structure of app folder
```
index.html
bower_components/   // ignored
fonts/
images/
styles/
  _variables.scss
  main.scss
  base/
    _buttons.scss
    _fonts.scss
    _forms.scss
    _icons.scss
    _page.scss
    _typography.scss
  mixins/
    _mixin1.scss
    _mixin2.scss
  functions/
    _function1.scss
    _function2.scss
scripts/
  _app.js
  _app.spec.js
  _routes.js
  _routes.spec.js
  _main/
    auth/
    global-filters/
      some-filter.js
      some-filter.spec.js
    global-services/
      global-factory-f.js
      global-factory-f.spec
      global-service-s.js
      global-service-s.spec.js
  _routes/
    route1/
      _route1.scss
      route1-c.js
      route1-c.html
      route1-c.spec.js
      // optional service or factory
      route-model-s.js
      route-model-s.spec.js
    route2/
      subroute1/
        _subroute1.scss
        subroute1-c.js
        subroute1-c.html
        subroute1-c.spec.js
  module1/
    _module1.scss
    module1-d.js
    module1-d.spec.js
    // optional service or factory
    module1-s.js
    module1-s.spec.js
  module2/
    sub-module1/
      _sub-module1.scss
      sub-module1-d.js
      sub-module1-d.spec.js
      // optional service or factory
      sub-module1-s.js
      sub-module1-s.spec.js
```
## file pre- and suffixes
```
_*/             : main app directories main and route
are prefixed to be shown on top
_*.js           : angular module, prefixed like this to be
loaded first by file-injection
*.spec.js       : unit tests of all kind
*.e2e.js        : end to end tests
*-c.js          : controller
*-c.html        : controller-template
*-c.scss        : route-specfic (usually page-level) styles
*-d.js          : directive
*-d.html        : directive-template
*-d.scss        : directive-specific (usually component-level) styles
*-f.js          : factory
*-s.js          : service
*-p.js          : provider
*-filter.js     : filter
*-decorator.js  : decorator
```

# ./ structure
```
.bowerrc
.editorconfig
.gitignore
.jshintrc
.travis.yml
bower.json
config.xml
gulpfile.js
karma.conf.js
karma-e2e.conf.js
package.json
app/
e2e-tests/
  po/         // page-objects
  example.e2e.js
node_modules/
plattforms/   // ignored
plugins/      // cordova-plugins
tasks/
  build.js
  config.js
  cordova.js
  dev.js
www/          // ignored

```
