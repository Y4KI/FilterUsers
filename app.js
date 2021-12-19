let users = [];
let url = "https://jsonplaceholder.typicode.com/users";

const ShowResult = (users) => {
  document.querySelector(".table-content").innerHTML = users
    .map(
      (e) =>
        `<tr>
        <th scope="row">${e.id}</th>
        <td>${e.name}</td>
        <td>${e.username}</td>
      </tr>`
    )
    .join(" ");
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
  let newUsers = users.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  ShowResult(newUsers);
});
