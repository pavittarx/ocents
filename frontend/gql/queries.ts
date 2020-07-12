import gql from 'graphql-tag';

export const ALL_EVENTS = gql`
    query getEvent {
        getEvent {
            title
            content
        }
    }
`;

