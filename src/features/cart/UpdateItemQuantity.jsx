import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import {decreaseItemQuantity} from "./cartSlice"
import { increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
