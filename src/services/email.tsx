import api from "./api"

export const sendEmail = async (formData: object) => {
    try {
        const response = await api.post("/send-email/", formData)
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}