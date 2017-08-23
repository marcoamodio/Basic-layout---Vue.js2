<template>
	<div class="Header">
		<el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">Logo</el-menu-item>
		  <el-menu-item index="3"><a href='http://www.marcoamodio.me' target="_blank">About</a></el-menu-item>
		</el-menu>
		
	</div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
	.Header { }
</style>