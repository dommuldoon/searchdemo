export const fetchData = async (q: string) => {
  try {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=" + q
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchTweets = async (q: string) => {
  try {
    const param = encodeURIComponent(q);
    const response = await fetch("/api/tweets?q=" + param);
    const data = await response.json();
    return data.items;
  } catch (e) {
    console.log(e);
  }
};
