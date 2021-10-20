import React, {useState, useEffect} from 'react'
import {Table, Button, } from "semantic-ui-react";
import axios from 'axios'



const InstructorPage = () => {

  const [Classes, setClasses] = useState([])

  // get all the classes -> /api/classes/

  //get the class info with id -> /api/classes/:id

  //update class info with the id -> /api/classes/:id

  console.log(Classes)

  const fetchClasses = async () => {
    const data = await fetch('http://localhost:5500/api/classes')

    const classList = await data.json()
    console.log(classList.classes)
    setClasses(classList.classes)
    console.log('Data -> ', Classes)
  }

  useEffect(() => {
    fetchClasses()
  }, [])


  return (
      <div>
        <Table columns={9}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Class ID</Table.HeaderCell>
              <Table.HeaderCell>Class Name</Table.HeaderCell>
              <Table.HeaderCell>Class Type</Table.HeaderCell>
              <Table.HeaderCell>Start Time</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Intensity Level</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Max Class Size</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Classes.map(classInfo => (
                <Table.Row key={classInfo.class_id}>
                  <Table.Cell>{classInfo.class_id}</Table.Cell>
                  <Table.Cell>{classInfo.className}</Table.Cell>
                  <Table.Cell>{classInfo.classType}</Table.Cell>
                  <Table.Cell>{classInfo.startTime}</Table.Cell>
                  <Table.Cell>{classInfo.duration}</Table.Cell>
                  <Table.Cell>{classInfo.intensityLevel}</Table.Cell>
                  <Table.Cell>{classInfo.location}</Table.Cell>
                  <Table.Cell>{classInfo.classMAX}</Table.Cell>
                </Table.Row>
            ))}


          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell>
                <Button>Edit</Button>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Button>Delete</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
  )
}

export default InstructorPage