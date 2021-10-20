import React, {useState} from 'react'
import {Table, Button} from "semantic-ui-react";

const InstructorPage = () => {


  return (
      <div>
        <Table columns={8}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Class Name</Table.HeaderCell>
              <Table.HeaderCell>Class Type</Table.HeaderCell>
              <Table.HeaderCell>Start Time</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Intensity Level</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Max Number of Attendees</Table.HeaderCell>
              <Table.HeaderCell>Max Class Size</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Yoga</Table.Cell>
              <Table.Cell>Mediation</Table.Cell>
              <Table.Cell>7:00AM</Table.Cell>
              <Table.Cell>2 Hours</Table.Cell>
              <Table.Cell>Hard</Table.Cell>
              <Table.Cell>Mars, OuterSpace</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>20</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
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