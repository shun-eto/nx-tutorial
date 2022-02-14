import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Todos } from '@nx-tutorial/ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Todos />
      <NxWelcome title="front" />
    </StyledApp>
  );
}

export default App;
