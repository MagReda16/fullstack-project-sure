export const formStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '50px',
    border: '2px solid #19540F',
  },
  title: {
    fontWeight: '700',
    padding: '10px'
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: '25px',
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
};

