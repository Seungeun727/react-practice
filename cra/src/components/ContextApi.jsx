import React from 'react';

const { Provider, Consumer } = React.createContext();

class ContextApi extends React.Component {
    render() {
      return (
        <Provider value="Using Context API">

        </Provider>
      )
    }
}

export default ContextApi;