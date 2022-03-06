<template>

<div>

<AppHeader />
<AppSidebar title="Abhijog" />

<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Police Station</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Police Station</a></li>
              <li class="breadcrumb-item active">Police Station Entry</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
          <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Entry Details</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent>
                <div v-if="!submitted">
                <div class="card-body">                  
                  <div class="form-group">
                    <label for="name">Police Station Name</label>
                    <input type="text" class="form-control" id="name" v-model="policeStation.name" name="name" placeholder="Enter Police Station Name" autocomplete="off" />
                  </div>                                    
                  <div class="form-group">
                    <label for="address">Police Station Address</label>
                    <input type="text" class="form-control" id="address" v-model="policeStation.address" name="address" placeholder="Enter Police Station Address" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="emailid">Police Station Email Id</label>
                    <input type="text" class="form-control" id="emailid" v-model="policeStation.emailid" name="emailid" placeholder="Enter Police Station Email Id" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="phoneno">Police Station Phone No</label>
                    <input type="text" class="form-control" id="phoneno" v-model="policeStation.phoneno" name="phoneno" placeholder="Enter Police Station Phone No" autocomplete="off" />
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">                  
                  <button @click="savePoliceStation" class="btn btn-success">Save</button>
                </div>
                </div>
                <div v-else>
                  <h4>You submitted successfully!</h4>
                  <button class="btn btn-success" @click="newPoliceStation">Add</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
            </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <AppFooter />
</div>
 
</template>

<script>
import PSDataService from "../services/PSDataService";

import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'AppPSEntry',
  components:{
     AppHeader,AppSidebar,AppFooter, 
  },
  data() {
    return {
      policeStation: {        
        name: "",
        address: "",
        emailid: "",
        phoneno:""
      },
      submitted: false
    };
  },
  methods: {
    savePoliceStation() {
      var data = {
        ps_name: this.policeStation.name,
        ps_address: this.policeStation.address,
        ps_emailid: this.policeStation.emailid,
        ps_phoneno: this.policeStation.phoneno,
      }

      console.log(data);


      PSDataService.create(data)
        .then(response => {
          //this.policeStation.name = response.data.ps_name;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPoliceStation() {
      this.submitted = false;
      this.policeStation = {};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
