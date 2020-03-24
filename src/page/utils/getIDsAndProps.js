/**
* @description 获得转换 和 获得动态表头
*
* @param defaultFormList 动态生成表单的List
*/
export default function getIDsAndProps(defaultFormList = []) {
  const defaultTableIDs = [];
  const defaultTableProps = [];
  defaultFormList.forEach(element => {
    // 获得转换defaultTableIDs
    defaultTableIDs.push(element.attributeId);
    // 获得动态表头defaultTableProps
    defaultTableProps.push({
      attributeId: element.attributeId,
      attributeName: element.attributeName
    });
  });
  return { defaultTableIDs, defaultTableProps };
}