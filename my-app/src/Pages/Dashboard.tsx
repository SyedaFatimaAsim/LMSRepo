import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import NotesIcon from '@mui/icons-material/Notes';
import PaidIcon from '@mui/icons-material/Paid';
import { ListItemSecondaryAction } from '@mui/material';
import {Route, Routes, useNavigate} from 'react-router-dom'; 
import { Dashboard } from '@mui/icons-material';
import StudentTable from '../Screen/StudentGrid';
import Students from '../Screen/Student';
import Subjects from '../Screen/Subjects';
import ShowStudents from '../Screen/ShowStudents';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [menu, setMenu] = React.useState();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateScreen=(route:string)=>
  {
    navigate(`/dashboard/${route}`)
  }

  const menuList = [
    {
      name:"Students",
      route:"students",
      icon: <PersonIcon/>
    },
    {
      name:"Teacher",
      route:"teacher",
      icon: <PersonIcon/>
    },
    {
      name:"Subjects",
      route:"subjects",
      icon:<LibraryBooksIcon/>
    },
    {
      name:"School",
      route:"school",
      icon: <SchoolIcon/>
    },
    {
      name:"Syllabus",
      route:"syllabus",
      icon: <NotesIcon/>
    },
    {
      name:"Class",
      route:"class",
      icon: <LibraryBooksIcon/>
    },
    {
      name:"Fees",
      route:"fees",
      icon:<PaidIcon/>
    },
    {
      name:"Admission",
      route:"admission",
      icon: <PaidIcon/>
    },
    {
      name:"Exam",
      route:"exam",
      icon: <PaidIcon/>
    },
    
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       {<AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuList.map((x, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=>navigateScreen(x.route)}>
                <ListItemIcon>
                  {x.icon}
                </ListItemIcon>
                <ListItemText primary={x.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
        <ListItem  disablePadding>
              <ListItemButton onClick={()=>{navigate("/")}}>
                <ListItemIcon>
                <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Teacher" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton onClick={()=>{navigate("/subjects")}}>
                <ListItemIcon>
                <LibraryBooksIcon/>
                </ListItemIcon>
                <ListItemText primary="Subjects" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <SchoolIcon/>
                </ListItemIcon>
                <ListItemText primary="School" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <NotesIcon/>
                </ListItemIcon>
                <ListItemText primary="Syallbus" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <LibraryBooksIcon/>
                </ListItemIcon>
                <ListItemText primary="Class" />
              </ListItemButton>
            </ListItem>
        </List>
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
               <PaidIcon/>
                </ListItemIcon>
                <ListItemText primary="Fees" />
              </ListItemButton>
            </ListItem>
        </List>
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
               <PaidIcon/>
                </ListItemIcon>
                <ListItemText primary="Admission" />
              </ListItemButton>
            </ListItem>
        </List>
        <List>
        <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
               <PaidIcon/>
                </ListItemIcon>
                <ListItemText primary="Exam" />
              </ListItemButton>
            </ListItem>
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader /> 
        <Routes>
        <Route path="students" element={<ShowStudents />} />
        <Route path="subjects" element={<Subjects />} />
        </Routes>
      </Main>
    </Box>
  );
}
