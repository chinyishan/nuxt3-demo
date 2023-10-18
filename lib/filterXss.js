import xss from "xss";
/**
 * https://github.com/leizongmin/js-xss#whitelist
 */
const whiteList = () => {
  const whiteListMap = { ...xss.whiteList };
  Object.keys(whiteListMap).forEach((keyName) => {
    // 把全部的標籤變成只剩下 style 可用
    whiteListMap[keyName] = ["style"];
  });
  return whiteListMap;
};

export const xssParse = (str) => {
  return xss(str, {
    whiteList: whiteList(),
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script"],
  });
};
