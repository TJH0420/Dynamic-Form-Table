<template>
  <div class="dynamic-table">
    <el-table
      class="fixedtableHeight"
      v-loading="listLoading"
      ref="multipleTable"
      :data="tableShowList"
      :header-cell-style="{background:'#ebeef5'}"
      stripe
      tooltip-effect="dark"
      style="width: 100%;margin-top:1%;"
    >
      <el-table-column
        :label="item.propName"
        :property="item.prop"
        v-for="item in tableColumnList"
        :key="item.prop"
        align="center"
      >
        <template slot-scope="scope">
          <span
            v-if="disabledIDs.includes(scope.column.property)"
          >{{scope.row[scope.column.property]}}</span>
          <input v-else type="text" v-model="scope.row[scope.column.property]" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  dynamicRenderingList,
  deepCloneHandler,
  ListCompare
} from "../utils/index";

export default {
  name: "DynamicTable",
  props: {
    defaultSelectedList: Array,
    defaultTableIDs: Array,
    defaultTableProps: Array,
    defaultTableColumnList: Array,
    defaultTableList: Array
  },
  data() {
    return {
      listLoading: false,
      disabledIDs: [],
      tableShowList: deepCloneHandler(this.defaultTableList)
    };
  },
  computed: {
    tableColumnList() {
      return deepCloneHandler(this.defaultTableColumnList);
    }
  },
  watch: {
    defaultSelectedList: {
      deep: true,
      handler: function(newVal) {
        if (this.tableShowList.length) {
          const oldTableShowList = deepCloneHandler(this.tableShowList);
          const params = {
            defaultSelectedList: newVal,
            nameEn: "HUAWEI",
            nameLo: "华为",
            defaultTableColumnList: this.defaultTableColumnList
          };
          const newTableShowList = deepCloneHandler(
            dynamicRenderingList(params)
          );
          this.tableShowList = deepCloneHandler(
            ListCompare(oldTableShowList, newTableShowList)
          );
        } else {
          const params = {
            defaultSelectedList: newVal,
            nameEn: "HUAWEI",
            nameLo: "华为",
            defaultTableColumnList: this.defaultTableColumnList
          };
          this.tableShowList = deepCloneHandler(dynamicRenderingList(params));
        }
      }
    },
    defaultTableIDs: {
      deep: true,
      handler: function(newVal) {
        this.addDisabledIDsHandler(newVal);
      }
    },
    defaultTableProps: {
      deep: true,
      handler: function(newVal) {
        this.addtableColumnHandler(newVal);
      }
    }
    // defaultTableList: {
    //   deep: true,
    //   handler: function(newVal) {
    //      this.tableShowList=deepCloneHandler(newVal)
    //   }
    // },
  },
  created() {
    this.addDisabledIDsHandler(this.defaultTableIDs);
    this.addtableColumnHandler(this.defaultTableProps);
  },
  methods: {
    // 处理 表头
    addtableColumnHandler(arr) {
      arr.forEach(ele => {
        this.tableColumnList.push({
          prop: ele.attributeId,
          propName: ele.attributeName
        });
      });
    },
    // 处理 不可编辑数组
    addDisabledIDsHandler(arr) {
      this.disabledIDs = ["tableId", "tableEnName"].concat(arr);
    },
    // 判断是否存在
    // itExistHandler(arr){
    //   console.log(arr);
    // }
    getTableList() {
      const table = deepCloneHandler(this.tableShowList);
      table.map(ele => {
        ele.tableListIDs = [];
        for (let key in ele) {
          if (this.defaultTableIDs.includes(key)) {
            const obj = {
              attributeId: key,
              attributeValues: ele[key]
            };
            delete ele[key];
            ele.tableListIDs.push(obj);
          }
        }
        return ele;
      });
      return table;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
