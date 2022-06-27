import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/newItem";

export default function EditItem({item, openEdit, setOpenEdit, title, email, number, depa, date, city, setTitle, setemail, setnumber, setdepa, setdata, setcity}) {

  const dispatch = useDispatch()

  const addHandler = (w) => {
    w.preventDefault()
    dispatch(addUser({
      // title: title,
      // email: email,
      // number: number,
      // city: city,
      // depa: depa,
      // data: data
    }))
  }

  const canselModal = () => {
    setOpenEdit(! openEdit)
  }

  return(
    <section className={`add ${openEdit ? "add__open": "add"}`} id="addbox">
      <div className="add__main">
        <div className="add__header d-flex justify-content-between align-items-center">
          <h2 className="add__title">Employee From</h2>
          <button onClick={canselModal} className="list__xbtn" id="addxbtn"><i className="bx bx-x " /></button>
        </div>
        <form onSubmit={addHandler} className="add__form d-flex flex-wrap" action id="form">
          <div className="col-6">
            <label className="add__label" htmlFor="name">
              <input onChange={(e) => setTitle(e.target.value)} className="add__input" defaultValue={title} type="text" id="name" placeholder="Full Name" />
              <span className="add__err" id="nameerr" />
            </label>
            <label className="add__label" htmlFor="email">
              <input onChange={(e) => setemail(e.target.value)} className="add__input" type="text" id="email" defaultValue={email} placeholder="Email" />
              <span className="add__err" id="mailerr" />
            </label>
            <label className="add__label" htmlFor="number">
              <input onChange={(e) => setnumber(e.target.value)} className="add__input" defaultValue={number} type="number" id="number" maxLength={13} placeholder="Mobile" />
              <span className="add__err" id="numerr" />
            </label>
            <label className="add__label" htmlFor="city">
              <input onChange={(e) => setcity(e.target.value)} className="add__input" defaultValue={city} type="text" id="city" placeholder="City" />
              <span className="add__err" id />
            </label>
          </div>
          <div className="col-6">
            <div className="add__gender">
              <p className="add__name">Gender</p>
              <div className="d-flex align-items-center">
                <input className="add__radio" type="radio" id="male" name="gender" value="male" defaultChecked />
                <label className="add__label" htmlFor="male">Male</label>
                <input className="add__radio" type="radio" id="female" name="gender" value="female" />
                <label className="add__label" htmlFor="female">Female</label>
                <input className="add__radio" type="radio" id="other" name="gender" value="other" />
                <label className="add__label" htmlFor="other">Other</label>
              </div>
            </div>
            <label className="add__label" htmlFor="depa">
              <select onChange={(e) => setdepa(e.target.value)} className="add__input" defaultValue={depa} name id="depa">
                <option value />
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Accounting">Accounting</option>
                <option value="Hr">Hr</option>
              </select>
              <span className="add__err" id="depaerr" />
            </label>
            <label className="add__label" htmlFor="data">
              <input onChange={(e) => setdata(e.target.value)} className="add__input"  type="date" id="data" defaultValue={date} />
            </label>
            <div className="d-flex align-items-center ps-2 pt-3 pb-3">
              <input type="checkbox" id="check" name="check" value="check" />
              <label className="add__check" htmlFor="check"> Permanent Employee</label><br />
            </div>
            <div className="d-flex pt-2 pb-2">
              <button className="add__submit" type="submit" id="addbtn">Submit</button>
              <button className="add__reset" type="button" id="reset">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}