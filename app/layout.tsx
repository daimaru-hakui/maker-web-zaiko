import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SessionProvider from "@/libs/providers/SessionProvider";
import QueryProvider from "@/libs/providers/queryProvider";
import SideNav from "@/components/layout/SideNav";
import { ChakuraProvider } from "@/libs/providers/ChakuraProvider";
import { Kosugi, Oswald } from "next/font/google";

export const metadata = {
  title: "大丸白衣　メーカー在庫",
  description: "大丸白衣　メーカー在庫",
};

export const KosugiFont = Kosugi({
  weight: "400",
  subsets: ["latin"],
});
export const OswaldFont = Oswald({
  weight: "500",
  subsets: ["latin"],
});

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
        <body style={{ backgroundColor: "#ededed" }} className={`relative w-full min-h-screen flex ${OswaldFont.className}`}>
          <ChakuraProvider>
            <SideNav />
            <div className="w-full flex flex-col justify-between">
              <div>
                <Header />
                <QueryProvider>{children}</QueryProvider>
              </div>
              <Footer />
            </div>
          </ChakuraProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
