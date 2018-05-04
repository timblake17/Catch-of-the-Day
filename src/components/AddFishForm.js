import React from 'react';

class AddFishForm extends React.Component{
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    this.props.addFish(fish);

    event.currentTarget.reset();
  }
  render(){
    return(
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="name" />
        <input type="text" name="price" ref={this.priceRef} placeholder="price" />
        <select type="text" name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>

        </select>
        <textarea name="desc" placeholder="desc" ref={this.descRef}/>
        <input type="text" name="image" placeholder="image" ref={this.imageRef} />
        <button type="submit">+ Add Fish</button>
      </form>

    )
  }
}

export default AddFishForm;
