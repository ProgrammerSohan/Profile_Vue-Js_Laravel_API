<template>
    <div class="row mt-3">
       <div class="col-md-6 offset-md-3">
         <div class="card">
          <div class="card-header bg-dark text-white text-center">
             Register Student
          </div>
          <div class="card-body">
            <form action="">
              <div class="d-grid col-6 mx-auto mb-3">
                <img v-if="this.photo" height="100" :src="this.photo" id="fotoimg" alt="" class="img-thumbnail">
                <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" class="img-thumbnail" id="photoimg" alt="">

              </div>

              <div class="input-group mb-3">
                <span class="input-group-text"> <i class="fa-solid fa-user"></i></span>
                <input type="text" v-model="name" id="name" placeholder="Input Name" required maxlength="50" class="form-control">

              </div>

              <div class="input-group mb-3">
                <span class="input-group-text"> <i class="fa-solid fa-user"></i></span>
                <input type="text" v-model="lastname" id="lastname" placeholder="Input last name" required class="form-control" maxlength="50">

              </div>

            </form>

          </div>

         </div>

       </div>
    </div>
  </template>
  <script>
  import {confirm} from '../functions'

  export default {
    data(){
       return {
        students:'',
        lastname:'',
        photo:'',
        url:'http://localhost:8000/api/v1/students',
        charging:false

       }
    },
    methods:{
      keep(){
        this.charging = true;
      },
      eliminate(id,name){
        confirm('http://localhost:8000/api/v1/students/',id,'Delete record','Record you want to delete '+name+'?')
        this.charging=false;
      }

    }

  }


</script>