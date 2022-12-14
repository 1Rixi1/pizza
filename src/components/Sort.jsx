
import React from 'react'


import { useSelector, useDispatch } from "react-redux";
import { setSort } from '../redux/slices/filterSlices'


export const sortArr = [
  {
    name: 'популярности(DESC)',
    sortType: 'rating'
  },
  {
    name: 'популярности(ASC)',
    sortType: '-rating'
  },
  {
    name: 'цене(DESC)',
    sortType: 'price'
  },
  {
    name: 'цене(ASC)',
    sortType: '-price'
  },
  {
    name: 'алфавиту(DESC)',
    sortType: 'title'
  },
  {
    name: 'алфавиту(ASC)',
    sortType: '-title'
  }
]

function Sort() {

  const [isVisibleSort, setIsVisivleSort] = React.useState(false)

  const sortActive = useSelector((state) => state.filterSlice.sort)

  const dispatch = useDispatch()


  const isVisiableSortPopupWidthClick = (objArr) => {
    setIsVisivleSort(!isVisibleSort)
    dispatch(setSort(objArr))
  }

  const sortRef = React.useRef()

  React.useEffect(() => {

    const onClickWithoutSort = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setIsVisivleSort(false)
      }
    }

    document.body.addEventListener('click', onClickWithoutSort)

    return () => {
      document.body.removeEventListener('click', onClickWithoutSort)
    }


  }, [])




  return (
    <div ref={sortRef} className="sort">

      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisivleSort(!isVisibleSort)}>{sortActive.name}</span>
      </div>

      {
        isVisibleSort && <div className="sort__popup">
          <ul>
            {sortArr.map((objArr, i) =>
              <li
                key={i}
                onClick={() => isVisiableSortPopupWidthClick(objArr)}
                className={sortActive.sortType === objArr.sortType ? 'active' : ''}>{objArr.name}
              </li>)
            }
          </ul>
        </div>
      }

    </div >
  )
}

export default Sort;