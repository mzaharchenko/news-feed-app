const url = "https://newsapi.org/v2/top-headlines?sortBy=publishedAt&apiKey=1a4534389df845ac91d27977721ac06c&country=ru&pageSize=10&page=";

export async function getNews(page, pageSize) {
	page = page || 1;
	pageSize = pageSize || 10;
	let cururl = url + page;
	let result = await fetch(cururl).then(response => response.json());
	return result.articles;
}