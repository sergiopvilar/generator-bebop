/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('bebop generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('bebop:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [

            // Project files
            'Gruntfile.js',
            'package.json',
            'bower.json',
            'src/humans.txt',
            'src/.htaccess',
            'src/index.html',

            // Images
            'src/assets/img/sprite/retina/bebop.png',
            'src/assets/img/sprite/standard/bebop.png',

            // Javascript
            'src/assets/js/main.js',
            'src/assets/js/plugins.js',

            // SASS
            'src/assets/sass/_functions.scss',
            'src/assets/sass/_normalize.scss',
            'src/assets/sass/_style.scss',
            'src/assets/sass/_variables.scss',
            'src/assets/sass/main.scss',
            'src/assets/sass/main-ie.scss',
            'src/assets/sass/h5b/_base.scss',
            'src/assets/sass/h5b/_helpers.scss'

        ];

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
