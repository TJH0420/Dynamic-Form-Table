import { deepCloneHandler, hasOwnProperty } from './helper'

/**
 * @description 根据选择的表单值 排列组合成 动态渲染出list
 *
 * @param defaultSelectedList 表单选择的结果List
 * @param defaultTableColumnList 默认表头
 * @param nameEn 英语名
 * @param nameLo 本地名
 */
export default function dynamicRenderingList({ defaultSelectedList = [], defaultTableColumnList = [], nameEn = '', nameLo = '' }) {
  const defaultSelectedListCopy = deepCloneHandler(defaultSelectedList);
  console.log('defaultSelectedListCopy', defaultSelectedListCopy)
  //判断arr内attributeSeleted为空情况
  if (isAllEmpty(defaultSelectedListCopy)) {
    return [];
  }

  // 组合成 tableShowList
  let queue = [];
  getQueue({}, 0, defaultSelectedListCopy, queue);

  //对str适当处理
  setQueue(queue, defaultTableColumnList, nameEn, nameLo)
  return queue;
}

function isAllEmpty(arr) {
  let emptyNum = 0;
  arr.forEach(item => {
    if (!item.attributeSeleted.length) {
      item.attributeSeleted.push("");
      emptyNum++;
    }
  });
  console.log(emptyNum === arr.length);
  return emptyNum === arr.length ? true : false;
}

function setQueue(queue, defaultTableColumnList, nameEn, nameLo) {
  queue.forEach(item => {
    let tmp = "";
    for (let name in item) {
      if (hasOwnProperty(item, name)) tmp += item[name];
    }
    defaultTableColumnList.forEach(e => {
      if (e.prop === "tableEnName") item[e.prop] = nameEn + tmp;
      else if (e.prop === "tableLocalName") item[e.prop] = nameLo + tmp;
      else item[e.prop] = "";
    });
  });
}

function getQueue(obj, i, arr, queue) {
  let arrLen = arr.length
  for (let j = 0; j < arr[i].attributeSeleted.length; j++) {
    if (i < arrLen - 1) {
      obj[arr[i].attributeId] = arr[i].attributeSeleted[j];
      getQueue(obj, i + 1, arr, queue);
    } else {
      obj[arr[i].attributeId] = arr[i].attributeSeleted[j];
      console.log("here", obj);
      queue.push(deepCloneHandler(obj));
    }
  }
}
