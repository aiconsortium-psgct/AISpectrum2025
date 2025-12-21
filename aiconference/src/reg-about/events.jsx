import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const EventCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const EventTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const EventDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const EventTime = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  marginTop: 'auto',
}));

const events = [
  {
    title: 'Keynote Speeches',
    description: 'Distinguished speakers from academia and industry will share their insights on the latest developments in AI and related fields.',
    time: '9:00 AM - 12:00 PM',
  },
  {
    title: 'Technical Sessions',
    description: 'Presentations of research papers and technical discussions on various AI topics.',
    time: '1:00 PM - 4:00 PM',
  },
  {
    title: 'Workshop Sessions',
    description: 'Hands-on workshops and tutorials on practical AI applications and tools.',
    time: '4:30 PM - 6:30 PM',
  },
  {
    title: 'Panel Discussions',
    description: 'Interactive discussions with experts on current trends and future directions in AI.',
    time: '10:00 AM - 12:00 PM',
  },
];

const Events = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: 'primary.main',
          mb: 4,
        }}
      >
        Conference Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <EventCard elevation={3}>
              <EventTitle variant="h6">{event.title}</EventTitle>
              <EventDescription variant="body1">
                {event.description}
              </EventDescription>
              <EventTime variant="body2">{event.time}</EventTime>
            </EventCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events; 