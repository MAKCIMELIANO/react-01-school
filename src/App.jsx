import { EventBoard } from './components/EventBoard/EventBoard';
import { PageTitle } from './components/PageTitle/PageTitle';
import upcomingEvents from './upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
