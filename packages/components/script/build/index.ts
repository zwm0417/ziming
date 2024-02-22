import { dest, parallel, series, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import delPath from '../utils/delpath';
import { componentPath, pkgPath } from '../utils/paths';
import run from '../utils/run';

const sass = gulpSass(dartSass);

//删除ziming

export const removeDist = () => {
  return delPath(`${pkgPath}/ziming`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/ziming/lib/src`))
    .pipe(dest(`${pkgPath}/ziming/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

// 默认导出串行任务=> 先执行删除ziming目录，后执行并行任务（打包样式和打包组件）
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
