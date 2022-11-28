import React from 'react'
import PropTypes from 'prop-types'
const Grid = props => {
  return (
    <div>Grid</div>
  )
}
Grid.PropTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}
export default Grid