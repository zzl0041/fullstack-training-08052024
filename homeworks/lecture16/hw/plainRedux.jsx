import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Title,
  Input,
  Remaining,
  Btn,
  MarkAllDone,
  Todos,
} from './components/todoComponents';
import './styles.css';

export default function App() {
  return (
    <Provider store={store}>
      <Title title={'Todos - Reach JS'}></Title>
      <Input></Input>
      <div className='remaining-and-clear-all-completed-todos '>
        <Remaining />
        <Btn btnLabel={'Clear Completed Todos'} />
      </div>
      <MarkAllDone />
      <Todos />
    </Provider>
  );
}
