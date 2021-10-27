import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { EventMessages } from './pages/EventMessages';
import { CreateEvent } from './pages/CreateEvent';
import { GithubLoading } from './pages/GithubLoading';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/events/:id" component={EventMessages} />
      <Route path="/new" component={CreateEvent} />
      <Route path="/loading" exact component={GithubLoading} />
    </Switch>
  );
}
