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
                <h3 class="card-title">Edit Details</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent method="PUT">
                
                <div class="card-body">                  
                  <div class="form-group">
                    <label for="name">Police Station Name</label>
                    <input type="text" class="form-control" id="name" v-model="policeStation.ps_name" name="name" placeholder="Enter Police Station Name" autocomplete="off" />
                  </div>                                    
                  <div class="form-group">
                    <label for="address">Police Station Address</label>
                    <input type="text" class="form-control" id="address" v-model="policeStation.ps_address" name="address" placeholder="Enter Police Station Address" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="emailid">Police Station Email Id</label>
                    <input type="text" class="form-control" id="emailid" v-model="policeStation.ps_emailid" name="emailid" placeholder="Enter Police Station Email Id" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="phoneno">Police Station Phone No</label>
                    <input type="text" class="form-control" id="phoneno" v-model="policeStation.ps_phoneno" name="phoneno" placeholder="Enter Police Station Phone No" autocomplete="off" />
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">                  
                  <button class="btn btn-success" @click="updatePoliceStation">Update</button>
                  &nbsp;<button class="btn btn-danger" @click="deletePoliceStation(policeStation.ps_id)">Delete</button>                   
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
//import axios from 'axios'

import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'


export default {
  name: 'AppPSEdit',
  components:{
     AppHeader,AppSidebar,AppFooter, 
  },
  data() {
    return {
      policeStation: [],
      message: ''
    };
  },
  methods: {

    getPstation(id) {
      PSDataService.get(id)
        .then(response => {
          this.policeStation = response.data[0];
          //console.log(response.data[0]);
        })
        .catch(e => {
          console.log(e);
        });
    },

    async updatePoliceStation() {
      
      const data = {        
        ps_name: this.policeStation.ps_name,
        ps_address: this.policeStation.ps_address,
        ps_emailid: this.policeStation.ps_emailid,
        ps_phoneno: this.policeStation.ps_phoneno,
      }            
      console.log(data);
      PSDataService.update(this.policeStation.ps_id, data)
        .then(response => {
          //console.log(response.data);
          //this.message = 'The Police Station was updated successfully!';
          this.$swal.fire(response.data[0],'','info');
        })
        .catch(e => {
          console.log(e);
        });           
    },
    async deletePoliceStation(id) {
      PSDataService.delete(id)
        .then(response => {
          //console.log(response.data);
          this.$router.push("/pssearch");
          this.$swal.fire(response.data[0],'','info');
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPstation(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
