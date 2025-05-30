import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Glob import all index.jsx files in /pages/**/
const pages = import.meta.glob("./pages/**/index.jsx", { eager: true });

const routes = Object.entries(pages).map(([filePath, module]) => {
  // Example filePath: './pages/about/index.jsx'
  const match = filePath.match(/\.\/pages\/(.*?)\/index\.jsx$/);
  const routeName = match[1] || "";
  const routePath = routeName === "home" ? "/" : `/${routeName}`;

  return (
    <Route
      key={routePath}
      path={routePath}
      element={module.default()} // if the page is a function call, or <module.default /> if it's a component
    />
  );
});

export default function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}
