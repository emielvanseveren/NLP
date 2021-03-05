import { FC, useState } from 'react';
import styled from 'styled-components';
import { Button, TextArea, Summary, Skeleton } from 'components';
import { httpService } from 'services';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCustomErrorMessages } from 'helpers';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

const Container = styled.div`
  width: 1200px;
  box-shadow: -1px 4px 12px 0px rgb(31 31 31 / 15%);
  h3 {
    padding: 15px 25px;
    border-bottom: 1px solid ${({ theme }) => theme.bg};
    font-weight: 700;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Left = styled.form`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const Right = styled.div`
  border-left: 2px solid ${({ theme }) => theme.bg};
  width: 50%;
  min-height: 100%;
  padding: 20px;
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
      setData(data);
    }
    setLoading(false);
  }

  return (
    <Container>
      <h3>Summary</h3>
      <ContentContainer>
        <Left onSubmit={handleSubmit(onSubmit)}>
          <TextArea labelText="" placeholder="Paste or write about your topic then click the Summarize button." name="text" error={errors.text} ref={register} />
          <ButtonContainer>
            <Button active={formState.isValid && formState.isDirty} type="submit" isLoading={loading}>Summarize</Button>
          </ButtonContainer>
        </Left>
        <Right>
          {
            data ?
              <Summary text={data.summary} />
              : <Skeleton />
          }
        </Right>
      </ContentContainer>
    </Container>
  );
}
