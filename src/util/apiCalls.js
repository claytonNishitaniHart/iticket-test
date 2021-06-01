const CallApi = async (endpoint) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return { failure: true };
  }
};

export default CallApi;