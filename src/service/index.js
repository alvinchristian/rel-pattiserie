import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				id
				icon {
					url
				}
				name
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.categories;
};

export const getCakesByCategory = async (curCategory) => {
	const query = gql`
		query GetCakesByCategory($curCategory: String!) {
			cakes(where: { category: { name: $curCategory } }, orderBy: name_ASC, first: 20) {
				id
				name
				photo {
					url
				}
				price
			}
		}
	`;

	const result = await request(graphqlAPI, query, { curCategory });

	return result.cakes;
};
