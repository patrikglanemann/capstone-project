import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function MapPage() {
  return (
    <div className="MapPage">
      <Header title="Map" subTitle="" />
      <main></main>
      <Footer path01="/" text01="Back" path02="/sudoku" text02="Enter" />
    </div>
  );
}
