let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let link = await getImg();
  console.log(link);

  let img = document.querySelector("#output");
  img.setAttribute("src", link);
});

async function getImg() {
  try {
    let res = await axios(url2);
    console.log(res.data.message);
  } catch (e) {
    console.log("error - ", e);
    return "No image Found";
  }
}

// btn.addEventListener("click", async () => {
//   let res = await getFact();
//   // console.log(res);

//   let p = document.querySelector("#output");
//   p.innerText = res;
// });

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   try {
//     let res = await axios(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No Fact Found";
//   }
// }
