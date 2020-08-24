import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect'
import _ from 'lodash'

import { selectStudentApplicantsArray } from '../../../redux/Students/StudentsSelectors'
import {addCollectionAndDocuments} from '../../../firebase/firebase.utils'

const UploadCollection = ({ currentUser, studentApplicants}) => {
  const [collectionKey, setCollectionKey] = useState('')
  const [collectionFile, setCollectionFile] = useState(null)

  const handleFile = e => {
    e.preventDefault()
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8")
    fileReader.onload = e => {
      setCollectionFile(Object.values(JSON.parse(e.target.result)))
    }
  }

  const uploadFile = () => {
    addCollectionAndDocuments(_.camelCase(collectionKey), collectionFile)
    alert('File Uploaded Successfully')
    setCollectionFile(null)
    setCollectionKey('')
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control as='select' name='collectionKey' value={collectionKey} onChange={e => setCollectionKey(e.target.value)}>
          <option>Select Collection to Update</option>
          <option>Student Applicants</option>
          <option>Student List</option>
          <option>Teachers</option>
          <option>Tuition</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.File id="UploadToFirestore" label="Upload dataset" onChange={handleFile} />
      </Form.Group>
      <Button onClick={() => uploadFile()}>Upload to Firestore</Button>
      {/* <Button onClick={() => console.log(collectionFile)}>Upload to Firestore</Button> */}
    </Form>
  )
}

const mapStateToProps = createStructuredSelector({
  studentApplicants: selectStudentApplicantsArray
})

export default connect(mapStateToProps)(UploadCollection)
