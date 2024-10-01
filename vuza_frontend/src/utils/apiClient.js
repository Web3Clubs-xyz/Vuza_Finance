import axios from "./axios";

export const baseGet = async (url) => {
    const response = await axios.get(url)
    return response.data;
}


export const basePost = async (url, data) => {

    const response = await axios.post(url, data)

    return response.data;

}

export const basePatch = async (url, data) => {

    const response = await axios.patch(url, data)

    return response.data;

}

export const basePut = async (url, data) => {

    const response = await axios.put(url, data)

    return response.data;

}

export const baseDelete = async (url) => {

    const response = await axios.delete(url)

    return response.data;

}

export const baseUpload = async (url, data) => {
    const response = await axios.post(url, data);
    return response;
}