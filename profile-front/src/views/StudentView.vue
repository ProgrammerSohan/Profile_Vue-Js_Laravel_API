<template>
  <div class="row mt-3">
     <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">
            Student Details
          </div>
          <div class="card-body">
            <div class="d-grid col-6 mx-auto mb-3">
              <router-link :to="{path:'/'}" class="btn btn-info">
                <i class="fa-solid fa-arrow-left"></i> Return to list
              </router-link>

            </div>

    <div class="d-grid col-6 mx-auto mb-3">
     <img v-if="this.photo" height="100" :src="this.photo" id="photoimg" class="img-thumbnail" alt="">
     <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" class="img-thumbnail" id="photoimg" alt="">

    </div>

    <div class="input-group mb-3">
     <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
     <label v-text="name" class="form-control"></label>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
      <label v-text="lastname" class="form-control"></label>
    </div>


          </div>
        </div>
     </div>

  </div>
</template>

<script>
import {showAlert, sendRequest} from '../functions';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
 data(){
   return {
       id: 0,
     students:'',
     lastname:'',
     photo:'',
     url:'http://localhost:8000/api/v1/students',
     charging:false
   }
 },
 mounted(){
   const route = useRoute();
   this.id = route.params.id;
   this.url += '/'+this.id;
   this.getStudent();
 },

 methods:{
   getStudent(){
      axios.get(this.url).then(
        res=>{
          this.name = res.data.data.name;
          this.lastname = res.data.data.lastname;
          this.photo = res.data.data.photo;
        }
      );

   
 },


   update(event){
    // this.charging = true;
      event.preventDefault();
      var myPhoto = document.getElementById('photoimg');
      this.photo = myPhoto.src;

      if(this.name.trim()===''){
         showAlert('Input name','warning','name');
      }else if(this.lastname.trim()===''){
         showAlert('Input lastname','warning','lastname');
      }else{
         var parameters = {name:this.name.trim(),lastname:this.lastname.trim(),photo:this.photo.trim()}
         sendRequest('PUT',parameters,this.url,'Student Updated!!!');
      }

     
   },
   previewPhoto(event){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = function(){
        var myPhoto = document.getElementById('photoimg');
        myPhoto.src = reader.result;
        this.photo = myPhoto.src;

     }
   }

 }

}

</script>
  