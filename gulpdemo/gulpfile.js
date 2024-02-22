import browserSync from 'browser-sync';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

const sass = gulpSass(dartSass);

/**
 * src: 读取文件系统的流
 * dest: 写入文件系统的流
 * pipe: 中间处理
 * @returns
 */

/**
 * 将src路径下的所有文件拷贝到dist文件下
 * @returns
 */
const copy = () => {
  return gulp.src('src/*').pipe(gulp.dest('dist/'));
};

// export default copy

/**
 * sass任务，将src/style路径下的所有文件拷贝到dist/style文件下
 * @returns
 */
const sassTask = () => {
  return gulp
    .src('src/style/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions'],
        cascade: false //  是否美化属性值
      })
    )
    .pipe(gulp.dest('dist/style'));
};
// export default sassTask;

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
};

export default browserTask;
