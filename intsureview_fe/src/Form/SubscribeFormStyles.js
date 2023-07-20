export const formStyles = {
  container: {
    width: '50%',
    padding: '50px',
    border: '2px solid #19540F',
  },
  title: {
    fontWeight: '700',
    margin: '10px'
  },
  inputContainer: {
    display: 'flex',
    margin: '10px',
  },
  input: {
    width: '100%',
    margin: '10px',
    ':after': { borderBottomColor: 'black' },
    padding: '10px',
  },
  selects: {
    width: '75%',
    margin: '10px',
    "&.MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#000"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000"
      }
    }
  },
  button: {
    backgroundColor: '#19540F',
    marginTop: '20px',
    padding: '15px',
    ':hover': {
      backgroundColor: '#CEDDCC',
      color: '#000',
    },
  },
  errorTooltip: {
    fontSize: '12px',
    backgroundColor: "#fff",
    padding: '10px',
    color: "#000",
    border: '1px solid black'
  },
  icons: {
    fontSize: '50px'
  }
};

