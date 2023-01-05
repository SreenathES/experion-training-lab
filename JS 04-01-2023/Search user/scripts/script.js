const tbody = document.querySelector('#users');
let users = "";

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(result => {
        users = result.data;
    })

function searchUser(e) {
    let searchKey = e.target.value;
    searchKey = searchKey.toLowerCase();
    if (searchKey) {
        let row = ``;
        tbody.innerHTML = row;
        users.forEach(user => {
            if (user.email.startsWith(searchKey)) {
                row = `
                        <tr>
                            <td>${user.id}</td>
                            <td>
                                <img src="${user.avatar}" height="50">
                            </td>
                            <td>${user.first_name} ${user.last_name}</td>
                            <td>${user.email}</td>
                        </tr>
                        `;
                tbody.innerHTML += row;
            }
        })
    } else {
        const row = ``;
        tbody.innerHTML = row;
    }
}