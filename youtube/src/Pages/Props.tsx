import { Route, Router, RouterOnChangeArgs } from 'preact-router';
import Watch from './Watch';

const Props = () => {
    const handleRouteChange = (e: RouterOnChangeArgs) => {
        const id = e.current.attributes.path.split('/').pop(); 
        e.current.props.id = id;
      };

  return (
    <Router onChange={handleRouteChange}>
        <Route path="/watch/:id" component={Watch}/>
    </Router>
  );
};

export default Props;
