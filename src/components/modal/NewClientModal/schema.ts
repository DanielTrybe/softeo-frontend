import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Digite um nome."),
  age: yup
    .number()
    .typeError("Somente números")
    .test("Idade", "Idade inválida", (val) => {
      if (!val || val <= 0 || val >= 130) {
        return false;
      } else {
        return true;
      }
    })
    .required("Digite a idade."),
  email: yup.string().email("E-mail inválido").required("Digite um e-mail."),
  tel: yup
    .string()
    .test("tel", "Telefone inválido", (tel) => {
      if (tel?.length !== 11 || tel[0] !== "1" || tel[1] !== "1") {
        return false;
      } else {
        return true;
      }
    })
    .required("Digite um telefone."),
  treatment: yup
    .string()
    .test("Tratamento", "Selecione um tratamento", (val) => {
      if (!val) {
        return false;
      } else {
        return true;
      }
    })
    .required("Selecione o tratamento."),
  monthsToPay: yup
    .string()
    .typeError("Selecione um parcelamento")
    .test("Parcelamento", "Selecione um parcelamento", (val) => {
      if (!val) {
        return false;
      } else {
        return true;
      }
    })
    .required("Selecione o número de parcelas."),
});
