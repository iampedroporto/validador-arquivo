import React from 'react';
import { Avatar, Card, CardContent, Typography, IconButton } from '@mui/material';
import { ThumbUpOutlined, ThumbDownOutlined, ContentCopyOutlined } from '@mui/icons-material';

const ChatMessage = ({ senderName, messageText, avatarSrc, direction = 'received' }) => {
  var hideIcons = direction === 'received' ? false : true;

  return (
    <Card sx={{ maxWidth: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Avatar src={avatarSrc} sx={{ width: 28, height: 28 }} />
          <div style={{ marginLeft: 8 }}>
            <Typography variant="subtitle2" style={{ fontSize: '1.0rem' }}>
              {senderName}
            </Typography>
            <Typography variant="body1" style={{ fontSize: '1.0rem' }}>
              <div style={{ whiteSpace: 'pre-line' }}>{messageText}</div>
            </Typography>
            {hideIcons ? null :
            (  <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton size="small">
                  <ThumbUpOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />
                </IconButton>
                <IconButton size="small">
                  <ThumbDownOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />
                </IconButton>
                <IconButton size="small">
                  <ContentCopyOutlined fontSize="inherit" style={{ fontSize: '1rem' }} />
                </IconButton>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatMessage;
