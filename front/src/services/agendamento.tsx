import api from "./api"

export const agendamento = async (formData: object) => {
    try {
        const response = await api.post("/agendamento/", formData)
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}