// export const qrcodeInspect = () => {
const withDrawSection = document.querySelector("section#withdraw");

if (withDrawSection !== null) {
  let str = location.search;

  if (str !== "") {
    str = str.substr(1);
    str = str.split("=");

    const withDrawAddressInput = document.querySelector("#trans_you_address");

    withDrawAddressInput.value = str[1];
  }
}
// };

// qrcodeInspect();
