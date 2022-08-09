import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const FullPizza = () => {

  const navigate = useNavigate()



  const [item, setItem] = useState('')

  const { id } = useParams()

  React.useEffect(() => {

    async function addFetchPizza() {

      try {
        const { data } = await axios.get(`https://62cd07e7a43bf78008509237.mockapi.io/items/${id}`)
        setItem(data)
      } catch (error) {
        alert('ERROR:', error)
        navigate('/')
      }

    }


    addFetchPizza()


  }, [])



  if (!item) {
    return 'Загрузка...'
  }


  return (
    <div className='container'>
      <img src={item.imageUrl} alt="imagePizza" />
      <h2>{item.title}</h2>
      <h4>{item.price}</h4>
    </div>
  )

}

export default FullPizza
