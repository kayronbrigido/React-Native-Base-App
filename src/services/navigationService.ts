import React from "react"

export const navigationRef: any = React.createRef()
export const routeNameRef: any = React.createRef()

const navigationService = {
  back: () => {
    if(navigationRef.current) {
      navigationRef.current.goBack();
    }
  },
  navigate: (routeName: string, params: any = {}) => {

    if(navigationRef.current) {
      navigationRef.current.navigate(routeName, params);
    }
  }
}


export default navigationService;

export const Stacks = {
  AuthStack: {
    Login: 'Login',
    Signup: 'Signup'
  }
}