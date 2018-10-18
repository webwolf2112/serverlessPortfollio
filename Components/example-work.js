import React from 'react';
import ExampleWorkModal from './example-work-modal.js';

class ExampleWork extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'modalOpen': false,
			'selectedExample': this.props.work[0]
		};
	}

	render () {

		const openModal = (evt, example) => {
			this.setState({
				'modalOpen': true,
				'selectedExample': example
			})
		};
	 
		const closeModal = (evt, example) => {
			this.setState({
				'modalOpen': false
			});
		};


		return (
			<span>
				<section>
					{this.props.work.map( (example, idx) => {
						return <ExampleWorkBubble example={example} key={idx} openModal={this.openModal}/>
					} )}
				</section>

				<ExampleWorkModal example={ this.state.selectedExample } open={ this.state.modalOpen } closeModal={ this.closeModal }/>
			</span>
			);
		}
	}

class ExampleWorkBubble extends React.Component {
	render () {
		let example = this.props.example;
		return (
			<div className="section__exampleWrapper {styles.css}"
				onClick={(e) => this.props.openModal(e, example)}>
				<div className="section__example { styles.app }">
					<img alt={ example.image.desc }
							 className="section__exampleImage"
							 src={ example.image.src }/>
					<dl className="color--cloud">
						<dt className="section__exampleTitle section__text--centered">
							{ example.title }
						</dt>
						<dd></dd>
					</dl>
				</div>
			</div>
		);
	}
}

export default ExampleWork;
export { ExampleWorkBubble }
