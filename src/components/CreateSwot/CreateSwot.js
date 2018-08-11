import React from 'react';
import Card from '../Card';
import styles from './styles.scss';
import Button from '../Button';
import TextInput from "../TextInput/TextInput";

class CreateSwot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clear = this.clear.bind(this);
    this.edit = this.edit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.refs.title.value,
      this.refs.description.value,
    );
    this.clear();
  }

  cancel(e) {
    e.preventDefault();
    this.setState({isEdit: false});
  }

  edit() {this.setState({isEdit: true});}

  clear() {
    this.refs.title.value = '';
    this.refs.description.value = '';
  }

  render() {
    const {isEdit} = this.state;

    return (
      <div>
        <div className={`${isEdit ? styles.hide : ''} ${styles["input-container"]} ${styles["submit-container"]}`}>
          <Button onClick={this.edit}>Create Swot</Button>
        </div>
        <div className={`${styles.root} ${isEdit ? '' : styles.hide}`}>
          <Card>
            <form className={styles.form}>
              <div className={styles['input-container']}>
                <TextInput type='text' ref='title' className={styles['text-input']}/>
              </div>
              <div className={styles['input-container']}>
                <input type='text' ref='description' className={styles['text-input']}/>
              </div>
              <div className={`${styles['input-container']} ${styles['submit-container']}`}>
                <Button onClick={this.submit}>Create</Button>
                <Button cancel onClick={this.cancel}>Cancel</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

CreateSwot.protoTypes = {};

export default CreateSwot;
