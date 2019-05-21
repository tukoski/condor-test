/* Components */
import Layout from "components/HomeLayout";
/* Services */
import { instagramService } from "services";

export default class Home extends React.Component {
  static async getInitialProps() {
    let response = await instagramService.getRecentImages();
    return {
      images:
        response.status === 200 && response.data.data ? response.data.data : []
    };
  }

  render() {
    const { images } = this.props;
    return <Layout images={images} />;
  }
}
