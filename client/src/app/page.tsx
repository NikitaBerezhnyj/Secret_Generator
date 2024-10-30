import Header from "./components/Header";
import SecretGenerator from "./components/SecretGenerator";
import "./styles/page.css";

export default function Home() {
  return (
    <main className="page-container">
      <Header activePage="/" />
      <SecretGenerator />
    </main>
  );
}
