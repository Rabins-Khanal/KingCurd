import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

function ItemCreate(){

    const apiCall=useMutation({
        mutationKey:["POST_ITEM"],
        mutationFn:(payload:any)=>{
            console.log(payload);
                    return axios.post("http://localhost:8082/item/create", {payload})
        }
    })


    const {register,handleSubmit} = useForm();

    const onsubmit=(values:any)=>{
        apiCall.mutate(values)

    }
    return (
        <>
        <form onSubmit={handleSubmit(onsubmit)}>
            <div>
                <label>item name</label>
                <input type={"text"} {...register("itemName")}/>
            </div><div>
                <label>item image</label>
                <input type={"text"} {...register("itemImage")}/>
            </div><div>
                <label>item description</label>
                <input type={"text"} {...register("itemDescription")}/>
            </div><div>
                <label>item quantity</label>
                <input type={"text"} {...register("itemQuantity")} />
            </div><div>
                <label>item per price</label>
                <input type={"text"} {...register("itemPerPrice")} />
            </div>
            <div>
                <input type={"submit"} />
            </div>
        </form>
        </>
    )
}

export default ItemCreate;