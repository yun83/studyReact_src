import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-size: cover;
  background-image: url('https://tomntoms.com/assets/images/sub/sv_1.jpg');
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #aa55ff;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

function T02Right01() {
  return (
    <Container>
      <Content>
        <h1>테스트 페이지</h1>
        <p>This is a simple React page with a styled background.</p>
      </Content>
    </Container>
  );
}

export default T02Right01;
