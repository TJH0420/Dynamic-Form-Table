<template>
  <div class="dynamic-form-table">
    <h1>动态表单</h1>
    <DynamicForm
      ref="dynamicForm"
      :defaultFormList="defaultFormList"
      @selectionResult="selectionResultHandler"
    ></DynamicForm>
    <h1>动态表格</h1>
    <DynamicTable
      ref="dynamicTable"
      :defaultTableList="defaultTableList"
      :defaultTableColumnList="defaultTableColumnList"
      :defaultSelectedList="defaultSelectedList"
      :defaultTableIDs="defaultTableIDs"
      :defaultTableProps="defaultTableProps"
    ></DynamicTable>
    <el-row>
      <el-button type="primary" @click="keepHandler">传输给后台</el-button>
    </el-row>
  </div>
</template>

<script>
import DynamicForm from "./components/DynamicForm.vue";
import DynamicTable from "./components/DynamicTable.vue";
import { flattenResult, getIDsAndProps } from "./utils/index";

export default {
  name: "DynamicFormTable",
  props: {
    msg: String
  },
  components: {
    DynamicForm,
    DynamicTable
  },
  methods: {
    selectionResultHandler(value) {
      this.defaultSelectedList = value;
    },
    keepHandler() {
      console.log(
        "SKU LIST",
        JSON.stringify(this.$refs.dynamicTable.getTableList())
      );
    }
  },
  created() {
    const { defaultTableIDs, defaultTableProps } = getIDsAndProps(
      this.defaultFormList
    );
    this.defaultTableIDs = defaultTableIDs;
    this.defaultTableProps = defaultTableProps;

    const { copyResultList, copyDefaultFormList } = flattenResult(
      this.resultList,
      this.defaultFormList
    );
    this.defaultTableList = copyResultList;
    this.defaultFormList = copyDefaultFormList;
  },
  data() {
    return {
      //应该转换的字段，即用于传给后端的表格list中的tableListIDs
      defaultTableIDs: [],

      // 动态表头
      defaultTableProps: [],

      // 表单选择的结果List
      defaultSelectedList: [],

      //默认表格list
      defaultTableList: [],

      // 默认表头
      defaultTableColumnList: [
        { prop: "tableId", propName: "编号" },
        { prop: "tableEnName", propName: "英文名" },
        { prop: "tableLocalName", propName: "本地名" },
        { prop: "tableCostPrice", propName: "成本价" },
        { prop: "tableSalePrice", propName: "销售价" },
        { prop: "tablePic", propName: "图片" }
      ],

      //后端返回的表格list
      resultList: [
        {
          tableId: "",
          tableEnName: "HUAWEI大陆版红64G",
          tableLocalName: "华为大陆版红64G",
          tableCostPrice: "4666",
          tableSalePrice: "5888",
          tablePic: "",
          tableListIDs: [
            { attributeId: "100001", attributeValues: "大陆版" },
            { attributeId: "100002", attributeValues: "红" },
            { attributeId: "100003", attributeValues: "64G" }
          ]
        },
        {
          tableId: "",
          tableEnName: "HUAWEI大陆版白64G",
          tableLocalName: "华为大陆版白64G",
          tableCostPrice: "4666",
          tableSalePrice: "5888",
          tablePic: "",
          tableListIDs: [
            { attributeId: "100001", attributeValues: "大陆版" },
            { attributeId: "100002", attributeValues: "白" },
            { attributeId: "100003", attributeValues: "64G" }
          ]
        },
        {
          tableId: "",
          tableEnName: "HUAWEI大陆版红32G",
          tableLocalName: "华为大陆版红32G",
          tableCostPrice: "4000",
          tableSalePrice: "5000",
          tablePic: "",
          tableListIDs: [
            { attributeId: "100001", attributeValues: "大陆版" },
            { attributeId: "100002", attributeValues: "红" },
            { attributeId: "100003", attributeValues: "32G" }
          ]
        },
        {
          tableId: "",
          tableEnName: "HUAWEI大陆版白32G",
          tableLocalName: "华为大陆版白32G",
          tableCostPrice: "4000",
          tableSalePrice: "5000",
          tablePic: "",
          tableListIDs: [
            { attributeId: "100001", attributeValues: "大陆版" },
            { attributeId: "100002", attributeValues: "白" },
            { attributeId: "100003", attributeValues: "32G" }
          ]
        }
      ],

      // 动态生成表单的List
      defaultFormList: [
        {
          attributeId: "100001",
          attributeKey: "lable1",
          attributeName: "型号",
          attributeValues: ["大陆版", "港版", "台版"],
          attributeType: "2",
          required: "1",
          unitRequired: "0",
          attributeUnit: "",
          attributeSeleted: []
        },
        {
          attributeId: "100002",
          attributeKey: "lable2",
          attributeName: "颜色",
          attributeValues: ["红", "白", "黑"],
          attributeType: "2",
          required: "1",
          unitRequired: "0",
          attributeUnit: "",
          attributeSeleted: []
        },
        {
          attributeId: "100003",
          attributeKey: "lable3",
          attributeName: "内存",
          attributeValues: ["64G", "32G", "16G"],
          attributeType: "2",
          required: "1",
          unitRequired: "0",
          attributeUnit: "",
          attributeSeleted: []
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
