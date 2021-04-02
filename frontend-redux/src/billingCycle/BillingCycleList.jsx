import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from './BillingCycleActions';

class BillingCycleList extends Component {
	componentWillMount() {
		this.props.getList();
	}

	renderRows() {
		const list = this.props.list || [];
		return list.map(bc => (
			<tr key={bc._id}>
				<td>{bc.name}</td>
				<td>{bc.month}</td>
				<td>{bc.year}</td>
			</tr>
		));
	}

	render() {
		console.log(this.props.list);
		// const selected = this.props.tab.selected === this.props.id;
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<td>Nome</td>
							<td>Mês</td>
							<td>Ano</td>
						</tr>
					</thead>
					<tbody>{this.renderRows()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
