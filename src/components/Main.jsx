import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJokes, getCategories } from '../redux/actions/jokesActions'
import JokesItem from './JokesItem'
import Button from './Button'

const Main = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokesReducer?.jokes);
  const categories = useSelector((state) => state.categoriesReducer?.categories)

  console.log(jokes.filter(jk => jk.categories === 'animal'))
  
  const allCategories = ['All', ...new Set(categories.map(category => category))];
  const [jokeItem, setJokeItem] = useState(jokes);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if(button === 'All') {
      setJokeItem(jokes);
      return;
    }

    const filterData = jokes.filter(jokeItem => jokeItem.categories === button);
    setJokeItem(filterData)
  }

  React.useEffect(() => {
    dispatch(getJokes());
    dispatch(getCategories())
  }, [dispatch]);
  return (
    <div className="main">
      <Button button={buttons} filter={filter} />
      <JokesItem jokeItem={jokeItem} />
    </div>
  )
}

export default Main