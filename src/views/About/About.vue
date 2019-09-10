<template>
  <div class="pagebox">
    <div class="pagebox-search">
      <el-form :inline="true" size="mini">
        <el-form-item label="标题">
          <el-input placeholder="" clearable v-model.trim="keyword"
            style="width:200px"></el-input>
        </el-form-item>
        <el-form-item style="float: right;margin-right:0">
          <el-button @click="go">打开新的页面</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="pagebox-content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120">
        </el-table-column>
      </el-table>
    </div>

    <mycontent v-if="isRouterView"></mycontent>
  </div>
</template>
<script>
import mycontent from "../../components/Layout/Content";

export default {
  name: "about",
  data() {
    return {
      isRouterView: false,
      keyword: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  components: {
    mycontent
  },
  watch: {
    $route: {
      handler(route) {
        if (route.name == "aboutAdd") {
          this.isRouterView = true;
        } else {
          this.isRouterView = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    go() {
      this.$router.push("about/add");
    }
  }
};
</script>


