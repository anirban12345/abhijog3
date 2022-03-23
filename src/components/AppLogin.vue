<template>
  <div class="login-box"> <br /><br /><br /><br /><br /><br /><br /><br />
  <div class="login-logo">
    <div class="text-center text-primary text-bold">Abhijog</div>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form @submit.prevent="checkLogin">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Enter Username" v-model="username">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Enter Password"  v-model="password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">          
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>

        <!-- <div class="text-center" :class="status?'text-success':'text-danger'">{{msg}}</div> -->

      </form>
      
      <!-- /.social-auth-links -->
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
  
</template>

<script>
import PSDataService from "../services/PSDataService";

export default {
  name: 'AppLogin',
  data() {
    return {
        username:"",
        password:"",
        msg:"",
        status:false
    }
    },
    methods: {
      

      checkLogin() {   

        if(this.username=="" || this.password==""){
            this.$swal.fire('Please Fill Input Properly..!!','','error');
        }
        else{
            var formData = new FormData();
            formData.append('username', this.username);
            formData.append('password', this.password);
            PSDataService.checkLogin(formData)
              .then(response => {          
                //console.log(response.data);
                //this.msg= response.data.msg;
                //this.status=response.data.status;
                if(response.data.status)
                {
                  localStorage.setItem('userdata', JSON.stringify(response.data.data)); 
                  localStorage.setItem('loggedin', JSON.stringify(response.data.status)); 
                  this.$router.push("/home");
                }
                else
                {
                  this.msg= response.data.msg;            
                  this.status=response.data.status;
                  this.$swal.fire(this.msg,'','error');
                }
              })
              .catch(e => {
                console.log(e);
              });
        }
      }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box
{ 
  margin: 0 auto;   
}
</style>
