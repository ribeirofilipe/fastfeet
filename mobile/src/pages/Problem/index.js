import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { format, parseISO } from 'date-fns';

import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';

import { Container, Title, Problems, Description, Data } from './styles';

import { getProblemsRequest } from '~/store/modules/problem/actions';

export default function Problem({ route }) {
  const dispatch = useDispatch();

  const [problems, setProblems] = useState([]);

  const { id, title } = route.params;

  useEffect(() => {
    dispatch(getProblemsRequest(id));

    const newProblems = allProblems.map(problem => ({
      ...problem,
      created_at: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
    }))

    setProblems(newProblems);
  }, []);

  const allProblems = useSelector(state => state.problem.problems);

  return (
    <>
     <BackgroundHeader />
     <Background>
       <Container>
        <Title>{ title }</Title>
        {problems?.map(problem => (
          <Problems key={problem.id}>
            <Description>{ problem.description }</Description>
            <Data>{ problem.created_at }</Data>
          </Problems>
        ))}
       </Container>
     </Background>
    </>
  );
}
