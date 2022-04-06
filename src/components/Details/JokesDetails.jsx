import React, { useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getJokes, getCategories } from '../../redux/actions/jokesActions'

const JokesDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const jokes = useSelector((state) => state.jokesReducer?.jokes);
    const categories = useSelector((state) => state.categoriesReducer?.categories)

    const [jokeData, setJokeData] = useState([])
    const fetchJokeDetail = (id) => {
        const newJoke = jokes.filter(x => x.id === id)
        setJokeData(newJoke)
        dispatch(getJokes())
    }
    useEffect(() => {
        if (id && id !== "") 
            fetchJokeDetail(id)
    }, [id])

  return (
    jokeData.map((joke) => (
        <div key={joke.id} className="main__details">
          <div className="main__detailsBox">
            <h3 className="main__detailsMain">Chunk Jokes</h3>
            <p className="main__detailsInfo">{joke.value}</p>
            <div className="main__detailsBtn">
              <div className="main__detailsFlex">
                <button className='main__likeBtn'>
                  <img src={require("../assets/hand@3x.png")} className="main__likes" alt='like'/>
                </button>
                <button className='main__likeBtn'>
                  <img src={require("../assets/hand-copy@3x.png")} className="main__likes" alt='unlike'/>
                </button>
              </div>
              <div className="main__detailsFlex">Hello</div>
            </div>
          </div>
        </div>
    ))
  )
}

export default JokesDetails