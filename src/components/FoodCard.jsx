import "../css/FoodCard.css"

// 지운 부분: 하트 기능에 필요했던 useFoodContext 임포트 삭제

function FoodCard({food}){
    // 지운 부분: Context 관련 함수들과 onFavoriteClick 함수 삭제

    return(
        <div className="food-card">
            <div className="food-image">
                <img src={food.image} alt={food.name}/>
                {/* 지운 부분: 하트 버튼과 오버레이 div 삭제 */}
            </div>
            <div className="food-info">
                <h3>{food.name}</h3>
                <p>${food.price}</p>
            </div>
        </div>
    );
}
export default FoodCard;