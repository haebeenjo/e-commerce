function is_checked() {
  const checkbox_office = document.getElementById('office');
  const checkbox_design = document.getElementById('design');
  const checkbox_developer = document.getElementById('developer');
  const checkbox_music = document.getElementById('music');
  const checkbox_sports = document.getElementById('sports');

  const is_checked_office = checkbox_office.checked;
  const is_checked_design = checkbox_design.checked;
  const is_checked_developer = checkbox_developer.checked;
  const is_checked_music = checkbox_music.checked;
  const is_checked_sports = checkbox_sports.checked;

  return [
    is_checked_office,
    is_checked_design,
    is_checked_developer,
    is_checked_music,
    is_checked_sports,
  ];
}

function itemRequest() {
  let item_name = $('#item_name').val();
  let img = document.getElementById('img').files[0];
  let price = $('#price').val();
  let detail = $('#detail').val();
  let office = is_checked()[0];
  let design = is_checked()[1];
  let developer = is_checked()[2];
  let music = is_checked()[3];
  let sports = is_checked()[4];

  const formData = new FormData();
  formData.append('item_name', item_name);
  formData.append('img', img);
  formData.append('price', price);
  formData.append('detail', detail);
  formData.append('office', office);
  formData.append('design', design);
  formData.append('developer', developer);
  formData.append('music', music);
  formData.append('sports', sports);

  axios
    .post('api/item/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((data) => {
      console.log(data);

      window.location.replace(`/adminItem`);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}
