var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task("webpack", function(callback) {
  // run webpack
  webpack({
    // configuration
    entry: "./src/index.jsx",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: "style!css"
        }
      ]
    }

  }, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options

    }));
    callback();
  });
})

gulp.task('default', function() {
    gulp.run('webpack');
})

gulp.task('dev', function() {
    gulp.run('webpack');

    gulp.watch('src/**', function(event) {
      gulp.run('webpack');
    })

    // gulp.watch('app/src/**', function(event) {
    //     gulp.run('scripts');
    // })
    //
    // gulp.watch('app/css/**', function(event) {
    //     gulp.run('styles');
    // })
    //
    // gulp.watch('app/**/*.html', function(event) {
    //     gulp.run('html');
    // })
})
