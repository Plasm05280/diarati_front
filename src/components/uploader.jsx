import React from 'react'


export default function Uploader(props) {
  return (
      <div className='ctn_upload_input'>
          <i className='bx bx-cloud-upload' id="ico_upload"></i>
          <p>
             {props.filename || "Intégrer le fichier CSV"}
          </p>
          <input
              type="file"
        id="input"
        {...props}
          />
    </div>
  )
}
