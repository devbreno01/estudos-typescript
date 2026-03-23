

const SHOW_ERROR_MESSAGE = 'show_error_message';

const form = document.querySelector('.form') as HTMLElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLElement;
const password = document.querySelector('.password') as HTMLElement;
const password2 = document.querySelector('.password2') as HTMLElement;


form.addEventListener("submit",(event: Event)=>{
    event.preventDefault();
    console.log("Enviando");
    const formElement = event.currentTarget as HTMLFormElement;
    hideErrorMessages(formElement);
    checkForEmptyFields(username,email,password,password2);
})

function checkForEmptyFields(...inputs: HTMLInputElement[]): void{
      console.log('Enrty checkForEmptyFields');

   inputs.forEach((input)=>{
      if(!input.value){
          showErrorMessage(input,'Campo não pode ficar vazio');
      }
   })
}

function hideErrorMessages(form: HTMLFormElement):void {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGE)
    .forEach((item)=> item.classList.remove(SHOW_ERROR_MESSAGE))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void
{

  const formFields = input.parentElement  as HTMLDivElement;
  console.log(formFields);
  const errorMessage = formFields.querySelector(".show-error-message") as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);

}

showErrorMessage(username, 'MENSAGEM');
console.log("testee");

