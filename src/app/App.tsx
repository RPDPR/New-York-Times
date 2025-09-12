import { Header } from "@/widgets/header/index";
import { NewsFeed } from "@/widgets/newsFeed/index";
import { Footer } from "@/widgets/footer/index";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-18 mx-auto px-5">
          <NewsFeed />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
