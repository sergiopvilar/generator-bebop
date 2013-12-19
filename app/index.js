'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BebopGenerator = module.exports = function BebopGenerator(args, options) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BebopGenerator, yeoman.generators.Base);

BebopGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    /*console.log(this.yeoman);

     var prompts = [{
     type: 'confirm',
     name: 'someOption',
     message: 'Would you like to enable this option?',
     default: true
     }];

     this.prompt(prompts, function (props) {
     this.someOption = props.someOption;

     cb();
     }.bind(this));*/
    cb();
};

BebopGenerator.prototype.app = function app() {

    this.mkdir('src');
    this.mkdir('src/assets');

    this.mkdir('src/assets/js');
    this.mkdir('src/assets/js/vendor');

    this.mkdir('src/assets/sass');
    this.mkdir('src/assets/sass/h5b');

    this.mkdir('src/assets/img');
    this.mkdir('src/assets/img/sprite');
    this.mkdir('src/assets/img/sprite/retina');
    this.mkdir('src/assets/img/sprite/standard');

    // Root files
    this.copy('_package.json', 'package.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_bower.json', 'bower.json');
    this.copy('_.bowerrc', '.bowerrc');

    // Public files
    this.copy('src/.htaccess', 'src/.htaccess');
    this.copy('src/humans.txt', 'src/humans.txt');
    this.copy('src/index.html', 'src/index.html');

    // Images
    this.copy('src/assets/img/sprite/retina/bebop.png', 'src/assets/img/sprite/retina/bebop.png');
    this.copy('src/assets/img/sprite/standard/bebop.png', 'src/assets/img/sprite/standard/bebop.png');

    // Javascript
    this.copy('src/assets/js/main.js', 'src/assets/js/main.js');
    this.copy('src/assets/js/plugins.js', 'src/assets/js/plugins.js');

    // SASS
    this.copy('src/assets/sass/_functions.scss', 'src/assets/sass/_functions.scss');
    this.copy('src/assets/sass/_normalize.scss', 'src/assets/sass/_normalize.scss');
    this.copy('src/assets/sass/_style.scss', 'src/assets/sass/_style.scss');
    this.copy('src/assets/sass/_variables.scss', 'src/assets/sass/_variables.scss');
    this.copy('src/assets/sass/main-ie.scss', 'src/assets/sass/main-ie.scss');
    this.copy('src/assets/sass/main.scss', 'src/assets/sass/main.scss');
    this.copy('src/assets/sass/h5b/_base.scss', 'src/assets/sass/h5b/_base.scss');
    this.copy('src/assets/sass/h5b/_helpers.scss', 'src/assets/sass/h5b/_helpers.scss');

};

BebopGenerator.prototype.projectfiles = function projectfiles() {
    // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
};
