// import axios from "axios";

import { HttpClient } from "./02-open-close-c";

export class TodoService {
  //Todas las clases que tienen peticiones van a necesitar trabajar con HttpClient
  //como las clases usan el httpclient personalizado se les proporciona el método get sin la dependencia de axios
  //si se necesita un cambio, sólo se debería cambiar la clase httpClient
  constructor(private http: HttpClient) {}

  //En lugar de hacer axios.get, se va a usar la clase
  async getTodoItems() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) {}

  async getPosts() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}

  async getPhotos() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
