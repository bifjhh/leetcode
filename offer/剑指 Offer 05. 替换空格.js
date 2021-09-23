/**
 * 正则替换
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/\s/g, '%20');
};
/**
 * 分割数组转换
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.split(' ').join('%20')
};

// for...一个类型吧
function fn(s = '') {
  let r = '';
  for (let i = 0; i < s.length; i++) {
    let e = s[i]
    if (e == ' ') {
      e = '%20'
    }
    r += e
  }
  return r;
}