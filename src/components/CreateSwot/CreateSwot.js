import React from 'react';
import Card from '../Card';
import styles from './styles.scss';

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

  cancel() {this.setState({isEdit: false});}

  edit() {this.setState({isEdit: true});}

  clear() {
    this.refs.title.value = '';
    this.refs.description.value = '';
  }

  render() {
    // const {isEdit} = this.state;
    const isEdit = true;

    if (isEdit) {
      return (
        <div className={styles.root}>
          <Card>
            <form className={styles.form}>
              <div className={styles['input-container']}>
                <input type='text' name='title' className={styles['text-input']}/>
              </div>
              <div className={styles['input-container']}>
                <input type='text' name='description' className={styles['text-input']}/>
              </div>
              <div className={styles['input-container']}>
                <input type='submit'/>
                <input type='button' name='cancel'/>
              </div>
            </form>
          </Card>
        </div>
      );
    }

    return (
      <button className={`btn ${styles.button}`} onClick={this.edit}>
        create new swot
      </button>
    );

    // let component = (
    //   <form method={`POST`} onSubmit={this.submit}>
    //     <input type={`text`} ref={`title`} placeholder={`SWOT Title`}/>
    //     <input type={`text`} ref={`description`} placeholder={`Description`}/>
    //     <input type={`submit ${styles.hidden}`}/>
    //     <button className={`btn ${styles["submit-button"]}`} onClick={this.submit}>
    //       create
    //     </button>
    //     <button className={`btn ${styles["cancel-button"]}`} onClick={() => this.cancel()}>
    //       cancel
    //     </button>
    //   </form>
    // );

    // if (!isEdit) {
    //   component = (
    //     <button className={`btn ${styles.button}`} onClick={this.edit}>
    //       create new swot
    //     </button>
    //   );
    // }
    //
    // return (
    //   <div className={`row ${isEdit ? styles.card: ''} ${styles.container}`}>
    //     <div className={`col s0 m2 l2`}></div>
    //     <div className={`col s12 m8 l8 ${styles["align-center"]}`}>
    //       {component}
    //     </div>
    //     <div className={`col s0 m2 l2`}></div>
    //   </div>
    // );
  }
}

CreateSwot.protoTypes = {};

export default CreateSwot;
