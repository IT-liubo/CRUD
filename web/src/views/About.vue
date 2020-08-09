<template>
  <div>
    <p>新增</p>
    <p>
      <label>姓名：</label>
      <input type="text" v-model="name" />
    </p>
    <p>
      <label>年龄：</label>
      <input type="text" v-model="age" />
    </p>
    <button @click="add(name,age)">新增</button>
  </div>
</template>

<script>
import { getList, addList,delList , updataList } from "../api/index";
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    add(name, age) {
      addList({
        name,
        age,
      }).then((res) => {
        if (res.data.code == 1) {
          alert(res.data.msg);
          this.$router.go(-1);
        }
      });
    },
  },
};
</script>

<style>
</style>