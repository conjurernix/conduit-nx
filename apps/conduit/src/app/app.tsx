import { Header } from './layout/Header';
import { Banner } from './layout/Banner';
import { Footer } from './layout/Footer';
import { ArticleList } from './components/ArticleList';
import { TagList } from './components/TagList';

import { Routes, Route } from 'react-router-dom';
import Login from './AuthPages/login/Login';
import Register from './AuthPages/register/Register';

export function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />

      {/* Body */}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="flex flex-row gap-6 px-24 py-10 min-h-screen">
              <div className="w-3/4">
                <ArticleList />
              </div>
              <div className="w-1/4">
                <TagList />
              </div>
            </div>
          }
        />
        {/* Login Page */}
        <Route
          path="/login"
          element={
            <div className="flex flex-row gap-6 px-24 py-10 min-h-screen">
              <Login />
            </div>
          }
        />
        {/* Register Page */}
        <Route
          path="/register"
          element={
            <div className="flex flex-row gap-6 px-24 py-10 min-h-screen">
              <Register />
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
