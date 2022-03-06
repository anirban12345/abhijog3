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
              <form @submit.prevent="addPdata">
                <div class="card-body">                  
                  <div class="form-group">
                    <label for="name">Police Station Name</label>
                    <input type="text" class="form-control" id="name" v-model="newData.name" name="name" placeholder="Enter Police Station Name" autocomplete="off" />
                  </div>                                    
                  <div class="form-group">
                    <label for="address">Police Station Address</label>
                    <input type="text" class="form-control" id="address" v-model="newData.address" name="address" placeholder="Enter Police Station Address" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="emailid">Police Station Email Id</label>
                    <input type="text" class="form-control" id="emailid" v-model="newData.emailid" name="emailid" placeholder="Enter Police Station Email Id" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <label for="phoneno">Police Station Phone No</label>
                    <input type="text" class="form-control" id="phoneno" v-model="newData.phoneno" name="phoneno" placeholder="Enter Police Station Phone No" autocomplete="off" />
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
  name: "AppPsEdit",
  components:{
     AppHeader,AppSidebar,AppFooter, 
  },
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          console.log(response.data);
          this.currentTutorial.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
