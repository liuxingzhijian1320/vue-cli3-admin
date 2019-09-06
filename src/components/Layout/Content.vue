<template>
  <div class="mycontent" :class="{'minWidth':isCollapse}">
    <el-scrollbar>
      <div class="main">
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
    return {};
  },
  mounted() {},
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
  left: 200px;
  z-index: 11 !important;
  background: #f0f3f4;
  -webkit-transition: all 0.3s;
  transition: left 0.3s;
  &.minWidth {
    left: 64px !important;
  }
  .main {
    overflow: hidden;
    padding: 36px 30px;
    height: 100%;
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>
