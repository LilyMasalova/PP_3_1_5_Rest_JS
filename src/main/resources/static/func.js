function createForm(idx, crudRole) {
    if (crudRole === 'Update') {
        const rolUpdate = document.getElementById('role' + crudRole + idx);

        const roles = Array.from(rolUpdate.selectedOptions)
            .map(option => {
                return {
                    id: (option.value === 'ROLE_ADMIN'? 1: 2),
                    name: option.value
                }
            });
        const user = {
            id: document.getElementById('id' + crudRole + idx).value,
            email: document.getElementById('email' + crudRole + idx).value,
            password: document.getElementById('password' + crudRole + idx).value,
            firstName: document.getElementById('firstname' + crudRole + idx).value,
            lastName: document.getElementById('lastname' + crudRole + idx).value,
            age: parseInt(document.getElementById('age' + crudRole + idx).value),
            roles: roles
        };
        console.log(JSON.stringify(user))
        fetch("/api/users", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(r => {
            if (r.ok) {
                reloadTables()
                backDrop()
                return console.log("update user")
            } else {
                // Обработка ошибки
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    }
    if (crudRole === 'Delete') {
        const delUserId = document.getElementById('id' + crudRole + idx).value
        console.log(delUserId)
        fetch("/api/users/" + delUserId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: delUserId})
        }).then(r => {
            if (r.ok) {
                reloadTables()
                backDrop()
                return console.log("delete user id:" + delUserId)
            } else {
                // Обработка ошибки
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    }
    if (crudRole === 'NewUser') {
        const rol = document.getElementById('role' + crudRole);
        const rolesNew = Array.from(rol.selectedOptions)
            .map(option => {
                return {
                    id: (option.value === 'ROLE_ADMIN'? 1: 2),
                    name: option.value
                }
            });
        const userNew = {
            email: document.getElementById('email' + crudRole).value,
            password: document.getElementById('password' + crudRole).value,
            firstName: document.getElementById('firstname' + crudRole).value,
            lastName: document.getElementById('lastname' + crudRole).value,
            age: parseInt(document.getElementById('age' + crudRole).value),
            roles: rolesNew
        };
        console.log(userNew)
        fetch("/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userNew)
        }).then(r => {
            if (r.ok) {
                reloadTables()
                document.getElementById('adminTabs').click();
                return console.log("user create")
            } else {
                // Обработка ошибки
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
    }
}


function reloadTables() {
    showAllUser()
    showCurUser()
}

function backDrop() {
    var backdrop = document.getElementsByClassName('modal-backdrop')[0];
    backdrop.parentNode.removeChild(backdrop);
}