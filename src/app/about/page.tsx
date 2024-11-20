import Title from 'antd/es/typography/Title'; // Direct import

const About = () => {
  return (
    <div>
      <Title>Sobre</Title>
      <Title level={3}>Olá, nós somos o Uguide!</Title>
      <Title level={4}>
        O Projeto UGuide é composto por alunos do curso de Análise e
        Desenvolvimento de Sistemas, do 4º período, da Universidade de Fortaleza
        (UNIFOR). A ideia surgiu da necessidade de desenvolver um projeto WEB
        como requisito para aprovação na disciplina de Projeto Aplicado de
        Desenvolvimento de Software II (PADS) que compõe, junto das disciplinas
        PADS I e PADS III, o Trabalho Final para Conclusão de Curso.
      </Title>
    </div>
  );
};

export default About;
