import React from 'react';
import { WebView } from 'react-native-webview';
type PaymentWebviewScreenProps = {
  navigation: any;
  route: any;
};

const PaymentWebviewScreen = (props: PaymentWebviewScreenProps) => {
  const { route } = props;
  const { totalPrice } = route.params;
  const source = `<form><script type="text/javascript" src="https://checkout.wompi.co/widget.js" data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf" data-currency="COP" data-amount-in-cents="${totalPrice}" data-reference="BASLUJQDLT9Q" data-redirect-url="https://transaction-redirect.wompi.co/check" data-render="button" class="current" ></script></form>`;
  return <WebView source={{ html: source }} originWhitelist={['*']} />;
};
export default PaymentWebviewScreen;
