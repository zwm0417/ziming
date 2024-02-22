import { series } from 'gulp';

/**
 * series: 串行任务，一个接一个执行
 * parallel: 并行任务，所有任务一起执行
 * @returns
 */

const task1 = () => {
  console.log('task1');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};
const task2 = () => {
  console.log('task2');
  return Promise.resolve();
};

export default series(task1, task2);
