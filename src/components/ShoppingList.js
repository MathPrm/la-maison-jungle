import '../styles/ShoppingList.css'
import { plantList } from "../datas/plantList"

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className='lmj-plant-list'>
                    {plantList.map((plant) => (
                        <li key={plant.id} className='lmj-plant-item'>
                            {plant.name}
                            <div>
                                {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ShoppingList