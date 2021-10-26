import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui placeholder segment">
				<div className="ui two column stackable center aligned grid">
					<div className="middle aligned row">
						<div className="column">
							<div className="ui icon header">
								<i class="search icon"></i>Image Search
							</div>
							<div className="field">
								<div className="ui search">
									<form onSubmit={this.onFormSubmit} className="ui form">
										<div className="field">
											<div className="ui icon input">
												<input
													type="text"
													placeholder="Search any photos..."
													value={this.state.term}
													onChange={(e) => {
														this.setState({ term: e.target.value });
													}}
												/>
												<i class="search icon"></i>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
