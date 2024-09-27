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
// import WatchedVideos from "./Components/WatchedVideos";
import SubscriptionSection from "./Components/SubscriptionsSection";
import Settings from "./Components/Settings";
import ProVersion from "./Components/ProVersion";
import ReportHistory from "./Components/ReportHistory";
import UserAccount from "./Pages/UserAccount";
import ProVersion1 from "./Components/ProVersion1";
import DebitCardPage from "./Components/DebitCardPage";
import QRPage from "./Components/QRPage";
// import Content from './Studio/Content'
import Navbar2 from "./Studio/Navbar2";
import FeedbackForm from "./Pages/FeedbackForm";
import WatchHistory from "./Components/WatchHistory";
import WatchLater from "./Components/WatchLater";
// import FeedbackForm from "./Pages/FeedbackForm";
import { useSidebar } from "./Components/useSidebar";

export const App: React.FC = () => {
  const { videos } = useFetchShorts();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    if (user) {
      dispatch(fetchLikedVideos());
    }
  }, [user]);
  

  return (
    <div id="app">

      <Router>
        <Route path="/" component={Home} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}   />
        <Route path="/search" component={Search} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/watch/:id" component={Watch} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/oauth2callback" component={Callback}  />
        <Route path="/shorts" component={ShortsList} videos={videos} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/trending" component={  TrendingVideos } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/news" component={NewsList } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/music" component={MusicSection} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/sports" component={ SportsSection } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/game" component={ GameSection } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/course" component={ CourseSection } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/settings" component={ Settings }  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/proversion" component={ ProVersion } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/proversionbuy" component={ ProVersion1 } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/debitcarddetails" component={ DebitCardPage } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
        <Route path="/qrpage" component={ QRPage } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/reporthistory" component={ ReportHistory } isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/users" component={ UserAccount }  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/like" component={LikedVideos}  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/watch" component={WatchHistory} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Route path="/watchlater" component={WatchLater}  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Route path="/subscription" component={SubscriptionSection} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
        <Route path="/studio" component={Navbar2} />
        <Route path="/feedback" component={FeedbackForm} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      </Router>
    </div>
  );
};
