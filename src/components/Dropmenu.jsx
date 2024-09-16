import React from 'react'

const Dropmenu = ({ items, value, changeValue }) => {

  const handleChange = (e) => {
    changeValue(e)
  }
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">{value}</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

        {items.map((item, index) => (
          <li key={index}>
            <button className="btn btn-ghost" onClick={() => handleChange(item)}>{item}</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Dropmenu