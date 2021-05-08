<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#06051a"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <router-link to="/goHome">
          <el-button type="text" @click="open">Home</el-button>
        </router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          Phenotypes
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-s-finance"></i>
        <router-link to="/login">Sample Data</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-question"></i>
        <router-link to="/goHome">Help</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-custom"></i>
        <a href="https://www.ele.me" target="_blank">Contact</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
      this.$alert("欢迎返回主页", "提示", {
        confirmButtonText: "确定"
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${ action }`
        //   });
        // }
      });
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
