let foods = [
    'bokkeumbap',
    'ramen',
    'sushi',
    'pasta',
    'pork buns',
    'lasagna',
    'pizza',
    'dumplings',
    'Butter Chicken',
    'Laksa'
];

export default function FoodList(){
    return (
        <section>
            <ul>
                {
                    foods.map(food => {
                        return<li>{food}</li>
                    })
                }
            </ul>
        </section>
    )
}