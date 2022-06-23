import { createSlice } from "@reduxjs/toolkit";
import data from "../components/data/data";

const initialState =  [
  {
    id: 1,
   title: "Eshmatboy",
    email: "eshmatjon@mail.ru",
    number: "+998901234567",
    city: "Toshkent",
    depa: 'Marketing',
    data: '2022-04-22'
  },

  {
    id: 2,
   title: "Toshmat",
    email: "toshmat@gamil.com",
    number: "+998992221133",
    depa: 'Development',
    data: '22-04-22'
  },

  {
    id: 3,
   title: "Raisbuva",
    email: "raisbuva777@mail.ru",
    number: '+998937771585',
    depa: 'Hr',
    data: '22-04-22'
  },
]

const newPost = createSlice({
  name: 'post',
  addopen: false,
  initialState,

  reducers: {
    addUser: (state, action) => {
      const newTodo = {
        id: data.length + 1,
        title: action.payload.title,
        email: action.payload.email,
        number: action.payload.number,
        city: action.payload.city,
        depa: action.payload.depa,
        data: action.payload.data
      }
      state.unshift(newTodo)
    },
    removeEmployee: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    openModal(addopen, action) {
      addopen = ! action.payload.addopen
    }
  }
})

export const {removeEmployee, openModal, addUser} = newPost.actions
export default newPost.reducer;