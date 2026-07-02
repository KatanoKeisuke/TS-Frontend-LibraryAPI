import { IBookRepository } from "@/interfaces/IBookRepository";
import { ISearchBookService } from "@/interfaces/ISearchBookService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { BookRepository } from "@/infrastructures/BookRepository";
import { SearchBookService } from "@/services/SearchBookService";
import { IRegisterUserService } from "@/interfaces/IRegisterUserService";
import { RegisterUserService } from "@/services/RegisterUserService";
import { IUserRepository } from "@/interfaces/IUserRepository";
import { UserRepository } from "@/infrastructures/UserRepository";
import { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import { BookCategoryRepository } from "@/infrastructures/BookCategoryRepository";
import { IRegisterBookService } from "@/interfaces/IRegisterBookService";
import { RegisterBookService } from "@/services/RegisterBookService";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 */
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
container.bind<IBookRepository>(TYPES.IBookRepository).to(BookRepository);
// サービス(ユースケース)の登録
container.bind<ISearchBookService>(TYPES.ISearchBookService).to(SearchBookService);
/**
 * 演習 8-4 Serviceの実装とDIコンテナへの登録
 */
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IRegisterUserService>(TYPES.IRegisterUserService).to(RegisterUserService);
/**
 * 演習 8-9 リポジトリの実装を作成する
 */
container.bind<IBookCategoryRepository>(TYPES.IBookCategoryRepository).to(BookCategoryRepository);
/**
 * 演習 8-10 商品登録サービスを実装してDIコンテナに登録する
 */
container.bind<IRegisterBookService>(TYPES.IRegisterBookService).to(RegisterBookService);
export { container };