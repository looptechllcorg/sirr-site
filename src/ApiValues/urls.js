const urls = {
    // -------------home page datas--------------------------
    mainSlider: (lng)=> `/hero-sliders?lang=${lng}`,
    desertSlider: (lng)=>`/featured-categories?lang=${lng}`,
    categoriesName: (lng)=>`/categories?lang=${lng}`,
    favoriteItems: (lng)=> `/products?item=8&lang=${lng}`,
    homeVideoData: "/index-video",
    mostlyStoryCakeStore: (lng)=> `pages/index-video?lang=${lng}`,
    // -------------about page datas--  ?item=8  ------------------------
    about:(lng)=> `/about?lang=${lng}`,
    aboutFeatures: (lng)=> `/about-features?lang=${lng}`,    
    // -------------product page datas--------------------------
    allProduct:(lng)=> `/products?lang=${lng}`,
    similarProducts : (slug,lng) => `/products/${slug}/similar?lang=${lng}`,
    // contact
    postContactMail: "/contact",
    getContactDatas:(lng)=> `/contact?lang=${lng}`,   
    // global
    branches:(lng)=> `/branches?lang=${lng}`,
    social: "/socials",
    productsAndProductsDetailHeaderBgImgUrl: "/pages/products-header",
    searchResultHeaderBgImgUrl: "/pages/search-header",   
};
export default urls;
