import React from 'react'
import { AddBtnStyle } from './styles/AddBtn.styled'

const AddBtn = (props) => {
  return (
    <AddBtnStyle>{props.value}</AddBtnStyle>
  )
}

export default AddBtn