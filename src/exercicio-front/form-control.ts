

const SHOW_ERROR_MESSAGE = 'show_error_message';

const form = document.querySelector('.form') as HTMLElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLElement;
const password = document.querySelector('.password') as HTMLElement;
const password2 = document.querySelector('.password2') as HTMLElement;


form.addEventListener("submit",(event: Event)=>{
    event.preventDefault();
    console.log("Enviando");
    hideErrorMessages(this);
})

function hideErrorMessages(form: HTMLFormElement):void {}

function showErrorMessage(input: HTMLInputElement, msg: string): void
{
  const formFields = input.parentElement  as HTMLDivElement;

  const errorMessage = formFields.querySelector(".error-message") as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);

}

showErrorMessage(username, 'MENSAGEM');
console.log("testee");
