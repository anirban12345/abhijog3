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
            <h1 class="m-0">Complaint</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Complaint</a></li>
              <li class="breadcrumb-item active">Complaint Entry</li>
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
              <form @submit.prevent="addPdata">
                <div class="card-body">
                  <div class="form-group">
                  <label for="complaintype">Complaint Type</label>
                  <select class="custom-select rounded-0" id="complaintype" v-model="newData.complaintype" name="complaintype">                                        
                    <option  :value="type.name" v-for="type in ctype" :key="type.id">{{type.name}}</option>                    
                  </select>
                  </div>
                  <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" v-model="newData.subject" name="subject" placeholder="Enter Subject" autocomplete="off" />
                  </div>                                    
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
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

import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'AppComplaintEntry',
  components:{
     AppHeader,AppSidebar,AppFooter, 
  },
  data()
  {
    return {            
      ctype: [{id: 1, name: 'Helpline'},
              {id: 2, name: 'Phone Call'},
              {id: 3, name: 'Emial id'}],
      newData:{
            complaintype:'',
            subject:''
      }
    }
  },
  methods:{
    addPdata()
    {
        alert(this.newData.complaintype);
        alert(this.newData.subject);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
