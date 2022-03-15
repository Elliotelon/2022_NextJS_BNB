import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //* 로그아웃 하기
    if (req.method === "DELETE") {
      res.setHeader(
        "Set-Cookie",
        "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httyonly"
      );
      res.statusCode = 204;
      return res.end();
    }
  } catch (e: any) {
    console.log(e);
    return res.send(e.message);
  }
  res.statusCode = 405;

  return res.end();
};
