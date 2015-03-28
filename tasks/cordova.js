var config = require('./config');
var gulp = require('gulp');

/**
 * Cordova-Build-Task Files
 *
 * NOTE: Depends on sme of the build-tasks as well
 * inspired by:
 * @url https://github.com/kamrik/CordovaGulpTemplate
 */

var plugins = ['org.apache.cordova.file'];
var testPlatform = 'android';

var path = require('path');
var pkg = require('../package.json');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;


// List of platforms determined form pkd.dependencies. This way platform file
// downloading and version preferences are entirely handled by npm install.
var platforms = [];  // List like ['cordova-ios', 'cordova-android']
var platform_dirs = [];  // List of subdirs with platform files under node_moduels
for (p in cordova_lib.cordova_platforms) {
    var pname = 'cordova-' + p;
    if (pkg.dependencies[pname]) {
        platforms.push(pname);
        platform_dirs.push(path.join(__dirname, 'node_modules', pname));
        // TODO: Check if those dirs exist and if not ask the user to run "npm install"
    }
}

// Prepare is not really needed
gulp.task('prepare', function ()
{
    process.chdir(config.dist);
    return cdv.prepare();
});

gulp.task('buildCordova', function ()
{
    process.chdir(config.dist);
    return cdv.build();
});

gulp.task('run', function (cb)
{
    process.chdir(config.dist);
    return cdv.run({platforms: [testPlatform], options: ['--device']});
});

gulp.task('emulate', function ()
{
    // TODO create symlink to app-folder
    process.chdir(config.dist);
    return cdv.emulate({platforms: [testPlatform]});
});

gulp.task('release', function ()
{
    process.chdir(config.dist);
    return cdv.build({options: ['--release']});
    // TODO: copy the apk file(s) out of ./build/.
});


