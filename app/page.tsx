'use client'
import React from 'react'
import useSharedComponents from './shared/components'
import axios from 'axios'
import Link from 'next/link'

const Home: React.FC<any> = (props) => {
  const [recipes, setRecipes] = React.useState([])

  async function getRecipes() {
    return (await axios.get(`https://dummyjson.com/recipes`)).data.recipes
  }

  React.useEffect(() => {
    (async () => {
      setRecipes(await getRecipes())
    })()
  }, [])
  // let recipes = await getRecipes();

  let selectedFilter: 'Easy' | 'Medium' | 'Hard' | '' = ''

  // Hooks
  const { Navbar, PageTitle, Filter } = useSharedComponents()

  const handleFilter = async (filter: 'Easy' | 'Medium' | 'Hard' | '') => {
    console.log(filter)
    let data = await getRecipes();
    setRecipes(data.filter((item: any) => item.difficulty === filter))
  }

  return (
    <>
      <Navbar />
      <PageTitle title='Libro de recetas' />
      <section className='block md:flex w-[98%] mx-auto gap-[10px] mt-[20px]'>
        <div className='w-full md:w-[25%]'>
          <div className='flex items-center justify-center border-[#e6e6e6] border-solid border-[1px] h-[50px]'>
            Menu
          </div>
          <Filter onFilter={handleFilter} filter={selectedFilter} />
        </div>
        <div className='w-full md:w-[75%] border-[#e6e6e6] border-solid border-[1px] items-center'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='h-[45px] bg-[#e6e6e6]'>
                <th>Nombre de la receta</th>
                <th>Cocina</th>
                <th>Tiempo de preparación</th>
                <th>Dificultad</th>
              </tr>
            </thead>
            <tbody>
              {
                recipes.map((item: any, index: number) => (

                  <tr key={`recipe-${index}`} className='cursor-pointer border-[#e6e6e6] border-solid border-[1px] hover:bg-[#e6e6e6] px-[20px] h-[45px]'>
                    <td className='text-center'>
                      <Link href={`/recipe/${item.id}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td className='text-center'>
                      <Link href={`/recipe/${item.id}`}>
                        {item.cuisine}
                      </Link>
                    </td>
                    <td className='text-center'>
                      <Link href={`/recipe/${item.id}`}>
                        {item.prepTimeMinutes}
                      </Link> minutos
                    </td>
                    <td className='text-center'>
                      <Link href={`/recipe/${item.id}`}>
                        {item.difficulty}
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
      <footer className='border-[#e6e6e6] border-solid border-[1px] items-center justify-center flex my-[20px] h-[45px] w-[98%] mx-auto'>{new Date().getFullYear()} - Nelson Arevalo</footer>
    </>
  )
}


export default Home