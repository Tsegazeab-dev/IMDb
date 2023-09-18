import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";


export const metadata = {
  title: "TM-IMDb",
  description: "Generated by tm-dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* navBar */}
          <NavBar />
          {/* searchBox */}

          <SearchBox/>

          {children}
        </Providers>
      </body>
    </html>
  );
}
