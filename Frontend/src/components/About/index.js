import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <div className='container shadow p-4'>
                <Heading>About Us</Heading>
                <Paragraph>
                   Welcome to Shopping Mart App your one-stop destination for best and quality products.
                    We are dedicated to providing you with the finest selection of groceries, 
                   household items, and daily essentials to make your shopping experience smooth and enjoyable.
                </Paragraph>
                <Paragraph>
                   Our journey began in 2025 with a simple goal — to make every customer feel happy, valued, and confident in their shopping experience.
                    At Shopping Mart, we're committed to offering high-quality products and reliable service that you can trust. 
                    Your satisfaction is our priority, and we work every day to exceed your expectations

                </Paragraph>
                <Paragraph>
                  From daily needs to special finds — we bring it all to your door.
                   Quick delivery, quality assured.Shop smart with Shopping-Mart.
                </Paragraph>
            </div>
        </AboutContainer>
    );
};

export default About;
