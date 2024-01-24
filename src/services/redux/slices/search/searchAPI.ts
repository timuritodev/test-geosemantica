const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (url: string, method: string) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
};

export const fetchSearch = (text: string): Promise<Response> => {
  return fetchData(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=2856b3c4c0964cb5b0f4bba275fe0eef`,
    "GET"
  ).then((res) => checkRes(res));
};