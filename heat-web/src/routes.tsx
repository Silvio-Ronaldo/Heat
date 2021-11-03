import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { CreateEvent } from './pages/CreateEvent';
import { GithubLoading } from './pages/GithubLoading';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events/:id" component={Room} />
      <Route path="/admin/events/:id" component={AdminRoom} />
      <Route path="/new" component={CreateEvent} />
      <Route path="/loading" exact component={GithubLoading} />
    </Switch>
  );
}
