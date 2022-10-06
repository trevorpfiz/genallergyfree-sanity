import { Container } from '@mantine/core';

export interface IBaseTemplate {
  sampleTextProp: string;
}

export default function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <Container>{sampleTextProp}</Container>;
}
