import React, { lazy } from "react";
import SocialSection from "../../components/SocialContact";
import ProcessSection from "../../components/ProcessSection";
import {TFunction, withTranslation} from "react-i18next";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t("About studio")}
        content={t("About studio text")}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={t("Introduce your")}
        content={t("Introduce your text")}
        button={t("Get started")}
        id="titleForContactScroll"
      />
      <ContentBlock
        direction="left"
        title={t("Light, fast & responsive")}
        content={t("Light, fast & responsive text")}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={t("Ready-made solutions for your business")}
        content={t("Ready-made solutions for your business text")}
        icon="product-launch.svg"
        id="mission"
      />
      <ProcessSection/>
      <ContentBlock
        direction="left"
        title={t("We are always ready to help")}
        content={t("We are always ready to help text")}
        icon="waving.svg"
        id="product"
      />
      <Contact/>
      <SocialSection/>
    </Container>
  );
};

export default withTranslation()(Home);
