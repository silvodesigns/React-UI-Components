const BartProfile = {
    name: "Bartholomew Jo-Jo Simpson",
    identity: "The troublemaker of the Simpson family.",
    age: "10 (2 years and 38 days older than Lisa)",
    family: ['Homer', 'Marge', 'Lisa', 'Maggie', 'Abe', 'Jacqueline', 'Patty', 'Selma', 'Herb'],
    catchphrases: ['Aye Carumba!', 'Eat my shorts', "I didn't do it!"],  
    best_friend: 'Milhouse Van Houten',
  }


  const BartComponent = props => {
    return (
      <div>
        <h3>Name: {props.bart.name}</h3>
        <p> age: {props.bart.age}</p>
        <p>Identity: {props.bart.identity}</p>
        <p>Best Friend: {props.bart.best_friend}</p>
      </div>
    );
  }


  <BartComponent bart={BartProfile} />


  ReactDOM.render(<BartComponent bart={BartProfile} />, document.getElementById('root'));