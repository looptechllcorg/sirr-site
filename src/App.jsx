import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import PrDetailsPage from "./Pages/PrDetailsPage/PrDetailsPage";
import SearchResult from "./Pages/SearchResult/SearchResult";
import { SearchProvider } from "./Contexts/SearchContext";
import { LanguageProvider } from "./Contexts/LanguageContext";
import { ApiGlobalProvider } from "./Contexts/ApiGlobalContext";
import { useTranslation } from "react-i18next";

function App() {
    const {t}= useTranslation()
    return (
        <>
            <SearchProvider>
                <ApiGlobalProvider>
                    <LanguageProvider>
                        <Header />
                        <ScrollToTop />
                        <Routes>
                            <Route path="/" element={<Home />} />   
                            <Route path="/about-us" element={<About />} />
                            <Route path="/products" element={<Product />} />
                            <Route path="/contact" element={<Contact />} />  
                            <Route path="/search" element={<SearchResult />} /> 

                            <Route path="/product/:slug" element={<PrDetailsPage />} />
                        </Routes>
                        <Footer />
                    </LanguageProvider>
                </ApiGlobalProvider>
            </SearchProvider>
        </>
    );
}

export default App;
