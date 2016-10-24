/**
 * Gulp stuff
 */
          	  var gulp = require('gulp');

/**
 * Require Browsersync along with webpack and middleware for it
 */
       var browserSync = require('browser-sync'),
               webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware');

/**
 * Require ./webpack.config.js and make a bundler from it
 */
     var webpackConfig = require('./webpack.config.dev'),
               bundler = webpack(webpackConfig);

gulp.task('watch', ['default'], function(){
  
  runBrowserSync();

  gulp.watch('./public/index.html', browserSync.reload);

});

gulp.task('default', function(){});

function runBrowserSync() {

  /**
   * Run Browsersync and use middleware for Hot Module Replacement
   */
  browserSync({
    server: {
      baseDir: 'public',

      middleware: [
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConfig.output.publicPath,

          noInfo: true,
         
          // pretty colored output
          stats: { colors: true }

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler)
      ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      'public/css/*.css',
      'public/*.html'
    ]
  });

}

