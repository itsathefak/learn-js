let url2 = "https://dog.ceo/api/breeds/image/random";

async function getNum() {
  try {
    const config = { Headers: { accept: application / json } };
    let res = await axios(url2);
    console.log(res, config);
  } catch (err) {
    console.log(err);
  }
}
