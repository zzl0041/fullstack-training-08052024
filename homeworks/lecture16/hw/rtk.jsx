import { Provider } from 'react-redux';
import store from './rtk/store';
import {
  Title,
  Input,
  Remaining,
  Btn,
  MarkAllDone,
  Todos,
} from './components/rtkTodoComponents';
import './styles.css';

export default function App() {
  return (
    <Provider store={store}>
      <Title title={'Todos - Reach JS'} />
      <Input />
      <div className='remaining-and-clear-all-completed-todos '>
        <Remaining />
        <Btn btnLabel={'Clear Completed Todos'} />
      </div>
      <MarkAllDone />
      <Todos />
    </Provider>
  );
}
