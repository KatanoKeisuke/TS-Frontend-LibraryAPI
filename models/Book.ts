import { BookCategory } from "./BookCategory";
import { BookStock } from "./BookStock";
/**
 * データアクセスとサービスを実装する
 * 書籍インターフェイス
 */
export interface Book {
    bookId: string;        // 書籍Id(UUID)
    title: string;               // 書籍名
    author: string;              // 著者
    category: BookCategory;  // 商品カテゴリ
    stock: number;        // 商品在庫数
}