import React, {useState, useEffect} from 'react'

import {Tab} from 'semantic-ui-react'
import axios from "axios";


const ClientPage = () => {

  //the pane is that goes inside
  //render class info on there
  // you are also able to have other JSX in the Tab.pane
  // /api/classes/search/:type

  const [Classes, setClasses] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:5500/api/classes')
  //       .then(response => {
  //         console.log('Data -> ', response)
  //       })
  //       .catch(err => {
  //         console.log('ERROR -> ', err)
  //       })
  // }, [])

  // class time
  // class date
  // class duration
  // class type
  // intensity level
  // class location

  const classTabs = [
    {
      menuItem: '( class type goes here)', render: () => <Tab.Pane>
        <div>
          <h4>Class Time: ( class time goes here )</h4>
          <h4>Class Date: ( class date goes here )</h4>
          <h4>Class Duration: ( class duration goes here )</h4>
          <h4>Intensity Level: ( class intensity level goes here )</h4>
          <h4>Class Location: ( class location goes here )</h4>
        </div>
      </Tab.Pane>
    }, {
      menuItem: '( class type goes here)', render: () => <Tab.Pane>
        <div>
          <h4>Class Time: ( class time goes here )</h4>
          <h4>Class Date: ( class date goes here )</h4>
          <h4>Class Duration: ( class duration goes here )</h4>
          <h4>Intensity Level: ( class intensity level goes here )</h4>
          <h4>Class Location: ( class location goes here )</h4>
        </div>
      </Tab.Pane>
    }, {
      menuItem: '( class type goes here)', render: () => <Tab.Pane>
        <div>
          <h4>Class Time: ( class time goes here )</h4>
          <h4>Class Date: ( class date goes here )</h4>
          <h4>Class Duration: ( class duration goes here )</h4>
          <h4>Intensity Level: ( class intensity level goes here )</h4>
          <h4>Class Location: ( class location goes here )</h4>
        </div>
      </Tab.Pane>
    }
  ]

  return (
      <div>
        <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={classTabs}/>
      </div>
  )
}

export default ClientPage