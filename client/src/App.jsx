import About from "./views/About";
import Footer from "./views/Footer";
import Landing from "./views/Landing";
import Contact from "./views/Contact";
function App() {
	return (
		<div className="grid bg-[#A6D2E4] overflow-hidden">
			<Landing />
			<Contact />
			<About />
			<Footer />
		</div>
	);
}
export default App;
