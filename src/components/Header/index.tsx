import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import {TFunction, withTranslation} from 'react-i18next';
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span, LanguageSwitch,
} from "./styles";
import i18n from "i18next";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const navigateTo = (path: string) =>{
    history.push(path);
    setVisibility(false);
  }

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
        <>
          <CustomNavLinkSmall onClick={() => navigateTo("/about")}>
            <Span>{t("About")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => navigateTo("mission")}>
            <Span>{t("Mission")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => navigateTo("product")}>
            <Span>{t("Product")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("titleForContactScroll")}
          >
            <Span>
              <Button>{t("Contact")}</Button>
            </Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall>
            <LanguageSwitch onClick={() => handleChange("en")}>
              <SvgIcon
                  src="brits.webp"
                  aria-label="English"
                  width="24px"
                  height="24px"
              />
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("es")}>
              <SvgIcon
                  src="russian.webp"
                  aria-label="Russian"
                  width="24px"
                  height="24px"
              />
            </LanguageSwitch>
          </CustomNavLinkSmall>
        </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
