import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="root">
  <div className="todo-container">
    <div className="todo-wrap">
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
      <ul className="todo-main">
        <li>
          <label>
            <input type="checkbox"/>
            <span>xxxxx</span>
          </label>
          <button className="btn btn-danger" style={{display:'none'}}>delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
            <span>yyyy</span>
          </label>
          <button className="btn btn-danger" style={{display:'none'}}>delete</button>
        </li>
      </ul>
      <div className="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>finished0</span> / All2
        </span>
        <button className="btn btn-danger">delete finished tasks</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
