import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header title="Main" type="1" />
      <main></main>
      <Footer path01="/map" text01="Start" path02="/map" text02="Start" />
    </div>
  );
}
