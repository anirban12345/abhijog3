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
              <li class="breadcrumb-item active">All Police Stations</li>
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
                <h3 class="card-title">All PS Details</h3>
              </div>              
                <div class="card-body table-responsive"> 
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by Police Station Name" @keyup="searchPoliceStation" v-model="ps_name"/>                    
                  </div>

                  <div class="text-info">{{count}} Records Found</div>

                  <table class="table table-bordered">
                    <tr>
                        <th>Sl No.</th> 
                        <th>Police Station Image</th> 
                        <th>Police Station Name</th> 
                        <th>Address</th> 
                        <th>Email Id</th> 
                        <th>Phone No</th> 
                        <th>Action</th> 
                    </tr>
                    <tr v-for="(ps, index) in policeStation" :key="index">
                      <td>{{index+1}}</td>
                      <td>
                          <a :href="ps.ps_image" data-lightbox="image-1" data-title="Images">
                            <img :src="ps.ps_image" width="100" class="img img-responsive" />  
                          </a>
                      </td>
                      <td>{{ps.ps_name}}</td>
                      <td>{{ps.ps_address}}</td>
                      <td>{{ps.ps_emailid}}</td>
                      <td>{{ps.ps_phoneno}}</td>
                      <td>
                        <router-link :to="'/psedit/' + ps.ps_id" class="btn btn-warning">Edit</router-link>
                      </td>
                    </tr>
                  </table>
                </div>                
                <div class="card-footer">                  
                </div>              
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
  name: "All-PS",
  components:{
     AppHeader,AppSidebar,AppFooter, 
  },
  data() {
    return {
            ps_name:"",
            policeStation: [],    
            perPage: 10,
            currentPage: 1,
            count:0
      }   
  },
  computed: {
      rows() {
        return this.policeStation.length
      }
    },
  methods: {    
    retrievePoliceStation() {       
      PSDataService.getAll()
        .then(response => {
          this.policeStation = response.data;
          this.count=response.data.length;
          //console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    searchPoliceStation() {
      if(this.ps_name!="")
      {
        PSDataService.findByPSname(this.ps_name)
          .then(response => {
            this.policeStation = response.data;
            this.count=response.data.length;
            //console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      else
      {
          PSDataService.getAll()
          .then(response => {
            this.policeStation = response.data;
            this.count=response.data.length;
            //console.log(this.count);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },  
  mounted() {
    this.retrievePoliceStation();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
