import React from "react";
import data from "../data/data";

export default function PostItem () {

  return(
    <>
      {
        data.map((item, key) => {
          return(
            <tr key={key+132} className="list__tr" id={item.id}>
              <td className="list__td">{item.name}</td>
              <td className="list__td">{item.email}</td>
              <td className="list__td">{item.number}</td>
              <td className="list__td">{item.depa}</td>
              <td className="list__td"><button className="list__edit"><i className="bx bx-pencil"></i></button><button className="list__xbtn"><i className="bx bx-x"></i></button></td>
          </tr>
          )
        })
      }
    </>
  )
}
