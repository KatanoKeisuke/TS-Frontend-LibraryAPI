/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSession, signOut } from "next-auth/react";

export default function Header() {

  /**
   * 演習 7-4 ログインUIを作成し、ログイン可能にする
   * 追加
   */
  // 追加: セッションの認証状態(status)のみを取得
  const { status } = useSession();

  return (
    <header className="border-b border-green-200 bg-green-100 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        <h1 className="text-xl font-bold text-green-900">
          <Link href="/">商品管理システム</Link>
        </h1>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-end">

        
            {/* メニュー2：ログアウト */}
{/* ログイン中のみ[ログアウト]を表示 */}
{status === "authenticated" && (
    <NavigationMenuItem>
        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
            {/* Linkからbuttonに変更して、signOut()関数を呼び出す */}
            <button onClick={() => signOut({ callbackUrl: "/" })}>ログアウト</button>
        </NavigationMenuLink>
    </NavigationMenuItem>
)}

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}