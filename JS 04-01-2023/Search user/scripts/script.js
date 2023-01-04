const tbody = document.querySelector('#users');

function searchUser(e) {
    const searchKey = e.target.value;
    console.log(searchKey);
    if (searchKey) {
        let row = ``;
        tbody.innerHTML = row;
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(result => {
                const users = result.data;
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
            })
    } else {
        const row = ``;
        tbody.innerHTML = row;
    }
}