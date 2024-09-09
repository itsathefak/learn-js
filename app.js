let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let res = await getFact();
  // console.log(res);

  let p = document.querySelector("#output");
  p.innerText = res;
});

let url = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let res = await axios(url);
    return res.data.fact;
  } catch (e) {
    console.log("error - ", e);
    return "No Fact Found";
  }
}

// async function getFact() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("error - ", e);
//   }
//   console.log("bye");
// }
