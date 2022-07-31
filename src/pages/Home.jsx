import React, { useContext } from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/inde';

import { SearchContextCreate } from '../App'



const Home = () => {

  const { searchValue } = React.useContext(SearchContextCreate)


  const [activePizzas, setActivePizzas] = React.useState([])
  const [isLoadingPizzas, setsLoadingPizzas] = React.useState(false)

  const [surrentPage, setCurrentPage] = React.useState(1)


  const [categoryId, setCategoryId] = React.useState(0)

  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating'
  })


  const categoryChange = categoryId === 0 ? '' : `category=${categoryId}`;
  const order = sortType.sort.includes('-') ? `asc` : `desc`
  const sortChange = sortType.sort.replace('-', '')
  const search = searchValue ? `search=${searchValue}` : '';

  React.useEffect(() => {
    setsLoadingPizzas(true)
    fetch(`https://62cd07e7a43bf78008509237.mockapi.io/items?page=${surrentPage}&limit=4&${categoryChange}&sortBy=${sortChange}&order=${order}&${search}`)
      .then(res => res.json())
      .then(arr => {
        setActivePizzas(arr)
        setsLoadingPizzas(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, surrentPage])


  const pizzas = activePizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)
  const sketetons = [...new Array(6)].map((skeleton, index) => <Skeleton key={index} />)

  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => { setCategoryId(i) }} />
        <Sort value={sortType} onClickSort={(objArr) => { setSortType(objArr) }} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoadingPizzas ? sketetons : pizzas
        }
      </div>


      <Pagination onChangePage={(number) => { setCurrentPage(number) }} />

    </div>
  )
}


export default Home;