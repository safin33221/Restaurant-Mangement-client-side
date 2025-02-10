import axios from "axios"

export const imageUpload = async ImageData => {
    const imgBB_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
    const formData = new FormData()
    formData.append('image', ImageData)
    const { data } = await axios.post(imgBB_api, formData)
    return data.data.url
}