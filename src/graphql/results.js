import gql from 'graphql-tag'

export const JACKPOT_QUERY = gql`
    query draws($type: String!) {
        draw(type: $type, limit: 10) {
            draws {
                date
                additionalNumbers
                gameAmount
                jackpot
                numbers
            }
        }
    }
`;