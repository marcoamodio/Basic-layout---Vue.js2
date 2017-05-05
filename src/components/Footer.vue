<template>
	<div class="Footer">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="3"><a href="http://www.marticvs.it" target="_blank">Marco Amodio</a></el-menu-item>
		</el-menu>
	</div>
</template>

<style>
  .Footer {
    /*width: 100%;
    bottom: 0;
    position: fixed;*/
  }
</style>

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