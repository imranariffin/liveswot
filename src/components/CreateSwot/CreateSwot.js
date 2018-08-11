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

    /* refs */
    this.title = React.createRef();
    this.description = React.createRef();
  }

  submit(e) {
    e.preventDefault();

    const title = this.title.current.value;
    const description = this.description.current.value;
    this.props.onSubmit(title, description);

    this.clear();
  }

  cancel(e) {
    e.preventDefault();
    this.setState({isEdit: false});
  }

  edit() {this.setState({isEdit: true});}

  clear() {
    this.title.current.value = '';
    this.description.current.value = '';
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
                <TextInput type='text' label='Title' forwardedRef={this.title} className={styles['text-input']}/>
              </div>
              <div className={styles['input-container']}>
                <TextInput type='text' label='Description' forwardedRef={this.description} className={styles['text-input']}/>
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
