function getPrivateStrapiURL(path = '') {
	return `${process.env.NEXT_PRIVATE_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
	const requestUrl = getPrivateStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();
	return data;
}
