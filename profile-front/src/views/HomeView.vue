<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
       <div class="table-responsive">

        <table class="table table-bordered table-hover">
          <thead>
            <th>#</th>
            <th>ID</th>
            <th>PHOTO</th>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>RECORD</th>
            <th></th>

          </thead>
          <tbody class="table-group-driver" id="content">
            <tr v-if="this.charging">
              <td colspan="6">
                <h3>Charging</h3>
              </td>
            </tr>
            <tr v-else v-for="stu, i in this.students" :key="stu.id">
              <td v-text="(i+1)"></td>
              <td v-text="stu.id"></td>
              <td >
                <img v-if="stu.photo" style="width:150px !important;" :src="stu.photo" class="img-thumbnail" alt="">
                <img v-else style="width: 150px !important;" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" class="img-thumbnail" alt="">
              </td>
              <td v-text="stu.name"></td>
              <td v-text="stu.lastname"></td>
              <td v-text="new Date(stu.created_at).toLocaleDateString('en-US')"></td>
              <td>
                <router-link :to="{path:'viewE/'+stu.id}" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                <router-link :to="{path:'editE/'+stu.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                <button class="btn btn-danger" v-on:click="$event=>eliminate(stu.id,stu.name)">
                  <i class="fa-solid fa-trash"></i>
                </button>

              </td>
            </tr>


          </tbody>
       
        </table>

       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {confirm} from '../functions'

export default{
  data(){
    return {
      students:null,
      charging:true

    }

  },
  mounted(){
    this.getStudents();
  },
  methods:{
    getStudents(){
      this.charging = true;
      axios.get('http://localhost:8000/api/v1/students').then(
         res=>{
          this.students = res.data;
          this.charging = false;

         }

      );

    },
    eliminate(id,name){
       confirm('http://localhost:8000/api/v1/students/',id,'Delete record','Record you want to delete '+name+'?')
       this.charging=false;
    }

  }

}



</script>