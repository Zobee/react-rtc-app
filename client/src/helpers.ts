const CHARS:string = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
export const generateRandomString = ():string => {
  let randomStr = "";
  while (randomStr.length < 10) {
    let randChar = CHARS[Math.floor(Math.random() * CHARS.length)];
    randomStr += randChar;
  }
  return randomStr;
};