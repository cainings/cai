<template>
  <div>
    <div class="biao">
      <el-table
        :data="all"
        style="width: 100%;"
        ref="multipleTable"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :default-sort="{prop: 'date', order: 'descending'}"
        border
        label-class-name="bg-color_hui"
        :row-style="{'padding':'0'}"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="courseName" label="courseName"></el-table-column>
        <el-table-column prop="courseDesc" label="courseDesc" width="105"></el-table-column>
        <el-table-column prop="professional.id" label="professional.id"></el-table-column>
        <el-table-column prop="professional.professionalName" label="professional.professionalName"></el-table-column>
        <el-table-column prop="professional.professionalDesc" label="professional.professionalDesc"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
                        <el-button
              @click="xz"
              type="text"
              size="small"
            >
              <i class="el-icon-edit"></i> 新增
            </el-button>
            <el-button
              @click.native.prevent="updaeRow(scope.$index, all)"
              type="text"
              size="small"
            >
              <i class="el-icon-edit"></i> 编辑
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, all)"
              type="text"
              size="small"
            >
              <i class="el-icon-delete"></i> 删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "",
      all: []
    };
  },
  created() {
    let than = this;
    this.axios
      .get("http://139.9.169.87:8081/examsystem/getAllCourse", {})
      .then(res => {
        if (res.data.status == 200) {
          than.all = res.data.data;
        }
      });
  },
  methods:{
      updaeRow(index,rows){
          sessionStorage.setItem('shuju',JSON.stringify(rows[index]))
          this.$router.push({
              name:'xiugai',
            //   params:{
            //       shuju:rows[index]
            //   }
          })
      },
      xz(){
        this.$router.push({
          name:'addd'
        })
      },
      deleteRow(index,all){
        let than = this;
        this.axios
        .get("http://139.9.169.87:8081/examsystem/deleteCourse?id="+all[index].id,{
          headers:{
            "Accept": "application/json"
          }
        })
        .then(res=>{ 
          if(res.data.success){
            alert("删除成功!")
            all.splice(index,1)
            // this.$router.push({
            //   path:'/index/chaxunAll'
            // })
          }
        })
      }
  }
};
</script>

<style>
</style>