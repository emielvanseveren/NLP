import { FC, useState } from 'react';
import styled from 'styled-components';
import { Button, Summary, TextArea } from 'components';
import { httpService } from 'services';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCustomErrorMessages } from 'helpers';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

interface IResponse {
  summary: string;
  readingTimeOriginal: number;
  readingTimeSummary: string;
}

interface IFormInputs {
  text: string;
}

const schema = Joi.object({
  text: Joi
    .string()
    .required()
    .error((errors) => (setCustomErrorMessages('Summary', errors)))
})

export const SummaryHandler: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IResponse>();
  const { register, handleSubmit, errors, formState } = useForm<IFormInputs>({ mode: 'onChange', resolver: joiResolver(schema) })


  const onSubmit: SubmitHandler<IFormInputs> = async ({ text }) => {

    if (!formState.isValid) {
      return;
    }

    // actual request
    setLoading(true);
    const response = await httpService.post('/summary', { text: text });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    setLoading(false);
  }


  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea labelText="" placeholder="im a placeholder" name="name" error={errors.text} ref={register} />
        <Button active={formState.isValid && formState.isDirty} type="submit" isLoading={loading}>generate summary</Button>
        {data ? <Summary text={data.summary} /> : null}
      </form>
    </Container>
  );
}
