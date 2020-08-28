import React from 'react';
import ImageCard from '../ImageCard/ImageCard.js'
import './style.css'

class Gallery extends React.Component{

constructor(props){
    super(props);
    this.state={
        images:[],
        currentAddress: '',
    }
}
onAddressChange = (event) => {
    this.setState({
        currentAddress: event.target.value
    })
}

onAddImage = () =>{
    const newImages = [...this.state.images];

    newImages.push(this.state.currentAddress);

    this.setState({
        images: newImages,
        currentAddress:'',
    })

}

onDeleteImage = () =>{
    this.state.images.pop();

    const newImages = [...this.state.images];

    this.setState({
        images: newImages,
        currentAddress:''
    })


}


    render = () =>{
        return(
            <div className='root-container'>
                <p className='title'>Image Gallery</p>

                <div className='Input-box'>
                    <input
                    onChange={this.onAddressChange}
                    value={this.state.currentAddress}
                    type="text" 
                    placeholder="Enter url" />
                    <button onClick={this.onAddImage} >Add</button>
                    <button onClick={this.onDeleteImage} >Delete</button>
                </div>
            <div className='list-box'>
            {
                this.state.images.map( (url) =>{
                    return <ImageCard Key={url} imageUrl={url} />
                })
            }
            </div>
            </div>

        )
    }
}
export default Gallery;