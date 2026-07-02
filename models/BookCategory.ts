/**
 * データアクセスとサービスを実装する
 * 本カテゴリインターフェイス
 */
export interface BookCategory {
    categoryId: string;  // 書籍カテゴリId(UUID)
    name: string;          // 書籍カテゴリ名
}