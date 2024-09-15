import React from 'react'
import { Dropdown } from 'flowbite-react'

const Dropmenu = ({ items, value, changeValue}) => {

    const handleChange = (e) => {
        changeValue(e)
    }
    return (
      <Dropdown
        label={value}
        color={"gray"}
        >
        {items.map((item, index) => (
          <Dropdown.Item onClick={() => handleChange(item)} key={index} value={item}>
            {item}
          </Dropdown.Item>
        ))} 
      </Dropdown>
    )
}

export default Dropmenu