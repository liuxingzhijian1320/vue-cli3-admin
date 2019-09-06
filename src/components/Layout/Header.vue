<template>
  <div class="myheader">
    <section class="logo" :class="{'minWidth':isCollapse}">
      <a href="javascript:;" class="logoLink">
        <img src="./images/logo.png" alt="logo" />
        <span v-if="!isCollapse">admin</span>
      </a>
    </section>
    <section class="header-content">
      <section class="collspan dc cursor" @click="collspan">
        <img src="./images/close.png" alt="logo" v-if="!isCollapse" />
        <img src="./images/open.png" alt="logo" v-if="isCollapse" />
      </section>
      <div class="bread">
        <BreadCrumb></BreadCrumb>
      </div>
      <section class="fullscreen cursor dc" @click="toggleFull">
        <img src="./images/fullscreen.png" alt="logo" />
      </section>
      <section class="cursor dc">
        <el-dropdown @command="handleDropLink" trigger="click">
          <span class="el-dropdown-link">
            SSSSS<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              安全退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </section>

    </section>
  </div>
</template>

<script>
import screenfull from "screenfull";
import { mapGetters } from "vuex";
import BreadCrumb from "./BreadCrumb";
export default {
  name: "myheader",
  components: {
    BreadCrumb
  },
  computed: {
    ...mapGetters({
      isCollapse: "app/isCollapse"
    })
  },
  methods: {
    collspan() {
      this.$store.commit("app/updateCollapse", !this.isCollapse);
    },
    handleDropLink(index) {},
    toggleFull() {
      if (!screenfull.enabled) {
        this.$message({
          type: "warning",
          message: "you browser can not work"
        });
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style scoped lang="scss">
.myheader {
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  .logo {
    overflow: hidden;
    width: 200px;
    border-bottom: 1px solid #454b61;
    background-color: #3a3f51;
    transition: width 0.3s;
    &.minWidth {
      width: 64px !important;
    }
  }
  .logoLink {
    display: inline-block;
    margin-left: 18px;
    height: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    line-height: 50px;
    img {
      position: relative;
      top: -3px;
      margin-right: 8px;
      height: 28px;
      vertical-align: middle;
    }
  }
  .header-content {
    display: flex;
    flex: 1;
    padding: 0 30px;
    .collspan {
      img {
        display: block;
      }
    }
    .bread {
      display: flex;
      align-items: center;
      flex: 1;
      padding-left: 15px;
    }
    .fullscreen {
      margin-right: 30px;
      img {
        display: block;
      }
    }
  }
}
</style>
