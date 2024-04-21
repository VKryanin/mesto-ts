
import moment from "moment";

export const HOST = 'http://localhost:3001';

interface DataObject {
  [key: string]: string;
}

class Api {
  postHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('ReactToken')}`,
  };

  getResponseData = async (res: Response, options: any) => {
    if (res.ok) {
      const response = await res.json();
      localStorage.setItem('ReactToken', response.token);
      localStorage.setItem(
        'TokenExpiredDate',
        (moment().valueOf() + response.expires_in * 1000).toString(),
      );
      console.log(123);
      this.postHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${response.token}`,
      };
      return response;
    } else {
      return res.text().then((text) => {
        const errorMessage = JSON.parse(text).message || JSON.parse(text).error;
        console.error('Error message:', errorMessage);
      });
    }
  };

  fetcher = async (path: string, method: string, body?: any, port?: string) => {
    const options: any = {
      method: method ?? 'POST',
      headers: this.postHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const clonedOptions = { ...options };
    delete clonedOptions.headers.Authorization;
    const response = await fetch(`${HOST}${port ?? ''}/${path}`, options);
    return this.getResponseData(response, clonedOptions);
  };

  getToken = (data: DataObject) => this.fetcher(`signin`, 'POST', data);

  getMe = () => this.fetcher(`user/me`, 'POST');

  logOut = () => {
    localStorage.removeItem('ReactToken');
    localStorage.removeItem('TokenExpiredDate');
  };
}

const api = new Api()
export default api
