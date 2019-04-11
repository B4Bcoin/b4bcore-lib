var gulp = require('gulp');
var b4bcoreTasks = require('b4bcore-build');

b4bcoreTasks('lib');
gulp.task('default', ['lint', 'test', 'browser', 'coverage']);
