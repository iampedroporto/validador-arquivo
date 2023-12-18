import React, { useState } from 'react';
import { Paper, Typography, IconButton, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ThumbUpOutlined, ThumbDownOutlined, ContentCopyOutlined } from '@mui/icons-material';
import Slide from '@mui/material/Slide';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useEffect, useRef } from 'react';


// Estilização condicional com base na propriedade 'align'
const ChatBubble = styled(Paper)(({ theme, bgcolor, textcolor }) => ({
  background: bgcolor,
  color: textcolor,
  padding: theme.spacing(2),
  borderRadius: 20,
  maxWidth: '100%',
  minWidth: '30px',
  width: 'fit-content',
  marginTop: '10px',
  marginBottom: '10px',
  wordBreak: 'break-word',
  boxShadow: theme.shadows[2]
}));

const ChatMessage = ({ message, direction }) => {
  var justifyContent = direction === 'received' ? 'flex-start' : 'flex-end';
  var marginRight = direction === 'received' ? '100px' : '0px';
  var marginLeft = direction === 'sent' ? '100px' : '0px';
  var hideIcons = direction === 'received' ? false : true;
  var bgcolor = direction === 'received' ? '#FFFFFF' : 'linear-gradient(to right bottom, #007FFF, #0072E5 120%)';
  var textcolor = direction === 'received' ? '#000000' : '#FFFFFF';
  var slideDirection = direction === 'sent' ? 'up' : 'down';
  var iconColor = 'rgba(0, 0, 0, 0.54)';

  const elementoRef = useRef(null);

  const handleLike = () => {
    console.log("Like button liked");
    if (liked === true)
      setLiked(null);
    else
      setLiked(true);
  };

  const handleUnlike = () => {
    console.log("Unlike button liked");
    if (liked === false)
      setLiked(null);
    else
      setLiked(false);
  };

  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(message)
    .then(() => {
      console.log('Message copied to clipboard');
      setOpen(true);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    console.log(document.body.scrollHeight, elementoRef.current.clientHeight, window.innerHeight);
    if (slideDirection === 'up') {
      if(document.body.scrollHeight - elementoRef.current.clientHeight > window.innerHeight)
        window.scrollTo(0, document.body.scrollHeight - elementoRef.current.clientHeight);
    }
    else
      window.scrollTo(0, document.body.scrollHeight);
  }, [slideDirection]);

  return (
    <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit>
      <Box sx={{ display: 'flex', justifyContent: justifyContent, marginRight: marginRight, marginLeft: marginLeft }} ref={elementoRef}>
        <ChatBubble elevation={3} bgcolor={bgcolor} textcolor={textcolor}>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>{message}</Typography>

          {hideIcons ? null :
            (<div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton size="small" onClick={handleLike} style={{ color: liked === true ? 'green' : iconColor, transition: 'color 0.5s ease'}}>
                {liked === true ? (<ThumbUpIcon fontSize="inherit" style={{ fontSize: '1rem' }} />) : (<ThumbUpOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />)}
              </IconButton>
              <IconButton size="small" onClick={handleUnlike} style={{ color: liked === false ? 'red' : iconColor, transition: 'color 0.5s ease'}}>
              {liked === false ? (<ThumbDownIcon fontSize="inherit" style={{ fontSize: '1rem' }} />) : (<ThumbDownOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />)}
              </IconButton>
              <IconButton size="small" onClick={handleCopy}>
                <ContentCopyOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />
              </IconButton>
            </div>)
          }
        </ChatBubble>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Message copied to clipboard"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      </Box>
    </Slide>
  );
};

export default ChatMessage;
