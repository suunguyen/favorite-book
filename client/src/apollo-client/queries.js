import { gql } from '@apollo/client';

export const getBooks = gql`
    query getBooksQuery {
        books {
            id
            name
        }
    }
`;

export const getSingleBook = gql`
    query getSingleBookQuery($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;
