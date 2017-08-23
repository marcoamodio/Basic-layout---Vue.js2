<template>
	<div class="Footer">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="3"><a href="http://www.marticvs.it" target="_blank">Marco Amodio</a></el-menu-item>
		</el-menu>
	</div>
</template>

<style>
  .Footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,1);
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