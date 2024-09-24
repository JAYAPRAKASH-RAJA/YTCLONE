import { Router, Route } from "preact-router";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Search from "./Pages/Search";
import Callback from "./Pages/Callback";
// import VideoList from "./Pages/Videolist";
import "./app.css";
import { useFetchShorts } from './Pages/useFetchSorts';
import ShortsList from './Components/ShortsList';
import TrendingVideos from "./Components/TrendindVideos";
import NewsList from "./Components/NewsList";
import MusicSection from "./Components/MusicSection";
import SportsSection from "./Components/SportsSection";
import GameSection from "./Components/GameSection";
import CourseSection from "./Components/CourseSection";
import LikedVideos from "./Components/LikedVideos";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "preact/hooks";
import { RootState } from "./Store/Index";
import WatchedVideos from "./Components/WatchedVideos";
import SubscriptionSection from "./Components/SubscriptionsSection";
import Settings from "./Components/Settings";
import ProVersion from "./Components/ProVersion";
import ReportHistory from "./Components/ReportHistory";
import UserAccount from "./Pages/UserAccount";
import ProVersion1 from "./Components/ProVersion1";
import DebitCardPage from "./Components/DebitCardPage";
import QRPage from "./Components/QRPage";
import Content from './Studio/Content'
import Navbar2 from "./Studio/Navbar2";
import FeedbackForm from "./Pages/FeedbackForm";
import WatchHistory from "./Components/WatchHistory";
import WatchLater from "./Components/WatchLater";
// import FeedbackForm from "./Pages/FeedbackForm";


export const App: React.FC = () => {
  const { videos } = useFetchShorts();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchLikedVideos());
    }
  }, [user]);
  

  return (
    <div id="app">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/watch/:id" component={Watch} />
        <Route path="/oauth2callback" component={Callback} />
        <Route path="/shorts" component={ShortsList} videos={videos} />
        <Route path="/trending" component={  TrendingVideos }  />
        <Route path="/news" component={NewsList }  />
        <Route path="/music" component={MusicSection}  />
        <Route path="/sports" component={ SportsSection }  />
        <Route path="/game" component={ GameSection }  />
        <Route path="/course" component={ CourseSection }  />
        <Route path="/settings" component={ Settings }  />
        <Route path="/proversion" component={ ProVersion }  />
        <Route path="/proversionbuy" component={ ProVersion1 }  />
        <Route path="/debitcarddetails" component={ DebitCardPage }  />
        <Route path="/qrpage" component={ QRPage }  />
        <Route path="/reporthistory" component={ ReportHistory }  />
        <Route path="/users" component={ UserAccount }  />
        <Route path="/like" component={LikedVideos}  />
        {/* <Route path="/watch" component={WatchedVideos}  /> */}
        <Route path="/watch" component={WatchHistory}  />
        <Route path="/watchlater" component={WatchLater}  />
        <Route path="/subscription" component={SubscriptionSection}  />
        <Route path="/studio" component={Navbar2} />
        <Route path="/feedback" component={FeedbackForm} />

      </Router>
      
        
       
      
    </div>
  );
};
