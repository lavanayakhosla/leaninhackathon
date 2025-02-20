import { Navbar, Welcome, Footer, Services, Transactions, NGOs } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <NGOs /> 
    <Footer />
  </div>
);

export default App;
