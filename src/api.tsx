export const fetchData = async (q: string) => {
  try {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=" + q
    );
    const data = await response.json();
    const reducedData: any[] = [];
    data.items.forEach((repo: any) => {
      reducedData.push({ id: repo.id, name: repo.name, description: repo.description });
    });
    return reducedData;
  } catch (e) {
    console.log(e);
  }
};

export const fetchTweets = async (q: string) => {
  try {
    const param: string = encodeURIComponent(q);
    const response = await fetch("/api/tweets?q=" + param);
    const data = await response.json();
    const reducedTweets: any[] = [];
    data.items.forEach((tweet: any) => {
      reducedTweets.push({ id: tweet.id, text: tweet.text });
    });
    return reducedTweets;
  } catch (e) {
    console.log(e);
  }
};
