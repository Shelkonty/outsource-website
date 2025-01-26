import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import {CustomNavLinkSmall, Span} from "../Header/styles";
import {useHistory} from "react-router-dom";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const history = useHistory();

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const navigateTo = (path: string) => {
    history.push(path);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/privacy-policy">{t("Privacy Policy")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
              <Large to="/">{t("Support Center")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                      src="brits.webp"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("ru")}>
                  <SvgIcon
                      src="russian.webp"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>{t("Kazakhstan, Astana")}</Para>
              <Para>{t("Mangilik el")}</Para>
            </Col>
            <Empty/>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Empty/>
              <Title>{t("Company")}</Title>
              <Large to="/about">{t("About")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <Empty/>
              <Empty/>
              <Empty/>
              <SocialLink
                href="https://github.com/Shelkonty"
                src="github.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/shelkonty/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
