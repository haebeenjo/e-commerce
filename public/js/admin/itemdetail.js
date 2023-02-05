/* 
const item_name = document.getElementById('item_name').value;
const price = document.getElementById('price').value;
const img = document.getElementById('img').value;
const category = document.getElementById('category').value;
const detail = document.getElementById('detail').value; 
*/

function is_checked() {

  // 1. checkbox element를 찾습니다.
  const checkbox_office = document.getElementById('office');
  const checkbox_design = document.getElementById('design');
  const checkbox_developer = document.getElementById('developer');
  const checkbox_music = document.getElementById('music');
  const checkbox_sports = document.getElementById('sports');


  // 2. checked 속성을 체크합니다.
  const is_checked_office = checkbox_office.checked;
  const is_checked_design = checkbox_design.checked;
  const is_checked_developer = checkbox_developer.checked;
  const is_checked_music = checkbox_music.checked;
  const is_checked_sports = checkbox_sports.checked;

  // 3. 결과를 출력합니다.
  return [is_checked_office, is_checked_design, is_checked_developer, is_checked_music, is_checked_sports];

}

// function  is_checked_radio() {

// }

// axios put
function putItem() {
  let query = window.location.search;
  let param = new URLSearchParams(query);
  let itemId = param.get('itemId');

  let item_name = $('#item_name').val();
  let img = document.getElementById('img').files[0];
  let price = $('#price').val();
  let detail = $('#detail').val();
  let office = is_checked()[0];
  let design = is_checked()[1];
  let developer = is_checked()[2];
  let music = is_checked()[3];
  let sports = is_checked()[4];
  let item_status = $('input[name=status]:checked').val();

  console.log("item_name", item_name)
  console.log("img", img)
  console.log("price", price)
  console.log("detail", detail)
  console.log("office", office)
  console.log("developer", developer)
  console.log("music", music)
  console.log("sports", sports)
  console.log("item_status", item_status)

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
  formData.append('item_status', item_status);

  axios
    .put(`/api/item/detail/${itemId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    .then((res) => {
      console.log(res);
      window.location.replace(`/adminItem`);
    })
    .catch((error) => {
      console.log('axios error: ', error);
    });
}

