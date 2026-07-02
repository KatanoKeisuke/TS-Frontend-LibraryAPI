/**
 * データアクセスとサービスを実装する
 * 蔵書数インターフェイス
 */
export interface BookStock {
    stockUuid: string;  // 蔵書数Id(UUID)
    stock: number;      // 蔵書数
}