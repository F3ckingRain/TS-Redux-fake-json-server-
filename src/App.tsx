import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';


function App() {
/* const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
*/
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <PostContainer/>
      </div>
    </div>
  );
}

export default App;
