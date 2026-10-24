

const Rating = () => {
  return ( 
    <div style={styles.container}>
        <h2 style={styles.heading}>Rate Your Experience</h2>
    </div> 
    );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: '20px',
  },
  heading: {
    color: 'blue'
  }
};
 
export  default Rating ;  // using default for one export only

// export  { Rating };   //  if not using default