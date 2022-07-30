import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';



export const Home = () => {

  const [activePizzas, setActivePizzas] = React.useState([])
  const [isLoadingPizzas, setsLoadingPizzas] = React.useState(false)


  const [categoryId, setCategoryId] = React.useState(0)

  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating'
  })

  console.log('sortType', sortType)

  const categoryChange = categoryId === 0 ? '' : `category=${categoryId}`;
  const order = sortType.sort.includes('-') ? `asc` : `desc`
  const sortChange = sortType.sort.replace('-', '')


  React.useEffect(() => {
    setsLoadingPizzas(true)
    fetch(`https://62cd07e7a43bf78008509237.mockapi.io/items?${categoryChange}&sortBy=${sortChange}&order=${order}`)
      .then(res => res.json())
      .then(arr => {
        setActivePizzas(arr)
        setsLoadingPizzas(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType])




  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => { setCategoryId(i) }} />
        <Sort value={sortType} onClickSort={(objArr) => { setSortType(objArr) }} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoadingPizzas ? [...new Array(6)].map((skeleton, index) => <Skeleton key={index} />)
            : activePizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)
        }
      </div>
    </div>
  )
}


export default Home;