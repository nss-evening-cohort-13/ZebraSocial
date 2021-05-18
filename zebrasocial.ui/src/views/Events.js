import React, { Component } from 'react';
import { getAllEvents } from '../helpers/data/eventData';
import EventsCard from '../components/Cards/EventsCard';

export default class Events extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    getAllEvents().then((response) => {
      this.setState({
        events: response
      });
    });
  }

  render() {
    const { events } = this.state;
    const sorted = events.sort((a, b) => new Date(a.date) - new Date(b.date));
    const showEvents = () => (
      sorted.map((eve) => <EventsCard key={eve.id} eve={eve} />)
    );
    return (
      <div className="adminEvents">
      <div className="container mt-2 mb-2">
    <div className="">
        <div className="col-md-10">
          {/* first card */}
            {showEvents()}
            {/* end first card */}
        </div>
    </div>
</div>
</div>
    );
  }
}
