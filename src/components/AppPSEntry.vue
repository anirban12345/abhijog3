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
              <form @submit.prevent="savePoliceStation" method="post">
                <div v-if="!submitted">
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
                  <button type="submit" class="btn btn-success">Save</button>
                </div>
                </div>
                <div v-else>                  
                  <button class="btn btn-success" @click="newPoliceStation">Add New Police Station</button>
                </div>
              </form>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Upload Image</h3>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="upload" method="post" enctype="multipart/form-data">                  
                        <div class="form-group">
                              <label for="phoneno">Add Image</label>
                              <input type="file" accept="image/*" ref="file" @change="selectImage" />
                              <button type="submit" class="btn btn-success" :disabled="!currentImage">Upload</button>
                        </div>                                         
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Preview Image</h3>
                  </div>
                  <div class="card-body">
                    <img :src="previewImage" width="250" class="img img-responsive" />
                  </div>
                </div>
              </div>
            </div>

            <span v-for="(img, index) in imageInfos" :key="index">
                <a :href="img" data-lightbox="image-1" data-title="Images">
                  <img :src="img" width="100" class="img img-thumbnail" />  
                </a>
            </span>

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
import UploadService from "../services/UploadFilesService";


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
        ps_name: "",
        ps_address: "",
        ps_emailid: "",
        ps_phoneno:""
      },
      submitted: false,

      currentImage : undefined,
      previewImage : undefined,
      progress : 0,
      message:"",
      imageInfos: [],
    };
  },
  methods: {
    async savePoliceStation() {

      var data = {
        ps_name: this.policeStation.ps_name,
        ps_address: this.policeStation.ps_address,
        ps_emailid: this.policeStation.ps_emailid,
        ps_phoneno: this.policeStation.ps_phoneno,
      }
      //console.log(data);

      var form = new FormData();
      form.append('ps_name', data.ps_name);
      form.append('ps_address', data.ps_address);
      form.append('ps_emailid', data.ps_emailid);
      form.append('ps_phoneno', data.ps_phoneno);

      PSDataService.create(form)
        .then(response => {
          //this.policeStation.id = response.data.id;
          //console.log(response.data);
          this.submitted = true;
          this.$swal.fire(response.data[0],'','success');
          this.policeStation=[];
        })
        .catch(e => {
          console.log(e);
        }); 
      },
    newPoliceStation() {
      this.submitted = false;
      this.policeStation = {};
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
      //console.log(this.currentImage);
      //console.log(this.previewImage);

    },
    upload() {
      
      UploadService.upload(this.currentImage, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);

      })
        .then((response) => {
          this.message = response.data;
          //console.log(this.message);
          this.$swal.fire(this.message,'','success');
          return UploadService.getFiles();
        })
        .then((images) => {
          this.imageInfos = images.data;
        })
        .catch((err) => {          
          this.message = "Could not upload the image! " + err;
          this.currentImage = undefined;
        });
    },
  },
  mounted() {
    UploadService.getFiles().then((response) => {
      this.imageInfos = response.data;
      //console.log(this.imageInfos);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
