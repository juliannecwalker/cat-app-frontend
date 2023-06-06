import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styles from './Home.css'

export const Home = ({cats}) => {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <div>
        <h1>Cats</h1>
        <ButtonGroup className={styles.buttonGroup} bsPrefix="buttonGroup">
          {
            cats?.map((cat) =>{
                return(
                    <Button key={cat.name} className={styles.button} bsPrefix="button" onClick={() => handleClick(cat.name)}>{cat.name}</Button>
                )
            })
          }
          <Button className={styles.button} bsPrefix="button" onClick={() => handleClick('new')}>Add Cat</Button>
        </ButtonGroup>
    </div>
  )
}

export default Home;