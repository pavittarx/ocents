import {client} from "@/gql/urql";

const eventQuery = `
    query ($id: Int!){
        event(id: $id) {
            id
            title
            content
        }
    }
`;

const eventsQuery = `
    query {
        events {
            id
            title
            content
        }
    }
`;

export const getEvent = async (id) => {
    const {
      data: { event },
    } = await client.query(eventQuery, { id }).toPromise()
    console.log(event);
    console.log("getEventByID works");
    return event
}

export const getEvents = async () => {
    const {
      data: { events },
    } = await client.query(eventsQuery).toPromise()
    return events.map((event) => ({
      ...event,
      id: event.id,

    }))
  }