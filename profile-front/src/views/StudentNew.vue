<template>
  <div class="row mt-3">
     <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">
             Registar Student
          </div>
          <div class="card-body">
      <form v-on:submit="keep">
    <div class="d-grid col-6 mx-auto mb-3">
     <img v-if="this.photo" height="100" :src="this.photo" id="photoimg" class="img-thumbnail" alt="">
     <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" class="img-thumbnail" id="photoimg" alt="">

    </div>

    <div class="input-group mb-3">
     <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
     <input type="text" v-model="name" id="name" placeholder="Input name" required class="form-control" maxlength="50">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
      <input type="text" v-model="lastname" id="lastname" placeholder="Input last name" required class="form-control" maxlength="50">
     </div>

     <div class="input-group mb-3">
      <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
      <input v-on:change="previewPhoto" type="file" accept="image/png,image/jpeg,image/gif" class="form-control">
     </div>

     <div class="d-grid col-6 mx-auto mb-3">
         <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"> Register</i></button>
     </div>

    </form>

          </div>
        </div>
     </div>

  </div>
</template>

<script>
import {showAlert, sendRequest} from '../functions'

export default{
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
         sendRequest('POST',parameters,this.url,'Student Registered!!!');
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