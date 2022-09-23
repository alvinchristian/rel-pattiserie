import { request, gql } from "graphql-request";

const graphqlAPI = "https://api-ap-northeast-1.hygraph.com/v2/cl8dqpa6620fy01up522l91rv/master";

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
		query GetCakesByCategory {
			cakes(where: { category: { name: "Bread" } }) {
				id
				name
				photo {
					url
				}
				price
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.cakes;
};
