// import style scss
import MainSlider from '../../Components/HomePageSections/MainSlider/MainSlider'
import DesertsSlider from '../../Components/HomePageSections/DesertsSlider/DesertsSlider'
import SocialList from '../../Components/SocialList/SocialList'
import FavoriteItems from '../../Components/HomePageSections/FavoriteItems/FavoriteItems'
import MostlyStoryCakeStore from '../../Components/HomePageSections/MostlyStoryCakeStore/MostlyStoryCakeStore'
import HomeContact from '../../Components/HomePageSections/HomeContact/HomeContact'
import SocialMedia from '../../Components/HomePageSections/SocialMedia/SocialMedia'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

export default function Home() {
  return (
	<>
	<SocialList/>
	<MainSlider/>
	<DesertsSlider/>
	<FavoriteItems/>
	<MostlyStoryCakeStore/>
	<SocialMedia/>
	{/* <HomeContact/> */}
	</>
  )
}
