import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfileIcon from '@mui/icons-material/AssignmentInd';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const actions = [
  { icon: <LinkedInIcon />, name: 'Linked' },
  { icon: <GitHubIcon />, name: 'Git' },
  { icon: <InstagramIcon />, name: 'Insta' },
  { icon: <ProfileIcon />, name: 'Share' },
];

export default function Menu() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 0 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
