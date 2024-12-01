const API_HOST = process.env.REACT_APP_API_BASE_URL;

const SIGNUP_URL = "/auth/register";
const LOGIN_URL = "/auth/login";
const AUTH_USER_URL = "/auth/user";
const LOGOUT_URL = "/auth/logout";

const request = async (url, options = {}) => {
  const response = await fetch(`${API_HOST}${url}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Assuming the response is in JSON format
  return response.json();
};

export const get = async (url) => {
  try {
    return await request(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
  } catch (error) {
    console.error('GET request error:', error);
    throw error; // Re-throw to handle further up in the component
  }
};

export const post = async (url, data) => {
  try {
    return await request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('POST request error:', error);
    throw error; // Re-throw to handle further up in the component
  }
};

export const signup_api = (data) => post(SIGNUP_URL, data);
export const login_api = async (data) => {
  try{
    let resp = await post(LOGIN_URL, data);
    return {"status": true, "msg": "Login successfull.", "data": resp};
  }
  catch(error){
    return {"status": false, "msg": error};
  }
}

export const auth_user_api = async (data) => {
  try{
    let resp = await get(AUTH_USER_URL);
    return {"status": true, "msg": "User authenticated.", "data": resp};
  }catch(error){
    return {"status": false, "msg": error};
  }
}

export const logout_api = () => get(LOGOUT_URL);


