import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(1),
		padding: theme.spacing(2),
		position: 'absolute',
		width: '100%',
		maxHeight: '18rem',
		minHeight: '7rem',
		left: 0,
		bottom: 0,
		right: 0,
	},
})

class Footer extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<footer className={classes.footer}>
				<Typography variant="subtitle1" color="textSecondary" align="center">
          ⚠ WARNING Uploaded models and data used to train models are added to a decentralized public blockchain not controlled by 0xDeCA10B. We strongly encourage not training models using data with personally identifiable information.
          Learn more <Link href='/about'>here</Link>.
				</Typography>
				<Typography variant="body2" color="textSecondary" align="center">
					<Link href='https://go.0xDeCA10B.github.io/?linkid=2028325' target='_blank'>Contact Us</Link>
          &nbsp;| &nbsp;
					<Link href='https://go.0xDeCA10B.github.io/fwlink/?LinkId=521839' target='_blank'>Privacy {"&"} Cookies</Link>
          &nbsp;| &nbsp;
					<Link href='https://go.0xDeCA10B.github.io/fwlink/?LinkID=246338' target='_blank'>Terms of Use</Link>
          &nbsp;| &nbsp;
					<Link href='https://www.0xDeCA10B.github.io/en-us/legal/intellectualproperty/copyright/default.aspx' target='_blank'>0xDeCA10B Terms of Use</Link>
          &nbsp;| &nbsp;
					<Link href='/about#code-of-conduct' target='_blank'>Code of Conduct</Link>
          &nbsp;| &nbsp;
					<Link href='https://go.0xDeCA10B.github.io/fwlink/?LinkId=506942' target='_blank'>Trademarks</Link>
          &nbsp;| &nbsp;
          © {new Date().getFullYear()} 0xDeCA10B
				</Typography>
			</footer>
		)
	}
}
export default withStyles(styles)(Footer)