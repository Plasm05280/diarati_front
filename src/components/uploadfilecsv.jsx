import React from 'react'
import Button from './Button'
import "./upload.css"
import Uploader from './uploader'
import { downloadCSVapi, uploadCSVapi } from "../api/uploadapi"



// This function add space beetwen two component
const Gap = ({size}) => <div style={{width: size || 20}}/>
  
export default function UploadFileCsv() {
  let [fileState, setFileState] = React.useState([])
  

  let isDownloadActive = fileState.length > 0

  // 
  let handleFileInput = (e) => {
    let { files } = e.target
    console.log(files)
    setFileState(files)
  }


  let downloadFile = async (e) => {
      let form = new FormData()
      form.append("file", fileState[0])
    
    let result = await uploadCSVapi(form)

    console.log(result)
    
    if (result.status !== "OK") {
      alert("erreur lors de l'upload")
      return
    }


    alert("Fichier uploadé")

  }

  return (
    <div className='ctn_upload'>
      <Uploader onChange={handleFileInput} accept=".csv" filename={fileState?.[0]?.name} />
        <Gap size={50}/>
      <Button onClick={downloadFile} active={isDownloadActive} />
   </div>
  )
}
