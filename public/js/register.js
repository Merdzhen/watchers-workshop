const registerForm = document.querySelector('.js-register');
const regErr = document.querySelector('.js-reg-err');
const regAnswer = document.querySelector('.js-reg-answer');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log('editor!!', form);
  // console.log(e.target);
  const inputName = e.target.inputName.value;
  const inputMail = e.target.inputMail.value;
  const inputPass = e.target.inputPass.value;

  const bodyObj = {
    inputName, inputMail, inputPass,
  };

  if (inputName && inputMail && inputPass) {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    });
    // console.log('response!!', response);
    regErr.style.display = 'none';
    regAnswer.style.display = 'initial';
    await registerForm.reset();
    // window.location.assign('/login');
  } else {
    regErr.style.display = 'initial';
  }
});
