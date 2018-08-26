import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.scss';
import RequestError from '../../components/RequestError';
import Card from '../../components/Card/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  login(e) {
    e.preventDefault();
    const email = this.email.current.value;
    const password = this.password.current.value;
    this.props.login(email, password);
  }

  render() {
    const {user, isLoading} = this.props;

    return (
      <div className={styles.root}>
        <Card>
          <div className={styles['form-container']}>
            <h1 className={styles.title}>Login to LiveSWOT</h1>
            <form className={styles.form} onSubmit={this.login}>
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
                  forwardedRef={this.password}
                  label={`Password`}
                  type={`password`}
                  required={true}
                />
              </div>
              <input type='submit' className={styles.hidden}/>
              <Button type={`request`} disabled={isLoading} onClick={this.login}>
                login
              </Button>
            </form>
            <p>Not signed up yet? Signup <Link to={`signup`}>here</Link></p>
            <RequestError errors={user.errors} errorType={'user'}/>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
