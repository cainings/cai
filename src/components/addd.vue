<template>
  <div>
    <div class="biao1">
      <input type="text" placeholder="professional.id" v-model="professionalid" />
      <br />
      <input type="text" placeholder="professional.professionalName" v-model="professionalName" />
      <br />
      <input type="text" placeholder="professional.professionalDesc" v-model="professionalDesc" />
      <br />
      <input type="text" placeholder="id" v-model="id" />
      <br />
      <input type="text" placeholder="courseName" v-model="courseName" />
      <br />
      <input type="text" placeholder="courseDesc" v-model="courseDesc" />
      <br />
      <input type="text" placeholder="professionalId" v-model="professionalId" />
      <br />
      <button @click="tijiao">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      professionalid: 161,
      professionalName: "",
      professionalDesc: "",
      id: "",
      courseName: "",
      courseDesc: "",
      professionalId: 161
    };
  },
  methods: {
    tijiao() {
      let than = this;
      this.axios
        .post("http://139.9.169.87:8081/examsystem/addCourse?professional.id="+this.professionalid+'&professional.professionalName='+this.professionalName+'&professional.professionalDesc='+this.professionalDesc+'&id='+this.id+'&courseName='+this.courseName+'&courseDesc='+this.courseDesc+'&professionalId='+this.professionalId, {
          // professionalid: 161,
          // professionalName: this.professionalName,
          // professionalDesc: this.professionalDesc,
          // id: this.id,
          // courseName: this.courseName,
          // courseDesc: this.courseDesc,
          // professionalId: this.professionalId
        },
        {
            headers: {
                'content-type':'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            
          if (res.data.success) {
            alert("添加成功!")
            this.$router.push({
              path: "/index/chaxunAll"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.biao1 input {
  width: 200px;
  height: 50xp;
  line-height: 50px;
  margin-top: 10px;
}
.biao1 {
  margin-left: 200px;
}
button {
  width: 100px;
  height: 50px;
  margin-left: 20px;
  margin-top: 20px;
}
</style>