import React from 'react';
import styles from './Login.scss';
import RequestButton from '../../components/RequestButton';
import RequestError from '../../components/RequestError/RequestError';
import {Link} from 'react-router-dom';
import Card from '../../components/Card/Card';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.login(this.refs.email.value, this.refs.password.value);
  }

  render() {
    const {user, disabled} = this.props;

    return (
      <Card>
        <div className={styles['form-container']}>
          <h4 className={styles.title}>Login to LiveSWOT</h4>
          <form className={styles.form} onSubmit={this.login}>
            <input
              type='email'
              ref='email'
              placeholder={`Email`}
            />
            <input
              type='password'
              ref='password'
              placeholder={`Password`}
            />
            <input type='submit' className={styles.hidden}/>
            <RequestButton
              text={`login`}
              disabled={disabled}
              requestedItem={user}
              onClick={this.login}
            />
          </form>
          <p>Not signed up yet? Signup <Link to={`signup`}>here</Link></p>
          <RequestError errors={user.errors}/>
        </div>
      </Card>
    );
  }
}

export default Login;
