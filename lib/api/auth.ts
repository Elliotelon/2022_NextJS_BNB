import axios from "axios";

//* 회원가입 body
interface SingUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

//* 회원 가입 api
export const signupAPI = (body: SingUpAPIBody) =>
  axios.post("/api/auth/signup", body);
