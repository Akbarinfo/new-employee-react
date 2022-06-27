import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "./Addpost";
import EditItem from "./EditItem ";
import PostItem from "./PostItem";

export default function Main({search, setSearch}) {

  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const data = useSelector(state => state.post)


  const searchHandler = (e) => {
    setSearch(data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  useEffect(() => {
    setSearch(data);
  }, [data]);

  const openModalHandler = () => {
    setOpen(!open)
  }

  return(
    <main>
      <section className="list">
        <div className="list__main">
          <div className="list__box d-flex justify-content-between">
            <label className="list__label" htmlFor="lsearch">
              <i className="bx bx-search list__sicon" />
              <input onChange={searchHandler} className="list__search" id="search" type="text" placeholder="Search Employees" />
            </label>
            <button onClick={openModalHandler} className="d-flex align-items-center list__addbtn" id="addnewbtn"><i className="bx bx-plus list__picon" /> Add New</button>
          </div>
          <table className="list__tabel">
            <thead className="list__thead">
              <tr className="list__tr">
                <th className="list__th"><button className="list__thbtn" id="namebtn">Employee Name <i className="bx bx-arrow-from-bottom list__ticon" id="nameicon" /></button></th>
                <th className="list__th"><button className="list__thbtn" id="mailbtn">Email Address (Personal) <i className="bx bx-arrow-from-bottom list__ticon" id="mailicon" /></button></th>
                <th className="list__th"><button className="list__thbtn" id="numbtn">Mobile Number <i className="bx bx-arrow-from-bottom list__ticon" id="numicon" /></button></th>
                <th className="list__th"><button className="list__thbtn" id="depabtn">Department <i className="bx bx-arrow-from-bottom list__ticon" id="depaicon" /></button></th>
                <th className="list__th"><button className="list__thbtn">Actions </button></th>
              </tr>
            </thead>
            <tbody className="list__body" id="tbody">
            {
              search.map((item, key) => (
                  <PostItem key={key+879} item={item} openEdit={openEdit} setOpenEdit={setOpenEdit}/>
              ))
            }

            </tbody>
          </table>
        </div>
      </section>
      {open   ? <AddPost
        open={open}
        setOpen={setOpen}
      /> : ""}

    </main>
  )
}