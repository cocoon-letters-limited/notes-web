import Footer from "./footer";
import Header from "./header";

interface Props {
    children: React.ReactNode
}

function MainLayout({children}: Props) {
  return (
    <>
      <Header />

      <main className="relative">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;