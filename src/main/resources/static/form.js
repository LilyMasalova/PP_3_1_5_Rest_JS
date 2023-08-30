
function showAllUser() {
    fetch('/api/users')
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            const tbodyAllUsers = document.getElementById('tbodyAllUsers');
            tbodyAllUsers.innerHTML = ''
            jsonData.forEach((obj, idx) => {

                tbodyAllUsers.innerHTML += `<tr><td>${obj.id}</td><td>${obj.firstName}</td><td>${obj.lastName}</td><td>${obj.age}</td>
                                            <td>${obj.email}</td><td>${obj.roles.map(role => role.name.replace("ROLE_", "")).join(" ")}</td>
<!--                                            Edit modal content-->
                                            <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#updateModal${idx}" >Edit</button>
                                                <div class="modal fade" aria-labelledby="modalLabelUpdate${idx}" id="updateModal${idx}" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5" id="modalLabelUpdate${idx}"> Edit user</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <table class="table table-striped table-hover">
                                                                        <form>
                                                                                <div class="mb-3">
                                                                                    <label for="idUpdate${idx}"><b>ID</b></label>
                                                                                    <input name="id" type="text" class="form-control" id="idUpdate${idx}" value="${obj.id}" readonly/>
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="firstnameUpdate${idx}" class="form-label">Firstname</label>
                                                                                    <input name="firstname" type="text" value="${obj.firstName}" class="form-control" id="firstnameUpdate${idx}">
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="lastnameUpdate${idx}" class="form-label">Lastname</label>
                                                                                    <input name="lastname" value="${obj.lastName}" type="text" class="form-control" id="lastnameUpdate${idx}">
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="ageUpdate${idx}" class="form-label">Age</label>
                                                                                    <input name="age" value="${obj.age}" type="number" class="form-control" id="ageUpdate${idx}">
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="emailUpdate${idx}" class="form-label">Email</label>
                                                                                    <input name="email" value="${obj.email}" type="email" class="form-control" id="emailUpdate${idx}">
                                                                                </div>

                                                                                    <label for="passwordUpdate${idx}" class="form-label">Password</label>
                                                                                    <input name="password" type="password" class="form-control" id="passwordUpdate${idx}">
                                                                                </div>
                                                                                <select class="form-select" multiple name="roles" aria-label="Select role" id="roleUpdate${idx}">
                                                                                    <option type="checkbox" name="roles" ${(obj.roles.some(role => role.name.includes('ROLE_ADMIN')) ? 'selected ' : '')} >ROLE_ADMIN</option>
                                                                                    <option type="checkbox" name="roles" ${(obj.roles.some(role => role.name.includes('ROLE_USER')) ? 'selected ' : '')} >ROLE_USER</option>
                                                                                </select>
                                                                                <div class="modal-footer">
                                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                                                                                    <button type="submit" class="btn btn-primary" id="button${idx}" onclick="createForm(${idx}, 'Update')">Update</button>
                                                                                </div>
                                                                        </form>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </td>
<!--                                            Delete modal content-->
                                            <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${idx}">Delete</button>
                                               <div class="modal fade" aria-labelledby="exampleModalLabel${idx}" id="deleteModal${idx}" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5" id="exampleModalLabel${idx}">
                                                                        Delete
                                                                        user</h1>
                                                                    <button type="button" class="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Закрыть"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <table class="table table-striped table-hover">
                                                                        <form id="formDeleteUser${idx}">
                                                                                <div class="mb-3">
                                                                                    <label for="idDelete${idx}"><b>ID</b></label>
                                                                                    <input name="id" type="text" class="form-control" id="idDelete${idx}" value="${obj.id}" disabled/>
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="firstnameDelete${idx}" class="form-label">Firstname</label>
                                                                                    <input name="name" type="text" value="${obj.firstName}" class="form-control" id="firstnameDelete${idx}" disabled>

                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="lastnameDelete${idx}" class="form-label">Lastname</label>
                                                                                    <input name="lastname" value="${obj.lastName}" type="text" class="form-control" id="lastnameDelete${idx}" disabled>
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="ageDelete${idx}" class="form-label">Age</label>
                                                                                    <input name="age" value="${obj.age}" type="number" class="form-control" id="ageDelete${idx}" disabled>
                                                                                </div>
                                                                                <div class="mb-3">
                                                                                    <label for="emailDelete${idx}" class="form-label">Email</label>
                                                                                    <input name="email" value="${obj.email}" type="email" class="form-control" id="emailDelete${idx}" disabled>
                                                                                </div>
                                                                                <select class="form-select" multiple name="roles" aria-label="Select role" disabled>


                                                                                    <option type="checkbox" name="roles">ROLE_USER</option>
                                                                                    <option type="checkbox" name="roles">ROLE_ADMIN</option>
                                                                                </select>
                                                                                <div class="modal-footer">
                                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                                                                                    <button  type="submit" value="Delete" class="btn btn-danger" onclick="createForm(${idx}, 'Delete')"> Delete </button>
                                                                                </div>
                                                                        </form>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </td>
                                            </tr>`
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function showCurUser() {
    fetch('/api/users')
        .then(response => response.json())
        .then(jsonData => {
            const tbodyCurUser = document.getElementById('tbodyCurUser');
            tbodyCurUser.innerHTML = ''
            jsonData.forEach(obj => {
                if(obj.id == curUserId) {
                    tbodyCurUser.innerHTML += `<tr><td>${obj.id}</td><td>${obj.firstName}</td><td>${obj.lastName}</td><td>${obj.age}</td>
                                            <td>${obj.email}</td><td>${obj.roles.map(role => role.name.replace("ROLE_", "")).join(" ")}</td>`
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}