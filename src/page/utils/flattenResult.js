import { deepCloneHandler } from './helper'
/**
 * @description 结果扁平化 和 表单结果填充
 *
 * @param resultList 返回的结果
 * @param defaultFormList 动态生成表单的List
 */
export default function flattenResult(resultList = [], defaultFormList = []) {
  const copyResultList = deepCloneHandler(resultList);
  const copyDefaultFormList = deepCloneHandler(defaultFormList);
  const map = new Map();
  const valHash = new Set()
  copyResultList.forEach(item => {
    // 把值都拿出来 O(m*n)
    const { tableListIDs = [] } = item;
    tableListIDs.forEach(({ attributeId: id, attributeValues: value }) => {
      // 有值没存过
      if (map.has(id) && !valHash.has(value)) {
        valHash.add(value)
        map.get(id).push(value);
      } else if (!map.has(id)) {
        valHash.add(value)
        map.set(id, [value]);
      }
      item[id] = value;
    });
    delete item.tableListIDs;
  });
  // 表单结果填充
  copyDefaultFormList.forEach(item => {
    if (map.has(item.attributeId)) {
      item.attributeSeleted = [...map.get(item.attributeId)];
    }
  });
  return { copyResultList, copyDefaultFormList };
}

