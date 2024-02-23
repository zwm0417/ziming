// 每次打包时执行发布到npm


import { series } from "gulp";
import { pkgPath } from "../utils/paths";
import run from "../utils/run";


export const publishComponent = async () => {
  run("release-it", `${pkgPath}/ziming-ui`);
};

export default series(async () => publishComponent());



