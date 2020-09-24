import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUsername : "",
      txtPassword : "",
      txtDesc: "",
      sltGender: 0,
      rdLang : "en",
      chbox : false
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)

  }
  onHandleChange(event){
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return (
      <div className="container mt-5">
        <form onSubmit = { this.onHandleSubmit }>
          <div className="form-group">
            <label>UserName</label>
            <input className="form-control"
                   name="txtUsername"
                   onChange ={ this.onHandleChange}
                   value= {this.state.txtUsername}/>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password"
              className="form-control"
              name="txtPassword"
               onChange ={ this.onHandleChange}
               value= {this.state.txtPassword}/>
          </div>
          <div className="form-group">
            <label className="from-control" >Mô tả</label>
            <textarea
              className="form-control"
              name= "txtDesc" rows="3"
              onChange ={ this.onHandleChange}
               value= {this.state.txtDesc}
              >
            </textarea>
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <select className="form-control"
                    name="sltGender"
                    value= {this.state.sltGender}
                    onChange={this.onHandleChange} >
              <option value={0}>Nữ</option>
              <option value={1}>Nam</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ngôn ngữ</label>
            <div className="radio">
              <input type="radio"
                     name="rdLang"
                     value ="vi"
                     onChange = {this.onHandleChange}
                     checked = {this.state.rdLang === "vi"} />
              Tiếng Việt
            </div>
            <div className="radio">
              <input type="radio"
                     name="rdLang"
                     value="en"
                     onChange = {this.onHandleChange}
                     checked= {this.state.rdLang === "en"} />
              Tiếng Anh
            </div>
          </div>
          <div className="form-group">
            <input type="checkbox"
                   name="chbox"
                   onChange ={this.onHandleChange}
                   value= {true}
                   checked = {this.state.chbox === true}/>
            Trạng thái
          </div>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
          <button type="submit" className="btn">Xóa</button>
        </form>
      </div>
    );
  }
}

export default App;
