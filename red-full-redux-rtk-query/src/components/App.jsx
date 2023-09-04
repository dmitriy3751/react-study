import { useGetRecipesQuery } from '../store/api/api'
import CreateRecipe from './create-recipe/CreateRecipe'
import Header from './header/Header'
import RecipeItem from './recipe-item/RecipeItem'

// const userId = null

function App() {
	const { isLoading, data } = useGetRecipesQuery()
	/* undefined, {
		skip: !userId,
	} */

	return (
		<section>
			<Header />
			{/* <User /> */}
			<CreateRecipe />
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
				) : (
					<div>Not found </div>
				)}
			</div>
		</section>
	)
}

export default App
