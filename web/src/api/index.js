import axios from '../utils/axios'

export function getList() {
  return axios.get("/getList")
}
export function addList(data) {
  return axios.post("/addList",data)
}
export function delList(id) {
  return axios.post("/delList",id)
}
export function updataList(data) {
  return axios.post("/updataList",data)
}