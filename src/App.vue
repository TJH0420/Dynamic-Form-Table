<template>
  <div id="app">
    <DynamicFormTable/>
  </div>
</template>

<script>
import DynamicFormTable from './page/DynamicFormTable.vue'

export default {
  name: 'app',
  components: {
    DynamicFormTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
