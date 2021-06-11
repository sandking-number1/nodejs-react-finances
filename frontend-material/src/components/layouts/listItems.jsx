import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<div>
		<ListItem button component={Link} to="/pages/dashboard">
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>

		<ListItem button component={Link} to="/pages/activities">
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Atividades" />
		</ListItem>

		<ListItem button component={Link} to="/pages/activities/register">
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Cadastrar" />
		</ListItem>

		<ListItem button component={Link} to="/pages/categories">
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Categorias" />
		</ListItem>

		<ListItem button component={Link} to="/login">
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Login" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Saved reports</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Last quarter" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem>
	</div>
);
