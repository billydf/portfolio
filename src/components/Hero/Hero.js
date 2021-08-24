import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome to <br />
       Billy De Fretes site
     </SectionTitle>
     <SectionText>
       The purpose of this site is to help people understand who is Billy, his career, skills, achievement, and project.
     </SectionText>
   </LeftSection>
 </Section>
);

export default Hero;