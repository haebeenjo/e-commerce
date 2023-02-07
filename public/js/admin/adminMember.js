$(document).ready(function () {
  getAdminMembers();
});

function getAdminMembers() {
  axios({
    method: 'get',
    url: 'api/member',
  })
    .then((response) => {
      const { data } = response.data;
      let count = 0;

      for (let i in data) {
        count++;
        let email = data[i].email;
        let name = data[i].name;
        let phone_number = data[i].phone_number;
        let address = data[i].address;
        let blacklist = data[i].blacklist;
        let checked = `<input type="checkbox" class="sc-gJwTLC ikxBAC" id="blacklist"  />`;
        if (blacklist === true) {
          checked = `<input type="checkbox" class="sc-gJwTLC ikxBAC" id="blacklist"  checked />`;
        }

        let temp = `
        <tr>
          <td class="table_count">${count}</td>
          <td>${email}</td>
          <td>${name}</td>
          <td>${phone_number}</td>
          <td>${address}</td>
          <td>
            <div class="checkbox-wrapper-2">
              ${checked}
              <label for="blacklist"></label>
            </div>
          </td>
        </tr>`;

        $('#memberList').append(temp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const body = document.querySelector('body');
body.addEventListener('click', function (e) {
  if (e.target.id !== 'blacklist') return;
  const blacklist_email =
    e.target.parentElement.parentElement.parentElement.children[1].textContent;
  const blacklist_checked = e.target.checked;
  blacklistAdd(blacklist_email, blacklist_checked);
});
function blacklistAdd(blacklist_email, blacklist_checked) {
  axios
    .put('api/blackList', {
      email: blacklist_email,
      blacklist: blacklist_checked,
    })
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
}
