<template>
  <div>
    <div class="biao1">
      <input type="text" v-model="professionalId" />
      <br />
      <input type="text" v-model="professionalName" />
      <br />
      <input type="text"  v-model="professionalDesc" />
      <br />
      <input type="text" v-model="id" />
      <br />
      <input type="text" v-model="courseName" />
      <br />
      <input type="text" v-model="courseDesc" />
      <br />
      <button @click="tijiao">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
            professionalId: "",
            professionalName: "",
            professionalDesc: "",
            id: "",
            courseName: "",
            courseDesc: "",
    };
  },
  created(){
    //   let shuju = this.$route.query.shuju;
    let shuju = JSON.parse(sessionStorage.getItem('shuju'));
      this.professionalId = shuju.professional.id;
      this.professionalName = shuju.professional.professionalName;
      this.professionalDesc = shuju.professional.professionalDesc;
      this.id = shuju.id;
      this.courseName = shuju.courseName;
      this.courseDesc = shuju.courseDesc;

  },
  methods: {
    tijiao() {
      let than = this;
      this.axios.post('http://139.9.169.87:8081/examsystem/updateCourse?professional.id=' +
                    this.professionalId + '&professional.professionalName=' + this.professionalName +
                    '&professional.professionalDesc=' + this.professionalDesc + '&id=' + this.id + '&courseName=' + this.courseName +
                    '&courseDesc=' + this.courseDesc, {}, {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        }
        })
        .then(res => {
            alert("修改成功！!")
          if (res.data.success) {
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