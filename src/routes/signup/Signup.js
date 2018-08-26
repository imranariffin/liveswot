import React from 'react';
import styles from './Signup.scss';
import RequestError from '../../components/RequestError';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.signup = this.signup.bind(this);
    this.email = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  }

  signup(e) {
    e.preventDefault();
    const
      email = this.email.current.value,
      username = this.username.current.value,
      password = this.password.current.value;

    this.props.signup(email, username, password);
  }

  render() {
    const {user, isLoading} = this.props;

    return (
      <div className={styles.root}>
        <Card>
          <div className={styles['form-container']}>
            <h1 className={styles.title}>Signup to LiveSWOT</h1>
            <form className={styles.form} onSubmit={this.signup}>
              <div className={styles['text-input-container']}>
                <TextInput
                  forwardedRef={this.email}
                  label={`Email`}
                  type={`email`}
                  required={true}
                />
              </div>
              <div className={styles['text-input-container']}>
                <TextInput
                  forwardedRef={this.username}
                  label={`Username`}
                  type={`text`}
                  required={true}
                />
              </div>
              <div className={styles['text-input-container']}>
                <TextInput
                  forwardedRef={this.password}
                  label={`Password`}
                  type={`password`}
                  required={true}
                />
              </div>
              <input type='submit' className={styles.hidden}/>
              <Button type={`request`} disabled={isLoading} onClick={this.signup}>
                signup
              </Button>
            </form>
            <p>Already signed up? Login <Link to={`login`}>here</Link></p>
            <RequestError errors={user.errors} errorType={'user'}/>
          </div>
        </Card>
      </div>
    );
  }
}

export default Signup;
