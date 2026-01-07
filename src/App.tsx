import { Cart } from './components/Cart';
import { CartSection, ContentWrapper, Layout, ServicesSection } from './components/Layout';
import { ServiceList } from './components/ServiceList';
import { CartProvider } from './context/CartContext';
import { services } from './data/services';

export const App = () => {
  return (
    <CartProvider>
      <Layout>
        <ContentWrapper>
          <ServicesSection>
            <ServiceList services={services} />
          </ServicesSection>
          <CartSection>
            <Cart />
          </CartSection>
        </ContentWrapper>
      </Layout>
    </CartProvider>
  );
};
