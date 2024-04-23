import axios, { AxiosResponse, AxiosError } from "axios";
import moment from "moment";

const HOST = 'http://localhost:3001/';

interface AuthData {
  email: string;
  password: string;
}

class Api {
  postHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  getToken = async (authData: AuthData): Promise<any> => {
    try {
      const response = await axios.post(`${HOST}signin`, authData);
      localStorage.setItem('token', response.data.token);;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error as AxiosError;
        console.log(response);
        return response;
      }
    }
  }

  getResponseData = (res: AxiosResponse<any>): any => {
    console.log(res);
    if (res.status === 200) {
      return res.data; // Возвращает данные ответа
    } else {
      console.log(1);
      console.log(`Request failed with status ${res}`);
    }
  }

  
}

export const api = new Api()
