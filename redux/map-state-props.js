const mapStateToProps = (state) => {
  const { showLoading, activeLink, cartItems }  = state;
  return {
    showLoading,
    activeLink,
    cartItems,
  };
}

export default mapStateToProps;
