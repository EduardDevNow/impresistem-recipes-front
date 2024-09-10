import axios from "axios"
import useSharedComponents from '../../shared/components'

async function getRecipe(id: string) {
    return (await axios.get(`https://dummyjson.com/recipes/${id}`)).data
}


const Recipe: React.FC<any> = async (props) => {
    const recipe = await getRecipe(props.params.id)
    console.log(props)

    // Hooks
  const { Navbar, PageTitle } = useSharedComponents()

    return (
        <>
            <Navbar />
            <PageTitle title={recipe.name} />
            <span>{JSON.stringify(recipe)}</span>
        </>

    )
}

export default Recipe