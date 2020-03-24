<template>
  <div class="dynamic-form">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm1" label-width="175px">
      <el-form-item
        v-for="(item, index) in dynamicValidateForm.DynamicForm"
        :label="item.attributeName"
        :key="item.key"
        :prop="item.required==='1'?'DynamicForm.' + index + '.attributeSeleted':''"
        :rules="{
          required: item.required==='1'?true:false,
          message: item.attributeName + ' is required',
          trigger: 'blur'
        }"
      >
        <el-radio-group
          v-model="item.attributeSeleted"
          v-if="item.attributeType === '1' && item.unitRequired === '0'"
        >
          <el-radio v-for="ele in item.attributeValues" :key="ele" :label="ele"></el-radio>
        </el-radio-group>
        <!-- <el-select
          v-if="item.attributeType === '1' && item.unitRequired === '0'"
          v-model="item.attributeSeleted"
          clearable
          placeholder
        >
          <el-option v-for="ele in item.attributeValues" :key="ele" :label="ele" :value="ele"></el-option>
        </el-select>-->
        <el-checkbox-group
          v-model="item.attributeSeleted"
          v-else-if="item.attributeType === '2' && item.unitRequired === '0'"
        >
          <el-checkbox v-for="ele in item.attributeValues" :key="ele" :label="ele" name="type"></el-checkbox>
        </el-checkbox-group>
        <el-input
          style="width:40%;"
          v-if="item.attributeType === '3' && item.unitRequired === '0'"
          placeholder="please write"
          v-model="item.attributeSeleted"
          clearable
        ></el-input>
        <div style="width:40%;" v-if="item.attributeType === '3' && item.unitRequired === '1'">
          <el-input
            style="width:60%;float:left;"
            placeholder="please write"
            v-model="item.attributeSeleted"
            clearable
          ></el-input>
          <el-input
            placeholder="please write"
            v-model="item.attributeUnit"
            clearable
            style="width:40%;float:left;"
          ></el-input>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DynamicForm",
  props: {
    defaultFormList: Array
  },
  watch: {
    DynamicForm: {
      deep: true,
      handler: function(newVal) {
        // const arr=newVal.map(ele => {
        //   return {
        //     attributeId:ele.attributeId,
        //     attributeKey:ele.attributeKey,
        //     attributeName:ele.attributeName,
        //     attributeSeleted:Array.isArray(ele.attributeSeleted)?ele.attributeSeleted:ele.attributeSeleted.split(','),
        //   }
        // });
        this.$emit("selectionResult", newVal);
      }
    }
  },
  computed: {
    DynamicForm() {
      return this.dynamicValidateForm.DynamicForm;
    }
  },
  data() {
    return {
      dynamicValidateForm: {
        DynamicForm: JSON.parse(JSON.stringify(this.defaultFormList))
      }
    };
  },
  created() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
