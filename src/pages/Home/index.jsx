import { Header, Footer, Title, Input, Sidebar } from '../../components'
import { Div, Content } from './styles';

function Main() {
  const showSidebar = process.env.REACT_APP_SHOW_SIDEBAR === 'true';
console.log(showSidebar);

  return (
    <Content>
      <Header/>
      <Title/>
      <Div>
      {showSidebar && <Sidebar />}
      <Input/>
      </Div>
      <Footer/>
      
    </Content>

  );
}

export default Main;
