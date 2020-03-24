
/**
 * @description 重新选择后比较 相同保留 多的添加 少的删除
 * 
 * @param list1 旧表
 * @param list2 新表
 */
export default function ListCompare(list1 = [], list2 = []) {
  const hash = new Map();
  list2.forEach(({ tableEnName }, index) => hash.set(tableEnName, index));
  const result = []; // 相同的保留
  result.push(...list1.filter(({ tableEnName }) => hash.has(tableEnName)));
  hash.clear();
  list1.forEach(({ tableEnName }, index) => hash.set(tableEnName, index));
  result.push(...list2.filter(({ tableEnName }) => !hash.has(tableEnName)));
  return result;
}