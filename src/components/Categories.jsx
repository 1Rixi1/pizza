import React from 'react'

function Categories() {

  const [activeCategory, setActiveCategory] = React.useState(0)

  const onClickCategory = (index) => {
    setActiveCategory(index)
  }

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categorie, i) => <li key={i} className={activeCategory === i ? 'active' : ''} onClick={() => onClickCategory(i)} >{categorie}</li>)
        }
      </ul>
    </div >
  )
}

export default Categories;