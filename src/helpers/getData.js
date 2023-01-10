import axios from "axios"

export default async function getData(url){
    let data = await axios.get(url).then((res) => {
        return res.data
    })

    return await data
}