import React from 'react'
import useSharedComponents from './shared/components'
import axios from 'axios'
import Link from 'next/link'

async function getRecipes() {
  return (await axios.get(`https://dummyjson.com/recipes`)).data.recipes
}

const Home: React.FC<any> = async (props) => {
  let recipes = await getRecipes();

  // Hooks
  const { Navbar, PageTitle } = useSharedComponents()

  return (
    <>
      <Navbar />
      <PageTitle title='Libro de recetas' />
      <section className='block md:flex w-[98%] mx-auto gap-[10px] mt-[20px]'>
        <div className='w-full md:w-[25%]'>
          <div className='flex items-center justify-center border-[#e6e6e6] border-solid border-[1px] h-[50px]'>
            Menu
          </div>
          <div className='flex flex-col gap-[10px] border-[#e6e6e6] border-solid border-[1px] p-[10px] items-center'>
            <span id='easy' className='text-base font-medium cursor-pointer'>Opcion Easy</span>
            <span id='medium' className='text-base font-medium cursor-pointer'>Opcion Medium</span>
            <span id='hard' className='text-base font-medium cursor-pointer'>Opcion Hard</span>
          </div>
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