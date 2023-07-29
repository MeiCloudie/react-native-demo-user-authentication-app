import axios from "axios";

const API_KEY = "AIzaSyAaqx_Q9ASlRC9D_EJ7ID4d8kMAkhow2do";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
