<template>
  <div class="mycontent" :class="{'minWidth':isCollapse}">
    <el-scrollbar>
      <div class="main" :style="{'minHeight':pageheight+'px'}">
        <transition name="fade-page" mode="out-in">
          <router-view />
        </transition>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "mycontent",
  data() {
    return {
      pageheight: window.innerHeight - 50 - 20 - 1
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.onresize = () => {
        // _.throttle(() => {
        // this.pageheight = window.innerHeight - 50 - 36 * 2;
        // console.info(this.pageheight);
        // }, 300);
      };
    });
  },
  computed: {
    ...mapGetters({
      isCollapse: "app/isCollapse"
    })
  }
};
</script>

<style lang="scss" scoped>
.mycontent {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  padding: 0 20px;
  left: 200px;
  z-index: 11 !important;
  background: #f0f3f4;
  -webkit-transition: all 0.3s;
  overflow: hidden;
  transition: left 0.3s;
  box-sizing: border-box;
  margin-top: 1px;
  &.minWidth {
    left: 64px !important;
  }
  .main {
    padding-bottom: 20px;
    background: #fff;
    box-sizing: border-box;
    margin-top: 20px;
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>
