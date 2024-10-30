import axios from "axios";

const API_URL = "http://localhost:3001/api";

interface ResponseData {
  jwtSecret?: string;
  password?: string;
}

export const getJwtSecret = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get<ResponseData>(`${API_URL}/jwt-secret`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching jwt secret:", error);
    throw error;
  }
};

export const getPassword = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get<ResponseData>(`${API_URL}/password`);
    return response.data;
  } catch (error) {
    console.error("Error fetching password:", error);
    throw error;
  }
};
