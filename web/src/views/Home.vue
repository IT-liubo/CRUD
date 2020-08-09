<template>
  <div class="home">
     <p @click="add">新增</p>
    <div v-for="item in list" :key="item.id">
      <div>
        <p>{{item.id}}</p>
        <p>
          <label>姓名：</label>
          <input type="text" v-model="item.name" />
        </p>
        <p>
          <label>年龄：</label>
          <input type="text" v-model="item.age" />
        </p>
        <button @click="del(item.id)">删除</button>
        <button @click="updata(item)">编辑</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getList, addList,delList , updataList } from "../api/index";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      name:"",
      age:""
    };
  },
  created() {
    getList().then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {
    del(id) {
      delList({id}).then((res) => {
        if (res.data.code == 1) {
          alert(res.data.msg);
          this.$router.go(0) 
        }
      });
    },
    updata(item) {
      updataList({
        name:item.name ,
        age:item.age,
        id:item.id     
      }).then(res=>{
        if (res.data.code == 1) {
          alert(res.data.msg);
          this.$router.go(0) 
        }
      })
    },
    add(name,age) {
       this.$router.push("/about") 
      // addList({
      //   name,
      //   age
      // }).then(res=>{
      //   if (res.data.code == 1) {
      //     alert(res.data.msg);
      //     this.$router.go(0) 
      //   }
      // })
    },
  },
};
</script>
