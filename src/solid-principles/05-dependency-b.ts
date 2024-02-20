import {
  JsonDataBaseService,
  LocalDataBaseService,
  PostProvider,
  WebApiPostService,
} from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  //este PostService trabaja con una clase abstracta
  constructor(private postProvider: WebApiPostService) {}
  //constructor(private postProvider: LocalDataBaseService) {}

  async getPosts() {
    // const jsonDB = new LocalDataBaseService();
    // this.posts = await jsonDB.getFakePosts();
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
