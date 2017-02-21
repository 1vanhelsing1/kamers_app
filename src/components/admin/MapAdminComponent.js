import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'

class MapAdminComponent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
	

	onImageDrop(files) {
		console.log('drop!')
    this.setState({
      uploadedFile: files[0]
   });

    this.props.dispatch(actions.beginImageUpload(files[0]));

  }

  onOpenClick() {
  	this.Dropzone.open();
  }
 
  render() {
  	const cardStyle = {
  		marginLeft: '10%',
  		marginRight: '10%',
  		marginTop: '10%',
  	};
    return (
    	<div style={cardStyle}>
      <Card >
		    <CardMedia
		      overlay={<CardTitle title="Current Map" />}
		    >
		      <img src="images/nature-600-337.jpg" />
		    </CardMedia>
		    <CardText>
	         <Dropzone ref={(node) => { this.dropzone = node; }}
			      multiple={false}
			      accept="image/*"
			      onDrop={this.onImageDrop.bind(this)}>
			      <p>Drop an image or click Upload to select a file.</p>
			    </Dropzone>
		    </CardText>
		    <CardActions>
		      <FlatButton label="Upload" onClick={this.onOpenClick.bind(this)} />
		    </CardActions>
		  </Card>
		  </div>      
    )
  }
}

export default connect()(MapAdminComponent);