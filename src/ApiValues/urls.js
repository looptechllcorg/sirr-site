const urls = {
    // -------------home page datas--------------------------
    mainSlider: "/hero-sliders",
    desertSlider: "/featured-categories",
    categoriesName: "/categories",
    favoriteItems: "/products?item=8",
    homeVideoData: "/index-video",
    mostlyStoryCakeStore: "pages/index-video",
    // -------------about page datas--  ?item=8  ------------------------
    about: "/about",
    aboutFeatures: "/about-features",    
    // -------------product page datas--------------------------
    allProduct: "/products",
    similarProducts : (slug) => `/products/${slug}/similar`,
    // contact
    postContactMail: "/contact",
    getContactDatas: "/contact",   
    // global
    branches: "/branches",
    social: "/socials",
    productsAndProductsDetailHeaderBgImgUrl: "/pages/products-header",
    searchResultHeaderBgImgUrl: "/pages/search-header",   

    // settings: (lng) => `/settings?lang=${lng}`,
    // contacts: (lng) => `/branches?lang=${lng}`,
    // categoriesName: (lng) => `/categories?lang=${lng}`,
    // products: (lng, sort) => `/products?lang=${lng}&sort=${sort}`,
    // search: (lng) => `/products?lang=${lng}&search=`,
};
export default urls;
