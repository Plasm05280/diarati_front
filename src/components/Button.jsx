import React from 'react'

export default function Button(props) {
    let isActive = props.active

  return (
      <button {...props} style={{backgroundColor: !isActive ? "gray" : undefined}}>
          <i className='bx bx-down-arrow-alt' style={{fontSize: 20, marginRight: 10}}></i>
          Télécharger le fichier CSV
    </button>
  )
}
