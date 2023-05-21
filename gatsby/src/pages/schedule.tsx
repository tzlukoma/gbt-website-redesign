import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Fuse from 'fuse.js';
import { Event } from '../interfaces/Event';
import EventCard from '../components/EventCard';

function SchedulePage({ data }) {
  const [query, updateQuery] = useState('');

  const scheduledEvents: Event[] = data.allSanityEvent.edges;
  scheduledEvents.sort(function (a: any, b: any) {
    const firstItem: any = new Date(a.node.date);
    const secondItem: any = new Date(b.node.date);
    return firstItem - secondItem;
  });

  const fuse = new Fuse(scheduledEvents, {
    keys: [
      'node.title',
      'node.tag.name',
      'node.synopsis.text',
      // 'node.publishPlatform.name'
    ],
  });

  const results = fuse.search(query);
  const eventResults = query
    ? results.map((event) => event.item)
    : scheduledEvents;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <div className="p-8 md:px-8 lg:px-20">
      <h1 className="text-4xl text-center">Where's George?</h1>
      <h2 className="text-2xl text-center">
        Search for an Event by Name or Topic
      </h2>
      <div className="p-3 w-full md:w-1/2 m-auto">
        <div className="bg-white flex items-center shadow-md">
          <input
            value={query}
            onChange={onSearch}
            className="rounded-l-full w-full py-4 px-6 text-2xl text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />
          <div className="p-4">
            <button className="bg-primary-500 text-white rounded-full p-2 hover:bg-primary-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-center">All Upcoming Events</h2>
      {eventResults.length < 1 ? (
        <div className="text-lg text-center">No events scheduled</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {eventResults.map((event) => {
            return <EventCard key={event?.node?.id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SchedulePage;

export const query = graphql`
  query SchedulePageQuery {
    allSanityEvent(filter: { status: { eq: "scheduled" } }) {
      edges {
        node {
          id
          title
          date
          status
          registerUrl
          publishPlatform {
            name
            platformUrl
            platformImage {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
          synopsis {
            children {
              text
            }
          }

          tag {
            ... on SanityTopic {
              id
              name
            }
            ... on SanityFramework {
              id
              name
            }
          }
        }
      }
    }
  }
`;
