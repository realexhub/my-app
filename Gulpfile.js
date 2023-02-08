const { src, dest } = require('gulp');

function copyBootstrap() {
  return src('node_modules/bootstrap/dist/css/*.min.css')
    .pipe(dest('public/Styles/Bootstrap/dist/css'));
}
function copyBootstrapJs() {
    return src('node_modules/bootstrap/dist/js/*.min.js')
      .pipe(dest('public/Styles/Bootstrap/dist/js'));
  }
exports.copyBootstrap = copyBootstrap;
exports.copyBootstrapJs = copyBootstrapJs;