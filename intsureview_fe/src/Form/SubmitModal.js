import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { submitModalStyles } from './SubmitModalStyles';

const SubmitModal = ({ isModalOpen, setIsModalOpen, modalContent }) => {
  const handleClose = () => setIsModalOpen(false);

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={submitModalStyles.container}>
        <Box sx={submitModalStyles.iconContainer}>
          {modalContent.icon}
        </Box>
        <Typography variant='h2' sx={submitModalStyles.title}>
          {modalContent.title}
        </Typography>
        <Typography variant='h5'>
          {modalContent.content}
        </Typography>
      </Box>
    </Modal >
  );
}

export default SubmitModal;