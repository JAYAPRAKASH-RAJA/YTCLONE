import { Router, Route } from "preact-router";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Search from "./Pages/Search";
import Callback from "./Pages/Callback";
import VideoList from "./Pages/Videolist";
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
        <Route path="/uploadvideo" component={VideoList} />
        <Route path="/oauth2callback" component={Callback} />
        <Route path="/shorts" component={ShortsList} videos={videos} />
        <Route path="/trending" component={  TrendingVideos }  />
        <Route path="/news" component={NewsList }  />
        <Route path="/music" component={MusicSection}  />
        <Route path="/sports" component={ SportsSection }  />
        <Route path="/game" component={ GameSection }  />
        <Route path="/course" component={ CourseSection }  />
        <Route path="/settings" component={ Settings }  />

        {/* {user && ( */}
        <Route path="/like" component={LikedVideos}  />
        <Route path="/watch" component={WatchedVideos}  />
        <Route path="/subscription" component={SubscriptionSection}  />
      {/* )} */}

      </Router>
      
        
       
      
    </div>
  );
};
