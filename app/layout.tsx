import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SessionProvider from "@/providers/SessionProvider";
import QueryProvider from "@/providers/queryProvider";
import { Providers } from "./providers";
import SideNav from "@/components/layout/SideNav";

export const metadata = {
  title: "大丸白衣　メーカー在庫",
  description: "大丸白衣　メーカー在庫",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="ja">
        {/* <metadata /> */}
        <title>大丸白衣　メーカー在庫</title>
        <body className="relative w-full min-h-screen flex">
          <Providers>
            <SideNav />
            <div className="w-full flex flex-col justify-between">
              <div>
                <Header />
                <QueryProvider>{children}</QueryProvider>
              </div>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
