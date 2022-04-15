const handleOrderForm = async (event) => {
  event.preventDefault();

  if (document.querySelector('.alert-successfully')) {
    document.querySelector('.alert-successfully').remove();
  }
  if (document.querySelector('.alert-failure')) {
    document.querySelector('.alert-failure').remove();
  }

  // document.querySelector('.alert-successfully').remove();
  // document.querySelector('.alert-failure').remove();

  const name = document.getElementById('name-on-order-form').value;
  const email = document.getElementById('email-on-order-form').value;
  const phone = document.getElementById('phone-on-order-form').value;
  const img = document.getElementById('file-upload');
  const message = document.getElementById('message-on-order-form').value;

  const formdata = new FormData();

  formdata.append('name', name);
  formdata.append('email', email);
  formdata.append('phone', phone);
  formdata.append('message', message);
  // formdata.append('img', img.files[0], img.files[0].name);

  for (let i = 0; i < img.files.length; i += 1) {
    formdata.append('img', img.files[i], img.files[i].name);
  }

  // console.log('formdata', formdata);

  const response = await fetch('/', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'form/multipart',
    // },
    body: formdata,
    // JSON.stringify({
    //   name,
    //   email,
    //   phone,
    //   img,
    //   message,
    // }),
  });

  const messageStatus = document.createElement('p');
  const messageContainer = document.querySelector('.success-or-failure');
  // console.log('messageStatus', messageStatus);
  // console.log('messageContainer', messageContainer);

  const result = await response.json();

  if (result.success) {
    console.log('Сообщение было отправлено');
    messageStatus.className = 'alert-successfully';
    messageStatus.innerText = 'Ваше сообщение успешно отправлено';
    console.log('messageStatus успешно', messageStatus);
    messageContainer.append(messageStatus);
  } else {
    messageStatus.className = 'alert-failure';
    messageStatus.innerText = 'Произошла ошибка при отправке сообщения, попробуйте еще раз';
    console.log('messageStatus провал', messageStatus);
    messageContainer.append(messageStatus);
  }
};

document.getElementById('btn-order-form')?.addEventListener('click', handleOrderForm);
