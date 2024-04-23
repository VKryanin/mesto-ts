import axios, { AxiosResponse, AxiosError } from "axios";
import moment from "moment";

const HOST = 'https://mesto-api.vk-port.dev/';

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
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };

      const response = await axios.post(`${HOST}signin`, authData, { headers });
      localStorage.setItem('token', response.data.token);
      this.getProfile();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('oops, error: ', error.response);
      } else if (error instanceof Error) {
        console.log('error: ', error.message);
      }
    }
  }

  getProfile = async () => {
    return await axios(`${HOST}users/me`, {
      headers: this.postHeaders,
    }).then((res) => this.getResponseData(res));
  }

  getResponseData = (res: AxiosResponse<any>): any => {
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(1);
      console.log(`Request failed with status ${res}`);
    }
  }


}

export const api = new Api()
