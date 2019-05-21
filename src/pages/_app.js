import Head from "next/head";
import { Fragment } from "react";
/* Components */
import PageLayout from "components/PageLayout";

export default class App extends React.Component {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const navItems = [
      { name: "Contact us", path: "/contact-us" },
      { name: "Our work", path: "/our-work" },
      { name: "Our team", path: "/" },
      { name: "About us", path: "/about-us" },
      { name: "Hiring", path: "/hiring" }
    ];
    return (
      <Fragment>
        <Head>
          <title>Condor labs</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="A Condor labs test" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <PageLayout navItems={navItems}>
          <Component {...pageProps} />
        </PageLayout>
      </Fragment>
    );
  }
}
