// import style scss
import MainSlider from "../../Components/HomePageSections/MainSlider/MainSlider";
import DesertsSlider from "../../Components/HomePageSections/DesertsSlider/DesertsSlider";
import SocialList from "../../Components/SocialList/SocialList";
import FavoriteItems from "../../Components/HomePageSections/FavoriteItems/FavoriteItems";
import MostlyStoryCakeStore from "../../Components/HomePageSections/MostlyStoryCakeStore/MostlyStoryCakeStore";
import HomeContact from "../../Components/HomePageSections/HomeContact/HomeContact";
import SocialMedia from "../../Components/HomePageSections/SocialMedia/SocialMedia";
import { useEffect, useState } from "react";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import Loading from "../../Components/Loading/Loading";

export default function Home() {
    const [mainSlidersDatas, setMainSlidersDatas] = useState([]);
    const [desertSliderDatas, setDesertSliderDatas] = useState([]);
    const [favoriteItemsDatas, setFavoriteItemsDatas] = useState([]);
    const [mostlyStoryCakeStoreVideoData, setMostlyStoryCakeStoreVideoData] = useState();
    const [mostlyStoryCakeStoreData, setMostlyStoryCakeStoreData] = useState({});
    const [loading, setLoading] = useState(true);



      const loadImages = async (mainSlidersDatas ,favoriteItemsDatas) => {
       const data = [...mainSlidersDatas,...favoriteItemsDatas,]
		const imagePromises = [];
        data.forEach(key => {
            let imageSrc = key.image;
            let imageUrl = (`${sirrSite.baseUrlImage}${imageSrc}`)  
			const image = new Image();
			const promise = new Promise((resolve, reject) => {
				image.onload = () => resolve(imageUrl);
				image.onerror = () => reject(imageUrl);
			});
			image.src = imageUrl;
			imagePromises.push(promise);
		});
	
		await Promise.all(imagePromises)
			.then(() => {
				console.log('loaded');
			})
			.catch((err) => {
				console.log('Error -- ', err);
			});
    }

    useEffect(() => {
        const getHomePageDatas = async () => {
            try {
                const [mainSlidersDatas, desertSliderDatas, favoriteItemsDatas,
                    mostlyStoryCakeStoreVideoData, mostlyStoryCakeStoreData] =
                    await Promise.all([sirrSite.api().get(urls.mainSlider),
                    sirrSite.api().get(urls.desertSlider), sirrSite.api().get(urls.favoriteItems),
                    sirrSite.api().get(urls.homeVideoData), sirrSite.api().get(urls.mostlyStoryCakeStore)]);
                setMainSlidersDatas(mainSlidersDatas.data.data);
                setDesertSliderDatas(desertSliderDatas.data.data);
                setFavoriteItemsDatas(favoriteItemsDatas.data.data.data);
                setMostlyStoryCakeStoreVideoData(mostlyStoryCakeStoreVideoData.data.data);
                setMostlyStoryCakeStoreData(mostlyStoryCakeStoreData.data.data);
                // await new Promise((resolve) => setTimeout(resolve, 1830));
                   await loadImages(
                    mainSlidersDatas.data.data,
                    favoriteItemsDatas.data.data.data,
                );
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getHomePageDatas();
    }, []);

    //   console.log("main", mainSlidersDatas);
    //   console.log("dese", desertSliderDatas);
    //   console.log("fava", favoriteItemsDatas);
    //   console.log("movi", mostlyStoryCakeStoreVideoData);
    //   console.log("moca", mostlyStoryCakeStoreData);
    
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <SocialList />
                    <MainSlider mainSlidersDatas={mainSlidersDatas} />
                    <DesertsSlider desertSliderDatas={desertSliderDatas} />
                    <FavoriteItems favoriteItemsDatas={favoriteItemsDatas} setFavoriteItemsDatas={setFavoriteItemsDatas} />
                    <MostlyStoryCakeStore mostlyStoryCakeStoreVideoData={mostlyStoryCakeStoreVideoData} mostlyStoryCakeStoreData={mostlyStoryCakeStoreData} />
                    <SocialMedia />
                    <HomeContact />
                </>
            )}
        </>
    );
}
  