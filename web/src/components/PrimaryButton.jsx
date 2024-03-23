import { Button } from '@mui/material';
import { styled } from '@mui/system';

const PrimaryButton = styled(Button)({
  backgroundColor: "#F36427",
  color: 'white',
  padding: '10px',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: "#F36427",
  },
});

export default PrimaryButton;
