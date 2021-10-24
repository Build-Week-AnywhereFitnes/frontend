import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = (props) => {

  console.log(props)

  return (
    // <<<<<<< HEAD
    //     <HeaderStyle>
    //       <p>Anywhere Fitness</p>
    //       <MenuStyle>

    //         {/* <li><Link to="/"> Home </Link></li> */}
    //         <li><Link to="/login"> Login </Link></li>
    //         <li><Link to="/instructorAuth"> Instructor Authorization</Link></li>
    //         <li><Link to="/instructor"> Instructor </Link></li>
    //         <li><Link to='/instructorPage'>Instructor Page</Link></li>

    //       </MenuStyle>
    //     </HeaderStyle>
    // =======
    <HeaderStyle>
      <p>Anywhere Fitness</p>
      <MenuStyle>

        {/* <li><Link to="/"> Home </Link></li> */}
        <li><Link to="/login"> Login </Link></li>
        <li><Link to="/instructorAuth"> Instructor Authorization</Link></li>

        <li><Link to="/instructor"> Instructor </Link></li>
        <li><Link to='/clientPage'>Client Page</Link></li>


      </MenuStyle>
    </HeaderStyle>
    // >>>>>>> de68cf95eae8f98d119e0398e996224389d4a7fe
  );
}

export default Header;


const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #00FFFF;
    display:flex;
    align-items: center;
    justify-content: space-between;
    justify-content: center;
    margin-bottom: 2rem;

    p {
        font-weight: bold;
        font-size: 1.9em;
        font-family: 'Roboto', monospace;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
    }
`