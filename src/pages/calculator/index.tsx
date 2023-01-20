import { text } from "stream/consumers";
import { Container } from "./style";
import { AiOutlineMinus } from "react-icons/ai";
import api from "../../services/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface IFormInput {
  amount: number;
  installments: number;
  mdr: number;
  days?: number;
}

interface IData {
  "1": number;
  "15": number;
  "30": number;
  "60": number;
}

const Calculator = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [newData, setNewData] = useState<IData>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    api
      .post("/", {
        amount: Math.floor(data.amount),
        installments: Math.floor(data.installments),
        mdr: Math.floor(data.mdr),
        days: data.days ? data.days : ["1", "30", "60", "90"],
      })
      .then((res) => {
        setNewData(res.data);
      })
      .catch((err) => console.log(err));

  return (
    <Container>
      <div>
        <h3>Simule sua Antecipação</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="value">Informe o valor da venda*</label>
          <input
            type="number"
            placeholder="R$1.000,00"
            id="value"
            {...register("amount")}
          ></input>
          <label htmlFor="parcel">Em quantas parcelas*</label>
          <input
            type="number"
            placeholder="10"
            max="12"
            id="parcel"
            {...register("installments")}
          ></input>
          <span>Máximo de 12 parcelas</span>
          <label htmlFor="percentual">Informe o percentual de MDR*</label>
          <input
            type="number"
            placeholder="10"
            id="percentual"
            {...register("mdr")}
          ></input>

          <button type="submit" hidden></button>
        </form>
      </div>

      <div>
        <div>
          <h5>VOCÊ RECEBERÁ:</h5>
          <hr className="solid"></hr>
        </div>
        <ul>
          {newData ? (
            <>
              <li>
                Amanhã:
                <strong>
                  R$
                  {newData["1"]}
                </strong>
              </li>
              <li>
                Em 15 dias:
                <strong>
                  R$
                  {newData["15"]}
                </strong>
              </li>
              <li>
                Em 30 dias:
                <strong>
                  R$
                  {newData["30"]}
                </strong>
              </li>
              <li>
                Em 60 dias:
                <strong>
                  R$
                  {newData["60"]}
                </strong>
              </li>
            </>
          ) : (
            <>
              <li>
                Amanhã:
                <strong>R$0,00</strong>
              </li>
              <li>
                Em 15 dias:
                <strong>R$0,00</strong>
              </li>
              <li>
                Em 30 dias:
                <strong>R$0,00</strong>
              </li>
              <li>
                Em 60 dias:
                <strong>R$0,00</strong>
              </li>
            </>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Calculator;
