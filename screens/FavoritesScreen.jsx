import { useSelector } from "react-redux"
import MealsList from "../components/Meal/MealsList"
import { MEALS } from "../data/data"

const FavoritesScreen = () => {
    const favoriteIds = useSelector(state => state.favoriteSlice.favoritesList)
    const favoriteData = MEALS.filter(item => favoriteIds.includes(item.id))

    return (
        <MealsList data={favoriteData} />
    )
}

export default FavoritesScreen