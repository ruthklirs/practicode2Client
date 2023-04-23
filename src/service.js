import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7077/items';
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject("Error in api call: " + error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get()    
    return result.data;
  },

  addTask: async(newTask)=>{
    const result=await axios.post(`/?newTask=${newTask}`,{name:newTask, isComplete:false});
    //TODO
    return result.data;
  },

  
  setCompleted: async(id, isComplete)=>{
    const result=await axios.put(`/?id=${id}`);
    //TODO
    return {};
  },

  
  deleteTask:async(id)=>{
    console.log('deleteTask');
    const result=await axios.delete(`/?id=${id}`);
    return result.data;
  }




};
