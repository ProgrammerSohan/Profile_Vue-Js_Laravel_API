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
              <td v-text="stu.photo"></td>
              <td v-text="stu.name"></td>
              <td v-text="stu.lastname"></td>
              <td v-text="stu.created_at"></td>
              <td>

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

    }

  }

}



</script>