export function getCookie() {
  let ck = document.cookie.split("; ");
  const cObj = {};

  for (let i = 0; i < ck.length; i++) {
    let cookie = ck[i].split("=");
    cObj[cookie[0]] = cookie[1].slice(1, cookie[1].length - 1);
  }
  return cObj;
}
