import Axios, { AxiosInstance } from "axios";

const SWAPI_BASE_URL = 'https://swapi.dev/api/'

export class Swapi {
  protected axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: SWAPI_BASE_URL
    });
  }

  async getFilm(filmId: number) {
    const result = await this.axios.get(`/films/${filmId}`);
    return result.data;
  }
}
