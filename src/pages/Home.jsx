import React from 'react'
import qs from "qs";
import { Link, useNavigate } from "react-router-dom";


import Categories from '../components/Categories';
import Sort, { sortArr } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';




import { selectfilter, setCategoryId, setPaginationCurrent, setParamsFilter } from '../redux/slices/filterSlices'
import { useSelector, useDispatch } from 'react-redux'
import { addFetchPizzas, selectPizzas } from '../redux/slices/addPizzaSlice';


const Home = () => {


  const navigate = useNavigate();

  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)



  const { categoryId, sort, activePaginatuinCurrent, searchValue } = useSelector(selectfilter)

  const { pizzaItems, isLoadingPizza } = useSelector(selectPizzas)


  const dispatch = useDispatch()

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }



  //(1)
  React.useEffect(() => {
    //если был первый рендер вбивай в стирочку параметры
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: sort.sortType,
        categoryId,
        activePaginatuinCurrent,
      })


      navigate(`?${queryString}`)
    }

    isMounted.current = true

  }, [categoryId, sort.sortType, searchValue, activePaginatuinCurrent])


  // вытаскиваем из url наши параметры (если есть мы будем парсить параметры и превращать в объект)

  React.useEffect(() => {
    if (window.location.search) {
      //превращаем нашу строку в объект 
      const params = qs.parse(window.location.search.substring(1))


      const SortArrFilterToObject = sortArr.find(obj => obj.sortType === params.sortType)

      dispatch(
        setParamsFilter({
          ...params,
          SortArrFilterToObject
        })
      )
      isSearch.current = true
    }
  }, [])


  const categoryChange = categoryId === 0 ? '' : `category=${categoryId}`;
  const order = sort.sortType.includes('-') ? `asc` : `desc`;
  const sortChange = sort.sortType.replace('-', '');
  const search = searchValue ? `search=${searchValue}` : '';

  const axiosPizzas = async () => {

    dispatch(addFetchPizzas({
      categoryChange,
      order,
      sortChange,
      search,
      activePaginatuinCurrent,
    }))

  }

  React.useEffect(() => {
    // Запрос по умолчанию (самый первый)
    if (!isSearch.current) {
      axiosPizzas()
    }

    isSearch.current = false

    window.scrollTo(0, 0)
  }, [categoryId, sort.sortType, searchValue, activePaginatuinCurrent])




  const pizzas = pizzaItems.map(pizza => <Link to={`/pizza/${pizza.id}`} key={pizza.id}> <PizzaBlock {...pizza} /></Link>)
  const sketetons = [...new Array(6)].map((skeleton, index) => <Skeleton key={index} />)



  const onChangePage = (number) => {
    dispatch(setPaginationCurrent(number))
  }


  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => { onClickCategory(id) }} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {

        isLoadingPizza === 'error' ?
          <div className='content__error-info'>
            <h2>Произошла ошибка😕</h2>
            <p>
              Не удалось получить пиццы! Попробуйте повторить позже
            </p>
          </div>
          :
          <div className='content__items'>
            {isLoadingPizza === 'loading' ? sketetons : pizzas}
          </div>

      }




      <Pagination value={activePaginatuinCurrent} onChangePage={(number) => { onChangePage(number) }} />

    </div>
  )
}


export default Home;