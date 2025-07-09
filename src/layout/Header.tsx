import Navbar from "../components/template/Navbar";

export default function Header() {
  return (
    <div className="w-full px-4 bg-white py-4 flex justify-between">
      <p>Inpatient</p>
      <Navbar />
    </div>
  );
}
