<template>
  <div class="AddUpdate">
    <el-form :model="numberValidateForm" ref="numberValidateForm"
      label-width="100px" class="demo-ruleForm">
      <el-form-item label="年龄" prop="age" :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]">
        <el-input type="age" v-model.number="numberValidateForm.age"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">提交
        </el-button>

        <el-button type="primary" @click="goHandler">{{!showScroll?'滚动':'一屏高度'}}
        </el-button>

        <div v-if="showScroll">
          <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
          <br>
          <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
          <br>
          <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
          <br>

        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AddUpdate2",
  data() {
    return {
      showScroll: false,
      numberValidateForm: {
        age: ""
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$router.back(-1);
    },
    goHandler() {
      this.showScroll = !this.showScroll;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
