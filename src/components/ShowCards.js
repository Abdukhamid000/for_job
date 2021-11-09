import {useDispatch} from "react-redux";
import {setModal, fill} from "../features/modalSlice";
import Box from "./Box";
// Get Props from Parent Component
const ShowCards = ({body, name, img}) => {
    const dispatch = useDispatch()

// Dispatch for Redux Store
    const showBox = (e) => {
        dispatch(setModal(true))
        dispatch(fill(`${body}`))
    }

    return (
// I Used Tailwindcss in this Component

        <div className="max-w-sm rounded overflow-hidden shadow-lg">


            <img src="" alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2 flex justify-between">
                    {name} <span>  <img src={img} alt=""/></span>
                </div>
                <ul>
                    <li>
                        <strong>Post: </strong>
                        <p className="overflow-hidden h-12"> {body}
                        </p>

                    </li>

                    <li>

                        <button
                            onClick={showBox}
                            style={{cursor: "pointer"}}
                            className=" mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            See All Text
                        </button>
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">


            </div>
        </div>
    )
}
export default ShowCards