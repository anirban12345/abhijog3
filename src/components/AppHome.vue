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
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{countps}}</h3>

                <p>Police Stations</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row"> 
          <div class="col-lg-12 col-12">        
            <div class="alert alert-primary text-center">
                Welcome {{userdata.u_title}} 
                <br/>User Level {{userdata.ug_name}}
                <br />User From {{userdata.u_datetime}}
            </div>
          </div>
        </div>

        <div class="row"> 
          <div class="col-lg-12 col-12">   
            
          </div>
        </div>

        <!-- /.row (main row) -->
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
//import { Bar } from 'vue-chartjs'
//import LineChart from './LineChart.vue'
import axios from "axios";
//import moment from "moment";

export default {
  name: 'AppHome',
  components:{
     AppHeader,AppSidebar,AppFooter,
     //LineChart 
  },  
  data()
  {
    return{
        countps:0,
        userdata:[],

        chartArr: [],
        ChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
    }
  },
  methods:{
    retrievePoliceStation(){
      //this.$store.commit('funIsLoggedin')
      //console.log(this.$store.state.isLoggedin)
          // const params = this.getRequestParams(
          //   this.ps_name,
          //   this.page,
          //   this.pageSize
          // );
          //console.log(params);
          PSDataService.getAll()
            .then(response => {
              //this.policeStation = response.data;
              this.countps=response.data.length;
              //console.log(this.count);
              let userdata = JSON.parse(localStorage.getItem('userdata')); 
              this.userdata = userdata[0];            
              //console.log(userdata);
            })
            .catch(e => {
              console.log(e);
            });
        }
  },
  mounted()
  {
    this.retrievePoliceStation();

  },
   async created() {
    const { data } = await axios.get("https://scientificwing.kolkatapolice.org/Abhijog/Api/printCurrentMonthComplainDisposedPendingGraph");

    data.forEach(d => {
      //const date = moment("20200323", "YYYYMMDD").format("DD-MMM-YYYY");
      //this.arrPositive.push({ date, total: positive });      
      //console.log(date);
      console.log(d);
    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
