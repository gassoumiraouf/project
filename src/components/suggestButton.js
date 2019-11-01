import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addSugg } from '../actions/actions';

class SuggestButton extends Component {
  state={}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendSugg = () => {
    this.props.addSugg({...this.state, productId: this.props.product.id})
  }
render(){


  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Suggest
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" name="name" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Phone Number</label>
              <input type="text" class="form-control" name="phone" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="text" class="form-control" name="email" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Description</label>
              <input type="text" class="form-control" name="description" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="name@example.com"/>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={this.sendSugg} data-dismiss="modal">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
}

export default connect(null, {addSugg})(SuggestButton);