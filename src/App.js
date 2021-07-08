import logo from './logo.svg';
import React from 'react';
import './App.css';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Collapsible from './Components/Collapsible';

import ContactIcon from './Assets/Contact3x.png';
import GuidesIcon from './Assets/Guides3x.png';
import CustomIcon from './Assets/Custom3x.png';
import PaymentIcon from './Assets/Payment3x.png';
import ShippingIcon from './Assets/Shipping3x.png';


class App extends React.Component {
  state = {
    cards : [
      {
        title: "Contact Us",
        description: "Reach out with any questions, comments or concerns, we'd love to hear from you.",
        buttonTitle: "Contact Us",
        icon: ContactIcon,
        id: 1
      },
      {
        title: "Guides",
        description: "Best practices for maintaining your Twelve12 jewelery, we want to make sure it's looking its best, always.",
        buttonTitle: "Download Guide Book",
        icon: GuidesIcon,
        id: 2
      },
      {
        title: "Custom Orders",
        description: "Fill out our custom order form to get in touch about the piece you've dreaming of.",
        buttonTitle: "Start your Custom Order",
        icon: CustomIcon,
        id: 3
      },
      {
        title: "Shipping",
        description: "Details about our preferred shipping methods; estimated timing and costing associated.",
        buttonTitle: "Shipping Details",
        icon: ShippingIcon,
        id: 4
      },
      {
        title: "Payment",
        description: "Details about our payment methods.",
        buttonTitle: "Payment Details",
        icon: PaymentIcon,
        id: 5
      }
    ]
  }



  render() {
    return (
      <AppProvider i18n={enTranslations}>
        <div className="centerDiv">
          {this.state.cards.map(card => {
            return <Collapsible 
              key={card.id}
              title={card.title}
              description={card.description}
              buttonTitle={card.buttonTitle}
              icon={card.icon}
            />
          })}
          
        </div>
      </AppProvider>
    );
  }
}

export default App;
