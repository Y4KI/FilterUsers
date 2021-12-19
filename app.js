let users = [];
let newUsers = [];
let url = "https://jsonplaceholder.typicode.com/users";

const ShowResult = (users) => {
  users.length
    ? (document.querySelector(".table-content").innerHTML = users
        .map(
          (e) =>
            `<tr>
              <th scope="row">${e.id}</th>
              <td onclick="details(${e.id})">${e.name}</td>
              <td>${e.username}</td>
            </tr>`
        )
        .join(" "))
    : (document.querySelector(".table-content").innerHTML =
        "<tr><td>No such user</td></tr>");
};

const getUsers = async (url) => {
  try {
    const response = await fetch(url);
    users = await response.json();
    ShowResult(users);
  } catch (error) {
    console.log(error);
  }
};

getUsers(url);

document.querySelector(".inp").addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  newUsers = users.filter((user) => user.name.toLowerCase().includes(value));
  ShowResult(newUsers);
});
