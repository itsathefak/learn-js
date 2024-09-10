let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let con = document.querySelector("input").value;
  console.log(con);

  let ans = await getCollege(con);
  show(ans);
});

function show(ans) {
  let list = document.querySelector("#list");
  list = "";
  for (a of ans) {
    console.log(a.name);
  }
  let li = document.createElement("li");
  li.innerText = a.name;
  list.appendChild(li);
}

async function getCollege(con) {
  try {
    let res = await axios.get(url + con);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
