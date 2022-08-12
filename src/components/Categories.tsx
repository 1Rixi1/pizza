import React from 'react'



type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
}


const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {



  return (
    <div className="categories">
      <ul>
        {
          categories.map((categorie, i) => <li key={i} className={value === i ? 'active' : ''} onClick={() => onClickCategory(i)} >{categorie}</li>)
        }
      </ul>
    </div >
  )
}

export default Categories;