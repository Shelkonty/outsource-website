import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: TFunction;
    id?: string;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
    const scrollTo = () => {
        setTimeout(() => {
            const contactForm = document.getElementById("titleForContactScroll");
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <MiddleBlockSection>
            <Slide direction="up" triggerOnce>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h6>{t(title)}</h6>
                            <Content>{t(content)}</Content>
                            {button && (
                                <Button name="submit" onClick={scrollTo}>
                                    {t(button)}
                                </Button>
                            )}
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);