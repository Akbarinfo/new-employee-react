import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeEmployee } from "../../store/newItem";
import EditItem from "./EditItem ";

export default function PostItem ({item, openEdit, setOpenEdit}) {
  const data = useSelector(state => state.post)


  let [title, setTitle] = useState('')
  let [email, setemail] = useState('')
  let [number, setnumber] = useState('')
  let [depa, setdepa] = useState('')
  let [date, setdata] = useState('')
  let [city, setcity] = useState('')

  const dispatch = useDispatch()

  const cancelHandler = () => {
    if(window.confirm('Are you sure')) {
      dispatch(removeEmployee({ id: +item.id }));
    }
  };

  const editHandler = () => {
    setOpenEdit(!openEdit)
    data.map(items => {
      if(+items.id === +item.id) {
        setTitle(items.title)
        setemail(items.email)
        setnumber(items.number)
        setdepa(items.depa)
        setdata(items.data)
        setcity(items.city)
        console.log(items.title)
      }
    })
  };

  return(
    <>
      <tr className="list__tr" id={item.id}>
        <td className="list__td">{item.title}</td>
        <td className="list__td">{item.email}</td>
        <td className="list__td">{item.number}</td>
        <td className="list__td">{item.depa}</td>
        <td className="list__td">
          <button onClick={editHandler} className="list__edit"><i className="bx bx-pencil"></i></button>
          <button onClick={cancelHandler} className="list__xbtn"><i className="bx bx-x"></i></button></td>
      </tr>

      {openEdit ? <EditItem
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        item={item}
        title={title}
        email={email}
        number={number}
        depa={depa}
        date={date}
        city={city}
        setTitle={setTitle}
        setemail={setemail}
        setnumber={setnumber}
        setdepa={setdepa}
        setdata={setdata}
        setcity={setcity}
        /> : ""}
    </>
  )
}
