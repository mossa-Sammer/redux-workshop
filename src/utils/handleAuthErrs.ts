const handleAuthErrs = (errCode: string) => {
  if (errCode === 'auth/invalid-email') {
    return 'Invalid email!';
  } else if (errCode === 'auth/email-already-in-use') {
    return 'Email already in use';
  } else if (errCode === 'auth/user-not-found') {
    return "We couldn't find your account";
  } else if (errCode === 'auth/wrong-password') {
    return 'Incorrect password';
  } else return 'Something went wrong';
};

export default handleAuthErrs;
