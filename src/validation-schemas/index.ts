import * as yup from 'yup';

export const formWelcomeSchema = yup.object({
  name: yup.string().required('Поле не должно быть пустым').min(2, 'Поле должно иметь два или более символов'),
  phone: yup.string().required('Поле не должно быть пустым').length(17, 'Введите 10 цифр без 7-ки'),
  email: yup.string().email('E-mail должен быть вида: example@mail.com').required('Поле не должно быть пустым'),
  selectCity: yup.string().required('Вы должны выбрать город'),
  linkToProfile: yup.string().min(3, 'Поле должно иметь два или более символов'),
})