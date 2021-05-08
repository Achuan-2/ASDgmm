<template>
  <div id="app">
    <!-- 空页头 -->
    <el-row type="flex" justify="center">
      <!-- justify 对齐方式 -->
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
    <!-- justify 对齐方式 -->
          <el-col :span="6">
              <!-- shadow="always"显示阴影 -->
              <el-card shadow="always" >
                <h1 style="text-align: center;">欢迎登陆</h1>
                <el-divider></el-divider>
                <!-- form表单 -->
                <el-form  :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
                  <!-- 用户名 -->
                  <el-form-item
                      label="用户名"
                      prop="name"
                      :rules="[
                      { required: true, message: '用户名不能为空'},
                      ]"
                  >
                      <el-input placeholder="请输入用户名" type="text" v-model="ValidateForm.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <!-- 密码 -->
                  <el-form-item
                      label="密码"
                      prop="password"
                      :rules="[
                      { required: true, message: '密码不能为空'},
                      ]"
                  >
                      <el-input placeholder="请输入密码" v-model="ValidateForm.password" show-password></el-input>
                  </el-form-item>

                  <!-- 单选框 -->
                  <el-radio-group v-model="radio">
                    <el-radio :label=false>仅前端展示</el-radio>
                    <el-radio :label=true>发送给后端</el-radio>
                  </el-radio-group>

                  <!-- 后端IP地址 -->
                  <el-form-item
                      label="后端IP地址"
                      prop="ipp"
                      :rules="[
                      { required: true, message: '后端IP地址不能为空'},
                      ]"
                      v-show="radio"
                  >
                      <el-input v-model="ValidateForm.ipp"></el-input>
                  </el-form-item>

                  <!-- 按钮 -->
                  <el-form-item>
                      <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
                      <el-button @click="resetForm('ValidateForm')">重置</el-button>
                  </el-form-item>
                </el-form>

              </el-card>
          </el-col>
    </el-row>


  </div>

</template>

<script>
    export default {
        data() 
        {
            return {
                ValidateForm: 
                {
                name: '',
                password: '',
                ipp:'http://192.168.101.55/',
                },
                radio: false
            };
        },
        methods: {
            submitForm(formName) 
            {
                this.$refs[formName].validate((valid) => 
                    {
                        if (valid) 
                        {
                            alert('Name:'+this.ValidateForm.name+';Password:'+this.ValidateForm.password);
                            alert(this.ValidateForm.ipp + this.ValidateForm.name);
                            // console.log(this.ValidateForm.name);
                        } else 
                        {
                            console.log('error submit!!');
                            return false;
                        }
                    }
                );
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>
  .el-radio-group{
    display: flex;
    margin: 20px;
    /* 边缘 */
    justify-content: center;
    
  }
  .el-card{
    border-radius:30px;
    width: 380px;
    /* box-shadow: 0 2px 12px 0 rgb(243, 102, 102); */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  }
  .grid-content {
    /* background: rgb(14, 214, 131); */
    border-radius: 4px;
    min-height: 80px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  /* .el-input{
  width: 250px;  
  } */
  .el-form-item{
  width: 300px;  
  }
</style>
