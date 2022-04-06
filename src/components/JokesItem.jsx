import React from 'react'
import { Link } from "react-router-dom";

const JokesItem = ({jokeItem}) => {
  return (
    <div className='main__grid'>
        {
            jokeItem.map((item) => {
                return <div className='main__block' key={item.id}>
                  <div className='main__box'>
                    <img src={require("./assets/green-light-copy.png")} className="main__icon" alt="icon" />
                    <h3 className='main__main'>Chunk Jokes</h3>
                  </div>
                  <p className='main__text'>{item.value}</p>
                  <div className='main__stats'>
                    <Link to={`/jokes/${item.id}`}><button className='main__btn'>See stats</button></Link>
                    <img src={require("./assets/path.png")} className="main__path" alt="icon" />
                  </div>
                </div>
            })
        }
    </div>
  )
}

export default JokesItem