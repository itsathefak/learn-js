let url = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("error - ", e);
  }
  console.log("bye");
}
