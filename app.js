let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let con = document.querySelector("input").value;
  console.log(con);

  let ans = await getCollege(con);
  console.log(ans);
});

async function getCollege(con) {
  try {
    let res = await axios.get(url + con);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
