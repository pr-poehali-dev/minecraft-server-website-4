import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-crimson to-blood rounded-lg flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertTriangle" size={32} className="text-white" />
          </div>
          <h1 className="font-oswald font-bold text-6xl text-white mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Упс! Эта страница потерялась в Незере
          </p>
          <a
            href="/"
            className="bg-gradient-to-r from-crimson to-blood hover:from-blood hover:to-crimson px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Icon name="Home" size={20} />
            <span>Вернуться домой</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
